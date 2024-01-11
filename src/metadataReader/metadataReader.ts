import * as fs from 'node:fs';
import * as xml2js from 'xml2js';
import { array } from '../util.js';
import { getMetadataExtension } from '../util.js';
import { Extended, ExtendedMetadata, Album, MetadataType } from './metadataTypes.js';

import { ALL_METADATA_TYPES } from './allMetadataTypes.js';

export class MetadataReader {
  public album: Album = {};
  private projectFilenames: string[];
  private metadataFilenames: string[];
  private fileTypesByExtension: Map<string, MetadataType>;
  private metadataExtensions: Set<string>;

  public constructor(projectFilenames: string[]) {
    this.projectFilenames = projectFilenames;
    this.fileTypesByExtension = new Map();

    for (const thisMetadataType of ALL_METADATA_TYPES) {
      if (thisMetadataType.extension) {
        this.fileTypesByExtension.set(thisMetadataType.extension, thisMetadataType);
      }
    }
    this.metadataExtensions = new Set(this.fileTypesByExtension.keys());

    this.metadataFilenames = this.projectFilenames.filter((theFile) => this.isMetadataFile(theFile));

    for (const thisFile of this.metadataFilenames) {
      const thisMetadataType: MetadataType = this.fileTypesByExtension.get(getMetadataExtension(thisFile))!;
      const xml = fs.readFileSync(thisFile, 'utf-8');
      this.absorb(getMetadata<Extended<typeof thisMetadataType.metadataType>>(xml, thisFile, thisMetadataType));
    }
  }

  private absorb(album: Album): void {
    for (const thisList of Object.keys(album)) {
      if (!this.album[thisList]) {
        this.album[thisList] = [];
      }
      this.album[thisList].push(...album[thisList]);
    }
  }

  private isMetadataFile(thisFile: string): boolean {
    return this.metadataExtensions.has(getMetadataExtension(thisFile));
  }
}

const parserOptions: xml2js.ParserOptions = {
  explicitArray: false,
  mergeAttrs: true,
  valueProcessors: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    xml2js.processors.parseNumbers,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    xml2js.processors.parseBooleans,
  ],
};

function getMetadata<T extends ExtendedMetadata>(xml: string, fileName: string, definition: MetadataType): Album {
  const album: Album = {};
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  xml2js.parseString(xml, parserOptions, (err, result: Record<string, T>) => {
    const theRecord = result[definition.name];
    if (!definition.container) {
      treatRecord(theRecord, definition, fileName);
      album[definition.list] = [theRecord];
    }
    if (definition.children) {
      for (const listName of Object.keys(definition.children)) {
        const thisMetadataType = definition.children[listName];
        album[thisMetadataType.list] = [];
        const records = array(theRecord[listName]) as Array<Extended<typeof thisMetadataType.metadataType>>;
        for (const thisRecord of records) {
          treatRecord(thisRecord, thisMetadataType, fileName);
          album[thisMetadataType.list].push(thisRecord as T);
        }
      }
    }
  });
  return album;
}

function treatRecord<T extends ExtendedMetadata>(
  record: Extended<T>,
  metadataType: MetadataType,
  fileName: string
): void {
  record.fileName = fileName;
  if (metadataType.setName) {
    record.name = metadataType.setName(record);
  }
  if (metadataType.setObjectname) {
    record.objectName = metadataType.setObjectname(record);
  }
  if (metadataType.setFullName) {
    record.fullName = metadataType.setFullName(record);
  }
  if (metadataType.transform) {
    metadataType.transform(record);
  }
}

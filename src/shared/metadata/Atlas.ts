import * as fs from 'node:fs';
import * as xml2js from 'xml2js';
import { array } from '../array.js';
import { Extended, ExtendedMetadata, Album, Definition, ALL_DEFINITIONS, getExtension } from './file/index.js';

export class Atlas {
  public album: Album = {};
  private projectFilenames: string[];
  private metadataFilenames: string[];
  private fileDefinitionsByExtension: Map<string, Definition>;
  private metadataExtensions: Set<string>;

  public constructor(projectFilenames: string[]) {
    this.projectFilenames = projectFilenames;
    this.fileDefinitionsByExtension = new Map();

    for (const thisFileDefinition of ALL_DEFINITIONS) {
      if (thisFileDefinition.extension) {
        this.fileDefinitionsByExtension.set(thisFileDefinition.extension, thisFileDefinition);
      }
    }
    this.metadataExtensions = new Set(this.fileDefinitionsByExtension.keys());

    this.metadataFilenames = this.projectFilenames.filter((theFile) => this.isMetadataFile(theFile));

    for (const thisFile of this.metadataFilenames) {
      const thisDefinition: Definition = this.fileDefinitionsByExtension.get(getExtension(thisFile))!;
      const xml = fs.readFileSync(thisFile, 'utf-8');
      this.absorb(getMetadata<Extended<typeof thisDefinition.metadataType>>(xml, thisFile, thisDefinition));
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
    return this.metadataExtensions.has(getExtension(thisFile));
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

function getMetadata<T extends ExtendedMetadata>(xml: string, fileName: string, definition: Definition): Album {
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
        const thisDefinition = definition.children[listName];
        album[thisDefinition.list] = [];
        const records = array(theRecord[listName]) as Array<Extended<typeof thisDefinition.metadataType>>;
        for (const thisRecord of records) {
          treatRecord(thisRecord, thisDefinition, fileName);
          album[thisDefinition.list].push(thisRecord as T);
        }
      }
    }
  });
  return album;
}

function treatRecord<T extends ExtendedMetadata>(record: Extended<T>, metadata: Definition, fileName: string): void {
  record.fileName = fileName;
  if (metadata.setName) {
    record.name = metadata.setName(record);
  }
  if (metadata.setObjectname) {
    record.objectName = metadata.setObjectname(record);
  }
  if (metadata.setFullName) {
    record.fullName = metadata.setFullName(record);
  }
  if (metadata.transform) {
    metadata.transform(record);
  }
}

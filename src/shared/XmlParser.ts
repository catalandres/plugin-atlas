/* eslint-disable @typescript-eslint/member-ordering */
import * as xml2js from 'xml2js';
import * as Metadata from './metadata/types/metadata.js';
import { array } from './array.js';
import { Extended, ExtendedMetadata, Album, Definition } from './metadata/file/index.js';

const nameRegEx = new RegExp('.+/([^.]*)');
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

export class XmlParser {
  public static getMetadata<T extends ExtendedMetadata>(xml: string, fileName: string, definition: Definition): Album {
    const album: Album = {};
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: Record<string, T>) => {
      const theRecord = result[definition.name];
      if (!definition.container) {
        XmlParser.treatRecord(theRecord, definition, fileName);
        album[definition.list] = [theRecord];
      }
      if (definition.children) {
        for (const listName of definition.children.keys()) {
          const thisDefinition = definition.children.get(listName) as Definition;
          album[thisDefinition.list] = [];
          const records = array(theRecord[listName]) as Array<Extended<typeof thisDefinition.metadataType>>;
          for (const thisRecord of records) {
            XmlParser.treatRecord(thisRecord, thisDefinition, fileName);
            album[thisDefinition.list].push(thisRecord as T);
          }
        }
      }
    });
    return album;
  }

  private static treatRecord<T extends ExtendedMetadata>(
    record: Extended<T>,
    metadata: Definition,
    fileName: string
  ): void {
    record.fileName = fileName;
    if (metadata.setName) {
      record.name = metadata.setName(fileName);
    }
    if (metadata.setObjectname) {
      record.objectName = metadata.setObjectname(fileName);
    }
    if (metadata.setFullName) {
      record.fullName = metadata.setFullName(fileName);
    }
    if (metadata.transform) {
      metadata.transform(record);
    }
  }

  public static getWorkflowRules(xml: string, fileName: string): Array<Extended<Metadata.WorkflowRule>> {
    const workflowRules: Array<Extended<Metadata.WorkflowRule>> = [];
    const objectName = nameRegEx.exec(fileName)?.[1] as string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { Workflow: Metadata.Workflow }) => {
      for (const thisRule of array(result.Workflow.rules) as Array<Extended<Metadata.WorkflowRule>>) {
        thisRule.objectName = objectName;
        workflowRules.push(thisRule);
      }
    });
    return workflowRules;
  }
}

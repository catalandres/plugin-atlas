import * as xml2js from 'xml2js';
import { array } from 'arraysure';
import * as Metadata from '../types/metadata.js';
import { Named, FullNamed, ObjectNamed } from '../types/metadata-addon.js';

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
  public static getApexClasses(xml: string, fileName: string): Array<Named<Metadata.ApexClass>> {
    const apexClasses: Array<Named<Metadata.ApexClass>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { ApexClass: Named<Metadata.ApexClass> }) => {
      result.ApexClass.name = nameRegEx.exec(fileName)?.[1] as string;
      apexClasses.push(result.ApexClass);
    });
    return apexClasses;
  }

  public static getApexTriggers(xml: string, fileName: string): Array<Named<Metadata.ApexTrigger>> {
    const apexTriggers: Array<Named<Metadata.ApexTrigger>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { ApexTrigger: Named<Metadata.ApexTrigger> }) => {
      result.ApexTrigger.name = nameRegEx.exec(fileName)?.[1] as string;
      apexTriggers.push(result.ApexTrigger);
    });
    return apexTriggers;
  }

  public static getVisualforcePages(xml: string, fileName: string): Array<Named<Metadata.ApexPage>> {
    const visualforcePages: Array<Named<Metadata.ApexPage>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { ApexPage: Named<Metadata.ApexPage> }) => {
      result.ApexPage.name = nameRegEx.exec(fileName)?.[1] as string;
      visualforcePages.push(result.ApexPage);
    });
    return visualforcePages;
  }

  public static getPermissionSets(xml: string, fileName: string): Array<Named<Metadata.PermissionSet>> {
    const permissionSets: Array<Named<Metadata.PermissionSet>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { PermissionSet: Named<Metadata.PermissionSet> }) => {
      result.PermissionSet.name = nameRegEx.exec(fileName)?.[1] as string;
      permissionSets.push(result.PermissionSet);
    });
    return permissionSets;
  }

  public static getPermissionSetGroups(xml: string, fileName: string): Array<Named<Metadata.PermissionSetGroup>> {
    const permissionSetGroups: Array<Named<Metadata.PermissionSetGroup>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { PermissionSetGroup: Named<Metadata.PermissionSetGroup> }) => {
        result.PermissionSetGroup.name = nameRegEx.exec(fileName)?.[1] as string;
        permissionSetGroups.push(result.PermissionSetGroup);
      }
    );
    return permissionSetGroups;
  }

  public static getWorkflowRules(xml: string, fileName: string): Array<ObjectNamed<FullNamed<Metadata.WorkflowRule>>> {
    const workflowRules: Array<ObjectNamed<FullNamed<Metadata.WorkflowRule>>> = [];
    const objectName = nameRegEx.exec(fileName)?.[1] as string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { Workflow: Metadata.Workflow }) => {
      for (const thisRule of array(result.Workflow.rules) as Array<ObjectNamed<FullNamed<Metadata.WorkflowRule>>>) {
        thisRule.objectName = objectName;
        workflowRules.push(thisRule);
      }
    });
    return workflowRules;
  }
}

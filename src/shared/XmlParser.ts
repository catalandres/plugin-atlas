import * as path from 'node:path';
import * as xml2js from 'xml2js';
import * as Metadata from './metadata/types/metadata.js';
import { Extended } from './metadata/file/index.js';
import { array } from './array.js';

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
  public static getApexClasses(xml: string, fileName: string): Array<Extended<Metadata.ApexClass>> {
    const apexClasses: Array<Extended<Metadata.ApexClass>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { ApexClass: Extended<Metadata.ApexClass> }) => {
      result.ApexClass.name = nameRegEx.exec(fileName)?.[1] as string;
      apexClasses.push(result.ApexClass);
    });
    return apexClasses;
  }

  public static getApexTriggers(xml: string, fileName: string): Array<Extended<Metadata.ApexTrigger>> {
    const apexTriggers: Array<Extended<Metadata.ApexTrigger>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { ApexTrigger: Extended<Metadata.ApexTrigger> }) => {
      result.ApexTrigger.name = nameRegEx.exec(fileName)?.[1] as string;
      apexTriggers.push(result.ApexTrigger);
    });
    return apexTriggers;
  }

  public static getVisualforcePages(xml: string, fileName: string): Array<Extended<Metadata.ApexPage>> {
    const visualforcePages: Array<Extended<Metadata.ApexPage>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { ApexPage: Extended<Metadata.ApexPage> }) => {
      result.ApexPage.name = nameRegEx.exec(fileName)?.[1] as string;
      visualforcePages.push(result.ApexPage);
    });
    return visualforcePages;
  }

  public static getVisualforceComponents(xml: string, fileName: string): Array<Extended<Metadata.ApexComponent>> {
    const visualforceComponents: Array<Extended<Metadata.ApexComponent>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { ApexComponent: Extended<Metadata.ApexComponent> }) => {
      result.ApexComponent.name = nameRegEx.exec(fileName)?.[1] as string;
      visualforceComponents.push(result.ApexComponent);
    });
    return visualforceComponents;
  }

  public static getAuraComponents(xml: string, fileName: string): Array<Extended<Metadata.AuraDefinitionBundle>> {
    const auraComponents: Array<Extended<Metadata.AuraDefinitionBundle>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { AuraDefinitionBundle: Extended<Metadata.AuraDefinitionBundle> }) => {
        result.AuraDefinitionBundle.name = nameRegEx.exec(fileName)?.[1] as string;
        auraComponents.push(result.AuraDefinitionBundle);
      }
    );
    return auraComponents;
  }

  public static getLightningWebComponents(
    xml: string,
    fileName: string
  ): Array<Extended<Metadata.LightningComponentBundle>> {
    const lwc: Array<Extended<Metadata.LightningComponentBundle>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { LightningComponentBundle: Extended<Metadata.LightningComponentBundle> }) => {
        result.LightningComponentBundle.name = nameRegEx.exec(fileName)?.[1] as string;
        lwc.push(result.LightningComponentBundle);
      }
    );
    return lwc;
  }

  public static getPermissionSets(xml: string, fileName: string): Array<Extended<Metadata.PermissionSet>> {
    const permissionSets: Array<Extended<Metadata.PermissionSet>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { PermissionSet: Extended<Metadata.PermissionSet> }) => {
      result.PermissionSet.name = nameRegEx.exec(fileName)?.[1] as string;
      permissionSets.push(result.PermissionSet);
    });
    return permissionSets;
  }

  public static getPermissionSetGroups(xml: string, fileName: string): Array<Extended<Metadata.PermissionSetGroup>> {
    const permissionSetGroups: Array<Extended<Metadata.PermissionSetGroup>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { PermissionSetGroup: Extended<Metadata.PermissionSetGroup> }) => {
        result.PermissionSetGroup.name = nameRegEx.exec(fileName)?.[1] as string;
        permissionSetGroups.push(result.PermissionSetGroup);
      }
    );
    return permissionSetGroups;
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

  public static getObjects(xml: string, fileName: string): Array<Extended<Metadata.CustomObject>> {
    const objects: Array<Extended<Metadata.CustomObject>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { CustomObject: Extended<Metadata.CustomObject> }) => {
      result.CustomObject.name = nameRegEx.exec(fileName)?.[1] as string;
      objects.push(result.CustomObject);
    });
    return objects;
  }

  public static getFields(xml: string, fileName: string): Array<Extended<Metadata.CustomField>> {
    const fields: Array<Extended<Metadata.CustomField>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { CustomField: Extended<Metadata.CustomField> }) => {
      const name = nameRegEx.exec(fileName)?.[1] as string;
      result.CustomField.objectName = objectName;
      result.CustomField.name = name;
      result.CustomField.fullName = objectName + '.' + name;
      fields.push(result.CustomField);
    });
    return fields;
  }

  public static getFieldSets(xml: string, fileName: string): Array<Extended<Metadata.FieldSet>> {
    const fieldSets: Array<Extended<Metadata.FieldSet>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { FieldSet: Extended<Metadata.FieldSet> }) => {
      const name = nameRegEx.exec(fileName)?.[1] as string;
      result.FieldSet.objectName = objectName;
      result.FieldSet.name = name;
      result.FieldSet.fullName = objectName + '.' + name;
      fieldSets.push(result.FieldSet);
    });
    return fieldSets;
  }

  public static getListViews(xml: string, fileName: string): Array<Extended<Metadata.ListView>> {
    const listViews: Array<Extended<Metadata.ListView>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    const name = nameRegEx.exec(fileName)?.[1] as string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { ListView: Extended<Metadata.ListView> }) => {
      result.ListView.objectName = objectName;
      result.ListView.name = name;
      result.ListView.fullName = objectName + '.' + name;
      listViews.push(result.ListView);
    });
    return listViews;
  }

  public static getRecordTypes(xml: string, fileName: string): Array<Extended<Metadata.RecordType>> {
    const recordTypes: Array<Extended<Metadata.RecordType>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { RecordType: Extended<Metadata.RecordType> }) => {
      const name = nameRegEx.exec(fileName)?.[1] as string;
      result.RecordType.objectName = objectName;
      result.RecordType.name = name;
      result.RecordType.fullName = objectName + '.' + name;
      recordTypes.push(result.RecordType);
    });
    return recordTypes;
  }

  public static getValidationRules(xml: string, fileName: string): Array<Extended<Metadata.ValidationRule>> {
    const validationRules: Array<Extended<Metadata.ValidationRule>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { ValidationRule: Extended<Metadata.ValidationRule> }) => {
      const name = nameRegEx.exec(fileName)?.[1] as string;
      result.ValidationRule.objectName = objectName;
      result.ValidationRule.name = name;
      result.ValidationRule.fullName = objectName + '.' + name;
      validationRules.push(result.ValidationRule);
    });
    return validationRules;
  }

  public static getCompactLayouts(xml: string, fileName: string): Array<Extended<Metadata.CompactLayout>> {
    const compactLayouts: Array<Extended<Metadata.CompactLayout>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { CompactLayout: Extended<Metadata.CompactLayout> }) => {
      const name = nameRegEx.exec(fileName)?.[1] as string;
      result.CompactLayout.objectName = objectName;
      result.CompactLayout.name = name;
      result.CompactLayout.fullName = objectName + '.' + name;
      compactLayouts.push(result.CompactLayout);
    });
    return compactLayouts;
  }

  public static getWebLinks(xml: string, fileName: string): Array<Extended<Metadata.WebLink>> {
    const webLinks: Array<Extended<Metadata.WebLink>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { WebLink: Extended<Metadata.WebLink> }) => {
      const name = nameRegEx.exec(fileName)?.[1] as string;
      result.WebLink.objectName = objectName;
      result.WebLink.name = name;
      result.WebLink.fullName = objectName + '.' + name;
      webLinks.push(result.WebLink);
    });
    return webLinks;
  }

  public static getQuickActions(xml: string, fileName: string): Array<Extended<Metadata.QuickAction>> {
    const quickActions: Array<Extended<Metadata.QuickAction>> = [];
    const fullName = path.basename(fileName).replace('.quickAction-meta.xml', '');
    const objectName = fullName.split('.')[0];
    const name = fullName.split('.')[1];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { QuickAction: Extended<Metadata.QuickAction> }) => {
      result.QuickAction.objectName = objectName;
      result.QuickAction.name = name;
      result.QuickAction.fullName = fullName;
      quickActions.push(result.QuickAction);
    });
    return quickActions;
  }

  public static getTabs(xml: string, fileName: string): Array<Extended<Metadata.CustomTab>> {
    const tabs: Array<Extended<Metadata.CustomTab>> = [];
    const name = path.basename(fileName).replace('.tab-meta.xml', '');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { CustomTab: Extended<Metadata.CustomTab> }) => {
      if (result.CustomTab.customObject) {
        result.CustomTab.objectName = name;
      }
      result.CustomTab.name = name;
      tabs.push(result.CustomTab);
    });
    return tabs;
  }

  public static getLayouts(xml: string, fileName: string): Array<Extended<Metadata.Layout>> {
    const layouts: Array<Extended<Metadata.Layout>> = [];
    const fullName = path.basename(fileName).replace('.layout-meta.xml', '');
    const objectName = fullName.split('-')[0];
    const name = fullName.split('-')[1];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { Layout: Extended<Metadata.Layout> }) => {
      result.Layout.objectName = objectName;
      result.Layout.name = name;
      result.Layout.fullName = fullName;
      layouts.push(result.Layout);
    });
    return layouts;
  }

  public static getFlexipages(xml: string, fileName: string): Array<Extended<Metadata.FlexiPage>> {
    const flexipages: Array<Extended<Metadata.FlexiPage>> = [];
    const name = path.basename(fileName).replace('.flexipage-meta.xml', '');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { FlexiPage: Extended<Metadata.FlexiPage> }) => {
      result.FlexiPage.name = name;
      flexipages.push(result.FlexiPage);
    });
    return flexipages;
  }

  public static getFlows(xml: string, fileName: string): Array<Extended<Metadata.Flow>> {
    const flows: Array<Extended<Metadata.Flow>> = [];
    const name = path.basename(fileName).replace('.flow-meta.xml', '');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { Flow: Extended<Metadata.Flow> }) => {
      result.Flow.name = name;
      flows.push(result.Flow);
    });
    return flows;
  }
}

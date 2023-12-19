import * as path from 'node:path';
import * as xml2js from 'xml2js';
import * as Metadata from '../types/metadata.js';
import { Named, FullNamed, ObjectNamed } from '../types/metadata-addon.js';
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

  public static getVisualforceComponents(xml: string, fileName: string): Array<Named<Metadata.ApexComponent>> {
    const visualforceComponents: Array<Named<Metadata.ApexComponent>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { ApexComponent: Named<Metadata.ApexComponent> }) => {
      result.ApexComponent.name = nameRegEx.exec(fileName)?.[1] as string;
      visualforceComponents.push(result.ApexComponent);
    });
    return visualforceComponents;
  }

  public static getAuraComponents(xml: string, fileName: string): Array<Named<Metadata.AuraDefinitionBundle>> {
    const auraComponents: Array<Named<Metadata.AuraDefinitionBundle>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { AuraDefinitionBundle: Named<Metadata.AuraDefinitionBundle> }) => {
        result.AuraDefinitionBundle.name = nameRegEx.exec(fileName)?.[1] as string;
        auraComponents.push(result.AuraDefinitionBundle);
      }
    );
    return auraComponents;
  }

  public static getLightningWebComponents(
    xml: string,
    fileName: string
  ): Array<Named<Metadata.LightningComponentBundle>> {
    const lwc: Array<Named<Metadata.LightningComponentBundle>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { LightningComponentBundle: Named<Metadata.LightningComponentBundle> }) => {
        result.LightningComponentBundle.name = nameRegEx.exec(fileName)?.[1] as string;
        lwc.push(result.LightningComponentBundle);
      }
    );
    return lwc;
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

  public static getObjects(xml: string, fileName: string): Array<Named<Metadata.CustomObject>> {
    const objects: Array<Named<Metadata.CustomObject>> = [];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { CustomObject: Named<Metadata.CustomObject> }) => {
      result.CustomObject.name = nameRegEx.exec(fileName)?.[1] as string;
      objects.push(result.CustomObject);
    });
    return objects;
  }

  public static getFields(xml: string, fileName: string): Array<ObjectNamed<FullNamed<Named<Metadata.CustomField>>>> {
    const fields: Array<ObjectNamed<FullNamed<Named<Metadata.CustomField>>>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { CustomField: ObjectNamed<FullNamed<Named<Metadata.CustomField>>> }) => {
        const name = nameRegEx.exec(fileName)?.[1] as string;
        result.CustomField.objectName = objectName;
        result.CustomField.name = name;
        result.CustomField.fullName = objectName + '.' + name;
        fields.push(result.CustomField);
      }
    );
    return fields;
  }

  public static getFieldSets(xml: string, fileName: string): Array<ObjectNamed<FullNamed<Named<Metadata.FieldSet>>>> {
    const fieldSets: Array<ObjectNamed<FullNamed<Named<Metadata.FieldSet>>>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { FieldSet: ObjectNamed<FullNamed<Named<Metadata.FieldSet>>> }) => {
        const name = nameRegEx.exec(fileName)?.[1] as string;
        result.FieldSet.objectName = objectName;
        result.FieldSet.name = name;
        result.FieldSet.fullName = objectName + '.' + name;
        fieldSets.push(result.FieldSet);
      }
    );
    return fieldSets;
  }

  public static getListViews(xml: string, fileName: string): Array<ObjectNamed<FullNamed<Named<Metadata.ListView>>>> {
    const listViews: Array<ObjectNamed<FullNamed<Named<Metadata.ListView>>>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    const name = nameRegEx.exec(fileName)?.[1] as string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { ListView: ObjectNamed<FullNamed<Named<Metadata.ListView>>> }) => {
        result.ListView.objectName = objectName;
        result.ListView.name = name;
        result.ListView.fullName = objectName + '.' + name;
        listViews.push(result.ListView);
      }
    );
    return listViews;
  }

  public static getRecordTypes(
    xml: string,
    fileName: string
  ): Array<ObjectNamed<FullNamed<Named<Metadata.RecordType>>>> {
    const recordTypes: Array<ObjectNamed<FullNamed<Named<Metadata.RecordType>>>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { RecordType: ObjectNamed<FullNamed<Named<Metadata.RecordType>>> }) => {
        const name = nameRegEx.exec(fileName)?.[1] as string;
        result.RecordType.objectName = objectName;
        result.RecordType.name = name;
        result.RecordType.fullName = objectName + '.' + name;
        recordTypes.push(result.RecordType);
      }
    );
    return recordTypes;
  }

  public static getValidationRules(
    xml: string,
    fileName: string
  ): Array<ObjectNamed<FullNamed<Named<Metadata.ValidationRule>>>> {
    const validationRules: Array<ObjectNamed<FullNamed<Named<Metadata.ValidationRule>>>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { ValidationRule: ObjectNamed<FullNamed<Named<Metadata.ValidationRule>>> }) => {
        const name = nameRegEx.exec(fileName)?.[1] as string;
        result.ValidationRule.objectName = objectName;
        result.ValidationRule.name = name;
        result.ValidationRule.fullName = objectName + '.' + name;
        validationRules.push(result.ValidationRule);
      }
    );
    return validationRules;
  }

  public static getCompactLayouts(
    xml: string,
    fileName: string
  ): Array<ObjectNamed<FullNamed<Named<Metadata.CompactLayout>>>> {
    const compactLayouts: Array<ObjectNamed<FullNamed<Named<Metadata.CompactLayout>>>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { CompactLayout: ObjectNamed<FullNamed<Named<Metadata.CompactLayout>>> }) => {
        const name = nameRegEx.exec(fileName)?.[1] as string;
        result.CompactLayout.objectName = objectName;
        result.CompactLayout.name = name;
        result.CompactLayout.fullName = objectName + '.' + name;
        compactLayouts.push(result.CompactLayout);
      }
    );
    return compactLayouts;
  }

  public static getWebLinks(xml: string, fileName: string): Array<ObjectNamed<FullNamed<Named<Metadata.WebLink>>>> {
    const webLinks: Array<ObjectNamed<FullNamed<Named<Metadata.WebLink>>>> = [];
    const objectName = fileName.split(path.sep).reverse()[2];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { WebLink: ObjectNamed<FullNamed<Named<Metadata.WebLink>>> }) => {
        const name = nameRegEx.exec(fileName)?.[1] as string;
        result.WebLink.objectName = objectName;
        result.WebLink.name = name;
        result.WebLink.fullName = objectName + '.' + name;
        webLinks.push(result.WebLink);
      }
    );
    return webLinks;
  }

  public static getQuickActions(
    xml: string,
    fileName: string
  ): Array<ObjectNamed<FullNamed<Named<Metadata.QuickAction>>>> {
    const quickActions: Array<ObjectNamed<FullNamed<Named<Metadata.QuickAction>>>> = [];
    const fullName = path.basename(fileName).replace('.quickAction-meta.xml', '');
    const objectName = fullName.split('.')[0];
    const name = fullName.split('.')[1];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { QuickAction: ObjectNamed<FullNamed<Named<Metadata.QuickAction>>> }) => {
        result.QuickAction.objectName = objectName;
        result.QuickAction.name = name;
        result.QuickAction.fullName = fullName;
        quickActions.push(result.QuickAction);
      }
    );
    return quickActions;
  }

  public static getTabs(xml: string, fileName: string): Array<ObjectNamed<FullNamed<Named<Metadata.CustomTab>>>> {
    const tabs: Array<ObjectNamed<FullNamed<Named<Metadata.CustomTab>>>> = [];
    const name = path.basename(fileName).replace('.tab-meta.xml', '');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { CustomTab: ObjectNamed<FullNamed<Named<Metadata.CustomTab>>> }) => {
        if (result.CustomTab.customObject) {
          result.CustomTab.objectName = name;
        }
        result.CustomTab.name = name;
        tabs.push(result.CustomTab);
      }
    );
    return tabs;
  }

  public static getLayouts(xml: string, fileName: string): Array<ObjectNamed<FullNamed<Named<Metadata.Layout>>>> {
    const layouts: Array<ObjectNamed<FullNamed<Named<Metadata.Layout>>>> = [];
    const fullName = path.basename(fileName).replace('.layout-meta.xml', '');
    const objectName = fullName.split('-')[0];
    const name = fullName.split('-')[1];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { Layout: ObjectNamed<FullNamed<Named<Metadata.Layout>>> }) => {
        result.Layout.objectName = objectName;
        result.Layout.name = name;
        result.Layout.fullName = fullName;
        layouts.push(result.Layout);
      }
    );
    return layouts;
  }

  public static getFlexipages(xml: string, fileName: string): Array<Named<Metadata.FlexiPage>> {
    const flexipages: Array<Named<Metadata.FlexiPage>> = [];
    const name = path.basename(fileName).replace('.flexipage-meta.xml', '');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(
      xml,
      parserOptions,
      (err, result: { FlexiPage: ObjectNamed<FullNamed<Named<Metadata.FlexiPage>>> }) => {
        result.FlexiPage.name = name;
        flexipages.push(result.FlexiPage);
      }
    );
    return flexipages;
  }

  public static getFlows(xml: string, fileName: string): Array<Named<Metadata.Flow>> {
    const flows: Array<Named<Metadata.Flow>> = [];
    const name = path.basename(fileName).replace('.flow-meta.xml', '');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    xml2js.parseString(xml, parserOptions, (err, result: { Flow: ObjectNamed<FullNamed<Named<Metadata.Flow>>> }) => {
      result.Flow.name = name;
      flows.push(result.Flow);
    });
    return flows;
  }
}

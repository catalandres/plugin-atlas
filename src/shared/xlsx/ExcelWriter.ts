/* eslint-disable complexity */

import { mkdir } from 'node:fs/promises';
import * as ExcelJS from 'exceljs';
import { Extended, Album } from '../metadata/file/index.js';
import * as Metadata from '../metadata/types/metadata.js';
import { ALL_TABLES } from './index.js';

export class ExcelWriter {
  private album: Album;
  private projectPath: string;

  public constructor(album: Album, projectPath: string) {
    this.album = album;
    this.projectPath = projectPath;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public async writeXlsx(): Promise<string> {
    const workbook = new ExcelJS.default.Workbook();

    for (const thisTable of ALL_TABLES) {
      if (this.album[thisTable.list]?.length > 0) {
        const worksheet = workbook.addWorksheet(thisTable.name);
        worksheet.columns = thisTable.columns.map((column) => ({ header: column.label, key: column.field, width: 64 }));
        worksheet.getRow(1).font = { bold: true };
        for (const thisRecord of this.album[thisTable.list] as Array<
          Extended<typeof thisTable.definition.metadataType>
        >) {
          const row: Record<string, unknown> = {};
          for (const thisColumn of thisTable.columns) {
            row[thisColumn.field] = thisRecord[thisColumn.field];
          }
          worksheet.addRow(row);
        }
      }
    }

    if (this.album.fieldSets?.length > 0) {
      const fieldSetWorksheet = workbook.addWorksheet('Field Sets');
      fieldSetWorksheet.columns = [
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Full Name', key: 'fullName', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'Displayed Fields', key: 'displayedFields', width: 64 },
      ];
      fieldSetWorksheet.getRow(1).font = { bold: true };
      for (const thisFieldSet of this.album.fieldSets as Array<Extended<Metadata.FieldSet>>) {
        fieldSetWorksheet.addRow({
          objectName: thisFieldSet.objectName,
          fullName: thisFieldSet.fullName,
          name: thisFieldSet.name,
          label: thisFieldSet.label,
          description: thisFieldSet.description,
          displayedFields: thisFieldSet.displayedFields,
        });
      }
    }

    if (this.album.listViews?.length > 0) {
      const listViewWorksheet = workbook.addWorksheet('List Views');
      listViewWorksheet.columns = [
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Full Name', key: 'fullName', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Columns', key: 'columns', width: 64 },
        { header: 'Filters', key: 'filters', width: 64 },
        { header: 'Filter Scope', key: 'filterScope', width: 64 },
        { header: 'Boolean Filter', key: 'booleanFilter', width: 64 },
        { header: 'Queue', key: 'queue', width: 64 },
        { header: 'Shared To', key: 'sharedTo', width: 64 },
        { header: 'Division', key: 'division', width: 64 },
        { header: 'Language', key: 'language', width: 64 },
      ];
      listViewWorksheet.getRow(1).font = { bold: true };
      for (const thisListView of this.album.listViews as Array<Extended<Metadata.ListView>>) {
        listViewWorksheet.addRow({
          objectName: thisListView.objectName,
          fullName: thisListView.fullName,
          name: thisListView.name,
          label: thisListView.label,
          columns: thisListView.columns,
          filters: thisListView.filters,
          filterScope: thisListView.filterScope,
          booleanFilter: thisListView.booleanFilter,
          queue: thisListView.queue,
          sharedTo: thisListView.sharedTo,
          division: thisListView.division,
          language: thisListView.language,
        });
      }
    }

    if (this.album.recordTypes?.length > 0) {
      const recordTypeWorksheet = workbook.addWorksheet('Record Types');
      recordTypeWorksheet.columns = [
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Full Name', key: 'fullName', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'Active', key: 'active', width: 64 },
        { header: 'Business Process', key: 'businessProcess', width: 64 },
        { header: 'Compact Layout Assignment', key: 'compactLayoutAssignment', width: 64 },
      ];
      recordTypeWorksheet.getRow(1).font = { bold: true };
      for (const thisRecordType of this.album.recordTypes as Array<Extended<Metadata.RecordType>>) {
        recordTypeWorksheet.addRow({
          objectName: thisRecordType.objectName,
          fullName: thisRecordType.fullName,
          name: thisRecordType.name,
          label: thisRecordType.label,
          description: thisRecordType.description,
          active: thisRecordType.active,
          businessProcess: thisRecordType.businessProcess,
          compactLayoutAssignment: thisRecordType.compactLayoutAssignment,
        });
      }
    }

    if (this.album.validationRules?.length > 0) {
      const validationRuleWorksheet = workbook.addWorksheet('Validation Rules');
      validationRuleWorksheet.columns = [
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Full Name', key: 'fullName', width: 64 },
        { header: 'Active', key: 'active', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'Error Condition Formula', key: 'errorConditionFormula', width: 64 },
        { header: 'Error Display Field', key: 'errorDisplayField', width: 64 },
        { header: 'Error Message', key: 'errorMessage', width: 128 },
      ];
      validationRuleWorksheet.getRow(1).font = { bold: true };
      for (const thisValidationRule of this.album.validationRules as Array<Extended<Metadata.ValidationRule>>) {
        validationRuleWorksheet.addRow({
          objectName: thisValidationRule.objectName,
          fullName: thisValidationRule.fullName,
          name: thisValidationRule.name,
          active: thisValidationRule.active,
          description: thisValidationRule.description,
          errorConditionFormula: thisValidationRule.errorConditionFormula,
          errorDisplayField: thisValidationRule.errorDisplayField,
          errorMessage: thisValidationRule.errorMessage,
        });
      }
    }

    if (this.album.compactLayouts?.length > 0) {
      const compactLayoutWorksheet = workbook.addWorksheet('Compact Layouts');
      compactLayoutWorksheet.columns = [
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Full Name', key: 'fullName', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Fields', key: 'fields', width: 64 },
      ];
      compactLayoutWorksheet.getRow(1).font = { bold: true };
      for (const thisCompactLayout of this.album.compactLayouts as Array<Extended<Metadata.CompactLayout>>) {
        compactLayoutWorksheet.addRow({
          objectName: thisCompactLayout.objectName,
          fullName: thisCompactLayout.fullName,
          name: thisCompactLayout.name,
          label: thisCompactLayout.label,
          fields: thisCompactLayout.fields,
        });
      }
    }

    if (this.album.webLinks?.length > 0) {
      const webLinkWorksheet = workbook.addWorksheet('Web Links');
      webLinkWorksheet.columns = [
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Full Name', key: 'fullName', width: 64 },
        { header: 'Label', key: 'masterLabel', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'Link Type', key: 'linkType', width: 64 },
        { header: 'Url', key: 'url', width: 64 },
        { header: 'Visualforce Page', key: 'page', width: 64 },
        { header: 'sControl', key: 'scontrol', width: 64 },
        { header: 'Display Type', key: 'displayType', width: 64 },
        { header: 'Height', key: 'height', width: 64 },
        { header: 'Width', key: 'width', width: 64 },
        { header: 'Open Type', key: 'openType', width: 64 },
        { header: 'Position', key: 'position', width: 64 },
        { header: 'Shows Location', key: 'showsLocation', width: 64 },
        { header: 'Shows Status', key: 'showsStatus', width: 64 },
        { header: 'Encoding Key', key: 'encodingKey', width: 64 },
        { header: 'Has Menubar', key: 'hasMenubar', width: 64 },
        { header: 'Has Scrollbars', key: 'hasScrollbars', width: 64 },
        { header: 'Has Toolbar', key: 'hasToolbar', width: 64 },
        { header: 'Is Resizeable', key: 'isResizable', width: 64 },
        { header: 'Availability', key: 'availability', width: 64 },
        { header: 'Protected', key: 'protected', width: 64 },
        { header: 'Require Row Selection', key: 'requireRowSelection', width: 64 },
      ];
      webLinkWorksheet.getRow(1).font = { bold: true };
      for (const thisWebLink of this.album.webLinks as Array<Extended<Metadata.WebLink>>) {
        webLinkWorksheet.addRow({
          objectName: thisWebLink.objectName,
          fullName: thisWebLink.fullName,
          name: thisWebLink.name,
          masterLabel: thisWebLink.masterLabel,
          description: thisWebLink.description,
          linkType: thisWebLink.linkType,
          url: thisWebLink.url,
          page: thisWebLink.page,
          scontrol: thisWebLink.scontrol,
          displayType: thisWebLink.displayType,
          height: thisWebLink.height,
          width: thisWebLink.width,
          openType: thisWebLink.openType,
          position: thisWebLink.position,
          showsLocation: thisWebLink.showsLocation,
          showsStatus: thisWebLink.showsStatus,
          encodingKey: thisWebLink.encodingKey,
          hasMenubar: thisWebLink.hasMenubar,
          hasScrollbars: thisWebLink.hasScrollbars,
          hasToolbar: thisWebLink.hasToolbar,
          isResizable: thisWebLink.isResizable,
          availability: thisWebLink.availability,
          protected: thisWebLink.protected,
          requireRowSelection: thisWebLink.requireRowSelection,
        });
      }
    }

    if (this.album.apexClasses?.length > 0) {
      const apexClassWorksheet = workbook.addWorksheet('Apex Classes');
      apexClassWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'API Version', key: 'apiVersion', width: 16 },
      ];
      apexClassWorksheet.getRow(1).font = { bold: true };
      for (const thisApexClass of this.album.apexClasses as Array<Extended<Metadata.ApexClass>>) {
        apexClassWorksheet.addRow({
          name: thisApexClass.name,
          apiVersion: thisApexClass.apiVersion,
        });
      }
    }

    if (this.album.apexTriggers?.length > 0) {
      const apexTriggerWorksheet = workbook.addWorksheet('Apex Triggers');
      apexTriggerWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'API Version', key: 'apiVersion', width: 16 },
      ];
      apexTriggerWorksheet.getRow(1).font = { bold: true };
      for (const thisApexTrigger of this.album.apexTriggers as Array<Extended<Metadata.ApexTrigger>>) {
        apexTriggerWorksheet.addRow({
          name: thisApexTrigger.name,
          apiVersion: thisApexTrigger.apiVersion,
        });
      }
    }

    if (this.album.apexPages?.length > 0) {
      const visualforcePageWorksheet = workbook.addWorksheet('Visualforce Pages');
      visualforcePageWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'API Version', key: 'apiVersion', width: 16 },
      ];
      visualforcePageWorksheet.getRow(1).font = { bold: true };
      for (const thisVisualforcePage of this.album.apexPages as Array<Extended<Metadata.ApexPage>>) {
        visualforcePageWorksheet.addRow({
          name: thisVisualforcePage.name,
          label: thisVisualforcePage.label,
          description: thisVisualforcePage.description,
          apiVersion: thisVisualforcePage.apiVersion,
        });
      }
    }

    if (this.album.apexComponents?.length > 0) {
      const visualforceComponentWorksheet = workbook.addWorksheet('Visualforce Components');
      visualforceComponentWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'API Version', key: 'apiVersion', width: 16 },
      ];
      visualforceComponentWorksheet.getRow(1).font = { bold: true };
      for (const thisVisualforceComponent of this.album.apexComponents as Array<Extended<Metadata.ApexComponent>>) {
        visualforceComponentWorksheet.addRow({
          name: thisVisualforceComponent.name,
          label: thisVisualforceComponent.label,
          description: thisVisualforceComponent.description,
          apiVersion: thisVisualforceComponent.apiVersion,
        });
      }
    }

    if (this.album.auraComponents?.length > 0) {
      const auraComponentWorksheet = workbook.addWorksheet('Aura Components');
      auraComponentWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'API Version', key: 'apiVersion', width: 16 },
      ];
      auraComponentWorksheet.getRow(1).font = { bold: true };
      for (const thisAuraComponent of this.album.auraComponents as Array<Extended<Metadata.AuraDefinitionBundle>>) {
        auraComponentWorksheet.addRow({
          name: thisAuraComponent.name,
          description: thisAuraComponent.description,
          apiVersion: thisAuraComponent.apiVersion,
        });
      }
    }

    if (this.album.lightningWebComponents?.length > 0) {
      const lightningWebComponentWorksheet = workbook.addWorksheet('Lightning Web Components');
      lightningWebComponentWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'API Version', key: 'apiVersion', width: 16 },
      ];
      lightningWebComponentWorksheet.getRow(1).font = { bold: true };
      for (const thisLightningWebComponent of this.album.lightningWebComponents as Array<
        Extended<Metadata.LightningComponentBundle>
      >) {
        lightningWebComponentWorksheet.addRow({
          name: thisLightningWebComponent.name,
          description: thisLightningWebComponent.description,
          apiVersion: thisLightningWebComponent.apiVersion,
        });
      }
    }

    if (this.album.permissionSets?.length > 0) {
      const permissionSetWorksheet = workbook.addWorksheet('Permission Sets');
      permissionSetWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
      ];
      permissionSetWorksheet.getRow(1).font = { bold: true };
      for (const thisPermissionSet of this.album.permissionSets as Array<Extended<Metadata.PermissionSet>>) {
        permissionSetWorksheet.addRow({
          name: thisPermissionSet.name,
          label: thisPermissionSet.label,
          description: thisPermissionSet.description,
        });
      }
    }

    if (this.album.permissionSetGroups?.length > 0) {
      const permissionSetGroupWorksheet = workbook.addWorksheet('Permission Set Groups');
      permissionSetGroupWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
      ];
      permissionSetGroupWorksheet.getRow(1).font = { bold: true };
      for (const thisPermissionSetGroup of this.album.permissionSetGroups as Array<
        Extended<Metadata.PermissionSetGroup>
      >) {
        permissionSetGroupWorksheet.addRow({
          name: thisPermissionSetGroup.name,
          label: thisPermissionSetGroup.label,
          description: thisPermissionSetGroup.description,
        });
      }
    }

    if (this.album.workflowRules?.length > 0) {
      const workflowRuleWorksheet = workbook.addWorksheet('Workflow Rules');
      workflowRuleWorksheet.columns = [
        { header: 'Name', key: 'fullName', width: 64 },
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Active', key: 'active', width: 64 },
        { header: 'Trigger Type', key: 'triggerType', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
      ];
      workflowRuleWorksheet.getRow(1).font = { bold: true };
      for (const thisWorkflowRule of this.album.workflowRules as Array<Extended<Metadata.WorkflowRule>>) {
        workflowRuleWorksheet.addRow({
          fullName: thisWorkflowRule.fullName,
          objectName: thisWorkflowRule.objectName,
          active: thisWorkflowRule.active,
          triggerType: thisWorkflowRule.triggerType,
          description: thisWorkflowRule.description,
        });
      }
    }

    if (this.album.quickActions?.length > 0) {
      const quickActionWorksheet = workbook.addWorksheet('Quick Actions');
      quickActionWorksheet.columns = [
        { header: 'Full Name', key: 'fullName', width: 64 },
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Type', key: 'type', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'Target Object', key: 'targetObject', width: 64 },
        { header: 'Target Parent Field', key: 'targetParentField', width: 64 },
        { header: 'Target Record Type', key: 'targetRecordType', width: 64 },
        { header: 'Standard Label', key: 'standardLabel', width: 64 },
        { header: 'Success Message', key: 'successMessage', width: 64 },
        { header: 'Flow Definition', key: 'flowDefinition', width: 64 },
      ];
      quickActionWorksheet.getRow(1).font = { bold: true };
      for (const thisQuickAction of this.album.quickActions as Array<Extended<Metadata.QuickAction>>) {
        quickActionWorksheet.addRow({
          name: thisQuickAction.name,
          objectName: thisQuickAction.objectName,
          fullName: thisQuickAction.fullName,
          type: thisQuickAction.type,
          label: thisQuickAction.label,
          description: thisQuickAction.description,
          targetObject: thisQuickAction.targetObject,
          targetParentField: thisQuickAction.targetParentField,
          targetRecordType: thisQuickAction.targetRecordType,
          standardLabel: thisQuickAction.standardLabel,
          successMessage: thisQuickAction.successMessage,
          flowDefinition: thisQuickAction.flowDefinition,
        });
      }
    }

    if (this.album.tabs?.length > 0) {
      const tabWorksheet = workbook.addWorksheet('Tabs');
      tabWorksheet.columns = [
        { header: 'Full Name', key: 'fullName', width: 64 },
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'Custom Object', key: 'customObject', width: 64 },
        { header: 'Motif', key: 'motif', width: 64 },
        { header: 'Flexipage', key: 'flexiPage', width: 64 },
        { header: 'Lightning Web Component', key: 'lwcComponent', width: 64 },
        { header: 'Aura Component', key: 'auraComponent', width: 64 },
        { header: 'Visualforce Page', key: 'page', width: 64 },
        { header: 'sControl', key: 'scontrol', width: 64 },
        { header: 'URL', key: 'url', width: 64 },
        { header: 'URL Encoding Key', key: 'urlEncodingKey', width: 64 },
      ];
      tabWorksheet.getRow(1).font = { bold: true };
      for (const thisTab of this.album.tabs as Array<Extended<Metadata.CustomTab>>) {
        tabWorksheet.addRow({
          name: thisTab.name,
          objectName: thisTab.objectName,
          fullName: thisTab.fullName,
          label: thisTab.label,
          description: thisTab.description,
          customObject: thisTab.customObject,
          motif: thisTab.motif,
          flexiPage: thisTab.flexiPage,
          lwcComponent: thisTab.lwcComponent,
          auraComponent: thisTab.auraComponent,
          page: thisTab.page,
          scontrol: thisTab.scontrol,
          url: thisTab.url,
          urlEncodingKey: thisTab.urlEncodingKey,
        });
      }
    }

    if (this.album.layouts?.length > 0) {
      const layoutWorksheet = workbook.addWorksheet('Layouts');
      layoutWorksheet.columns = [
        { header: 'Full Name', key: 'fullName', width: 64 },
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Object', key: 'objectName', width: 64 },
      ];
      layoutWorksheet.getRow(1).font = { bold: true };
      for (const thisLayout of this.album.layouts as Array<Extended<Metadata.Layout>>) {
        layoutWorksheet.addRow({
          name: thisLayout.name,
          objectName: thisLayout.objectName,
          fullName: thisLayout.fullName,
        });
      }
    }

    if (this.album.flexipages?.length > 0) {
      const flexipageWorksheet = workbook.addWorksheet('Flexipages');
      flexipageWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Label', key: 'masterLabel', width: 64 },
        { header: 'Type', key: 'type', width: 64 },
        { header: 'Object', key: 'sobjectType', width: 64 },
        { header: 'Parent Flexipage', key: 'parentFlexiPage', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
      ];
      flexipageWorksheet.getRow(1).font = { bold: true };
      for (const thisFlexipage of this.album.flexipages as Array<Extended<Metadata.FlexiPage>>) {
        flexipageWorksheet.addRow({
          name: thisFlexipage.name,
          masterLabel: thisFlexipage.masterLabel,
          type: thisFlexipage.type,
          sobjectType: thisFlexipage.sobjectType,
          parentFlexiPage: thisFlexipage.parentFlexiPage,
          description: thisFlexipage.description,
        });
      }
    }

    if (this.album.flows?.length > 0) {
      const flowWorksheet = workbook.addWorksheet('Flows');
      flowWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'Type', key: 'processType', width: 64 },
        { header: 'Status', key: 'status', width: 64 },
        { header: 'API Version', key: 'apiVersion', width: 64 },
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Trigger Type', key: 'triggerType', width: 64 },
        { header: 'Record Trigger Type', key: 'recordTriggerType', width: 64 },
      ];
      flowWorksheet.getRow(1).font = { bold: true };
      for (const thisFlow of this.album.flows as Array<Extended<Metadata.Flow>>) {
        flowWorksheet.addRow({
          name: thisFlow.name,
          label: thisFlow.label,
          description: thisFlow.description,
          processType: thisFlow.processType,
          status: thisFlow.status,
          apiVersion: thisFlow.apiVersion,
          objectName: thisFlow.start?.object,
          triggerType: thisFlow.start?.triggerType,
          recordTriggerType: thisFlow.start?.recordTriggerType,
        });
      }
    }

    const isoDateString: string = new Date()
      .toISOString()
      .split('.')[0]
      .replaceAll('-', '')
      .replaceAll(':', '')
      .replace('T', '-');
    const targetFolder = this.projectPath + '/doc/atlas/xlsx';
    const fileName = targetFolder + '/atlas-' + isoDateString + '.xlsx';
    await mkdir(targetFolder, { recursive: true });
    await workbook.xlsx.writeFile(fileName);
    return fileName;
  }
}

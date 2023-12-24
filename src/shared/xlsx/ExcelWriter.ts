/* eslint-disable complexity */

import { mkdir } from 'node:fs/promises';
import * as ExcelJS from 'exceljs';
import { Extended, Album } from '../metadata/file/index.js';
import * as Metadata from '../metadata/types/metadata.js';

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

    if (this.album.objects?.length > 0) {
      const objectWorksheet = workbook.addWorksheet('Objects');
      objectWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Label (Plural)', key: 'pluralLabel', width: 64 },
        { header: 'Gender', key: 'gender', width: 64 },
        { header: 'Starts With', key: 'startsWith', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'Default Internal Access', key: 'sharingModel', width: 64 },
        { header: 'Default External Access', key: 'externalSharingModel', width: 64 },
        { header: 'Deployment Status', key: 'deploymentStatus', width: 64 },
        { header: 'Activities Enabled', key: 'enableActivities', width: 64 },
        { header: 'Chatter Enabled', key: 'allowInChatterGroups', width: 64 },
        { header: 'Feeds Enabled', key: 'enableFeeds', width: 64 },
        { header: 'History Tracking Enabled', key: 'enableHistory', width: 64 },
        { header: 'Reports Enabled', key: 'enableReports', width: 64 },
        { header: 'Search Enabled', key: 'enableSearch', width: 64 },
        { header: 'Platform Event Type', key: 'eventType', width: 64 },
        { header: 'Platform Event Publish Behavior', key: 'publishBehavior', width: 64 },
        { header: 'Permission Set License Required', key: 'enableLicensing', width: 64 },
      ];
      objectWorksheet.getRow(1).font = { bold: true };
      for (const thisObject of this.album.objects as Array<Extended<Metadata.CustomObject>>) {
        objectWorksheet.addRow({
          name: thisObject.name,
          label: thisObject.label,
          pluralLabel: thisObject.pluralLabel,
          gender: thisObject.gender,
          startsWith: thisObject.startsWith,
          description: thisObject.description,
          sharingModel: thisObject.sharingModel,
          externalSharingModel: thisObject.externalSharingModel,
          deploymentStatus: thisObject.deploymentStatus,
          enableActivities: thisObject.enableActivities,
          allowInChatterGroups: thisObject.allowInChatterGroups,
          enableFeeds: thisObject.enableFeeds,
          enableHistory: thisObject.enableHistory,
          enableReports: thisObject.enableReports,
          enableSearch: thisObject.enableSearch,
          eventType: thisObject.eventType,
          publishBehavior: thisObject.publishBehavior,
          enableLicensing: thisObject.enableLicensing,
        });
      }
    }

    if (this.album.fields?.length > 0) {
      const fieldWorksheet = workbook.addWorksheet('Fields');
      fieldWorksheet.columns = [
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Full Name', key: 'fullName', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Type', key: 'type', width: 64 },
        { header: 'Required', key: 'required', width: 64 },
        { header: 'Unique', key: 'unique', width: 64 },
        { header: 'External ID', key: 'externalId', width: 64 },
        { header: 'AI Prediction Field', key: 'isAIPredictionField', width: 64 },
        { header: 'Case Sensitive', key: 'caseSensitive', width: 64 },

        { header: 'Encryption Scheme (Shield)', key: 'encryptionScheme', width: 64 },
        { header: 'Masking Type (Classic)', key: 'maskType', width: 64 },
        { header: 'Masking Character (Classic)', key: 'maskChar', width: 64 },

        { header: 'Description', key: 'description', width: 128 },
        { header: 'Help Text', key: 'inlineHelpText', width: 128 },

        { header: 'Default Value', key: 'defaultValue', width: 64 },
        { header: 'Length', key: 'length', width: 64 },
        { header: 'Visible Lines', key: 'visibleLines', width: 64 },
        { header: 'Precision', key: 'precision', width: 64 },
        { header: 'Scale', key: 'scale', width: 64 },
        { header: 'Value Set', key: 'valueSet', width: 64 },
        { header: 'Formula', key: 'formula', width: 64 },
        { header: 'Treat Formula Blanks As', key: 'formulaTreatBlanksAs', width: 64 },

        { header: 'Reference To', key: 'referenceTo', width: 64 },
        { header: 'Relationship Name', key: 'relationshipName', width: 64 },
        { header: 'Relationship Label', key: 'relationshipLabel', width: 64 },
        { header: 'Relationship Order', key: 'relationshipOrder', width: 64 },
        { header: 'Lookup Filter', key: 'lookupFilter', width: 64 },
        { header: 'Delete Constraint', key: 'deleteConstraint', width: 64 },
        { header: 'Reparentable Master Detail', key: 'reparentableMasterDetail', width: 64 },
        { header: 'Write Requires Master Read', key: 'writeRequiresMasterRead', width: 64 },

        { header: 'Summary Operation', key: 'summaryOperation', width: 64 },
        { header: 'Summarized Field', key: 'summarizedField', width: 64 },
        { header: 'Summary Filter Items', key: 'summaryFilterItems', width: 64 },

        { header: 'Track Feed History', key: 'trackFeedHistory', width: 64 },
        { header: 'Track History', key: 'trackHistory', width: 64 },
        { header: 'Track Trending', key: 'trackTrending', width: 64 },

        { header: 'Security Classification', key: 'securityClassification', width: 64 },
        { header: 'Compliance Group', key: 'complianceGroup', width: 64 },
        { header: 'Business Owner Group', key: 'businessOwnerGroup', width: 64 },
        { header: 'Business Owner User', key: 'businessOwnerUser', width: 64 },
        { header: 'Business Status', key: 'businessStatus', width: 64 },
      ];
      fieldWorksheet.getRow(1).font = { bold: true };
      for (const thisField of this.album.fields as Array<Extended<Metadata.CustomField>>) {
        fieldWorksheet.addRow({
          objectName: thisField.objectName,
          fullName: thisField.fullName,
          name: thisField.name,
          label: thisField.label,
          type: thisField.type,
          required: thisField.required,
          unique: thisField.unique,
          externalId: thisField.externalId,
          isAIPredictionField: thisField.isAIPredictionField,
          caseSensitive: thisField.caseSensitive,

          encryptionScheme: thisField.encryptionScheme,
          maskType: thisField.maskType,
          maskChar: thisField.maskChar,

          description: thisField.description,
          inlineHelpText: thisField.inlineHelpText,

          defaultValue: thisField.defaultValue,
          length: thisField.length,
          visibleLines: thisField.visibleLines,
          precision: thisField.precision,
          scale: thisField.scale,
          valueSet: thisField.valueSet,
          formula: thisField.formula,
          formulaTreatBlanksAs: thisField.formulaTreatBlanksAs,

          referenceTo: thisField.referenceTo,
          relationshipName: thisField.relationshipName,
          relationshipLabel: thisField.relationshipLabel,
          relationshipOrder: thisField.relationshipOrder,
          lookupFilter: thisField.lookupFilter,
          deleteConstraint: thisField.deleteConstraint,
          reparentableMasterDetail: thisField.reparentableMasterDetail,
          writeRequiresMasterRead: thisField.writeRequiresMasterRead,

          summaryOperation: thisField.summaryOperation,
          summarizedField: thisField.summarizedField,
          summaryFilterItems: thisField.summaryFilterItems,

          trackFeedHistory: thisField.trackFeedHistory,
          trackHistory: thisField.trackHistory,
          trackTrending: thisField.trackTrending,

          securityClassification: thisField.securityClassification,
          complianceGroup: thisField.complianceGroup,
          businessOwnerGroup: thisField.businessOwnerGroup,
          businessOwnerUser: thisField.businessOwnerUser,
          businessStatus: thisField.businessStatus,
        });
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

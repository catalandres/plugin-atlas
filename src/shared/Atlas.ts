import * as fs from 'node:fs';
import { readdir, mkdir } from 'node:fs/promises';
import { SfProject, NamedPackageDir } from '@salesforce/core';
import * as ExcelJS from 'exceljs';
import { Spinner } from '@salesforce/sf-plugins-core';
import * as Metadata from '../types/metadata.js';
import { Named, FullNamed, ObjectNamed } from '../types/metadata-addon.js';
import { XmlParser } from './XmlParser.js';

// TO DO
// - custom objects
// - custom fields
// - custom labels
// - custom metadata types
// - custom settings??
// - flexipages / lightning pages
// - flows
// - global value sets
// - layouts
// - lightning components
// - aura
// - tabs
// - quick actions
// - workflows

export class Atlas {
  public projectPath: string;

  public apexClasses: Array<Named<Metadata.ApexClass>> = [];
  public apexTriggers: Array<Named<Metadata.ApexTrigger>> = [];
  public visualforcePages: Array<Named<Metadata.ApexPage>> = [];

  public permissionSets: Array<Named<Metadata.PermissionSet>> = [];
  public permissionSetGroups: Array<Named<Metadata.PermissionSetGroup>> = [];

  public workflowRules: Array<ObjectNamed<FullNamed<Metadata.WorkflowRule>>> = [];

  public constructor(projectPath: string) {
    this.projectPath = projectPath;
  }

  public async initialize(spinner: Spinner): Promise<void> {
    const allFiles = await getAllProjectFiles(this.projectPath);
    for (const thisFile of allFiles) {
      spinner.status = thisFile;

      if (thisFile.endsWith('.cls-meta.xml')) {
        const xml = fs.readFileSync(thisFile, 'utf-8');
        this.apexClasses.push(...XmlParser.getApexClasses(xml, thisFile));
      }

      if (thisFile.endsWith('.trigger-meta.xml')) {
        const xml = fs.readFileSync(thisFile, 'utf-8');
        this.apexTriggers.push(...XmlParser.getApexTriggers(xml, thisFile));
      }

      if (thisFile.endsWith('.page-meta.xml')) {
        const xml = fs.readFileSync(thisFile, 'utf-8');
        this.visualforcePages.push(...XmlParser.getVisualforcePages(xml, thisFile));
      }

      if (thisFile.endsWith('.permissionset-meta.xml')) {
        const xml = fs.readFileSync(thisFile, 'utf-8');
        this.permissionSets.push(...XmlParser.getPermissionSets(xml, thisFile));
      }

      if (thisFile.endsWith('.permissionsetgroup-meta.xml')) {
        const xml = fs.readFileSync(thisFile, 'utf-8');
        this.permissionSetGroups.push(...XmlParser.getPermissionSetGroups(xml, thisFile));
      }

      if (thisFile.endsWith('.workflow-meta.xml')) {
        const xml = fs.readFileSync(thisFile, 'utf-8');
        this.workflowRules.push(...XmlParser.getWorkflowRules(xml, thisFile));
      }
    }
  }

  public async writeXlsx(): Promise<string> {
    const workbook = new ExcelJS.default.Workbook();

    if (this.apexClasses.length > 0) {
      const apexClassWorksheet = workbook.addWorksheet('Apex Classes');
      apexClassWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'API Version', key: 'apiVersion', width: 16 },
      ];
      apexClassWorksheet.getRow(1).font = { bold: true };
      for (const thisApexClass of this.apexClasses) {
        apexClassWorksheet.addRow({
          name: thisApexClass.name,
          apiVersion: thisApexClass.apiVersion,
        });
      }
    }

    if (this.apexTriggers.length > 0) {
      const apexTriggerWorksheet = workbook.addWorksheet('Apex Triggers');
      apexTriggerWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'API Version', key: 'apiVersion', width: 16 },
      ];
      apexTriggerWorksheet.getRow(1).font = { bold: true };
      for (const thisApexTrigger of this.apexTriggers) {
        apexTriggerWorksheet.addRow({
          name: thisApexTrigger.name,
          apiVersion: thisApexTrigger.apiVersion,
        });
      }
    }

    if (this.visualforcePages.length > 0) {
      const visualforcePageWorksheet = workbook.addWorksheet('Visualforce Pages');
      visualforcePageWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
        { header: 'API Version', key: 'apiVersion', width: 16 },
      ];
      visualforcePageWorksheet.getRow(1).font = { bold: true };
      for (const thisVisualforcePage of this.visualforcePages) {
        visualforcePageWorksheet.addRow({
          name: thisVisualforcePage.name,
          label: thisVisualforcePage.label,
          description: thisVisualforcePage.description,
          apiVersion: thisVisualforcePage.apiVersion,
        });
      }
    }

    if (this.permissionSets.length > 0) {
      const permissionSetWorksheet = workbook.addWorksheet('Permission Sets');
      permissionSetWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
      ];
      permissionSetWorksheet.getRow(1).font = { bold: true };
      for (const thisPermissionSet of this.permissionSets) {
        permissionSetWorksheet.addRow({
          name: thisPermissionSet.name,
          label: thisPermissionSet.label,
          description: thisPermissionSet.description,
        });
      }
    }

    if (this.permissionSetGroups.length > 0) {
      const permissionSetGroupWorksheet = workbook.addWorksheet('Permission Set Groups');
      permissionSetGroupWorksheet.columns = [
        { header: 'Name', key: 'name', width: 64 },
        { header: 'Label', key: 'label', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
      ];
      permissionSetGroupWorksheet.getRow(1).font = { bold: true };
      for (const thisPermissionSetGroup of this.permissionSetGroups) {
        permissionSetGroupWorksheet.addRow({
          name: thisPermissionSetGroup.name,
          label: thisPermissionSetGroup.label,
          description: thisPermissionSetGroup.description,
        });
      }
    }

    if (this.workflowRules.length > 0) {
      const workflowRuleWorksheet = workbook.addWorksheet('Workflow Rules');
      workflowRuleWorksheet.columns = [
        { header: 'Name', key: 'fullName', width: 64 },
        { header: 'Object', key: 'objectName', width: 64 },
        { header: 'Active', key: 'active', width: 64 },
        { header: 'Trigger Type', key: 'triggerType', width: 64 },
        { header: 'Description', key: 'description', width: 128 },
      ];
      workflowRuleWorksheet.getRow(1).font = { bold: true };
      for (const thisWorkflowRule of this.workflowRules) {
        workflowRuleWorksheet.addRow({
          fullName: thisWorkflowRule.fullName,
          objectName: thisWorkflowRule.objectName,
          active: thisWorkflowRule.active,
          triggerType: thisWorkflowRule.triggerType,
          description: thisWorkflowRule.description,
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

async function getAllProjectFiles(projectPath: string): Promise<string[]> {
  const metadata: string[] = [];
  const packageDirectories: NamedPackageDir[] = SfProject.getInstance(projectPath).getUniquePackageDirectories();
  for await (const thisPackageDirectory of packageDirectories) {
    const items = await readdir(thisPackageDirectory.fullPath, { recursive: true });
    metadata.push(...items.map((item) => thisPackageDirectory.fullPath + item));
  }
  return metadata;
}

import * as path from 'node:path';
import fsx from 'fs-extra';
import * as ExcelJS from 'exceljs';
import { Extended, Album } from '../metadataReader/metadataTypes.js';
import { ALL_TABLES } from './allTables.js';
import { ALL_TEMPLATES } from './allTemplates.js';
import { GenericTable, TableColumn } from './tables.js';

export class Writer {
  protected album: Album;
  protected type: WriterType;
  private workbook: ExcelJS.Workbook = new ExcelJS.default.Workbook();
  private pages: Record<string, string> = {};

  public constructor(album: Album, type: WriterType) {
    this.album = album;
    this.type = type;
  }

  public async write(targetPath: string): Promise<void> {
    switch (this.type) {
      case WriterType.XLSX:
        this.compileWorkbook();
        await this.writeXlsx(targetPath);
        break;

      case WriterType.CSV:
        this.compileWorkbook();
        await this.writeCsv(targetPath);
        break;

      case WriterType.MD:
        this.compilePages();
        await this.writeMd(targetPath);
        break;

      default:
        throw new Error('Unsupported writer type: ' + (this.type as string));
    }
  }

  private async writeXlsx(fileName: string): Promise<void> {
    await this.workbook?.xlsx.writeFile(fileName);
  }

  private async writeCsv(folderName: string): Promise<void> {
    const results: Array<Promise<void> | undefined> = [];
    for (const thisSheet of this.workbook.worksheets) {
      const sheetName = thisSheet.name;
      const sheetPath = path.join(folderName, sheetName + '.csv');
      results.push(this.workbook?.csv.writeFile(sheetPath, { sheetName }));
    }
    await Promise.all(results);
  }

  private async writeMd(targetPath: string): Promise<void> {
    const results: Array<Promise<void> | undefined> = [];
    for (const thisFile of Object.keys(this.pages)) {
      results.push(fsx.outputFile(path.join(targetPath, thisFile), this.pages[thisFile]));
    }
    await Promise.all(results);
  }

  private compilePages(): void {
    // registerHandlebarsHelpers();

    for (const thisTemplate of ALL_TEMPLATES) {
      // const pathTemplate = Handlebars.compile(thisTemplate.path);
      // const pageTemplate = Handlebars.compile(thisTemplate.template);

      for (const thisRecord of this.album[thisTemplate.metadataType.list] as Array<
        Extended<typeof thisTemplate.metadataType.metadataType>
      >) {
        const filePath = thisTemplate.renderPath(thisRecord);
        const fileContent = thisTemplate.renderContent(thisRecord);
        this.pages[filePath] = fileContent;
      }
    }
  }

  private compileWorkbook(): void {
    for (const thisTable of ALL_TABLES as GenericTable[]) {
      if (this.album[thisTable.metadataType.list]?.length > 0) {
        const worksheet = this.workbook.addWorksheet(thisTable.name);
        worksheet.columns = thisTable.columns.map((column: TableColumn) => ({
          header: column.title,
          key: column.id,
          width: 64,
        }));
        worksheet.getRow(1).font = { bold: true };
        for (const thisRecord of this.album[thisTable.metadataType.list] as Array<
          Extended<typeof thisTable.metadataType.metadataType>
        >) {
          const row: Record<string, unknown> = {};
          for (const thisColumn of thisTable.columns) {
            row[thisColumn.id] = thisRecord[thisColumn.id];
          }
          worksheet.addRow(row);
        }
      }
    }
  }
}

export enum WriterType {
  XLSX = 'xlsx',
  CSV = 'csv',
  MD = 'md',
}

/* eslint-disable complexity */
import * as path from 'node:path';
import * as ExcelJS from 'exceljs';
import { Extended, Album } from '../../metadataReader/metadataTypes.js';
import { Writer, WriterType } from '../writer.js';
import { ALL_TABLES } from './allTables.js';

export class TableWriter extends Writer {
  private workbook: ExcelJS.Workbook = new ExcelJS.default.Workbook();

  public constructor(album: Album, type: WriterType) {
    super(album, type);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public async write(targetPath: string): Promise<void> {
    this.workbook = this.compileWorkbook();

    switch (this.type) {
      case WriterType.XLSX:
        await this.writeXlsx(targetPath);
        break;
      case WriterType.CSV:
        await this.writeCsv(targetPath);
        break;
      default:
        throw new Error('Unsupported writer type: ' + (this.type as string));
    }
  }

  private async writeXlsx(fileName: string): Promise<void> {
    await this.workbook.xlsx.writeFile(fileName);
  }

  private async writeCsv(folderName: string): Promise<void> {
    const results: Array<Promise<void>> = [];
    for (const thisSheet of this.workbook.worksheets) {
      const sheetName = thisSheet.name;
      const sheetPath = path.join(folderName, sheetName + '.csv');
      results.push(this.workbook.csv.writeFile(sheetPath, { sheetName }));
    }
    await Promise.all(results);
  }

  private compileWorkbook(): ExcelJS.Workbook {
    const workbook = new ExcelJS.default.Workbook();

    for (const thisTable of ALL_TABLES) {
      if (this.album[thisTable.definition.list]?.length > 0) {
        const worksheet = workbook.addWorksheet(thisTable.name);
        worksheet.columns = thisTable.columns.map((column) => ({ header: column.title, key: column.id, width: 64 }));
        worksheet.getRow(1).font = { bold: true };
        for (const thisRecord of this.album[thisTable.definition.list] as Array<
          Extended<typeof thisTable.definition.metadataType>
        >) {
          const row: Record<string, unknown> = {};
          for (const thisColumn of thisTable.columns) {
            row[thisColumn.id] = thisRecord[thisColumn.id];
          }
          worksheet.addRow(row);
        }
      }
    }

    return workbook;
  }
}

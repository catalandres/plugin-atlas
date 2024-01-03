/* eslint-disable complexity */

import { mkdir } from 'node:fs/promises';
import * as ExcelJS from 'exceljs';
import { Extended, Album } from '../metadata/file/index.js';
import { ALL_TABLES } from './index.js';

export class XlsxWriter {
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
      if (this.album[thisTable.definition.list]?.length > 0) {
        const worksheet = workbook.addWorksheet(thisTable.name);
        worksheet.columns = thisTable.columns.map((column) => ({ header: column.label, key: column.field, width: 64 }));
        worksheet.getRow(1).font = { bold: true };
        for (const thisRecord of this.album[thisTable.definition.list] as Array<
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

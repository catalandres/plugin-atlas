/* eslint-disable complexity */
import * as path from 'node:path';
import { mkdir } from 'node:fs/promises';
import * as ExcelJS from 'exceljs';
import { Extended, Album } from '../../metadataReader/metadataTypes.js';
import { Writer } from '../writer.js';
import { ALL_TABLES } from './allTables.js';

export class TableWriter extends Writer {
  public constructor(album: Album) {
    super(album);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public async writeXlsx(fileName: string): Promise<void> {
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

    const targetFolder = path.dirname(fileName);
    if (targetFolder) {
      await mkdir(targetFolder, { recursive: true });
    }

    await workbook.xlsx.writeFile(fileName);
  }
}

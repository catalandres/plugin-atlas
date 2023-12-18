// import * as ExcelJS from 'exceljs';

// const NAME: ExcelJS.Column = { header: 'Name', key: 'name', width: 64 };
// const API_VERSION: ExcelJS.Column = { header: 'API Version', key: 'apiVersion', width: 16 };
// const LABEL: ExcelJS.Column = { header: 'Label', key: 'label', width: 64 };
// const DESCRIPTION: ExcelJS.Column = { header: 'Description', key: 'description', width: 128 };
// const ACTIVE: ExcelJS.Column = { header: 'Active', key: 'active', width: 64 };
// const TRIGGER_TYPE: ExcelJS.Column = { header: 'Trigger Type', key: 'triggerType', width: 64 };

// type TabDefinition = {
//   name: string;
//   columns: Array<ExcelJS.Column>;
//   rows: Array<unknown>;
// }

// export class ExcelWriter {

//   private workbook: ExcelJS.Workbook;

//   public constructor() {
//     this.workbook = new ExcelJS.Workbook();
//   }

//   public write(rows: Array<unknown>): void {

//   }

//   /*
//   if (this.apexClasses.length > 0) {
//     const apexClassWorksheet = workbook.addWorksheet('Apex Classes');
//     apexClassWorksheet.columns = [
//       { header: 'Name', key: 'name', width: 64 },
//       { header: 'API Version', key: 'apiVersion', width: 16 },
//     ];
//     apexClassWorksheet.getRow(1).font = { bold: true };
//     for (const thisApexClass of this.apexClasses) {
//       apexClassWorksheet.addRow({
//         name: thisApexClass.name,
//         apiVersion: thisApexClass.apiVersion,
//       });
//     }
//   }/*

// }

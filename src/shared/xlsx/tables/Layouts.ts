import { Table } from '../classes/Table.js';
import { LAYOUT } from '../../metadata/file/index.js';

export const LAYOUTS: Table = {
  name: 'Layouts',
  definition: LAYOUT,
  columns: [
    { label: 'Full Name', field: 'fullName' },
    { label: 'Name', field: 'name' },
    { label: 'Object', field: 'objectName' },
  ],
};

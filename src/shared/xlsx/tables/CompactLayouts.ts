import { Table } from '../classes/Table.js';
import { COMPACT_LAYOUT } from '../../metadata/file/index.js';

export const COMPACT_LAYOUTS: Table = {
  name: 'Compact Layouts',
  definition: COMPACT_LAYOUT,
  columns: [
    { label: 'Object', field: 'objectName' },
    { label: 'Name', field: 'name' },
    { label: 'Full Name', field: 'fullName' },
    { label: 'Label', field: 'label' },
    { label: 'Fields', field: 'fields' },
  ],
};

import { Table } from '../classes/Table.js';
import { PERMISSION_SET } from '../../metadata/file/index.js';

export const PERMISSION_SETS: Table = {
  name: 'Permission Sets',
  definition: PERMISSION_SET,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Label', field: 'label' },
    { label: 'Description', field: 'description' },
  ],
};

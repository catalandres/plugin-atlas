import { Table } from '../classes/Table.js';
import { PERMISSION_SET_GROUP } from '../../metadata/file/index.js';

export const PERMISSION_SET_GROUPS: Table = {
  name: 'Permission Set Groups',
  definition: PERMISSION_SET_GROUP,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Label', field: 'label' },
    { label: 'Description', field: 'description' },
  ],
};

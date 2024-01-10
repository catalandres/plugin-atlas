import { Table } from '../tables.js';
import { PERMISSION_SET_GROUP } from '../../../metadataReader/metadataTypes.js';

export const PERMISSION_SET_GROUPS: Table = {
  name: 'Permission Set Groups',
  definition: PERMISSION_SET_GROUP,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
  ],
};

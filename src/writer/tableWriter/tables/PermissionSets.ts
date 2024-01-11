import { Table } from '../tables.js';
import { PERMISSION_SET } from '../../../metadataReader/metadataTypes.js';

export const PERMISSION_SETS: Table = {
  name: 'Permission Sets',
  definition: PERMISSION_SET,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
  ],
};

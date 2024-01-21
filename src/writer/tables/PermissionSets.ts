import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { PERMISSION_SET } from '../../metadataReader/metadataTypes.js';

export const PERMISSION_SETS: Table<Metadata.PermissionSet> = {
  name: 'Permission Sets',
  metadataType: PERMISSION_SET,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
  ],
};

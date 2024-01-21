import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { PERMISSION_SET_GROUP } from '../../metadataReader/metadataTypes.js';

export const PERMISSION_SET_GROUPS: Table<Metadata.PermissionSetGroup> = {
  name: 'Permission Set Groups',
  metadataType: PERMISSION_SET_GROUP,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
  ],
};

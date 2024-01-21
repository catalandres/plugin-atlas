import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { USER_ACCESS_POLICY } from '../../metadataReader/metadataTypes.js';

export const USER_ACCESS_POLICIES: Table<Metadata.UserAccessPolicy> = {
  name: 'User Access Policies',
  metadataType: USER_ACCESS_POLICY,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'masterLabel' },
    { title: 'Status', id: 'status' },
  ],
};

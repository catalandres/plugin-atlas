import { Table } from '../tables.js';
import { USER_ACCESS_POLICY } from '../../../metadataReader/metadataTypes.js';

export const USER_ACCESS_POLICIES: Table = {
  name: 'User Access Policies',
  definition: USER_ACCESS_POLICY,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'masterLabel' },
    { title: 'Status', id: 'status' },
  ],
};

import { Table } from '../classes/Table.js';
import { USER_ACCESS_POLICY } from '../../metadata/file/index.js';

export const USER_ACCESS_POLICIES: Table = {
  name: 'User Access Policies',
  definition: USER_ACCESS_POLICY,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Label', field: 'masterLabel' },
    { label: 'Status', field: 'status' },
  ],
};

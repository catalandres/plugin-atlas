import { Table } from '../classes/Table.js';
import { ROLE } from '../../metadata/file/index.js';

export const ROLES: Table = {
  name: 'Roles',
  definition: ROLE,
  columns: [{ label: 'Name', field: 'name' }],
};

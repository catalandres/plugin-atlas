import { Table } from '../classes/Table.js';
import { PROFILE } from '../../metadata/file/index.js';

export const PROFILES: Table = {
  name: 'Profiles',
  definition: PROFILE,
  columns: [{ label: 'Name', field: 'name' }],
};

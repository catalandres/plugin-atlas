import { Table } from '../tables.js';
import { PROFILE } from '../../../metadataReader/metadataTypes.js';

export const PROFILES: Table = {
  name: 'Profiles',
  definition: PROFILE,
  columns: [{ title: 'Name', id: 'name' }],
};

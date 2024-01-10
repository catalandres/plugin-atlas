import { Table } from '../tables.js';
import { LAYOUT } from '../../../metadataReader/metadataTypes.js';

export const LAYOUTS: Table = {
  name: 'Layouts',
  definition: LAYOUT,
  columns: [
    { title: 'Full Name', id: 'fullName' },
    { title: 'Name', id: 'name' },
    { title: 'Object', id: 'objectName' },
  ],
};

import { Table } from '../tables.js';
import { APEX_CLASS } from '../../../metadataReader/metadataTypes.js';

export const APEX_CLASSES: Table = {
  name: 'Apex Classes',
  definition: APEX_CLASS,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'API Version', id: 'apiVersion' },
  ],
};

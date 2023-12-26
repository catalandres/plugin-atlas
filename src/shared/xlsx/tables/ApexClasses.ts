import { Table } from '../classes/Table.js';
import { APEX_CLASS } from '../../metadata/file/index.js';

export const APEX_CLASSES: Table = {
  name: 'Apex Classes',
  definition: APEX_CLASS,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'API Version', field: 'apiVersion' },
  ],
};

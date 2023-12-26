import { Table } from '../classes/Table.js';
import { APEX_TRIGGER } from '../../metadata/file/index.js';

export const APEX_TRIGGERS: Table = {
  name: 'Apex Triggers',
  definition: APEX_TRIGGER,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'API Version', field: 'apiVersion' },
  ],
};

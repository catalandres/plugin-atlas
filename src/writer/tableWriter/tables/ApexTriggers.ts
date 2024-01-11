import { Table } from '../tables.js';
import { APEX_TRIGGER } from '../../../metadataReader/metadataTypes.js';

export const APEX_TRIGGERS: Table = {
  name: 'Apex Triggers',
  definition: APEX_TRIGGER,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'API Version', id: 'apiVersion' },
  ],
};

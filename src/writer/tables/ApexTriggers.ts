import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { APEX_TRIGGER } from '../../metadataReader/metadataTypes.js';

export const APEX_TRIGGERS: Table<Metadata.ApexTrigger> = {
  name: 'Apex Triggers',
  metadataType: APEX_TRIGGER,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'API Version', id: 'apiVersion' },
  ],
};

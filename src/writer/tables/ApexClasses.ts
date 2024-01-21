import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { APEX_CLASS } from '../../metadataReader/metadataTypes.js';

export const APEX_CLASSES: Table<Metadata.ApexClass> = {
  name: 'Apex Classes',
  metadataType: APEX_CLASS,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'API Version', id: 'apiVersion' },
  ],
};

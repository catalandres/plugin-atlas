import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { APEX_COMPONENT } from '../../metadataReader/metadataTypes.js';

export const VISUALFORCE_COMPONENTS: Table<Metadata.ApexComponent> = {
  name: 'Visualforce Components',
  metadataType: APEX_COMPONENT,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
    { title: 'API Version', id: 'apiVersion' },
  ],
};

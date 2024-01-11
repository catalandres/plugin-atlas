import { Table } from '../tables.js';
import { APEX_COMPONENT } from '../../../metadataReader/metadataTypes.js';

export const VISUALFORCE_COMPONENTS: Table = {
  name: 'Visualforce Components',
  definition: APEX_COMPONENT,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
    { title: 'API Version', id: 'apiVersion' },
  ],
};

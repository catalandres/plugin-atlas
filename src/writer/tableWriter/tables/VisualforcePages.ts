import { Table } from '../tables.js';
import { APEX_PAGE } from '../../../metadataReader/metadataTypes.js';

export const VISUALFORCE_PAGES: Table = {
  name: 'Visualforce Pages',
  definition: APEX_PAGE,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
    { title: 'API Version', id: 'apiVersion' },
  ],
};

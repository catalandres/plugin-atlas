import { Table } from '../classes/Table.js';
import { APEX_PAGE } from '../../metadata/file/index.js';

export const VISUALFORCE_PAGES: Table = {
  name: 'Visualforce Pages',
  definition: APEX_PAGE,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Label', field: 'label' },
    { label: 'Description', field: 'description' },
    { label: 'API Version', field: 'apiVersion' },
  ],
};

import { Table } from '../classes/Table.js';
import { APEX_COMPONENT } from '../../metadata/file/index.js';

export const VISUALFORCE_COMPONENTS: Table = {
  name: 'Visualforce Components',
  definition: APEX_COMPONENT,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Label', field: 'label' },
    { label: 'Description', field: 'description' },
    { label: 'API Version', field: 'apiVersion' },
  ],
};

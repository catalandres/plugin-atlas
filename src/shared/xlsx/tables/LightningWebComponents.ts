import { Table } from '../classes/Table.js';
import { LIGHTNING_WEB_COMPONENT } from '../../metadata/file/index.js';

export const LIGHTNING_WEB_COMPONENTS: Table = {
  name: 'Lightning Web Components',
  definition: LIGHTNING_WEB_COMPONENT,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Description', field: 'description' },
    { label: 'API Version', field: 'apiVersion' },
  ],
};

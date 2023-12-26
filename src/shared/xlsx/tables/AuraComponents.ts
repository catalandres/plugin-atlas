import { Table } from '../classes/Table.js';
import { AURA_COMPONENT } from '../../metadata/file/index.js';

export const AURA_COMPONENTS: Table = {
  name: 'Aura Components',
  definition: AURA_COMPONENT,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Description', field: 'description' },
    { label: 'API Version', field: 'apiVersion' },
  ],
};

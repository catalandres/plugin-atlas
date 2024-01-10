import { Table } from '../tables.js';
import { AURA_COMPONENT } from '../../../metadataReader/metadataTypes.js';

export const AURA_COMPONENTS: Table = {
  name: 'Aura Components',
  definition: AURA_COMPONENT,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Description', id: 'description' },
    { title: 'API Version', id: 'apiVersion' },
  ],
};

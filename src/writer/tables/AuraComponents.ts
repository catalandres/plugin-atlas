import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { AURA_COMPONENT } from '../../metadataReader/metadataTypes.js';

export const AURA_COMPONENTS: Table<Metadata.AuraDefinitionBundle> = {
  name: 'Aura Components',
  metadataType: AURA_COMPONENT,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Description', id: 'description' },
    { title: 'API Version', id: 'apiVersion' },
  ],
};

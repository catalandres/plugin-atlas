import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { LIGHTNING_WEB_COMPONENT } from '../../metadataReader/metadataTypes.js';

export const LIGHTNING_WEB_COMPONENTS: Table<Metadata.LightningComponentBundle> = {
  name: 'Lightning Web Components',
  metadataType: LIGHTNING_WEB_COMPONENT,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Description', id: 'description' },
    { title: 'API Version', id: 'apiVersion' },
  ],
};

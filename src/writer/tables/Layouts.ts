import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { LAYOUT } from '../../metadataReader/metadataTypes.js';

export const LAYOUTS: Table<Metadata.Layout> = {
  name: 'Layouts',
  metadataType: LAYOUT,
  columns: [
    { title: 'Full Name', id: 'fullName' },
    { title: 'Name', id: 'name' },
    { title: 'Object', id: 'objectName' },
  ],
};

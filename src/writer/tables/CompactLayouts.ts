import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { COMPACT_LAYOUT } from '../../metadataReader/metadataTypes.js';

export const COMPACT_LAYOUTS: Table<Metadata.CompactLayout> = {
  name: 'Compact Layouts',
  metadataType: COMPACT_LAYOUT,
  columns: [
    { title: 'Object', id: 'objectName' },
    { title: 'Name', id: 'name' },
    { title: 'Full Name', id: 'fullName' },
    { title: 'Label', id: 'label' },
    { title: 'Fields', id: 'fields' },
  ],
};

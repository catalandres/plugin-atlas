import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { FIELD_SET } from '../../metadataReader/metadataTypes.js';

export const FIELD_SETS: Table<Metadata.FieldSet> = {
  name: 'Fields Sets',
  metadataType: FIELD_SET,
  columns: [
    { title: 'Object', id: 'objectName' },
    { title: 'Name', id: 'name' },
    { title: 'Full Name', id: 'fullName' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
    { title: 'Displayed Fields', id: 'displayedFields' },
  ],
};

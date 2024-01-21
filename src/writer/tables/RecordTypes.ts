import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { RECORD_TYPE } from '../../metadataReader/metadataTypes.js';

export const RECORD_TYPES: Table<Metadata.RecordType> = {
  name: 'Record Types',
  metadataType: RECORD_TYPE,
  columns: [
    { title: 'Object', id: 'objectName' },
    { title: 'Name', id: 'name' },
    { title: 'Full Name', id: 'fullName' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
    { title: 'Active', id: 'active' },
    { title: 'Business Process', id: 'businessProcess' },
    { title: 'Compact Layout Assignment', id: 'compactLayoutAssignment' },
  ],
};

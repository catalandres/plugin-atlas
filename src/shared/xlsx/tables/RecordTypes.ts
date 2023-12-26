import { Table } from '../classes/Table.js';
import { RECORD_TYPE } from '../../metadata/file/index.js';

export const RECORD_TYPES: Table = {
  name: 'Record Types',
  definition: RECORD_TYPE,
  columns: [
    { label: 'Object', field: 'objectName' },
    { label: 'Name', field: 'name' },
    { label: 'Full Name', field: 'fullName' },
    { label: 'Label', field: 'label' },
    { label: 'Description', field: 'description' },
    { label: 'Active', field: 'active' },
    { label: 'Business Process', field: 'businessProcess' },
    { label: 'Compact Layout Assignment', field: 'compactLayoutAssignment' },
  ],
};

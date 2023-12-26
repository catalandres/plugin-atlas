import { Table } from '../classes/Table.js';
import { FIELD_SET } from '../../metadata/file/index.js';

export const FIELD_SETS: Table = {
  name: 'Fields Sets',
  definition: FIELD_SET,
  columns: [
    { label: 'Object', field: 'objectName' },
    { label: 'Name', field: 'name' },
    { label: 'Full Name', field: 'fullName' },
    { label: 'Label', field: 'label' },
    { label: 'Description', field: 'description' },
    { label: 'Displayed Fields', field: 'displayedFields' },
  ],
};

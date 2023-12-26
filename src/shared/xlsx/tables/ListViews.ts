import { Table } from '../classes/Table.js';
import { LIST_VIEW } from '../../metadata/file/index.js';

export const LIST_VIEWS: Table = {
  name: 'List Views',
  definition: LIST_VIEW,
  columns: [
    { label: 'Object', field: 'objectName' },
    { label: 'Name', field: 'name' },
    { label: 'Full Name', field: 'fullName' },
    { label: 'Label', field: 'label' },
    { label: 'Columns', field: 'columns' },
    { label: 'Filters', field: 'filters' },
    { label: 'Filter Scope', field: 'filterScope' },
    { label: 'Boolean Filter', field: 'booleanFilter' },
    { label: 'Queue', field: 'queue' },
    { label: 'Shared To', field: 'sharedTo' },
    { label: 'Division', field: 'division' },
    { label: 'Language', field: 'language' },
  ],
};

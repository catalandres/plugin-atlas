import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { LIST_VIEW } from '../../metadataReader/metadataTypes.js';

export const LIST_VIEWS: Table<Metadata.ListView> = {
  name: 'List Views',
  metadataType: LIST_VIEW,
  columns: [
    { title: 'Object', id: 'objectName' },
    { title: 'Name', id: 'name' },
    { title: 'Full Name', id: 'fullName' },
    { title: 'Label', id: 'label' },
    { title: 'Columns', id: 'columns' },
    { title: 'Filters', id: 'filters' },
    { title: 'Filter Scope', id: 'filterScope' },
    { title: 'Boolean Filter', id: 'booleanFilter' },
    { title: 'Queue', id: 'queue' },
    { title: 'Shared To', id: 'sharedTo' },
    { title: 'Division', id: 'division' },
    { title: 'Language', id: 'language' },
  ],
};

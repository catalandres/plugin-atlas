import { Table } from '../tables.js';
import { FLEXIPAGE } from '../../../metadataReader/metadataTypes.js';

export const FLEXIPAGES: Table = {
  name: 'Flexipages',
  definition: FLEXIPAGE,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'masterLabel' },
    { title: 'Type', id: 'type' },
    { title: 'Object', id: 'sobjectType' },
    { title: 'Parent Flexipage', id: 'parentFlexiPage' },
    { title: 'Description', id: 'description' },
  ],
};

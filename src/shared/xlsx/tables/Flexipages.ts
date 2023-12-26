import { Table } from '../classes/Table.js';
import { FLEXIPAGE } from '../../metadata/file/index.js';

export const FLEXIPAGES: Table = {
  name: 'Flexipages',
  definition: FLEXIPAGE,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Label', field: 'masterLabel' },
    { label: 'Type', field: 'type' },
    { label: 'Object', field: 'sobjectType' },
    { label: 'Parent Flexipage', field: 'parentFlexiPage' },
    { label: 'Description', field: 'description' },
  ],
};

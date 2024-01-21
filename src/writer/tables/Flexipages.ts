import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { FLEXIPAGE } from '../../metadataReader/metadataTypes.js';

export const FLEXIPAGES: Table<Metadata.FlexiPage> = {
  name: 'Flexipages',
  metadataType: FLEXIPAGE,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'masterLabel' },
    { title: 'Type', id: 'type' },
    { title: 'Object', id: 'sobjectType' },
    { title: 'Parent Flexipage', id: 'parentFlexiPage' },
    { title: 'Description', id: 'description' },
  ],
};

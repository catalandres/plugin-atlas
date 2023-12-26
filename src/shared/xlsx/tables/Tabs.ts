import { Table } from '../classes/Table.js';
import { CUSTOM_TAB } from '../../metadata/file/index.js';

export const TABS: Table = {
  name: 'Tabs',
  definition: CUSTOM_TAB,
  columns: [
    { label: 'Full Name', field: 'fullName' },
    { label: 'Name', field: 'name' },
    { label: 'Object', field: 'objectName' },
    { label: 'Label', field: 'label' },
    { label: 'Description', field: 'description' },
    { label: 'Custom Object', field: 'customObject' },
    { label: 'Motif', field: 'motif' },
    { label: 'Flexipage', field: 'flexiPage' },
    { label: 'Lightning Web Component', field: 'lwcComponent' },
    { label: 'Aura Component', field: 'auraComponent' },
    { label: 'Visualforce Page', field: 'page' },
    { label: 'sControl', field: 'scontrol' },
    { label: 'URL', field: 'url' },
    { label: 'URL Encoding Key', field: 'urlEncodingKey' },
  ],
};

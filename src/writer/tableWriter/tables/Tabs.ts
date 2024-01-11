import { Table } from '../tables.js';
import { CUSTOM_TAB } from '../../../metadataReader/metadataTypes.js';

export const TABS: Table = {
  name: 'Tabs',
  definition: CUSTOM_TAB,
  columns: [
    { title: 'Full Name', id: 'fullName' },
    { title: 'Name', id: 'name' },
    { title: 'Object', id: 'objectName' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
    { title: 'Custom Object', id: 'customObject' },
    { title: 'Motif', id: 'motif' },
    { title: 'Flexipage', id: 'flexiPage' },
    { title: 'Lightning Web Component', id: 'lwcComponent' },
    { title: 'Aura Component', id: 'auraComponent' },
    { title: 'Visualforce Page', id: 'page' },
    { title: 'sControl', id: 'scontrol' },
    { title: 'URL', id: 'url' },
    { title: 'URL Encoding Key', id: 'urlEncodingKey' },
  ],
};

import { Table } from '../tables.js';
import { WEBLINK } from '../../../metadataReader/metadataTypes.js';

export const WEBLINKS: Table = {
  name: 'Web Links',
  definition: WEBLINK,
  columns: [
    { title: 'Object', id: 'objectName' },
    { title: 'Name', id: 'name' },
    { title: 'Full Name', id: 'fullName' },
    { title: 'Label', id: 'masterLabel' },
    { title: 'Description', id: 'description' },
    { title: 'Link Type', id: 'linkType' },
    { title: 'Url', id: 'url' },
    { title: 'Visualforce Page', id: 'page' },
    { title: 'sControl', id: 'scontrol' },
    { title: 'Display Type', id: 'displayType' },
    { title: 'Height', id: 'height' },
    { title: 'Width', id: 'width' },
    { title: 'Open Type', id: 'openType' },
    { title: 'Position', id: 'position' },
    { title: 'Shows Location', id: 'showsLocation' },
    { title: 'Shows Status', id: 'showsStatus' },
    { title: 'Encoding Key', id: 'encodingKey' },
    { title: 'Has Menubar', id: 'hasMenubar' },
    { title: 'Has Scrollbars', id: 'hasScrollbars' },
    { title: 'Has Toolbar', id: 'hasToolbar' },
    { title: 'Is Resizeable', id: 'isResizable' },
    { title: 'Availability', id: 'availability' },
    { title: 'Protected', id: 'protected' },
    { title: 'Require Row Selection', id: 'requireRowSelection' },
  ],
};

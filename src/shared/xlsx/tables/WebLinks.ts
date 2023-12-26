import { Table } from '../classes/Table.js';
import { WEBLINK } from '../../metadata/file/index.js';

export const WEBLINKS: Table = {
  name: 'Web Links',
  definition: WEBLINK,
  columns: [
    { label: 'Object', field: 'objectName' },
    { label: 'Name', field: 'name' },
    { label: 'Full Name', field: 'fullName' },
    { label: 'Label', field: 'masterLabel' },
    { label: 'Description', field: 'description' },
    { label: 'Link Type', field: 'linkType' },
    { label: 'Url', field: 'url' },
    { label: 'Visualforce Page', field: 'page' },
    { label: 'sControl', field: 'scontrol' },
    { label: 'Display Type', field: 'displayType' },
    { label: 'Height', field: 'height' },
    { label: 'Width', field: 'width' },
    { label: 'Open Type', field: 'openType' },
    { label: 'Position', field: 'position' },
    { label: 'Shows Location', field: 'showsLocation' },
    { label: 'Shows Status', field: 'showsStatus' },
    { label: 'Encoding Key', field: 'encodingKey' },
    { label: 'Has Menubar', field: 'hasMenubar' },
    { label: 'Has Scrollbars', field: 'hasScrollbars' },
    { label: 'Has Toolbar', field: 'hasToolbar' },
    { label: 'Is Resizeable', field: 'isResizable' },
    { label: 'Availability', field: 'availability' },
    { label: 'Protected', field: 'protected' },
    { label: 'Require Row Selection', field: 'requireRowSelection' },
  ],
};

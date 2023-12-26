import { CustomTab } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension, transformCustomTab } from '../index.js';

export const CUSTOM_TAB: Definition = {
  name: 'CustomTab',
  list: 'tabs',
  extension: '.tab-meta.xml',
  metadataType: {} as CustomTab,
  setName: getBasenameWithoutExtension,
  transform: transformCustomTab,
};

import { CustomTab } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension, transformCustomTab } from '../metadataTypes.js';

export const CUSTOM_TAB: MetadataType = {
  name: 'CustomTab',
  list: 'tabs',
  extension: '.tab-meta.xml',
  metadataType: {} as CustomTab,
  setName: getBasenameWithoutExtension,
  transform: transformCustomTab,
};

import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension, transformCustomTab } from '../metadataTypes.js';

export const CUSTOM_TAB: MetadataType<Metadata.CustomTab> = {
  name: 'CustomTab',
  list: 'tabs',
  extension: '.tab-meta.xml',
  metadataType: {} as Metadata.CustomTab,
  setName: getBasenameWithoutExtension,
  transform: transformCustomTab,
};

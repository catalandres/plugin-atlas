import { FlexiPage } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const FLEXIPAGE: MetadataType = {
  name: 'FlexiPage',
  list: 'flexipages',
  extension: '.flexipage-meta.xml',
  metadataType: {} as FlexiPage,
  setName: getBasenameWithoutExtension,
};

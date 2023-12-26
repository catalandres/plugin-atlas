import { FlexiPage } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const FLEXIPAGE: Definition = {
  name: 'FlexiPage',
  list: 'flexipages',
  extension: '.flexipage-meta.xml',
  metadataType: {} as FlexiPage,
  setName: getBasenameWithoutExtension,
};

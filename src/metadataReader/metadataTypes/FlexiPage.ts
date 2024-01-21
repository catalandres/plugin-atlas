import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const FLEXIPAGE: MetadataType<Metadata.FlexiPage> = {
  name: 'FlexiPage',
  list: 'flexipages',
  extension: '.flexipage-meta.xml',
  metadataType: {} as Metadata.FlexiPage,
  setName: getBasenameWithoutExtension,
};

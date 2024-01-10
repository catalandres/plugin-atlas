import { CustomObject } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const CUSTOM_OBJECT: MetadataType = {
  name: 'CustomObject',
  list: 'objects',
  extension: '.object-meta.xml',
  metadataType: {} as CustomObject,
  setName: getBasenameWithoutExtension,
};

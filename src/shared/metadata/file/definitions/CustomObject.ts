import { CustomObject } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const CUSTOM_OBJECT: Definition = {
  name: 'CustomObject',
  list: 'objects',
  extension: '.object-meta.xml',
  metadataType: {} as CustomObject,
  setName: getBasenameWithoutExtension,
};

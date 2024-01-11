import { ApexClass } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const APEX_CLASS: MetadataType = {
  name: 'ApexClass',
  list: 'apexClasses',
  extension: '.cls-meta.xml',
  metadataType: {} as ApexClass,
  setName: getBasenameWithoutExtension,
};

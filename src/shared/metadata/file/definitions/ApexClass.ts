import { ApexClass } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const APEX_CLASS: Definition = {
  name: 'ApexClass',
  list: 'apexClasses',
  extension: '.cls-meta.xml',
  metadataType: {} as ApexClass,
  setName: getBasenameWithoutExtension,
};

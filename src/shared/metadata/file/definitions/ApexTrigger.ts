import { ApexTrigger } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const APEX_TRIGGER: Definition = {
  name: 'ApexTrigger',
  list: 'apexTriggers',
  extension: '.trigger-meta.xml',
  metadataType: {} as ApexTrigger,
  setName: getBasenameWithoutExtension,
};

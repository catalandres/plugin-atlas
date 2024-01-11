import { ApexTrigger } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const APEX_TRIGGER: MetadataType = {
  name: 'ApexTrigger',
  list: 'apexTriggers',
  extension: '.trigger-meta.xml',
  metadataType: {} as ApexTrigger,
  setName: getBasenameWithoutExtension,
};

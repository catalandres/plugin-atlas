import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const APEX_TRIGGER: MetadataType<Metadata.ApexTrigger> = {
  name: 'ApexTrigger',
  list: 'apexTriggers',
  extension: '.trigger-meta.xml',
  metadataType: {} as Metadata.ApexTrigger,
  setName: getBasenameWithoutExtension,
};

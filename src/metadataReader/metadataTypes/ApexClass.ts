import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const APEX_CLASS: MetadataType<Metadata.ApexClass> = {
  name: 'ApexClass',
  list: 'apexClasses',
  extension: '.cls-meta.xml',
  metadataType: {} as Metadata.ApexClass,
  setName: getBasenameWithoutExtension,
};

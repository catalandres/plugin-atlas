import { ApexComponent } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const APEX_COMPONENT: MetadataType = {
  name: 'ApexComponent',
  list: 'apexComponents',
  extension: '.component-meta.xml',
  metadataType: {} as ApexComponent,
  setName: getBasenameWithoutExtension,
};

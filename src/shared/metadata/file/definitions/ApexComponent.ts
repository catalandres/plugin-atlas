import { ApexComponent } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const APEX_COMPONENT: Definition = {
  name: 'ApexComponent',
  list: 'apexComponents',
  extension: '.component-meta.xml',
  metadataType: {} as ApexComponent,
  setName: getBasenameWithoutExtension,
};

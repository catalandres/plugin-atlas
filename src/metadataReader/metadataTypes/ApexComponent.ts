import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const APEX_COMPONENT: MetadataType<Metadata.ApexComponent> = {
  name: 'ApexComponent',
  list: 'apexComponents',
  extension: '.component-meta.xml',
  metadataType: {} as Metadata.ApexComponent,
  setName: getBasenameWithoutExtension,
};

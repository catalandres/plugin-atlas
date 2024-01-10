import { LightningComponentBundle } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const LIGHTNING_WEB_COMPONENT: MetadataType = {
  name: 'LightningComponentBundle',
  list: 'lightningWebComponents',
  extension: '.js-meta.xml',
  metadataType: {} as LightningComponentBundle,
  setName: getBasenameWithoutExtension,
};

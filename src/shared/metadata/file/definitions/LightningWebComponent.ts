import { LightningComponentBundle } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const LIGHTNING_WEB_COMPONENT: Definition = {
  name: 'LightningComponentBundle',
  list: 'lightningWebComponents',
  extension: '.js-meta.xml',
  metadataType: {} as LightningComponentBundle,
  setName: getBasenameWithoutExtension,
};

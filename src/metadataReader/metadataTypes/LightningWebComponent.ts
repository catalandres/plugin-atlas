import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const LIGHTNING_WEB_COMPONENT: MetadataType<Metadata.LightningComponentBundle> = {
  name: 'LightningComponentBundle',
  list: 'lightningWebComponents',
  extension: '.js-meta.xml',
  metadataType: {} as Metadata.LightningComponentBundle,
  setName: getBasenameWithoutExtension,
};

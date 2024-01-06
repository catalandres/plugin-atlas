import { AuraDefinitionBundle } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const AURA_COMPONENT: MetadataType = {
  name: 'AuraDefinitionBundle',
  list: 'auraComponents',
  extension: '.cmp-meta.xml',
  metadataType: {} as AuraDefinitionBundle,
  setName: getBasenameWithoutExtension,
};

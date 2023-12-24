import { AuraDefinitionBundle } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const AURA_COMPONENT: Definition = {
  name: 'AuraDefinitionBundle',
  list: 'auraComponents',
  extension: '.cmp-meta.xml',
  metadataType: {} as AuraDefinitionBundle,
  setName: getBasenameWithoutExtension,
};

import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const AURA_COMPONENT: MetadataType<Metadata.AuraDefinitionBundle> = {
  name: 'AuraDefinitionBundle',
  list: 'auraComponents',
  extension: '.cmp-meta.xml',
  metadataType: {} as Metadata.AuraDefinitionBundle,
  setName: getBasenameWithoutExtension,
};

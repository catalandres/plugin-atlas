import { Flow } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension, transformFlow } from '../metadataTypes.js';

export const FLOW: MetadataType = {
  name: 'Flow',
  list: 'flows',
  extension: '.flow-meta.xml',
  metadataType: {} as Flow,
  setName: getBasenameWithoutExtension,
  transform: transformFlow,
};

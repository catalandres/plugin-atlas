import { Flow } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension, transformFlow } from '../index.js';

export const FLOW: Definition = {
  name: 'Flow',
  list: 'flows',
  extension: '.flow-meta.xml',
  metadataType: {} as Flow,
  setName: getBasenameWithoutExtension,
  transform: transformFlow,
};

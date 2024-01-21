import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension, transformFlow } from '../metadataTypes.js';

export const FLOW: MetadataType<Metadata.Flow> = {
  name: 'Flow',
  list: 'flows',
  extension: '.flow-meta.xml',
  metadataType: {} as Metadata.Flow,
  setName: getBasenameWithoutExtension,
  transform: transformFlow,
};

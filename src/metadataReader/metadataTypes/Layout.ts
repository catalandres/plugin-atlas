import { Layout } from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getFirstHalfOfBasenameSplitByDash,
  getSecondHalfOfBasenameSplitByDash,
} from '../metadataTypes.js';

export const LAYOUT: MetadataType = {
  name: 'Layout',
  list: 'layouts',
  extension: '.layout-meta.xml',
  metadataType: {} as Layout,
  setName: getSecondHalfOfBasenameSplitByDash,
  setObjectname: getFirstHalfOfBasenameSplitByDash,
  setFullName: getBasenameWithoutExtension,
};

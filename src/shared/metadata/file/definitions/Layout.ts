import { Layout } from '../../types/metadata.js';
import {
  Definition,
  getBasenameWithoutExtension,
  getFirstHalfOfBasenameSplitByDash,
  getSecondHalfOfBasenameSplitByDash,
} from '../index.js';

export const LAYOUT: Definition = {
  name: 'Layout',
  list: 'layouts',
  extension: '.layout-meta.xml',
  metadataType: {} as Layout,
  setName: getSecondHalfOfBasenameSplitByDash,
  setObjectname: getFirstHalfOfBasenameSplitByDash,
  setFullName: getBasenameWithoutExtension,
};

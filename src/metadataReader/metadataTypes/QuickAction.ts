import { QuickAction } from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getFirstHalfOfBasenameSplitByPeriod,
  getSecondHalfOfBasenameSplitByPeriod,
} from '../metadataTypes.js';

export const QUICK_ACTION: MetadataType = {
  name: 'QuickAction',
  list: 'quickActions',
  extension: '.quickAction-meta.xml',
  metadataType: {} as QuickAction,
  setName: getSecondHalfOfBasenameSplitByPeriod,
  setObjectname: getFirstHalfOfBasenameSplitByPeriod,
  setFullName: getBasenameWithoutExtension,
};

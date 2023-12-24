import { QuickAction } from '../../types/metadata.js';
import {
  Definition,
  getBasenameWithoutExtension,
  getFirstHalfOfBasenameSplitByPeriod,
  getSecondHalfOfBasenameSplitByPeriod,
} from '../index.js';

export const QUICK_ACTION: Definition = {
  name: 'QuickAction',
  list: 'quickActions',
  extension: '.quickAction-meta.xml',
  metadataType: {} as QuickAction,
  setName: getSecondHalfOfBasenameSplitByPeriod,
  setObjectname: getFirstHalfOfBasenameSplitByPeriod,
  setFullName: getBasenameWithoutExtension,
};

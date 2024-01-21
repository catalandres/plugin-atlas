import * as Metadata from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getFirstHalfOfBasenameSplitByPeriod,
  getSecondHalfOfBasenameSplitByPeriod,
} from '../metadataTypes.js';

export const QUICK_ACTION: MetadataType<Metadata.QuickAction> = {
  name: 'QuickAction',
  list: 'quickActions',
  extension: '.quickAction-meta.xml',
  metadataType: {} as Metadata.QuickAction,
  setName: getSecondHalfOfBasenameSplitByPeriod,
  setObjectname: getFirstHalfOfBasenameSplitByPeriod,
  setFullName: getBasenameWithoutExtension,
};

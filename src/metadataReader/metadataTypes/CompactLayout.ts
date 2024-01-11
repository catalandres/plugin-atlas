import { CompactLayout } from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const COMPACT_LAYOUT: MetadataType = {
  name: 'CompactLayout',
  list: 'compactLayouts',
  extension: '.compactLayout-meta.xml',
  metadataType: {} as CompactLayout,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

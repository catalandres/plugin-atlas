import { CompactLayout } from '../../types/metadata.js';
import {
  Definition,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  getFullNameForObjectComponent,
} from '../index.js';

export const COMPACT_LAYOUT: Definition = {
  name: 'CompactLayout',
  list: 'compactLayouts',
  extension: '.compactLayout-meta.xml',
  metadataType: {} as CompactLayout,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: getFullNameForObjectComponent,
};

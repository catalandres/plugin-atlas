import * as Metadata from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const COMPACT_LAYOUT: MetadataType<Metadata.CompactLayout> = {
  name: 'CompactLayout',
  list: 'compactLayouts',
  extension: '.compactLayout-meta.xml',
  metadataType: {} as Metadata.CompactLayout,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

import { ListView } from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const LIST_VIEW: MetadataType = {
  name: 'ListView',
  list: 'listViews',
  extension: '.listView-meta.xml',
  metadataType: {} as ListView,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

import * as Metadata from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const LIST_VIEW: MetadataType<Metadata.ListView> = {
  name: 'ListView',
  list: 'listViews',
  extension: '.listView-meta.xml',
  metadataType: {} as Metadata.ListView,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

import * as Metadata from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const WEBLINK: MetadataType<Metadata.WebLink> = {
  name: 'WebLink',
  list: 'webLinks',
  extension: '.webLink-meta.xml',
  metadataType: {} as Metadata.WebLink,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

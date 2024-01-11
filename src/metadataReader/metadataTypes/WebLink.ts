import { WebLink } from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const WEBLINK: MetadataType = {
  name: 'WebLink',
  list: 'webLinks',
  extension: '.webLink-meta.xml',
  metadataType: {} as WebLink,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

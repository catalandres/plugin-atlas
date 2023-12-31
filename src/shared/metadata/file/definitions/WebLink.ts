import { WebLink } from '../../types/metadata.js';
import {
  Definition,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../index.js';

export const WEBLINK: Definition = {
  name: 'WebLink',
  list: 'webLinks',
  extension: '.webLink-meta.xml',
  metadataType: {} as WebLink,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

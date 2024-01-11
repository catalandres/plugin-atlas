import { RecordType } from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const RECORD_TYPE: MetadataType = {
  name: 'RecordType',
  list: 'recordTypes',
  extension: '.recordType-meta.xml',
  metadataType: {} as RecordType,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

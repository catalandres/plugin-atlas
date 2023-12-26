import { RecordType } from '../../types/metadata.js';
import {
  Definition,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../index.js';

export const RECORD_TYPE: Definition = {
  name: 'RecordType',
  list: 'recordTypes',
  extension: '.recordType-meta.xml',
  metadataType: {} as RecordType,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

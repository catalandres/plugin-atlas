import * as Metadata from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const RECORD_TYPE: MetadataType<Metadata.RecordType> = {
  name: 'RecordType',
  list: 'recordTypes',
  extension: '.recordType-meta.xml',
  metadataType: {} as Metadata.RecordType,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

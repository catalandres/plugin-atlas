import { FieldSet } from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const FIELD_SET: MetadataType = {
  name: 'FieldSet',
  list: 'fieldSets',
  extension: '.fieldSet-meta.xml',
  metadataType: {} as FieldSet,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

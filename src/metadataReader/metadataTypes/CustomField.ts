import { CustomField } from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const CUSTOM_FIELD: MetadataType = {
  name: 'CustomField',
  list: 'fields',
  extension: '.field-meta.xml',
  metadataType: {} as CustomField,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

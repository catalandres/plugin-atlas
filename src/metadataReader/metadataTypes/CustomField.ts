import * as Metadata from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const CUSTOM_FIELD: MetadataType<Metadata.CustomField> = {
  name: 'CustomField',
  list: 'fields',
  extension: '.field-meta.xml',
  metadataType: {} as Metadata.CustomField,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

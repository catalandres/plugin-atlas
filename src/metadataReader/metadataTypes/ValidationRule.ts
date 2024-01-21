import * as Metadata from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const VALIDATION_RULE: MetadataType<Metadata.ValidationRule> = {
  name: 'ValidationRule',
  list: 'validationRules',
  extension: '.validationRule-meta.xml',
  metadataType: {} as Metadata.ValidationRule,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

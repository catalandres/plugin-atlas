import { ValidationRule } from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const VALIDATION_RULE: MetadataType = {
  name: 'ValidationRule',
  list: 'validationRules',
  extension: '.validationRule-meta.xml',
  metadataType: {} as ValidationRule,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

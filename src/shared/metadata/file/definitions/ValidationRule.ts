import { ValidationRule } from '../../types/metadata.js';
import {
  Definition,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../index.js';

export const VALIDATION_RULE: Definition = {
  name: 'ValidationRule',
  list: 'validationRules',
  extension: '.validationRule-meta.xml',
  metadataType: {} as ValidationRule,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

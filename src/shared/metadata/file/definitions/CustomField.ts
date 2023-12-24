import { CustomField } from '../../types/metadata.js';
import {
  Definition,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  getFullNameForObjectComponent,
} from '../index.js';

export const CUSTOM_FIELD: Definition = {
  name: 'CustomField',
  list: 'fields',
  extension: '.field-meta.xml',
  metadataType: {} as CustomField,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: getFullNameForObjectComponent,
};

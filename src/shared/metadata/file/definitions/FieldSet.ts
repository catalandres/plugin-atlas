import { FieldSet } from '../../types/metadata.js';
import {
  Definition,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  getFullNameForObjectComponent,
} from '../index.js';

export const FIELD_SET: Definition = {
  name: 'FieldSet',
  list: 'fieldSets',
  extension: '.fieldSet-meta.xml',
  metadataType: {} as FieldSet,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: getFullNameForObjectComponent,
};

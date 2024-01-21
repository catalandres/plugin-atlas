import * as Metadata from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const FIELD_SET: MetadataType<Metadata.FieldSet> = {
  name: 'FieldSet',
  list: 'fieldSets',
  extension: '.fieldSet-meta.xml',
  metadataType: {} as Metadata.FieldSet,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: concatenateObjectNameAndName,
};

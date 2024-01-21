import * as Metadata from '../../metadata/metadata.js';
// import {
//   MetadataType,
//   getFullNameValue,
//   getBasenameWithoutExtension,
//   concatenateObjectNameAndName,
// } from '../metadataTypes.js';
import * as MetadataTypes from '../metadataTypes.js';

export const WORKFLOW: MetadataTypes.MetadataType<Metadata.Workflow> = {
  name: 'Workflow',
  list: 'workflows',
  extension: '.workflow-meta.xml',
  container: true,
  metadataType: {} as Metadata.Workflow,
  children: {
    rules: MetadataTypes.WORKFLOW_RULE,
  },
};

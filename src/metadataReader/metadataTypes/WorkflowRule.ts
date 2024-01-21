import * as Metadata from '../../metadata/metadata.js';
import * as MetadataTypes from '../metadataTypes.js';

export const WORKFLOW_RULE: MetadataTypes.MetadataType<Metadata.WorkflowRule> = {
  // name: 'WorkflowRule',
  // list: 'workflowRules',
  // metadataType: {} as Metadata.WorkflowRule,

  name: 'WorkflowRule',
  list: 'workflowRules',
  metadataType: {} as Metadata.WorkflowRule,
  setName: MetadataTypes.getFullNameValue,
  setObjectname: MetadataTypes.getBasenameWithoutExtension,
  setFullName: MetadataTypes.concatenateObjectNameAndName,
};

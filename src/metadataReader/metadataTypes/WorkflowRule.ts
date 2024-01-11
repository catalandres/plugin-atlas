import { WorkflowRule } from '../../metadata/metadata.js';
import { MetadataType } from '../metadataTypes.js';

export const WORKFLOW_RULE: MetadataType = {
  name: 'WorkflowRule',
  list: 'workflowRules',
  metadataType: {} as WorkflowRule,
};

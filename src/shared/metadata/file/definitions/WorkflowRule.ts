import { WorkflowRule } from '../../types/metadata.js';
import { Definition } from '../index.js';

export const WORKFLOW_RULE: Definition = {
  name: 'WorkflowRule',
  list: 'workflowRules',
  metadataType: {} as WorkflowRule,
};

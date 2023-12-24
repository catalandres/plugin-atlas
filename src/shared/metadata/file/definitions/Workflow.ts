import { Workflow, WorkflowRule } from '../../types/metadata.js';
import { Definition, getFullNameValue, getBasenameWithoutExtension, concatenateObjectNameAndName } from '../index.js';

export const WORKFLOW: Definition = {
  name: 'Workflow',
  list: 'workflows',
  extension: '.workflow-meta.xml',
  container: true,
  metadataType: {} as Workflow,
  children: {
    rules: {
      name: 'WorkflowRule',
      list: 'workflowRules',
      metadataType: {} as WorkflowRule,
      setName: getFullNameValue,
      setObjectname: getBasenameWithoutExtension,
      setFullName: concatenateObjectNameAndName,
    },
  },
};

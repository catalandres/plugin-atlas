import { Workflow, WorkflowRule } from '../../metadata/metadata.js';
import {
  MetadataType,
  getFullNameValue,
  getBasenameWithoutExtension,
  concatenateObjectNameAndName,
} from '../metadataTypes.js';

export const WORKFLOW: MetadataType = {
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

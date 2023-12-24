import * as Metadata from '../../types/metadata.js';
import { Extended, getNameOfSecondToLastFolderLevel } from '../index.js';
import { array } from '../../../array.js';

export function processWorkflowRules(record: Metadata.Workflow): Array<Extended<Metadata.WorkflowRule>> {
  const workflowRules: Array<Extended<Metadata.WorkflowRule>> = [];
  for (const thisRule of array(record.rules) as Array<Extended<Metadata.WorkflowRule>>) {
    thisRule.objectName = getNameOfSecondToLastFolderLevel(thisRule.fileName);
    workflowRules.push(thisRule);
  }
  return workflowRules;
}

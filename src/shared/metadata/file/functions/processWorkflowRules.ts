import * as Metadata from '../../types/metadata.js';
import * as MetadataFile from '../index.js';
import { array } from '../../../array.js';

export function processWorkflowRules(record: Metadata.Workflow): Array<MetadataFile.Extended<Metadata.WorkflowRule>> {
  const workflowRules: Array<MetadataFile.Extended<Metadata.WorkflowRule>> = [];
  for (const thisRule of array(record.rules) as Array<MetadataFile.Extended<Metadata.WorkflowRule>>) {
    thisRule.objectName = MetadataFile.getNameOfSecondToLastFolderLevel(thisRule.fileName);
    workflowRules.push(thisRule);
  }
  return workflowRules;
}

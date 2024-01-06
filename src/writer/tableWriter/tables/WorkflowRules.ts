import { Table } from '../tables.js';
import { WORKFLOW_RULE } from '../../../metadataReader/metadataTypes.js';

export const WORKFLOW_RULES: Table = {
  name: 'Workflow Rules',
  definition: WORKFLOW_RULE,
  columns: [
    { title: 'Name', id: 'fullName' },
    { title: 'Object', id: 'objectName' },
    { title: 'Active', id: 'active' },
    { title: 'Trigger Type', id: 'triggerType' },
    { title: 'Description', id: 'description' },
  ],
};

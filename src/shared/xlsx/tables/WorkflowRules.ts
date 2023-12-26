import { Table } from '../classes/Table.js';
import { WORKFLOW_RULE } from '../../metadata/file/index.js';

export const WORKFLOW_RULES: Table = {
  name: 'Workflow Rules',
  definition: WORKFLOW_RULE,
  columns: [
    { label: 'Name', field: 'fullName' },
    { label: 'Object', field: 'objectName' },
    { label: 'Active', field: 'active' },
    { label: 'Trigger Type', field: 'triggerType' },
    { label: 'Description', field: 'description' },
  ],
};

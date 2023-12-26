import { Table } from '../classes/Table.js';
import { FLOW } from '../../metadata/file/index.js';

export const FLOWS: Table = {
  name: 'Flows',
  definition: FLOW,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Label', field: 'label' },
    { label: 'Description', field: 'description' },
    { label: 'Type', field: 'processType' },
    { label: 'Status', field: 'status' },
    { label: 'API Version', field: 'apiVersion' },
    { label: 'Object', field: 'objectName' },
    { label: 'Trigger Type', field: 'triggerType' },
    { label: 'Record Trigger Type', field: 'recordTriggerType' },
  ],
};

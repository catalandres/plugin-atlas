import { Table } from '../tables.js';
import { FLOW } from '../../../metadataReader/metadataTypes.js';

export const FLOWS: Table = {
  name: 'Flows',
  definition: FLOW,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
    { title: 'Type', id: 'processType' },
    { title: 'Status', id: 'status' },
    { title: 'API Version', id: 'apiVersion' },
    { title: 'Object', id: 'objectName' },
    { title: 'Trigger Type', id: 'triggerType' },
    { title: 'Record Trigger Type', id: 'recordTriggerType' },
  ],
};

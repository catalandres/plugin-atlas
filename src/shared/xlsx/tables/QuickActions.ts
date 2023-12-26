import { Table } from '../classes/Table.js';
import { QUICK_ACTION } from '../../metadata/file/index.js';

export const QUICK_ACTIONS: Table = {
  name: 'Quick Actions',
  definition: QUICK_ACTION,
  columns: [
    { label: 'Full Name', field: 'fullName' },
    { label: 'Name', field: 'name' },
    { label: 'Object', field: 'objectName' },
    { label: 'Type', field: 'type' },
    { label: 'Label', field: 'label' },
    { label: 'Description', field: 'description' },
    { label: 'Target Object', field: 'targetObject' },
    { label: 'Target Parent Field', field: 'targetParentField' },
    { label: 'Target Record Type', field: 'targetRecordType' },
    { label: 'Standard Label', field: 'standardLabel' },
    { label: 'Success Message', field: 'successMessage' },
    { label: 'Flow Definition', field: 'flowDefinition' },
  ],
};

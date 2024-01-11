import { Table } from '../tables.js';
import { QUICK_ACTION } from '../../../metadataReader/metadataTypes.js';

export const QUICK_ACTIONS: Table = {
  name: 'Quick Actions',
  definition: QUICK_ACTION,
  columns: [
    { title: 'Full Name', id: 'fullName' },
    { title: 'Name', id: 'name' },
    { title: 'Object', id: 'objectName' },
    { title: 'Type', id: 'type' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
    { title: 'Target Object', id: 'targetObject' },
    { title: 'Target Parent Field', id: 'targetParentField' },
    { title: 'Target Record Type', id: 'targetRecordType' },
    { title: 'Standard Label', id: 'standardLabel' },
    { title: 'Success Message', id: 'successMessage' },
    { title: 'Flow Definition', id: 'flowDefinition' },
  ],
};

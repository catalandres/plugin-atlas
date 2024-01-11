import { Table } from '../tables.js';
import { VALIDATION_RULE } from '../../../metadataReader/metadataTypes.js';

export const VALIDATION_RULES: Table = {
  name: 'Validation Rules',
  definition: VALIDATION_RULE,
  columns: [
    { title: 'Object', id: 'objectName' },
    { title: 'Name', id: 'name' },
    { title: 'Full Name', id: 'fullName' },
    { title: 'Active', id: 'active' },
    { title: 'Description', id: 'description' },
    { title: 'Error Condition Formula', id: 'errorConditionFormula' },
    { title: 'Error Display Field', id: 'errorDisplayField' },
    { title: 'Error Message', id: 'errorMessage' },
  ],
};

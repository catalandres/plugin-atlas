import { Table } from '../classes/Table.js';
import { VALIDATION_RULE } from '../../metadata/file/index.js';

export const VALIDATION_RULES: Table = {
  name: 'Validation Rules',
  definition: VALIDATION_RULE,
  columns: [
    { label: 'Object', field: 'objectName' },
    { label: 'Name', field: 'name' },
    { label: 'Full Name', field: 'fullName' },
    { label: 'Active', field: 'active' },
    { label: 'Description', field: 'description' },
    { label: 'Error Condition Formula', field: 'errorConditionFormula' },
    { label: 'Error Display Field', field: 'errorDisplayField' },
    { label: 'Error Message', field: 'errorMessage' },
  ],
};

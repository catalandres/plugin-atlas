import { Table } from '../classes/Table.js';
import { ROLE } from '../../metadata/file/index.js';

export const ROLES: Table = {
  name: 'Roles',
  definition: ROLE,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Label', field: 'label' },
    { label: 'Description', field: 'description' },
    { label: 'Parent Role', field: 'parentRole' },
    { label: 'Contact Access Level', field: 'contactAccessLevel' },
    { label: 'Opportunity Access Level', field: 'opportunityAccessLevel' },
    { label: 'Case Access Level', field: 'caseAccessLevel' },
    { label: 'May Forecast Manager Share', field: 'mayForecastManagerShare' },
  ],
};

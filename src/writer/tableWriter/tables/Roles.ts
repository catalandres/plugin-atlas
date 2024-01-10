import { Table } from '../tables.js';
import { ROLE } from '../../../metadataReader/metadataTypes.js';

export const ROLES: Table = {
  name: 'Roles',
  definition: ROLE,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'label' },
    { title: 'Description', id: 'description' },
    { title: 'Parent Role', id: 'parentRole' },
    { title: 'Contact Access Level', id: 'contactAccessLevel' },
    { title: 'Opportunity Access Level', id: 'opportunityAccessLevel' },
    { title: 'Case Access Level', id: 'caseAccessLevel' },
    { title: 'May Forecast Manager Share', id: 'mayForecastManagerShare' },
  ],
};

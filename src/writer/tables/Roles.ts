import * as Metadata from '../../metadata/metadata.js';
import { ROLE } from '../../metadataReader/metadataTypes.js';
import { Table } from '../tables.js';

export const ROLES: Table<Metadata.Role> = {
  name: 'Roles',
  metadataType: ROLE,
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

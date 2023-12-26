import { Table } from '../classes/Table.js';
import { CUSTOM_OBJECT } from '../../metadata/file/index.js';

export const OBJECTS: Table = {
  name: 'Objects',
  definition: CUSTOM_OBJECT,
  columns: [
    { label: 'Name', field: 'name' },
    { label: 'Label', field: 'label' },
    { label: 'Label (Plural)', field: 'pluralLabel' },
    { label: 'Gender', field: 'gender' },
    { label: 'Starts with', field: 'startsWith' },
    { label: 'Description', field: 'description' },
    { label: 'Default Internal Access', field: 'sharingModel' },
    { label: 'Default External Access', field: 'externalSharingModel' },
    { label: 'Deployment Status', field: 'deploymentStatus' },
    { label: 'Activities Enabled', field: 'enableActivities' },
    { label: 'Chatter Enabled', field: 'allowInChatterGroups' },
    { label: 'Feeds Enabled', field: 'enableFeeds' },
    { label: 'History Tracking Enabled', field: 'enableHistory' },
    { label: 'Reports Enabled', field: 'enableReports' },
    { label: 'Search Enabled', field: 'enableSearch' },
    { label: 'Platform Event Type', field: 'eventType' },
    { label: 'Platform Event Publish Behavior', field: 'publishBehavior' },
    { label: 'Permission Set License Required', field: 'enableLicensing' },
  ],
};

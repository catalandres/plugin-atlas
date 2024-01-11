import { Table } from '../tables.js';
import { CUSTOM_OBJECT } from '../../../metadataReader/metadataTypes.js';

export const OBJECTS: Table = {
  name: 'Objects',
  definition: CUSTOM_OBJECT,
  columns: [
    { title: 'Name', id: 'name' },
    { title: 'Label', id: 'label' },
    { title: 'Label (Plural)', id: 'pluralLabel' },
    { title: 'Gender', id: 'gender' },
    { title: 'Starts with', id: 'startsWith' },
    { title: 'Description', id: 'description' },
    { title: 'Default Internal Access', id: 'sharingModel' },
    { title: 'Default External Access', id: 'externalSharingModel' },
    { title: 'Deployment Status', id: 'deploymentStatus' },
    { title: 'Activities Enabled', id: 'enableActivities' },
    { title: 'Chatter Enabled', id: 'allowInChatterGroups' },
    { title: 'Feeds Enabled', id: 'enableFeeds' },
    { title: 'History Tracking Enabled', id: 'enableHistory' },
    { title: 'Reports Enabled', id: 'enableReports' },
    { title: 'Search Enabled', id: 'enableSearch' },
    { title: 'Platform Event Type', id: 'eventType' },
    { title: 'Platform Event Publish Behavior', id: 'publishBehavior' },
    { title: 'Permission Set License Required', id: 'enableLicensing' },
  ],
};

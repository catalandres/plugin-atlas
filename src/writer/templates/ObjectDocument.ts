import { Document } from '../templates.js';
import { CUSTOM_OBJECT, Extended } from '../../metadataReader/metadataTypes.js';
import * as Metadata from '../../metadata/metadata.js';
import * as Markdown from './markdown.js';

const trueFalseEmojiMap = new Map([
  [true, '🟢'],
  [false, '🟥'],
  [undefined, '⚪️'],
]);

export const OBJECT_DOCUMENT = new Document(CUSTOM_OBJECT, renderPath, renderContent);

function renderPath(thisRecord: Extended<Metadata.CustomObject>): string {
  return `objects/${thisRecord.name}.md`;
}

function renderContent(thisRecord: Extended<Metadata.CustomObject>): string {
  let output: string = '';

  output += Markdown.Header(thisRecord.label ?? `\`${thisRecord.name}\``);

  output += new Markdown.KeyValueTable({
    title: 'Object Name',
    url: 'https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customobject.htm',
    data: [
      {
        key: 'Name',
        value: `\`${thisRecord.name}\``,
        anchor: '',
      },
      {
        key: 'Full Name',
        value: thisRecord.fullName,
        anchor: 'meta_fullname',
      },
      {
        key: 'Label',
        value: thisRecord.label,
        anchor: 'meta_co_label_field',
      },
      {
        key: 'Label (Plural)',
        value: thisRecord.pluralLabel,
      },
      {
        key: 'Starts with',
        value: thisRecord.startsWith,
        anchor: '',
      },
      {
        key: 'Gender',
        value: thisRecord.gender,
        anchor: '',
      },
    ],
  }).render();

  output += new Markdown.KeyValueTable({
    title: 'Metadata Type',
    url: 'https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customobject.htm',
    data: [
      {
        key: 'Type',
        value:
          '[`CustomObject`](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customobject.htm)',
      },
      {
        key: 'Subtype',
        value: '[IMPLEMENTATION PENDING]',
      },
      {
        key: 'Deployment Status',
        value: thisRecord.deploymentStatus,
        anchor: 'customobject_deploymentstatus',
      },
    ],
  }).render();

  output += new Markdown.KeyValueTable({
    title: 'Organization-wide Sharing Defaults',
    data: [
      {
        key: 'Default Internal Access',
        value: thisRecord.sharingModel,
      },
      {
        key: 'Default External Access',
        value: thisRecord.externalSharingModel,
      },
    ],
  }).render();

  output += new Markdown.EmojiTable(
    {
      title: 'Tracking',
      url: 'https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customobject.htm',
      data: [
        {
          key: 'Feed Tracking',
          value: thisRecord.enableFeeds,
          anchor: 'enablefeeds',
        },
        {
          key: 'Record Type Feed Tracking',
          value: thisRecord.recordTypeTrackFeedHistory,
          anchor: 'recordTypeTrackFeedHistory',
        },
        {
          key: 'History Tracking',
          value: thisRecord.enableHistory,
        },
        {
          key: 'Record Type History Tracking',
          value: thisRecord.recordTypeTrackHistory,
          anchor: 'recordTypeTrackHistory',
        },
      ],
    },
    trueFalseEmojiMap
  ).render();

  output += new Markdown.EmojiTable(
    {
      title: 'Features',
      url: 'https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customobject.htm',
      data: [
        {
          key: 'Activities',
          value: thisRecord.enableActivities,
          anchor: '',
        },
        {
          key: 'Bulk API',
          value: thisRecord.enableBulkApi,
          anchor: '',
        },
        {
          key: 'Chatter',
          value: thisRecord.allowInChatterGroups,
          anchor: '',
        },
        {
          key: 'Divisions',
          value: thisRecord.enableDivisions,
          anchor: '',
        },
        {
          key: 'Enhanced Lookup',
          value: thisRecord.enableEnhancedLookup,
          anchor: '',
        },
        {
          key: 'Permission Set License Required',
          value: thisRecord.enableLicensing,
          anchor: '',
        },
        {
          key: 'Reports',
          value: thisRecord.enableReports,
          anchor: '',
        },
        {
          key: 'Search',
          value: thisRecord.enableSearch,
          anchor: '',
        },
        {
          key: 'Sharing',
          value: thisRecord.enableSharing,
          anchor: '',
        },
      ],
    },
    trueFalseEmojiMap
  ).render();

  return output;
}

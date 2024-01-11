import { Metadata } from '../metadata/metadata.js';

export * from './metadataTypes/ApexClass.js';
export * from './metadataTypes/ApexComponent.js';
export * from './metadataTypes/ApexPage.js';
export * from './metadataTypes/ApexTrigger.js';
export * from './metadataTypes/AuraDefinitionBundle.js';
export * from './metadataTypes/CompactLayout.js';
export * from './metadataTypes/CustomField.js';
export * from './metadataTypes/CustomObject.js';
export * from './metadataTypes/CustomTab.js';
export * from './metadataTypes/FieldSet.js';
export * from './metadataTypes/FlexiPage.js';
export * from './metadataTypes/Flow.js';
export * from './metadataTypes/Layout.js';
export * from './metadataTypes/LightningWebComponent.js';
export * from './metadataTypes/ListView.js';
export * from './metadataTypes/PermissionSet.js';
export * from './metadataTypes/PermissionSetGroup.js';
export * from './metadataTypes/Profile.js';
export * from './metadataTypes/QuickAction.js';
export * from './metadataTypes/RecordType.js';
export * from './metadataTypes/Role.js';
export * from './metadataTypes/UserAccessPolicy.js';
export * from './metadataTypes/ValidationRule.js';
export * from './metadataTypes/WebLink.js';
export * from './metadataTypes/Workflow.js';
export * from './metadataTypes/WorkflowRule.js';

export * from './nameFunctions.js';
export * from './transformFunctions.js';

export type Album = Record<string, Array<Extended<Metadata>>>;

export interface ExtendedMetadata {
  [key: string]: unknown;
  name: string;
  objectName: string;
  fullName: string;
  fileName: string;
}

export type Extended<T> = T &
  ExtendedMetadata &
  Record<string, unknown> & {
    name: string;
    objectName: string;
    fullName: string;
    fileName: string;
  };

export interface MetadataType {
  readonly name: string;
  readonly list: string;
  readonly extension?: string;
  readonly metadataType: Metadata;
  readonly container?: boolean;
  readonly setName?: (record: Extended<Metadata>) => string;
  readonly setObjectname?: (record: Extended<Metadata>) => string;
  readonly setFullName?: (record: Extended<Metadata>) => string;
  readonly setLabel?: (record: Extended<Metadata>) => string;
  readonly transform?: (record: Record<string, unknown>) => void;
  readonly process?: Array<(record: Extended<Metadata>) => Array<Extended<Metadata>>>;
  readonly children?: Record<string, MetadataType>;
}

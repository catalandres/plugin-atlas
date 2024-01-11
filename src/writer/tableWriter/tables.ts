export * from './tables/ApexClasses.js';
export * from './tables/ApexTriggers.js';
export * from './tables/AuraComponents.js';
export * from './tables/CompactLayouts.js';
export * from './tables/Fields.js';
export * from './tables/FieldSets.js';
export * from './tables/Flexipages.js';
export * from './tables/Flows.js';
export * from './tables/Layouts.js';
export * from './tables/LightningWebComponents.js';
export * from './tables/ListViews.js';
export * from './tables/Objects.js';
export * from './tables/PermissionSetGroups.js';
export * from './tables/PermissionSets.js';
export * from './tables/Profiles.js';
export * from './tables/QuickActions.js';
export * from './tables/RecordTypes.js';
export * from './tables/Roles.js';
export * from './tables/Tabs.js';
export * from './tables/UserAccessPolicies.js';
export * from './tables/ValidationRules.js';
export * from './tables/VisualforceComponents.js';
export * from './tables/VisualforcePages.js';
export * from './tables/WebLinks.js';
export * from './tables/WorkflowRules.js';

import { MetadataType } from '../../metadataReader/metadataTypes.js';

interface TableColumn {
  readonly id: string;
  readonly title: string;
}

export interface Table {
  readonly name: string;
  readonly definition: MetadataType;
  readonly columns: TableColumn[];
}

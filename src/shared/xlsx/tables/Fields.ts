import { Table } from '../classes/Table.js';
import { CUSTOM_FIELD } from '../../metadata/file/index.js';

export const FIELDS: Table = {
  name: 'Fields',
  definition: CUSTOM_FIELD,
  columns: [
    { label: 'Object', field: 'objectName' },
    { label: 'Name', field: 'name' },
    { label: 'Full Name', field: 'fullName' },
    { label: 'Label', field: 'label' },
    { label: 'Type', field: 'type' },
    { label: 'Required', field: 'required' },
    { label: 'Unique', field: 'unique' },
    { label: 'External ID', field: 'externalId' },
    { label: 'AI Prediction Field', field: 'isAIPredictionField' },
    { label: 'Case Sensitive', field: 'caseSensitive' },
    { label: 'Encryption Scheme (Shield)', field: 'encryptionScheme' },
    { label: 'Masking Type (Classic)', field: 'maskType' },
    { label: 'Masking Character (Classic)', field: 'maskChar' },
    { label: 'Description', field: 'description' },
    { label: 'Help Text', field: 'inlineHelpText' },
    { label: 'Default Value', field: 'defaultValue' },
    { label: 'Length', field: 'length' },
    { label: 'Visible Lines', field: 'visibleLines' },
    { label: 'Precision', field: 'precision' },
    { label: 'Scale', field: 'scale' },
    { label: 'Value Set', field: 'valueSet' },
    { label: 'Formula', field: 'formula' },
    { label: 'Treat Formula Blanks As', field: 'formulaTreatBlanksAs' },
    { label: 'Reference To', field: 'referenceTo' },
    { label: 'Relationship Name', field: 'relationshipName' },
    { label: 'Relationship Label', field: 'relationshipLabel' },
    { label: 'Relationship Order', field: 'relationshipOrder' },
    { label: 'Lookup Filter', field: 'lookupFilter' },
    { label: 'Delete Constraint', field: 'deleteConstraint' },
    { label: 'Reparentable Master Detail', field: 'reparentableMasterDetail' },
    { label: 'Write Requires Master Read', field: 'writeRequiresMasterRead' },
    { label: 'Summary Operation', field: 'summaryOperation' },
    { label: 'Summarized Field', field: 'summarizedField' },
    { label: 'Summary Filter Items', field: 'summaryFilterItems' },
    { label: 'Track Feed History', field: 'trackFeedHistory' },
    { label: 'Track History', field: 'trackHistory' },
    { label: 'Track Trending', field: 'trackTrending' },
    { label: 'Security Classification', field: 'securityClassification' },
    { label: 'Compliance Group', field: 'complianceGroup' },
    { label: 'Business Owner Group', field: 'businessOwnerGroup' },
    { label: 'Business Owner User', field: 'businessOwnerUser' },
    { label: 'Business Status', field: 'businessStatus' },
  ],
};

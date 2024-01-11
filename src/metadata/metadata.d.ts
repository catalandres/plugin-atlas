/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-interface */

export type DeployProblemType = 'Warning' | 'Error' | 'Info';

export type ManageableState =
  | 'released'
  | 'deleted'
  | 'deprecated'
  | 'installed'
  | 'beta'
  | 'unmanaged'
  | 'installedEditable'
  | 'deprecatedEditable';

export type RetrieveStatus = 'Pending' | 'InProgress' | 'Succeeded' | 'Failed';

export type FlowProcessType =
  | 'AutoLaunchedFlow'
  | 'Flow'
  | 'Workflow'
  | 'CustomEvent'
  | 'InvocableProcess'
  | 'LoginFlow'
  | 'ActionPlan'
  | 'JourneyBuilderIntegration'
  | 'UserProvisioningFlow'
  | 'Survey'
  | 'SurveyEnrich'
  | 'Appointments'
  | 'FSCLending'
  | 'DigitalForm'
  | 'FieldServiceMobile'
  | 'OrchestrationFlow'
  | 'FieldServiceWeb'
  | 'TransactionSecurityFlow'
  | 'ContactRequestFlow'
  | 'ActionCadenceFlow'
  | 'ManagedContentFlow'
  | 'CheckoutFlow'
  | 'CartAsyncFlow'
  | 'OfflineFlow'
  | 'CustomerLifecycle'
  | 'Journey'
  | 'RecommendationStrategy'
  | 'Orchestrator'
  | 'RoutingFlow'
  | 'ServiceCatalogItemFlow'
  | 'EvaluationFlow'
  | 'LoyaltyManagementFlow'
  | 'ManagedContentAuthoringWorkflow'
  | 'ActionCadenceAutolaunchedFlow'
  | 'ActionCadenceStepFlow'
  | 'IndividualObjectLinkingFlow'
  | 'PromptFlow';

export type DeployStatus =
  | 'Pending'
  | 'InProgress'
  | 'Succeeded'
  | 'SucceededPartial'
  | 'Failed'
  | 'Canceling'
  | 'Canceled';

export type AsyncRequestState = 'Queued' | 'InProgress' | 'Completed' | 'Error';

export type AIFilterUnit = 'Milliseconds' | 'Seconds' | 'Minutes' | 'Hours' | 'Days' | 'Weeks' | 'Months' | 'Years';

export type AIFilterOperation =
  | 'And'
  | 'Or'
  | 'Not'
  | 'LessThan'
  | 'LessThanOrEqual'
  | 'GreaterThan'
  | 'GreaterThanOrEqual'
  | 'Equals'
  | 'NotEquals'
  | 'Add'
  | 'Subtract'
  | 'Multiply'
  | 'Divide'
  | 'IsNull'
  | 'IsNotNull'
  | 'StartsWith'
  | 'EndsWith'
  | 'Contains'
  | 'Concat'
  | 'DoesNotContain'
  | 'Between'
  | 'In';

export type AISide = 'Left' | 'Right';

export type AIValueType =
  | 'Number'
  | 'String'
  | 'Boolean'
  | 'Date'
  | 'DateTime'
  | 'Supplier'
  | 'Currency'
  | 'Varchar'
  | 'Comparison';

export type AIManagedFieldType = 'Included' | 'Excluded';

export type AIModelDefinitionApprovalType = 'RequireApproval' | 'PreApproved';

export type AIModelDefinitionStatus = 'Enabled' | 'Disabled';

export type AIModelType =
  | 'RandomForest'
  | 'LogisticRegression'
  | 'LinearRegression'
  | 'DecisionTree'
  | 'DeepLearningIntent'
  | 'DeepLearningNER'
  | 'GlobalDeepLearningIntent'
  | 'GlobalDeepLearningNER'
  | 'GlobalLanguageDetection'
  | 'BinaryClassification'
  | 'GeneralizedLinearModels'
  | 'GradientBoostedTrees'
  | 'LinearSupportVectorClassifiers'
  | 'MulticlassClassification'
  | 'NaiveBayes'
  | 'Regression'
  | 'XGBoost'
  | 'NeuralNet'
  | 'PopularityCount';

export type AIPredictionStrategy = 'Maximize' | 'Minimize';

export type AIPredictionDefinitionStatus = 'Enabled' | 'Disabled';

export type AIPredictionType =
  | 'ScoringSpecificOutcome'
  | 'BinaryClassification'
  | 'MulticlassClassification'
  | 'Regression'
  | 'LanguageDetection'
  | 'DeepLearningIntentClassification'
  | 'DeepLearningNameEntityRecognition'
  | 'GlobalDeepLearningIntentClassification'
  | 'GlobalDeepLearningNameEntityRecognition';

export type AIApplicationStatus = 'Draft' | 'Migrated' | 'Enabled' | 'Disabled';

export type AIApplicationType =
  | 'Platform'
  | 'LeadScoring'
  | 'ForecastingPredictive'
  | 'CaseClassification'
  | 'PredictionBuilder'
  | 'Assistant'
  | 'Bots'
  | 'EPLite'
  | 'Discovery'
  | 'ReferralScoring'
  | 'IntelligentOffers'
  | 'CaseWrapUp'
  | 'VoiceWrapUp'
  | 'RecommendationBuilder'
  | 'OpportunityScoring'
  | 'SalesAILeadScoring'
  | 'ServiceCaseWrapUp'
  | 'ServiceCaseClassification'
  | 'KeyAccountIdentification'
  | 'OpportunityPushedOutInsight'
  | 'InvoiceLatePaymentRiskCalculation'
  | 'SalesAIOpportunityScoring'
  | 'SalesAIForecastingPredictive'
  | 'CallCaseWrapUp'
  | 'SalesAIOpportunityForecasting'
  | 'CustomizablePropensityScoring'
  | 'GenerativeIntelligence';

export type AIScoringMode = 'Batch' | 'OnDemand' | 'Streaming';

export type RecsOutputFieldName = 'Summary' | 'Issue' | 'Resolution';

export type ConfigStatus = 'Enabled' | 'Disabled';

export type AIModelApproval = 'Pending' | 'Approved' | 'Rejected';

export type AIModelMetricOperation =
  | 'LessThan'
  | 'Equals'
  | 'NotEquals'
  | 'GreaterThan'
  | 'IsNull'
  | 'IsNotNull'
  | 'StartsWith'
  | 'EndsWith'
  | 'Contains';

export type AIIntensityType = 'Weight' | 'Importance' | 'Correlation';

export type AIModelFactorType = 'Basic' | 'And' | 'Or';

export type AIDataSetType = 'HoldOut' | 'Training' | 'Live' | 'Model' | 'Baseline';

export type AIModelGraphType =
  | 'ConfidencePlot'
  | 'LiftPlot'
  | 'PrecisionGraph'
  | 'RecallGraph'
  | 'HitRateGraph'
  | 'MeanReciprocalRankGraph'
  | 'DiscountedCumulativeGainsGraph'
  | 'NormalizedDiscountedCumulativeGainsGraph'
  | 'KBasedRankingGraph'
  | 'ConfusionMatrixPerThreshold'
  | 'RegressionErrorBands'
  | 'MultiClassMisclassifications'
  | 'MultiClassConfusionMatrixPerThreshold';

export type AIMetricType =
  | 'auROC'
  | 'Accuracy'
  | 'BalancedAccuracy'
  | 'Precision'
  | 'Recall'
  | 'FMeasure'
  | 'RootMeanSquaredError'
  | 'MeanAbsoluteError'
  | 'RSquared'
  | 'auPR'
  | 'PrecisionAtK'
  | 'RecallAtK'
  | 'HitRateAtK'
  | 'F1Score'
  | 'MeanPercentileRank'
  | 'MeanAbsoluteRank'
  | 'ExpectedTopPercentileRank'
  | 'ExpectedTopAbsoluteRank'
  | 'MeanReciprocalRankAtK'
  | 'DiscountedCumulativeGainAtK'
  | 'NormalizedDiscountedCumulativeGainsAtK'
  | 'AveragePrecision'
  | 'MeanAveragePrecisionAtK'
  | 'MeanReciprocalRank'
  | 'MeanTopReciprocalRank'
  | 'LiftBucket';

export type AIScoringStatus = 'Enabled' | 'Disabled';

export type AIScoringModelDefVersionMode = 'TRAIN' | 'DEPLOY' | 'TRAIN_AND_DEPLOY';

export type MappedFieldType =
  | 'FEATURE'
  | 'PREDICTION_SCORE'
  | 'INSIGHT'
  | 'SUGGESTION'
  | 'SECONDARY_RESPONSE_RECORD_ID'
  | 'RECOMMENDATION_RESPONSE_RECORD_ID'
  | 'RECOMMENDATION'
  | 'PREDICTION_SCORE_INPUT';

export type BatchInputSourceType = 'CRMA' | 'Data_Cloud';

export type ExtractorType = 'APEX' | 'JAVA' | 'HYBRID';

export type FeatureInputType = 'Realtime_Input' | 'Sample_Input' | 'Batch_Input' | 'Batch_And_Realtime_Input';

export type PredictionPlatform = 'Einstein_Discovery' | 'Default' | 'Data_Cloud';

export type CreatorType = 'INTERNAL_USER' | 'SALESFORCE_ADMIN';

export type RcmdSourceType = 'Next_Best_Action_Flow' | 'None';

export type FormulaType = 'QUANTITY' | 'REVENUE';

export type CalculationFrequency = 'Monthly' | 'Quarterly';

export type ForecastFrequency = 'Monthly' | 'Quarterly';

export type AccountingType = 'Revenue' | 'Expense';

export type ExpectedCashFlowGrouping = 'GroupByFundAccount' | 'GroupByFundAndDueDate';

export type PaidCashFlowGrouping = 'GroupBySummary' | 'GroupByFundAccount';

export type PeriodTypes = 'Month' | 'Quarter' | 'Week' | 'Year';

export type TeamMemberHierarchyType = 'ManagerHierarchy' | 'ForecastsHierarchy';

export type ItemActionType = string;

export type ItemCategory = 'dbBased' | 'fileBased';

export type ActionLinkType = 'API' | 'APIAsync' | 'Download' | 'UI';

export type ActionLinkHttpMethod = 'HttpDelete' | 'HttpHead' | 'HttpGet' | 'HttpPatch' | 'HttpPost' | 'HttpPut';

export type ActionLinkUserVisibility =
  | 'Creator'
  | 'Everyone'
  | 'EveryoneButCreator'
  | 'Manager'
  | 'CustomUser'
  | 'CustomExcludedUser';

export type PlatformActionGroupCategory = 'Primary' | 'Overflow';

export type ActionLinkExecutionsAllowed = 'Once' | 'OncePerUser' | 'Unlimited';

export type ActivationPlatformConnectorType = 'S3' | 'OAUTH';

export type ActivationPlatformFileOutputFormat = 'CSV' | 'JSON' | 'PARQUET';

export type ActivationPlatformFileOutputGrouping = 'PER_SEGMENT' | 'PER_ACCOUNT';

export type ActivationPlatformPeriodicFullRefresh =
  | 'NEVER'
  | 'REFRESH_30'
  | 'REFRESH_60'
  | 'REFRESH_90'
  | 'REFRESH_180'
  | 'REFRESH_365';

export type ActivationPlatformType = 'Advertising' | 'Publishing' | 'Analytics' | 'Marketing' | 'Technology';

export type ActivationPlatformRefreshFrequency = 'FOUR' | 'TWELVE' | 'TWENTY_FOUR';

export type ActivationPlatformRefreshMode = 'FULL' | 'INCREMENTAL';

export type ActivationPlatformFieldDataType = 'Text' | 'Number';

export type ActivationPlatformIdentifierHashMethod = 'SHA1' | 'SHA256' | 'MD5' | 'NONE';

export type ActivationPlatformIdentifierType = 'EMAIL' | 'PHONE' | 'OTT' | 'MAID';

export type OAuthProviderType = 'GOOGLE' | 'FACEBOOK' | 'AMAZON';

export type DefaultLicenseStatus = 'Active' | 'Trial' | 'Free';

export type AdvAcctFcstCalcFrequency = 'Monthly' | 'Quarterly' | 'Yearly' | 'Weekly';

export type AdvAcctFrcstDisplayGroupType = string;

export type AdvAcctFcstFormulaType = 'QUANTITY' | 'REVENUE';

export type AdvAcctFcstAggregationType = 'SUM' | 'MINIMUM' | 'MAXIMUM' | 'AVERAGE';

export type AdvAcctFcstComputationMethod = 'DATA_PROCESSING_ENGINE_DEFINITION' | 'CUSTOM' | 'FORMULA';

export type AdvAcctFcstMeasureType = 'QUANTITY' | 'REVENUE';

export type AdvAccForecastSetStatus = 'Active' | 'Inactive';

export type ForecastPeriodGroupStatus = 'Active' | 'Inactive';

export type FieldMappingClient = 'PriceSheetPricing' | 'CustomFieldMappingPricing';

export type ReportSummaryType = 'Sum' | 'Average' | 'Maximum' | 'Minimum' | 'Unique' | 'Median' | 'None';

export type ReportJobSourceTypes = 'tabular' | 'summary' | 'snapshot';

export type ApplicationObjectName = 'BusinessLicenseApplication' | 'IndividualApplication';

export type ApplicationUsageType = 'LPI' | 'ERM' | 'HC' | 'EDU' | 'BA' | 'CCM' | 'Grantmaking';

export type AppDomainUsageType = string;

export type PolicyApplicableDuration = 'ParameterBased' | 'Monthly' | 'Weekly';

export type AssignmentPolicyType = string;

export type UtilizationFactor = 'TotalAppointmentDuration' | 'NumberOfAppointments';

export type ProcessSubmitterType =
  | 'group'
  | 'role'
  | 'user'
  | 'roleSubordinates'
  | 'roleSubordinatesInternal'
  | 'owner'
  | 'creator'
  | 'accountOwner'
  | 'ownerDelegate'
  | 'creatorDelegate'
  | 'accountOwnerDelegate'
  | 'partnerUser'
  | 'customerPortalUser'
  | 'portalRole'
  | 'portalRoleSubordinates'
  | 'allInternalUsers';

export type WorkflowActionType =
  | 'FieldUpdate'
  | 'KnowledgePublish'
  | 'Task'
  | 'Alert'
  | 'Send'
  | 'OutboundMessage'
  | 'FlowAction';

export type NextOwnerType =
  | 'adhoc'
  | 'user'
  | 'userHierarchyField'
  | 'relatedUserField'
  | 'queue'
  | 'apexMethod'
  | 'PreviousApprover'
  | 'none';

export type RoutingType = 'Unanimous' | 'FirstResponse';

export type FilterOperation =
  | 'equals'
  | 'notEqual'
  | 'lessThan'
  | 'greaterThan'
  | 'lessOrEqual'
  | 'greaterOrEqual'
  | 'contains'
  | 'notContain'
  | 'startsWith'
  | 'includes'
  | 'excludes'
  | 'within';

export type StepCriteriaNotMetType = 'ApproveRecord' | 'RejectRecord' | 'GotoNextStep';

export type StepRejectBehaviorType = 'RejectRequest' | 'BackToPrevious';

export type RecordEditabilityType = 'AdminOnly' | 'AdminOrCurrentApprover';

export type AssignToLookupValueType = 'User' | 'Queue';

export type BusinessHoursSourceType = 'None' | 'Case' | 'Static';

export type EscalationStartTimeType = 'CaseCreation' | 'CaseLastModified';

export type AssistantDefinitionStatus = 'DISABLED' | 'ENABLED';

export type AssistantSkillSobjectActionType = 'CREATE' | 'UPDATE' | 'READ';

export type AssistantSkillType = 'AGENDA' | 'SOBJECT';

export type AudienceCriterionOperator =
  | 'Equal'
  | 'NotEqual'
  | 'GreaterThan'
  | 'GreaterThanOrEqual'
  | 'LessThan'
  | 'LessThanOrEqual'
  | 'Contains'
  | 'StartsWith'
  | 'Includes'
  | 'NotIncludes';

export type AudienceCriterionType =
  | 'Default'
  | 'Profile'
  | 'FieldBased'
  | 'GeoLocation'
  | 'Domain'
  | 'Permission'
  | 'Audience';

export type FormulaFilterType = 'AllCriteriaMatch' | 'AnyCriterionMatches' | 'CustomLogicMatches';

export type AuraBundleType = 'Application' | 'Component' | 'Event' | 'Interface' | 'Tokens';

export type MuleSoftControlPlane = 'None' | 'US' | 'EU';

export type AuthProviderType =
  | 'Facebook'
  | 'Janrain'
  | 'Salesforce'
  | 'OpenIdConnect'
  | 'MicrosoftACS'
  | 'LinkedIn'
  | 'Twitter'
  | 'Google'
  | 'GitHub'
  | 'Custom'
  | 'Apple'
  | 'Evergreen'
  | 'Slack'
  | 'HubSpot'
  | 'Microsoft'
  | 'MuleSoft';

export type BatchCalcJobDatasourceType =
  | 'StandardObject'
  | 'Analytics'
  | 'DataModelObject'
  | 'CalculatedInsightsObject'
  | 'CRMObject';

export type BatchCalcJobFilterOperator =
  | 'Equals'
  | 'NotEquals'
  | 'GreaterThan'
  | 'GreaterThanOrEquals'
  | 'LessThan'
  | 'LessThanOrEquals'
  | 'StartsWith'
  | 'EndsWith'
  | 'Contains'
  | 'DoesNotContain'
  | 'IsNull'
  | 'IsNotNull'
  | 'In'
  | 'NotIn';

export type BatchCalcJobFrcstAccuracy = 'None' | 'Eighty' | 'NinetyFive';

export type BatchCalcJobAggregateFunction =
  | 'Unique'
  | 'Sum'
  | 'Max'
  | 'Min'
  | 'Avg'
  | 'Std'
  | 'StdP'
  | 'Var'
  | 'VarP'
  | 'Count';

export type BatchCalcJobFrcstModel = 'Additive' | 'Multiplicative' | 'Auto';

export type BatchCalcJobFrcstPeriodType =
  | 'Year'
  | 'YearQuarter'
  | 'YearMonth'
  | 'YearWeek'
  | 'YearMonthDay'
  | 'FiscalYear'
  | 'FiscalYearQuarter'
  | 'FiscalYearMonth'
  | 'FiscalYearWeek';

export type BatchCalcJobFrcstSeasonality =
  | 'Auto'
  | 'None'
  | 'Two'
  | 'Three'
  | 'Four'
  | 'Five'
  | 'Six'
  | 'Seven'
  | 'Eight'
  | 'Nine'
  | 'Ten'
  | 'Eleven'
  | 'Twelve'
  | 'Thirteen'
  | 'Fourteen'
  | 'Fifteen'
  | 'Sixteen'
  | 'Seventeen'
  | 'Eighteen'
  | 'Nineteen'
  | 'Twenty'
  | 'TwentyOne'
  | 'TwentyTwo'
  | 'TwentyThree'
  | 'TwentyFour';

export type BatchCalcJobParameterDataType = 'Text' | 'Numeric' | 'Date' | 'DateTime' | 'Filter' | 'Expression';

export type BatchCalcJobSourceJoinType = 'LeftOuter' | 'RightOuter' | 'Inner' | 'Outer';

export type BatchCalcJobDataType = 'Text' | 'Numeric' | 'Date' | 'DateTime';

export type BatchCalcJobOrderType = 'Ascending' | 'Descending';

export type BatchCalcJobTransformType = 'Expression' | 'Slice' | 'ComputeRelative';

export type BatchCalcJobWritebackOpn = 'Insert' | 'Update' | 'Upsert' | 'Delete';

export type BatchCalcJobWritebackType = 'sObject' | 'Analytics' | 'CDP';

export type ExecutionPlatformType = 'CRMA' | 'CDP';

export type BatchCalcProcessType =
  | 'DataProcessingEngine'
  | 'Rebates'
  | 'FSCHierarchyRollUp'
  | 'Loyalty'
  | 'AdvancedAccountForecast'
  | 'LoyaltyPartnerManagement'
  | 'LoyaltyPointsAggregation'
  | 'NetZero'
  | 'ProgramBasedBusiness'
  | 'ProviderSearch'
  | 'AccountingSubledger'
  | 'ActionableList'
  | 'DecisionMatrixDataUpload'
  | 'ProgramManagementRollups'
  | 'NetZeroHidden'
  | 'CriteriaBsdSearchAndFilter'
  | 'RecordAggregation'
  | 'Education'
  | 'CDPEnrichment'
  | 'CdpActionableList';

export type BatchJobDefinitionStatus = 'Active' | 'Inactive';

export type BenefitActionDataType =
  | 'String'
  | 'Date'
  | 'DateTime'
  | 'Boolean'
  | 'Picklist'
  | 'EntityPicklist'
  | 'Number';

export type BuildingEnergyIntensityType = 'BuildingEnergyIntensity' | 'RegionalBuildingEnergyIntensity';

export type Language =
  | 'en_US'
  | 'de'
  | 'es'
  | 'fr'
  | 'it'
  | 'ja'
  | 'sv'
  | 'ko'
  | 'zh_TW'
  | 'zh_CN'
  | 'pt_BR'
  | 'nl_NL'
  | 'da'
  | 'th'
  | 'fi'
  | 'ru'
  | 'es_MX'
  | 'no'
  | 'hu'
  | 'pl'
  | 'cs'
  | 'tr'
  | 'in'
  | 'ro'
  | 'vi'
  | 'uk'
  | 'iw'
  | 'el'
  | 'bg'
  | 'en_GB'
  | 'ar'
  | 'sk'
  | 'pt_PT'
  | 'hr'
  | 'sl'
  | 'fr_CA'
  | 'ka'
  | 'sr'
  | 'sh'
  | 'en_AU'
  | 'en_MY'
  | 'en_IN'
  | 'en_PH'
  | 'en_CA'
  | 'ro_MD'
  | 'bs'
  | 'mk'
  | 'lv'
  | 'lt'
  | 'et'
  | 'sq'
  | 'sh_ME'
  | 'mt'
  | 'ga'
  | 'eu'
  | 'cy'
  | 'is'
  | 'ms'
  | 'tl'
  | 'lb'
  | 'rm'
  | 'hy'
  | 'hi'
  | 'ur'
  | 'bn'
  | 'de_AT'
  | 'de_CH'
  | 'ta'
  | 'ar_DZ'
  | 'ar_BH'
  | 'ar_EG'
  | 'ar_IQ'
  | 'ar_JO'
  | 'ar_KW'
  | 'ar_LB'
  | 'ar_LY'
  | 'ar_MA'
  | 'ar_OM'
  | 'ar_QA'
  | 'ar_SA'
  | 'ar_SD'
  | 'ar_SY'
  | 'ar_TN'
  | 'ar_AE'
  | 'ar_YE'
  | 'zh_SG'
  | 'zh_HK'
  | 'en_HK'
  | 'en_IE'
  | 'en_SG'
  | 'en_ZA'
  | 'fr_BE'
  | 'fr_LU'
  | 'fr_CH'
  | 'de_BE'
  | 'de_LU'
  | 'it_CH'
  | 'nl_BE'
  | 'es_AR'
  | 'es_BO'
  | 'es_CL'
  | 'es_CO'
  | 'es_CR'
  | 'es_DO'
  | 'es_EC'
  | 'es_SV'
  | 'es_GT'
  | 'es_HN'
  | 'es_NI'
  | 'es_PA'
  | 'es_PY'
  | 'es_PE'
  | 'es_PR'
  | 'es_US'
  | 'es_UY'
  | 'es_VE'
  | 'ca'
  | 'af'
  | 'sw'
  | 'zu'
  | 'xh'
  | 'te'
  | 'ml'
  | 'kn'
  | 'mr'
  | 'gu'
  | 'pa'
  | 'en_NZ'
  | 'mi'
  | 'my'
  | 'fa'
  | 'km'
  | 'am'
  | 'kk'
  | 'ht'
  | 'sm'
  | 'haw'
  | 'zh_MY'
  | 'ru_LT'
  | 'ru_PL'
  | 'ru_AM'
  | 'ru_KZ'
  | 'ru_KG'
  | 'ru_BY'
  | 'ru_MD'
  | 'ru_UA'
  | 'en_AE'
  | 'en_BE'
  | 'en_CY'
  | 'en_DE'
  | 'en_IL'
  | 'en_NL'
  | 'en_MT'
  | 'el_CY'
  | 'fr_MA'
  | 'kl'
  | 'ji'
  | 'hmn'
  | 'eo'
  | 'iw_EO';

export type MlSlotClassDataType = 'Text' | 'Number' | 'Boolean' | 'Date' | 'DateTime' | 'Currency';

export type MlSlotClassExtractionType = 'Pattern' | 'Value';

export type ConversationInvocableTargetType =
  | 'apex'
  | 'flow'
  | 'standardInvocableAction'
  | 'logFeedback'
  | 'externalService'
  | 'logGoalAchieved'
  | 'logDisambiguation'
  | 'quickAction';

export type BotInvocationMappingType = 'Input' | 'Output' | 'Error';

export type ConversationVariableType = 'ConversationVariable' | 'ContextVariable';

export type BotNavigationType = 'Call' | 'Redirect' | 'TransferToAgent' | 'EndChat';

export type BotStepConditionOperatorType =
  | 'Equals'
  | 'NotEquals'
  | 'IsSet'
  | 'IsNotSet'
  | 'GreaterThan'
  | 'LessThan'
  | 'GreaterThanOrEqualTo'
  | 'LessThanOrEqualTo';

export type ConversationVariableOperandSourceType =
  | 'StandardConversationVariable'
  | 'ConversationVariable'
  | 'ContextVariable'
  | 'MlSlotClass'
  | 'StandardMlSlotClass'
  | 'Value'
  | 'BotDefinition'
  | 'Queue'
  | 'FlowDefinition';

export type ConversationMessageExecutionType = 'Sync' | 'Async';

export type BotQuickReplyType = 'Static' | 'Dynamic';

export type BotWidgetType = 'Menu' | 'Buttons';

export type BotVariableOperationType = 'Set' | 'Unset' | 'Collect' | 'SetConversationLanguage' | 'CollectAttachment';

export type ConversationDefinitionLogicalOperatorType = 'And' | 'Or';

export type SortOrder = 'Asc' | 'Desc';

export type ConversationMappingType = 'Input' | 'Output';

export type ConversationSystemMessageParamType = string;

export type ConversationSystemMessageType = 'Transfer' | 'EndChat';

export type BotStepType =
  | 'Navigation'
  | 'Invocation'
  | 'VariableOperation'
  | 'Message'
  | 'Wait'
  | 'Group'
  | 'SystemMessage'
  | 'RecordLookup'
  | 'RichMessage'
  | 'GoalStep';

export type ConversationSystemDialogType =
  | 'TransferFailed'
  | 'ErrorHandling'
  | 'KnowledgeFallback'
  | 'Disambiguation'
  | 'DisambiguationFailed';

export type ConversationVariableCollectionType = string;

export type ConversationDataType = 'Text' | 'Number' | 'Boolean' | 'Object' | 'Date' | 'DateTime' | 'Currency' | 'Id';

export type ConversationDefinitionNlpProviderType = 'EinsteinAi' | 'Apex';

export type MessageType =
  | 'Text'
  | 'Facebook'
  | 'Line'
  | 'GoogleHome'
  | 'Alexa'
  | 'Omega'
  | 'AppleBusinessChat'
  | 'WeChat'
  | 'WebChat'
  | 'WhatsApp'
  | 'Phone'
  | 'EmbeddedMessaging'
  | 'Voice'
  | 'Custom';

export type ConvDefBlockVersionStatus = string;

export type BriefcaseFilterOperator = 'e' | 'n' | 'l' | 'g' | 'm' | 'h' | 's' | 'd';

export type FilterScope =
  | 'Everything'
  | 'Mine'
  | 'Queue'
  | 'Delegated'
  | 'MyTerritory'
  | 'MyTeamTerritory'
  | 'Team'
  | 'SalesTeam'
  | 'AssignedToMe'
  | 'MineAndMyGroups'
  | 'ScopingRule';

export type BriefcaseRuleRelationshipType = 'ParentToChild' | 'ChildToParent';

export type BriefcaseType = 'Standard' | 'HighVolume';

export type ForecastCategories = 'Omitted' | 'Pipeline' | 'BestCase' | 'MostLikely' | 'Forecast' | 'Closed';

export type ExpFeedbackCollType = 'SURVEY' | 'PHONE_CALL';

export type SurveyQuestionType =
  | 'MultiChoice'
  | 'RadioButton'
  | 'FreeText'
  | 'Date'
  | 'Rating'
  | 'CSAT'
  | 'Slider'
  | 'Picklist'
  | 'NPS'
  | 'StackRank'
  | 'Currency'
  | 'Number'
  | 'DateTime'
  | 'Toggle'
  | 'MultiSelectPicklist'
  | 'Image'
  | 'Boolean'
  | 'ShortText'
  | 'Attachment'
  | 'Matrix';

export type CMSSourceConnectionType = 'Public' | 'Authenticated';

export type CMSConnectionStatus = 'ACTIVE' | 'INACTIVE';

export type CMSConnectionSourceType = 'AEM' | 'Drupal' | 'WordPress' | 'SDL' | 'Sitecore' | 'Other';

export type FeedItemDisplayFormat = 'Default' | 'HideBlankLines';

export type FeedItemType =
  | 'TrackedChange'
  | 'UserStatus'
  | 'TextPost'
  | 'AdvancedTextPost'
  | 'LinkPost'
  | 'ContentPost'
  | 'DashboardComponentAlert'
  | 'PollPost'
  | 'RypplePost'
  | 'ProfileSkillPost'
  | 'DashboardComponentSnapshot'
  | 'TestItem'
  | 'ApprovalPost'
  | 'CaseCommentPost'
  | 'ReplyPost'
  | 'EmailMessageEvent'
  | 'CallLogPost'
  | 'ChangeStatusPost'
  | 'AttachArticleEvent'
  | 'MilestoneEvent'
  | 'ActivityEvent'
  | 'ChatTranscriptPost'
  | 'CollaborationGroupCreated'
  | 'AttachExternalDocumentEvent'
  | 'CollaborationGroupUnarchived'
  | 'SocialPost'
  | 'QuestionPost'
  | 'Undefined'
  | 'FacebookPost'
  | 'BasicTemplateFeedItem'
  | 'CreateRecordEvent'
  | 'CanvasPost'
  | 'AnnouncementPost';

export type EmailToCaseOnFailureActionType = 'Bounce' | 'Discard' | 'Requeue';

export type EmailToCaseRoutingAddressType = 'EmailToCase' | 'Outlook' | 'GmailOAuth' | 'E2cEasy';

export type CaseSubjectParticleType =
  | 'ProvidedString'
  | 'Source'
  | 'MessageType'
  | 'SocialHandle'
  | 'SocialNetwork'
  | 'Sentiment'
  | 'RealName'
  | 'Content'
  | 'PipeSeparator'
  | 'ColonSeparator'
  | 'HyphenSeparator';

export type ActionForNoRecordFound = 'CreateNewRecordAndLink' | 'PromptAgent';

export type ActionForSingleRecordFound = 'AutoLink' | 'PromptAgent';

export type ChannelType = 'FacebookMessenger' | 'Text' | 'WeChat' | 'WhatsApp' | 'Phone';

export type ObjectToLink = string;

export type ChatterExtensionType = string;

export type ClmCategoryUsageType = 'DisclosureCategory' | 'ContractClauseCategory';

export type MappingOperation = 'Autofill' | 'Overwrite';

export type CleanRuleStatus = 'Inactive' | 'Active';

export type AuthType = 'SfdcXi' | 'HttpBasic' | 'MutualSsl' | 'Hmac' | 'C2c' | 'C2cCloud' | 'None';

export type CloudServiceProviderApiType =
  | 'Licenses'
  | 'Tenants'
  | 'Management'
  | 'Snapshots'
  | 'LicenseDefinitions'
  | 'TenantTrusts'
  | 'Usage';

export type ProvisioningAutomationType = 'Manual' | 'EntitlementOnly' | 'Auto';

export type ModelEntityType = 'QA' | 'ARTICLE' | 'CASE';

export type ModelStatus = 'PUBLISHED' | 'DARK_LAUNCHED' | 'REJECTED' | 'PHASED_OUT' | 'VERIFIED' | 'NO_MODEL';

export type CommunityBaseTemplate = string;

export type CommunityTemplateBundleInfoType = 'Highlight' | 'PreviewImage';

export type CommunityTemplateCategory = 'IT' | 'Marketing' | 'Sales' | 'Service' | 'Commerce';

export type CommunityThemeLayoutType = 'Login' | 'Home' | 'Inner' | 'ServiceNotAvailable';

export type AccessMethod = 'Get' | 'Post';

export type CanvasLocationOptions =
  | 'None'
  | 'Chatter'
  | 'UserProfile'
  | 'Visualforce'
  | 'Aura'
  | 'Publisher'
  | 'ChatterFeed'
  | 'ServiceDesk'
  | 'OpenCTI'
  | 'AppLauncher'
  | 'MobileNav'
  | 'PageLayout';

export type CanvasOptions = 'HideShare' | 'HideHeader' | 'PersonalEnabled';

export type SamlInitiationMethod = 'None' | 'IdpInitiated' | 'SpInitiated';

export type DevicePlatformType = 'ios' | 'android';

export type DeviceType = 'phone' | 'tablet' | 'minitablet';

export type ConnectedAppOauthAccessScope =
  | 'Basic'
  | 'Api'
  | 'Web'
  | 'Full'
  | 'Chatter'
  | 'CustomApplications'
  | 'RefreshToken'
  | 'OpenID'
  | 'Profile'
  | 'Email'
  | 'Address'
  | 'Phone'
  | 'OfflineAccess'
  | 'CustomPermissions'
  | 'Wave'
  | 'Eclair'
  | 'Pardot'
  | 'Lightning'
  | 'Content'
  | 'CDPIngest'
  | 'CDPProfile'
  | 'CDPQuery'
  | 'Chatbot'
  | 'CDPSegment'
  | 'CDPIdentityResolution'
  | 'CDPCalculatedInsight'
  | 'ForgotPassword'
  | 'UserRegistration'
  | 'SFAP'
  | 'Interaction'
  | 'CDP'
  | 'EinsteinGPT'
  | 'PwdlessLogin';

export type SamlEncryptionType = 'AES_128' | 'AES_256' | 'Triple_Des';

export type SamlIdpSLOBinding = 'RedirectBinding' | 'PostBinding';

export type SamlNameIdFormatType = 'Unspecified' | 'EmailAddress' | 'Persistent' | 'Transient';

export type SamlSigningAlgoType = 'SHA1' | 'SHA256';

export type SamlSubjectType = 'Username' | 'FederationId' | 'UserId' | 'SpokeId' | 'CustomAttribute' | 'PersistentId';

export type ContextAttributeDataType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'date'
  | 'datetime'
  | 'percent'
  | 'picklist'
  | 'currency'
  | 'reference';

export type ContextAttributeFieldType = 'input' | 'output' | 'inputoutput';

export type ContractConfigType =
  | 'ContractDocumentDownloadOption'
  | 'WordTrackChangesDisplayColor'
  | 'InclWordTrackChgReconciliation'
  | 'InclWordTrackChgSectionContent'
  | 'CreateDocSectionsDocxTemplates'
  | 'AutoGenDocOnContractCreation'
  | 'AutoGenerateDocFileType'
  | 'ContractSignedStatus'
  | 'ContractSignatureDeclinedSts'
  | 'NotifyDocTemplateVerChgStatus'
  | 'DocuSignUseAccountDefaultNtfcn'
  | 'DocuSignReminderEnabled'
  | 'DocuSignReminderDelayinDays'
  | 'DocuSignReminderFrequency'
  | 'DocuSignExpireEnabled'
  | 'DocuSignExpiresAfter'
  | 'DocuSignExpireWarning'
  | 'DocuSignAccountBrand'
  | 'Append0ToAutoNbrEmbeddedSect'
  | 'DocumentFileNameFormat'
  | 'DefaultTemplateName'
  | 'AutoGenDocOnContractUpdate'
  | 'ContractSignatureVoidedStatus'
  | 'ContractSignatureExpiredStatus'
  | 'TrackContractRedlines'
  | 'DocumentTemplateFilterClass'
  | 'EmailNotificationOnDocumentGeneration'
  | 'ImportTargetContractStatus'
  | 'ActivateObligationsBasedOnContractStatus'
  | 'ExternalReviewRequired'
  | 'InternalReviewRequired';

export type ContractUsageType =
  | 'DocumentSetting'
  | 'Reconciliation'
  | 'SignatureSetting'
  | 'Redlining'
  | 'ObligationSetting';

export type RefreshFrequency = 'NO_REFRESH' | 'MONTHLY';

export type ReportStatus =
  | 'NEW'
  | 'TRAINING'
  | 'COMPLETED'
  | 'ERROR'
  | 'NOT_ENOUGH_DATA_AFTER_PARSING'
  | 'NOT_ENOUGH_DATA_WITH_CONTACT_REASON'
  | 'LOW_CLUSTER_QUALITY';

export type SegmentationType = 'NO_FILTER' | 'SINGLE_OBJECT_FILTER' | 'CROSS_OBJECT_FILTER';

export type ConversationMessageConstantType = 'Title' | 'Url' | 'Image' | 'Options' | 'SubTitle';

export type ConversationMessageConstantValueType = 'Text' | 'Url' | 'ImageAsset';

export type ConversationMessageHandlerType = 'QuickAction' | 'AuthProvider' | 'PaymentProvider' | 'Attachment';

export type ConvMsgExternalTemplateVersionStatus =
  | 'Pending'
  | 'Rejected'
  | 'Approved'
  | 'Paused'
  | 'Disabled'
  | 'InAppeal';

export type ConversationMessageFormatType =
  | 'Text'
  | 'Attachments'
  | 'RichLink'
  | 'Media'
  | 'Buttons'
  | 'Carousel'
  | 'QuickReplies'
  | 'ListPicker'
  | 'TimePicker'
  | 'EncryptedOAuthToken'
  | 'Application'
  | 'Inputs'
  | 'WebView'
  | 'Payment'
  | 'ExternalTemplate';

export type ConversationMessageCollectionType = 'None' | 'StaticList' | 'DynamicList';

export type ConversationMessageMergeFieldType = string;

export type ConversationMessageLayoutValueType =
  | 'Literal'
  | 'MediaAsset'
  | 'CompositeType'
  | 'SourceSobjectFieldValue'
  | 'SourceSobjectFormula'
  | 'SourcePrimitiveValue'
  | 'SourceCompositeType'
  | 'FormulaTemplate'
  | 'SourceSobjectField';

export type ConversationMessageType = 'StaticContent' | 'Choices' | 'Form' | 'AuthenticationRequest' | 'PaymentRequest';

export type ConversationMessageValueType =
  | 'Text'
  | 'Boolean'
  | 'Integer'
  | 'Double'
  | 'Date'
  | 'DateTime'
  | 'Url'
  | 'RecordId'
  | 'ImageId'
  | 'Composite';

export type ConversationMessageOptionsParameterType =
  | 'RecordIdOptions'
  | 'TimeSlotOptions'
  | 'CustomPrimitiveOptions'
  | 'CustomCompositeOptions';

export type ConversationMessageParameterType = 'RecordIds' | 'CustomPrimitive' | 'CustomComposite';

export type ConversationMessageDefinitionType =
  | 'RecordView'
  | 'RecordPicker'
  | 'Picklist'
  | 'TimePicker'
  | 'Link'
  | 'CustomMessage'
  | 'CustomPicker'
  | 'LegacyPicker'
  | 'AuthenticationRequest'
  | 'Action'
  | 'AutoResponse'
  | 'PaymentRequest'
  | 'Notification';

export type ClientAuthMode = 'SSO' | 'Custom' | 'Mixed';

export type ServerAuthMode = 'OAuth' | 'None';

export type ConversationVendorType = 'ServiceCloudVoicePartner' | 'Amazon_Connect' | 'BringYourOwnChannelPartner';

export type CspTrustedSiteContext = 'All' | 'LEX' | 'Communities' | 'FieldServiceMobileExtension' | 'VisualForce';

export type FormFactor = 'Small' | 'Medium' | 'Large';

export type ActionOverrideType =
  | 'Default'
  | 'Standard'
  | 'Scontrol'
  | 'Visualforce'
  | 'Flexipage'
  | 'LightningComponent';

export type NavType = 'Standard' | 'Console';

export type UiType = 'Aloha' | 'Lightning';

export type FieldType =
  | 'AutoNumber'
  | 'Lookup'
  | 'MasterDetail'
  | 'Checkbox'
  | 'Currency'
  | 'Date'
  | 'DateTime'
  | 'Email'
  | 'Number'
  | 'Percent'
  | 'Phone'
  | 'Picklist'
  | 'MultiselectPicklist'
  | 'Text'
  | 'TextArea'
  | 'LongTextArea'
  | 'Html'
  | 'Url'
  | 'EncryptedText'
  | 'Summary'
  | 'Hierarchy'
  | 'File'
  | 'MetadataRelationship'
  | 'Location'
  | 'ExternalLookup'
  | 'IndirectLookup'
  | 'CustomDataType'
  | 'Time'
  | 'Address';

export type FeedItemVisibility = 'AllUsers' | 'InternalUsers';

export type DeleteConstraint = 'Cascade' | 'Restrict' | 'SetNull';

export type EncryptionScheme =
  | 'None'
  | 'ProbabilisticEncryption'
  | 'CaseSensitiveDeterministicEncryption'
  | 'CaseInsensitiveDeterministicEncryption';

export type FieldManageability = 'DeveloperControlled' | 'SubscriberControlled' | 'Locked';

export type TreatBlanksAs = 'BlankAsBlank' | 'BlankAsZero';

export type EncryptedFieldMaskChar = 'asterisk' | 'X';

export type EncryptedFieldMaskType = 'all' | 'creditCard' | 'ssn' | 'lastFour' | 'sin' | 'nino';

export type DefinitionCreationType =
  | 'Standard'
  | 'Custom'
  | 'System'
  | 'Derived'
  | 'Bridge'
  | 'Curated'
  | 'Segment_Membership'
  | 'Ml_Prediction'
  | 'Activation_Audience'
  | 'Transform'
  | 'ADG'
  | 'External';

export type UsageTag = 'NONE' | 'KEY_QUALIFIER';

export type InvalidMergeActionType = 'Drop' | 'Keep' | 'Override';

export type MktDataModelFieldUsageTag = 'None' | 'KeyQualifier';

export type SummaryOperations = 'count' | 'sum' | 'min' | 'max';

export type Channel = 'AllChannels' | 'App' | 'Pkb' | 'Csp' | 'Prm';

export type Template = 'Page' | 'Tab' | 'Toc';

export type CustomSettingsType = 'List' | 'Hierarchy';

export type DeploymentStatus = 'InDevelopment' | 'Deployed';

export type PlatformEventType = 'HighVolume' | 'StandardVolume' | 'ExternalEvent';

export type SharingModel =
  | 'Private'
  | 'Read'
  | 'ReadSelect'
  | 'ReadWrite'
  | 'ReadWriteTransfer'
  | 'FullAccess'
  | 'ControlledByParent'
  | 'ControlledByLeadOrContact'
  | 'ControlledByCampaign';

export type Gender =
  | 'Neuter'
  | 'Masculine'
  | 'Feminine'
  | 'AnimateMasculine'
  | 'ClassI'
  | 'ClassIII'
  | 'ClassV'
  | 'ClassVII'
  | 'ClassIX'
  | 'ClassXI'
  | 'ClassXIV'
  | 'ClassXV'
  | 'ClassXVI'
  | 'ClassXVII'
  | 'ClassXVIII';

export type PlatformEventPublishBehavior = 'PublishAfterCommit' | 'PublishImmediately';

export type StartsWith = 'Consonant' | 'Vowel' | 'Special';

export type SetupObjectVisibility = 'PackageProtected' | 'Protected' | 'Public';

export type WebLinkAvailability = 'online' | 'offline';

export type WebLinkDisplayType = 'link' | 'button' | 'massActionButton';

export type Encoding =
  | 'UTF-8'
  | 'ISO-8859-1'
  | 'Shift_JIS'
  | 'ISO-2022-JP'
  | 'EUC-JP'
  | 'ks_c_5601-1987'
  | 'Big5'
  | 'GB2312'
  | 'Big5-HKSCS'
  | 'x-SJIS_0213';

export type WebLinkType = 'url' | 'sControl' | 'javascript' | 'page' | 'flow';

export type WebLinkWindowType = 'newWindow' | 'sidebar' | 'noSidebar' | 'replace' | 'onClickJavaScript';

export type WebLinkPosition = 'fullScreen' | 'none' | 'topLeft';

export type Article = 'None' | 'Indefinite' | 'Definite';

export type CaseType =
  | 'Nominative'
  | 'Accusative'
  | 'Genitive'
  | 'Dative'
  | 'Inessive'
  | 'Elative'
  | 'Illative'
  | 'Adessive'
  | 'Ablative'
  | 'Allative'
  | 'Essive'
  | 'Translative'
  | 'Partitive'
  | 'Objective'
  | 'Subjective'
  | 'Instrumental'
  | 'Prepositional'
  | 'Locative'
  | 'Vocative'
  | 'Sublative'
  | 'Superessive'
  | 'Delative'
  | 'Causalfinal'
  | 'Essiveformal'
  | 'Termanative'
  | 'Distributive'
  | 'Ergative'
  | 'Adverbial'
  | 'Abessive'
  | 'Comitative';

export type Possessive = 'None' | 'First' | 'Second';

export type SiteClickjackProtectionLevel = 'AllowAllFraming' | 'External' | 'SameOriginOnly' | 'NoFraming';

export type SiteRedirect = 'Permanent' | 'Temporary';

export type SiteType = 'Siteforce' | 'Visualforce' | 'ChatterNetwork' | 'ChatterNetworkPicasso';

export type ChartBackgroundDirection = 'TopToBottom' | 'LeftToRight' | 'Diagonal';

export type ChartTheme = 'light' | 'dark';

export type ChartColorPalettes =
  | 'Default'
  | 'gray'
  | 'colorSafe'
  | 'unity'
  | 'justice'
  | 'nightfall'
  | 'sunrise'
  | 'bluegrass'
  | 'tropic'
  | 'heat'
  | 'dusk'
  | 'pond'
  | 'watermelon'
  | 'fire'
  | 'water'
  | 'earth'
  | 'accessible';

export type DashboardFilterOperation =
  | 'equals'
  | 'notEqual'
  | 'lessThan'
  | 'greaterThan'
  | 'lessOrEqual'
  | 'greaterOrEqual'
  | 'contains'
  | 'notContain'
  | 'startsWith'
  | 'includes'
  | 'excludes'
  | 'between';

export type ChartRangeType = 'Auto' | 'Manual';

export type ChartAxis = 'x' | 'y' | 'y2' | 'r';

export type DashboardComponentType =
  | 'Bar'
  | 'BarGrouped'
  | 'BarStacked'
  | 'BarStacked100'
  | 'Column'
  | 'ColumnGrouped'
  | 'ColumnStacked'
  | 'ColumnStacked100'
  | 'Line'
  | 'LineGrouped'
  | 'Pie'
  | 'Table'
  | 'Metric'
  | 'Gauge'
  | 'LineCumulative'
  | 'LineGroupedCumulative'
  | 'Scontrol'
  | 'VisualforcePage'
  | 'Donut'
  | 'Funnel'
  | 'ColumnLine'
  | 'ColumnLineGrouped'
  | 'ColumnLineStacked'
  | 'ColumnLineStacked100'
  | 'Scatter'
  | 'ScatterGrouped'
  | 'FlexTable'
  | 'Image'
  | 'RichText';

export type Fit = 'tile' | 'stretch' | 'original' | 'fitwidth' | 'fitheight';

export type HorizontalAlignment = 'left' | 'center' | 'right';

export type VerticalAlignment = 'top' | 'center' | 'bottom';

export type DashboardComponentFilter =
  | 'RowLabelAscending'
  | 'RowLabelDescending'
  | 'RowValueAscending'
  | 'RowValueDescending';

export type ChartUnits = 'Auto' | 'Integer' | 'Hundreds' | 'Thousands' | 'Millions' | 'Billions' | 'Trillions';

export type DashboardComponentColumnType = 'aggregate' | 'detail' | 'grouping';

export type ChartLegendPosition = 'Right' | 'Bottom' | 'OnChart';

export type DashboardType = 'SpecifiedUser' | 'LoggedInUser' | 'MyTeamUser';

export type DashboardComponentSize = 'Narrow' | 'Medium' | 'Wide';

export type DataModelType = 'Source' | 'Transport' | 'Landing' | 'View' | 'Reference';

export type DataConnectorType =
  | 'SalesforceMarketingCloud'
  | 'SalesforceCommerceCloud'
  | 'StreamingApp'
  | 'SalesforceDotCom'
  | 'AmazonS3'
  | 'SFTP'
  | 'UPLOAD'
  | 'IngestApi'
  | 'SalesforceInteractionStudio'
  | 'CuratedEntity'
  | 'GoogleCloudStorage'
  | 'AzureBlob'
  | 'ExternalPlatform'
  | 'ConversationStorage'
  | 'Snowflake'
  | 'BIGQUERY'
  | 'S3Arn';

export type DataObjectType = 'Object' | 'Table' | 'Api';

export type DataImportDataExtractMethods = 'FULL_REFRESH' | 'NUMERIC_CDC' | 'DATETIME_CDC';

export type DataImportRefreshFrequency =
  | 'NONE'
  | 'MINUTES_15'
  | 'HOURLY'
  | 'DAILY'
  | 'WEEKLY'
  | 'MONTHLY'
  | 'NOT_APPLICABLE';

export type DataImportRefreshMode =
  | 'FULL_REFRESH'
  | 'UPSERT'
  | 'INCREMENTAL'
  | 'REPLACE'
  | 'NEAR_REAL_TIME_INCREMENTAL'
  | 'NOT_APPLICABLE';

export type ExpsSetProcessType =
  | 'Bre'
  | 'TransactionJournal'
  | 'TierProcessing'
  | 'CustomLoyalty'
  | 'TestProcess'
  | 'AIAcceleratorSubscriberChurnPrediction'
  | 'DefaultPricing'
  | 'RecordAlert'
  | 'ShipAndDebit'
  | 'WarrantyClaim'
  | 'ProductQualification'
  | 'ProductCategoryQualification';

export type DecisionMatrixType = 'Standard' | 'Grouped';

export type DecisionMatrixColumnType = 'Input' | 'Output';

export type DecisionMatrixDataType =
  | 'Text'
  | 'Number'
  | 'NumberRange'
  | 'TextRange'
  | 'Currency'
  | 'Percent'
  | 'Boolean';

export type DecisionMatrixDefStatus = 'Draft' | 'Active' | 'Inactive' | 'InvalidDraft' | 'Obsolete';

export type DecisionTableCollectOperator = 'None' | 'Sum' | 'Minimum' | 'Maximum' | 'Count';

export type DecisionTableConditionType = 'All' | 'Any' | 'Custom';

export type DecisionTableDataSourceType = 'SingleSobject' | 'MultipleSobjects' | 'CsvUpload';

export type DTParameterDataType = 'String' | 'Number' | 'Date' | 'Boolean' | 'Percent' | 'Currency';

export type DecisionTableOperator =
  | 'Equals'
  | 'NotEquals'
  | 'LessThan'
  | 'LessOrEqual'
  | 'GreaterThan'
  | 'GreaterOrEqual'
  | 'Matches'
  | 'ExistsIn'
  | 'DoesNotExistIn';

export type DecisionTableSortType = 'None' | 'AscNullFirst' | 'AscNullLast' | 'DescNullFirst' | 'DescNullLast';

export type DecisionTableParameterType = 'INPUT' | 'OUTPUT';

export type DTSourceCriteriaOperator =
  | 'Equals'
  | 'NotEquals'
  | 'GreaterThan'
  | 'GreaterOrEqual'
  | 'LessThan'
  | 'LessOrEqual'
  | 'Matches'
  | 'ExistsIn'
  | 'DoesNotExistIn';

export type DTSourceCriteriaValueType = 'Literal' | 'Parameter' | 'Picklist' | 'Formula' | 'Lookup';

export type DecisionTableHitPolicy =
  | 'UniqueValues'
  | 'AnyValue'
  | 'Priority'
  | 'FirstMatch'
  | 'CollectOperator'
  | 'OutputOrder'
  | 'RuleOrder';

export type DecisionTableStatus = 'Draft' | 'Inactive' | 'Active' | 'ActivationInProgress';

export type DecisionTableType = 'LowVolume' | 'HighVolume' | 'Advanced';

export type DecisionTableUsageType =
  | 'Bre'
  | 'TransactionJournal'
  | 'TierProcessing'
  | 'CustomLoyalty'
  | 'TestProcess'
  | 'AiAcceleratorSubscriberChurnPrediction'
  | 'DefaultPricing'
  | 'RecordAlert'
  | 'ShipAndDebit'
  | 'WarrantyClaim'
  | 'ProductQualification'
  | 'ProductCategoryQualification';

export type FTestTopLevelSelection = 'SelOne' | 'SelTwo' | 'SelThree';

export type SchedulingCategory = 'B' | 'A';

export type SchedulingObjectiveType = 'AgentPreference' | 'BalanceShifts' | 'BalanceNonStandardShifts';

export type ObjectiveParameterKey = 'DaysBack' | 'DaysAhead';

export type FTestOnOffSelection = 'On' | 'Off';

export type FTestSeasonSelection = 'Spring' | 'Summer' | 'Autumn' | 'Winter';

export type PipelineInspectionMetric =
  | 'TotalPipeline'
  | 'ClosedWon'
  | 'Commit'
  | 'MostLikely'
  | 'BestCase'
  | 'OpenPipeline'
  | 'ClosedLost'
  | 'MovedIn'
  | 'MovedOut';

export type VirtualVisitComprehendServiceType = 'ComprehendService' | 'ComprehendMedicalService';

export type VirtualVisitUsageType =
  | 'CHIME'
  | 'INTELLIGENT_FORM_READER'
  | 'SENTIMENT_ANALYSIS'
  | 'KEY_PHRASE_EXTRACTION'
  | 'ENTITY_DETECTION';

export type VirtualVisitVisitRegion =
  | 'us-east-1'
  | 'us-east-2'
  | 'us-west-1'
  | 'us-west-2'
  | 'af-south-1'
  | 'ap-east-1'
  | 'ap-south-1'
  | 'ap-northeast-1'
  | 'ap-northeast-2'
  | 'ap-northeast-3'
  | 'ap-southeast-1'
  | 'ap-southeast-2'
  | 'ca-central-1'
  | 'eu-central-1'
  | 'eu-west-1'
  | 'eu-west-2'
  | 'eu-west-3'
  | 'eu-south-1'
  | 'eu-north-1'
  | 'me-south-1'
  | 'sa-east-1';

export type MobileSecurityMobilePlatform = 'Android' | 'iOS';

export type MobileSecurityPolicyRuleValueType = 'Boolean' | 'Text' | 'TextList';

export type MobileSecurityPolicySeverityLevel = 'Warn' | 'Error' | 'Critical' | 'Info';

export type MobileSecurityPolicyType =
  | 'JailbrokenDevice'
  | 'MinimumOsVersion'
  | 'MaximumOsVersion'
  | 'MinimumSecurityPatchVersion'
  | 'ManInMiddle'
  | 'MinimumAppVersion'
  | 'MininumAppVersion'
  | 'MaximumAppVersion'
  | 'DevicePasscode'
  | 'BlockedDeviceList'
  | 'BlockCustomKeyboard'
  | 'BlockFileBackup'
  | 'Block3dTouch'
  | 'Screenshot'
  | 'LogScreenshot'
  | 'LogEmail'
  | 'LogPhonecall'
  | 'LogTextmessage'
  | 'LogPolicyResult'
  | 'BlockMicrophone'
  | 'BlockCamera'
  | 'MalwareDetection'
  | 'DisableUrlCaching'
  | 'MaxOffline'
  | 'LogoutAfterRestart'
  | 'LogoutOnBiometricChange'
  | 'BlockOsSharing'
  | 'BrowserUriScheme'
  | 'CheckBiometric'
  | 'BlockContacts'
  | 'BlockCalendar'
  | 'PhonecallUriScheme'
  | 'AllowedDeviceList'
  | 'LogCertPin';

export type LearningAchievementType = 'LearningCourse' | 'LearningProgram' | 'AchievementGroup' | 'Custom';

export type RecordAlertDataSourceType = 'APEX' | 'BusinessRulesEngine';

export type ExtensionPointName =
  | 'Commerce_Domain_Cart_Calculate'
  | 'Commerce_Domain_Tax_CartCalculator'
  | 'Commerce_Domain_Inventory_CartCalculator'
  | 'Commerce_Domain_Promotions_CartCalculator'
  | 'Commerce_Domain_Pricing_CartCalculator'
  | 'Commerce_Domain_Shipping_CartCalculator'
  | 'Commerce_Domain_Inventory_Service'
  | 'Commerce_Domain_Pricing_Service'
  | 'Commerce_Domain_Tax_Service'
  | 'Commerce_Domain_Checkout_CreateOrder'
  | 'Product_Inventory_CheckInventory'
  | 'CommerceDx_Pricing'
  | 'CommerceDx_Inventory'
  | 'CommerceDx_TicketProcessing'
  | 'Commerce_Integration_B2CEOrderImport'
  | 'Cart_Prices_Extension'
  | 'Checkout_CartSummary_ComputePromotions'
  | 'Checkout_CartSummary_PriceCart'
  | 'Checkout_Update_CalcCartSummary'
  | 'Checkout_CartSummary_Inventory'
  | 'Commerce_Domain_OrderManagement_Product'
  | 'CommerceDx_Endpoint_PricingSample_Service'
  | 'CommerceDx_Endpoint_InventorySample_Service'
  | 'Commerce_Endpoint_Account_Addresses'
  | 'Commerce_Endpoint_Account_Address'
  | 'Commerce_Endpoint_Catalog_Products'
  | 'Commerce_Endpoint_Catalog_Product'
  | 'Commerce_Endpoint_Search_Products'
  | 'Commerce_Endpoint_Search_ProductSearch'
  | 'Commerce_Endpoint_Search_ProductsByCategory';

export type RegistryProviderType = 'Price' | 'Promotions' | 'Inventory' | 'Shipment' | 'Tax' | 'Extension';

export type MappingBehaviorType = 'PointInTime' | 'CurrentValue';

export type MobileSecurityCertPinType = 'AuthServer' | 'Resource';

export type SemanticDataObjectType = 'DMO' | 'DLO' | 'CIO';

export type ActionableListSourceType = 'CrmAnalytics' | 'DataCloudPlatform';

export type DatasetColumnDataType = 'Dimensions' | 'Dates' | 'Measures';

export type DatatableDataType =
  | 'Boolean'
  | 'Currency'
  | 'Date'
  | 'DateTime'
  | 'Email'
  | 'Location'
  | 'Number'
  | 'Percent'
  | 'Phone'
  | 'Text'
  | 'Url';

export type ProviderSearchObjectMapping = 'HealthcareProvider' | 'HealthcarePractitionerFacility';

export type SourceSystemFieldRole =
  | 'NotApplicable'
  | 'Patient'
  | 'ServiceProvider'
  | 'RemoteMonitoringPatient'
  | 'RemoteMonitoringDevice';

export type CareLimitTypeMetricType = 'Money' | 'Percentage' | 'Amount' | 'Text';

export type AssessmentConfigurationOption = string;

export type AssessmentType = string;

export type SchedulingRuleType = 'M' | 'B' | 'W' | 'A' | 'RestTimeMinutes' | 'Q' | 'C' | 'LimitNonstandardShifts';

export type SchedulingParameterKey = 'L' | 'R' | 'W' | 'T' | 'C' | 'ConsiderAbsence' | 'ConsiderSTM';

export type CareProviderAfflType = string;

export type AssociationType = string;

export type AssociationEventType = 'Create' | 'Update';

export type AssociationStatusType = 'Draft' | 'Active' | 'Inactive';

export type SemanticDefinitionType = 'SEMANTIC_RELATIONSHIP' | 'SEMANTIC_DIMENSION' | 'SEMANTIC_MEASUREMENT';

export type SemanticDimensionDataType = 'TEXT' | 'DATE';

export type SemanticAggregationType = 'SUM' | 'AVG' | 'MIN' | 'MAX' | 'COUNT';

export type SemanticMeasurementDataType = 'NUMERIC' | 'DURATION';

export type SemanticRelationshipJoinType = 'LEFT' | 'INNER';

export type ShiftSegmentTypeCategory = 'Work' | 'Break' | 'NonWork';

export type ACPStatus = 'New' | 'Pending' | 'Deployed';

export type ApexCodeUnitStatus = 'Inactive' | 'Active' | 'Deleted';

export type ContentAssetFormat = 'Original' | 'ZippedVersions';

export type ContentAssetAccess = 'VIEWER' | 'COLLABORATOR' | 'INFERRED';

export type DataPipelineType = string;

export type DiscoveryAlgorithmType = 'Glm' | 'Gbm' | 'Xgboost' | 'Drf' | 'Best';

export type DiscoveryModelFieldType = 'Text' | 'Number' | 'Date';

export type DiscoveryModelRuntimeType =
  | 'Discovery'
  | 'H2O'
  | 'Py36Tensorflow244'
  | 'Py37Tensorflow270'
  | 'Py37Scikitlearn102';

export type DiscoveryPredictionType = 'Unknown' | 'Regression' | 'Classification' | 'MulticlassClassification';

export type DiscoveryModelSourceType = 'Discovery' | 'UserUpload';

export type DiscoveryAIModelStatus =
  | 'Disabled'
  | 'Uploading'
  | 'UploadFailed'
  | 'UploadCompleted'
  | 'Validating'
  | 'ValidationFailed'
  | 'ValidationCompleted'
  | 'Enabled';

export type DiscoveryAIModelTransformationType =
  | 'TypographicClustering'
  | 'SentimentAnalysis'
  | 'FreeTextClustering'
  | 'NumericalImputation'
  | 'CategoricalImputation'
  | 'TimeSeriesForecast'
  | 'ExtractMonthOfYear'
  | 'ExtractDayOfWeek';

export type DiscoveryStoryAutopilotStatus = 'Enabled' | 'Disabled';

export type DiscoveryStoryOutcomeGoal = 'Minimize' | 'Maximize' | 'None';

export type DiscoveryStoryOutcomeType = 'Count' | 'Text' | 'Categorical' | 'Number';

export type DiscoveryStorySourceType = 'AnalyticsDataset' | 'Report' | 'LiveDataset';

export type DocumentGenerationMechanism = 'ClientSide' | 'ServerSide';

export type DocumentTemplateStatus = 'Draft' | 'Active' | 'Archived';

export type TargetTokenItemObject = 'OPPORTUNITY_LINE_ITEM' | 'ORDER_LINE_ITEM' | 'QUOTE_LINE_ITEM';

export type TargetTokenObject = 'CONTRACT' | 'OPPORTUNITY' | 'ORDER' | 'QUOTE';

export type TokenMappingMethodType = 'OmniDataTransform' | 'CustomClass';

export type TokenMappingType = 'JSON' | 'SalesforceObject';

export type DocumentTemplateType = 'Web' | 'MicrosoftWord' | 'MicrosoftPowerpoint' | 'Microsoft365Word';

export type DocumentTemplateUsageType = 'Contract_Lifecycle_Management' | 'Tearsheets';

export type EmailTemplateStyle =
  | 'none'
  | 'freeForm'
  | 'formalLetter'
  | 'promotionRight'
  | 'promotionLeft'
  | 'newsletter'
  | 'products';

export type EmailTemplateType = 'text' | 'html' | 'custom' | 'visualforce';

export type EmailTemplateUiType = 'Aloha' | 'SFX' | 'SFX_Sample';

export type PlatformSchemaContentType = string;

export type SControlContentSource = 'HTML' | 'URL' | 'Snippet';

export type StaticResourceCacheControl = 'Private' | 'Public';

export type FlexiPageType =
  | 'AppPage'
  | 'ObjectPage'
  | 'RecordPage'
  | 'HomePage'
  | 'ForecastingPage'
  | 'MailAppAppPage'
  | 'CommAppPage'
  | 'CommForgotPasswordPage'
  | 'CommLoginPage'
  | 'CommObjectPage'
  | 'CommQuickActionCreatePage'
  | 'CommRecordPage'
  | 'CommRelatedListPage'
  | 'CommSearchResultPage'
  | 'CommGlobalSearchResultPage'
  | 'CommSelfRegisterPage'
  | 'CommThemeLayoutPage'
  | 'UtilityBar'
  | 'RecordPreview'
  | 'EmbeddedServicePage'
  | 'CommCheckoutPage'
  | 'CommOrderConfirmationPage'
  | 'CommFlowPage'
  | 'EmailTemplatePage'
  | 'ApplicationLayout'
  | 'CommNoSearchResultsPage'
  | 'CommElectronicSignaturePage'
  | 'CommContractDocumentsPage'
  | 'EmailContentPage'
  | 'ServiceDocument'
  | 'LandingPage'
  | 'CdpRecordPage'
  | 'SlackAppHome'
  | 'SlackMessage'
  | 'SlackModal'
  | 'SlackNotification'
  | 'EasyHomePage'
  | 'CardPage'
  | 'VoiceExtension'
  | 'ConfiguratorAppPage';

export type ViewTargetType = string;

export type DiscoveryFieldMapSourceType = 'SalesforceField' | 'AnalyticsDatasetField';

export type DiscoveryFilterOperator =
  | 'Equal'
  | 'NotEqual'
  | 'GreaterThan'
  | 'GreaterThanOrEqual'
  | 'LessThan'
  | 'LessThanOrEqual'
  | 'Between'
  | 'NotBetween'
  | 'InSet'
  | 'NotIn'
  | 'Contains'
  | 'StartsWith'
  | 'EndsWith'
  | 'IsNull'
  | 'IsNotNull';

export type DiscoveryFilterFieldType = 'Text' | 'Number' | 'Date' | 'DateTime' | 'Boolean';

export type DiscoveryFilterValueType = 'Constant' | 'PlaceHolder';

export type DiscoveryOutcomeGoal = 'Minimize' | 'Maximize' | 'None';

export type DiscoveryPushbackType = 'AiRecordInsight' | 'Direct';

export type GenerationMechanism = 'ClientSide' | 'ServerSide';

export type PreviewType = 'PDF' | 'Thumbnail';

export type DupeActionType = 'Allow' | 'Block';

export type DupeSecurityOptionType = 'EnforceSharingRules' | 'BypassSharingRules';

export type ConfigType =
  | 'AnchorString'
  | 'SignerRoles'
  | 'SyncFileSizeLimit'
  | 'CalloutTimeout'
  | 'EnvelopesLastPollDate'
  | 'CalloutNamedCredential'
  | 'eSignVendorAccountId'
  | 'RecipientsCustomClass'
  | 'DocumentsCustomClass';

export type ConfigGroup =
  | 'AnchorTabSetting'
  | 'EnvelopeObjectLimits'
  | 'CalloutConfigurationSetup'
  | 'Envelope'
  | 'eSignVendorAccount'
  | 'CustomClassSetting';

export type Vendor = string;

export type EmailServicesAttOptions = 'None' | 'TextOnly' | 'BinaryOnly' | 'All' | 'NoContent';

export type EmailServicesErrorAction = 'UseSystemDefault' | 'Bounce' | 'Discard' | 'Requeue';

export type EmbeddedServiceAuthMethod = 'CommunitiesLogin' | 'CustomLogin';

export type EmbeddedServiceDeploymentFeature = 'None' | 'EmbeddedMessaging' | 'LiveAgent' | 'Flows' | 'FieldService';

export type EmbeddedServiceDeploymentType = 'Web' | 'Mobile';

export type EmbeddedServiceComponentBundleType = 'AuraDefinitionBundle' | 'LightningComponentBundle';

export type EmbeddedServiceCustomComponentType =
  | 'LA_Prechat'
  | 'LA_Minimized'
  | 'LA_PlainTextChatMessage'
  | 'LA_ChatHeader'
  | 'MIAW_Prechat';

export type EmbeddedServiceFeature =
  | 'NotInUse'
  | 'Base'
  | 'LiveAgent'
  | 'FieldService'
  | 'Flows'
  | 'ChannelMenu'
  | 'EmbeddedMessaging';

export type EmbeddedServiceLabelKey =
  | 'LA_Container_Base_Close'
  | 'LA_Container_Base_Minimize'
  | 'LA_Container_Base_EndOfDialog'
  | 'LA_Container_Base_MinimizedContainerAssistiveText'
  | 'LA_Chat_Body_ChatWindowAgent'
  | 'LA_Chat_Body_InputTextPlaceholder'
  | 'LA_Chat_Body_AgentTypingUpdate'
  | 'LA_Chat_Body_Send'
  | 'LA_Chat_Body_ChatStartTime'
  | 'LA_Chat_Body_MessageAreaTransferred'
  | 'LA_Chat_Body_FileTransferCanceled'
  | 'LA_Chat_Body_FileTransferSuccess'
  | 'LA_Chat_Body_FileTransferFailure'
  | 'LA_Chat_Body_FileTransferRequested'
  | 'LA_Chat_Body_TransferFailed'
  | 'LA_Chat_ExtendedHeader_ShowExtendedHeader'
  | 'LA_Chat_ExtendedHeader_HideExtendedHeader'
  | 'LA_Chat_ExtendedHeader_ChatStateHeaderGreeting'
  | 'LA_Chat_ExtendedHeader_SaveTranscript'
  | 'LA_Chat_ExtendedHeader_EndChatAction'
  | 'LA_Chat_FileTransfer_FileUpload'
  | 'LA_Chat_FileTransfer_UploadFile'
  | 'LA_Chat_FileTransfer_SelectNewFile'
  | 'LA_Chat_FileTransfer_UsePreviousElementToUploadFile'
  | 'LA_Chat_FileTransfer_RemoveFile'
  | 'LA_Chat_Minimized_MessageNotification'
  | 'LA_Chat_Minimized_SingleMessageNotification'
  | 'LA_Chat_Minimized_AgentSaysNotification'
  | 'LA_Chat_Minimized_IdleTimeoutMinimizedWarning'
  | 'LA_Chat_Minimized_IdleTimeoutMinimizedEndChat'
  | 'LA_Chat_Ended_ChatEnd'
  | 'LA_Chat_Ended_ChatEndAgent'
  | 'LA_Chat_Ended_ChatEndConnection'
  | 'LA_Chat_Ended_ChatButtonClose'
  | 'LA_Chat_Ended_PostChatButton'
  | 'LA_Chat_Ended_IdleTimeoutEndChatMessage'
  | 'LA_Chat_Reconnecting_ReconnectingChasitorIssue'
  | 'LA_Chat_Reconnecting_ReconnectingMinimizedMessage'
  | 'LA_Chat_Timeout_IdleTimeoutWarningQuestion'
  | 'LA_Chat_AgentTransfer_BannerInProgressTransfer'
  | 'LA_Chat_AgentTransfer_MinimizedInProgressTransfer'
  | 'LA_Chat_AgentTransfer_BannerTransferred'
  | 'LA_Chat_AgentTransfer_BannerReconnected'
  | 'LA_Chat_CloseConfirmation_ChatStateHeader'
  | 'LA_Chat_CloseConfirmation_ChatStateBody'
  | 'LA_Chat_CloseConfirmation_ChatStateResume'
  | 'LA_Chat_CloseConfirmation_ChatStateEnd'
  | 'LA_Chat_UnseenMessage_UnseenMessage'
  | 'LA_Chat_UnseenMessage_SingleUnseenMessage'
  | 'LA_OfflineSupport_SupportForm_HeaderText'
  | 'LA_OfflineSupport_Error_ErrorDialogTitle'
  | 'LA_OfflineSupport_Error_ErrorDialogBody'
  | 'LA_OfflineSupport_Error_ErrorDialogButton'
  | 'LA_OfflineSupport_SupportForm_SupportFormTitle'
  | 'LA_OfflineSupport_SupportForm_SupportFormSubtitle'
  | 'LA_OfflineSupport_SupportForm_SupportFormButton'
  | 'LA_OfflineSupport_SupportForm_BannerAltText'
  | 'LA_OfflineSupport_CloseConfirmation_ConfirmationDialogTitle'
  | 'LA_OfflineSupport_CloseConfirmation_ConfirmationDialogBody'
  | 'LA_OfflineSupport_CloseConfirmation_ConfirmationDialogButton'
  | 'LA_OfflineSupport_Minimized_ConfirmationMinimizedText'
  | 'LA_OfflineSupport_Minimized_ErrorMinimizedText'
  | 'LA_PostChat_Base_PostChat'
  | 'LA_PreChat_Base_LiveChat'
  | 'LA_PreChat_Base_Instructions'
  | 'LA_PreChat_Base_BannerAltText'
  | 'LA_PreChat_Base_PrechatAssistiveText'
  | 'LA_PreChat_Base_StartChat'
  | 'LA_PreChat_Base_FieldError'
  | 'LA_Waiting_WithoutQueuePos_WaitingGreeting'
  | 'LA_Waiting_WithoutQueuePos_WaitingDefaultName'
  | 'LA_Waiting_WithoutQueuePos_WaitingMessage'
  | 'LA_Waiting_WithoutQueuePos_WaitingCancelChatRequest'
  | 'LA_Waiting_WithQueuePos_WaitingQueuePosMessageFirstLine'
  | 'LA_Waiting_WithQueuePos_WaitingQueuePosMessageSecondLine'
  | 'LA_Waiting_WithQueuePos_WaitingQueuePosZeroMessage'
  | 'LA_Waiting_WithQueuePos_WaitingQueuePosConnectingMessage'
  | 'LA_Waiting_WithQueuePos_WaitingQueuePosMaxNumber'
  | 'LA_Waiting_WithQueuePos_WaitingQueuePosMaxMessageFirstLine'
  | 'LA_Waiting_WithQueuePos_WaitingQueuePosMaxMessageSecondLine'
  | 'LA_Waiting_Minimized_MinimizedWaitingMessage'
  | 'LA_Waiting_Minimized_MinimizedQueuePosMessage'
  | 'LA_Waiting_Minimized_MinimizedQueuePosZeroMessage'
  | 'LA_Waiting_Minimized_MinimizedQueuePosAssistiveMessage'
  | 'LA_Waiting_Minimized_MinimizedQueuePosZeroAssistiveMessage'
  | 'LA_Waiting_Error_ErrorNoAgentTitle'
  | 'LA_Waiting_Error_ErrorNoAgentHeader'
  | 'LA_Waiting_Error_ErrorNoAgentBodyApology'
  | 'LA_Waiting_Error_ErrorBlockedTitleAndHeader'
  | 'LA_Waiting_Error_ErrorBlockedBody'
  | 'LA_Waiting_Error_ErrorBlockedCloseButton'
  | 'LA_Waiting_Error_ErrorNoConnectionTitle'
  | 'LA_Waiting_Error_ErrorNoConnectionHeader'
  | 'LA_Waiting_Error_ErrorNoConnectionBodyApology'
  | 'LA_Waiting_Error_ErrorTryAgainButton'
  | 'LA_Waiting_Error_ErrorExitChatButton'
  | 'LA_Waiting_CloseConfirmation_WaitingStateHeader'
  | 'LA_Waiting_CloseConfirmation_WaitingStateBodyApology'
  | 'LA_Waiting_CloseConfirmation_WaitingStateLeave'
  | 'LA_Waiting_CloseConfirmation_WaitingStateContinue'
  | 'LA_Chat_Timeout_IdleTimeoutWarningRequest'
  | 'LA_Waiting_Error_ErrorNoAgentBodyRequest'
  | 'LA_Waiting_Error_ErrorNoConnectionBodyRequest'
  | 'LA_Waiting_CloseConfirmation_WaitingStateBodyWarning'
  | 'LA_General_CloseSessionWarningTitle'
  | 'LA_General_CloseSessionWarningBody'
  | 'LA_General_CloseSessionWarningButton'
  | 'LA_Chat_Body_ChooseOption'
  | 'LA_Waiting_Base_BannerAssistiveText'
  | 'LA_Chat_Group_Chat_HeaderTitle'
  | 'LA_Chat_Group_Chat_ExtendedHeaderGreeting'
  | 'LA_Chat_Group_Chat_AgentJoinedChat'
  | 'LA_Chat_Group_Chat_AgentLeftChat'
  | 'LA_Chat_Group_Chat_MinimizedStateMessage'
  | 'LA_Chat_WithQueuePos_QueuePosTransferringMessage'
  | 'LA_Chat_Ended_ChatEndChatbot'
  | 'LA_Chat_Body_InputTextAssistiveText'
  | 'LA_Waiting_Header_Text'
  | 'LA_PreChat_Terms_And_Conditions'
  | 'LA_PreChat_Base_Terms_And_Conditions_Acknowledgement'
  | 'FS_Container_Base_Back'
  | 'FS_Container_AuthenticationFailure_Title'
  | 'FS_Container_AuthenticationFailure_Body'
  | 'FS_Container_AuthenticationFailure_Button'
  | 'FS_AppointmentDetail_Error_AccessDenied'
  | 'FS_AppointmentDetail_Error_NoAppointmentFound'
  | 'FS_AppointmentDetail_Error_ButtonOK'
  | 'FS_AppointmentList_Base_ActiveAppointmentTab'
  | 'FS_AppointmentList_Base_ClosedAppointmentTab'
  | 'FS_AppointmentList_Base_Header'
  | 'FS_AppointmentList_Base_NewAppointmentButtonLabel'
  | 'FS_AppointmentList_Error_GenericErrorStatement'
  | 'FS_AppointmentList_Empty_NoAppointmentsTitleUpcomingTab'
  | 'FS_AppointmentList_Empty_NoAppointmentsDescriptionUpcomingTab'
  | 'FS_AppointmentList_Empty_NoAppointmentsTitlePastTab'
  | 'FS_AppointmentList_Empty_NoAppointmentsDescriptionPastTab'
  | 'FS_Confirmation_Base_Scheduled'
  | 'FS_Confirmation_Base_Assigned'
  | 'FS_Confirmation_Base_Arriving'
  | 'FS_Confirmation_Base_InProgress'
  | 'FS_Confirmation_Base_Dispatched'
  | 'FS_Confirmation_Base_Completed'
  | 'FS_Confirmation_Base_HeaderText'
  | 'FS_Confirmation_Base_AddCalendar'
  | 'FS_Confirmation_Base_ViewAppointment'
  | 'FS_Flows_Error_Title'
  | 'FS_Flows_Error_Body'
  | 'FS_Flows_Error_ConfirmButton'
  | 'FS_Flows_Error_CancelOrModifyError'
  | 'FS_Flows_NewAppointmentCloseConfirmation_Title'
  | 'FS_Flows_NewAppointmentCloseConfirmation_Body'
  | 'FS_Flows_NewAppointmentCloseConfirmation_ButtonClose'
  | 'FS_Flows_NewAppointmentCloseConfirmation_ButtonCancel'
  | 'FS_Flows_CancelAppointmentCloseConfirmation_Title'
  | 'FS_Flows_CancelAppointmentCloseConfirmation_Body'
  | 'FS_Flows_CancelAppointmentCloseConfirmation_ButtonClose'
  | 'FS_Flows_CancelAppointmentCloseConfirmation_ButtonCancel'
  | 'FS_Flows_CancelAppointmentCloseConfirmation_Footer'
  | 'FS_Flows_ModifyAppointmentCloseConfirmation_Title'
  | 'FS_Flows_ModifyAppointmentCloseConfirmation_Body'
  | 'FS_Flows_ModifyAppointmentCloseConfirmation_ButtonClose'
  | 'FS_Flows_ModifyAppointmentCloseConfirmation_ButtonCancel'
  | 'FS_Flows_ModifyAppointmentCloseConfirmation_Footer'
  | 'FS_Scheduling_Base_HeaderText'
  | 'FS_Scheduling_Base_RecommendedTab'
  | 'FS_Scheduling_Base_ByDateTab'
  | 'FS_Scheduling_Base_PreviousWeekAssistiveText'
  | 'FS_Scheduling_Base_NextWeekAssistiveText'
  | 'FS_Scheduling_Base_DatePickerAssistiveText'
  | 'FS_Scheduling_Error_UnexpectedError'
  | 'FS_Scheduling_Error_NoAvailableTimeslotsError'
  | 'FS_Scheduling_Error_NoAvailableTimeslotsByDateError'
  | 'FS_Welcome_Base_GreetingTitle'
  | 'FS_Welcome_Base_NewAppointmentButton'
  | 'FS_Welcome_Base_ExistingAppointmentsButton'
  | 'FS_Confirmation_Base_DoneButton'
  | 'FS_AppointmentList_Error_GenericErrorRequest'
  | 'FS_AppointmentHome_Base_CancelAppointmentButton'
  | 'FS_AppointmentHome_Base_ModifyAppointmentButton'
  | 'FS_AppointmentHome_Base_ErrorTitle'
  | 'FS_Scheduling_Base_TimePickerAssistiveText'
  | 'FS_ResourceDetail_Base_Header'
  | 'FS_AppointmentHome_Base_DefaultCardHeaderText'
  | 'FS_Error_Dialog_Title'
  | 'FS_Error_Dialog_Body'
  | 'FS_Error_Dialog_Confirm_Button'
  | 'CM_Container_Header_Primary_Greeting'
  | 'CM_Container_Header_Secondary_Greeting'
  | 'CM_Container_MenuItems_WebChatAvailable'
  | 'CM_Container_MenuItems_WebChatUnavailable'
  | 'CM_Container_MenuItems_WebChatLoading'
  | 'CM_Container_MenuItems_ChannelLabel'
  | 'CM_Container_Button_AssistiveText'
  | 'CM_Container_MenuItems_AssistiveText'
  | 'CM_Container_MenuItems_WebLinkNewTabAssistiveText'
  | 'CM_Container_MenuItems_EmbeddedMessagingChatLoading'
  | 'EM_Container_Base_DefaultHeaderText'
  | 'EM_Container_Base_Minimize'
  | 'EM_Container_Base_Close'
  | 'EM_Container_Base_CloseConversation'
  | 'EM_Container_Base_DefaultMinimizedText'
  | 'EM_Container_Base_MinimizedButtonAssistiveText'
  | 'EM_Container_Base_MinimizedNotifDismissButtonAssistiveText'
  | 'EM_Container_Base_HeaderGreetingAnnouncement'
  | 'EM_Container_Base_NinePlusUnseenMessageCount'
  | 'EM_Container_Base_ZeroUnseenMessagesAssistiveText'
  | 'EM_Container_Base_UnseenMessagesAssistiveText'
  | 'EM_Container_Base_NinePlusUnseenMessagesAssistiveText'
  | 'EM_Container_Base_InputFooterTextAreaPlaceHolder'
  | 'EM_Container_Base_PrechatFirstName'
  | 'EM_Container_Base_PrechatLastName'
  | 'EM_Container_Base_PrechatSubject'
  | 'EM_Container_Base_PrechatEmail'
  | 'EM_Container_Base_BeforeUnloadWarningMessage'
  | 'EM_Container_Base_StartBookendText'
  | 'EM_Container_Base_EndBookendText'
  | 'EM_Container_Base_ChatMessageMetadataAssistiveText'
  | 'EM_Container_Base_ParticipantJoinText'
  | 'EM_Container_Base_ParticipantLeaveText'
  | 'EM_Container_Base_InputFooterTextAreaAssistiveText'
  | 'EM_Container_Base_InputFooterSendButtonAssistiveText'
  | 'EM_Container_Base_PrechatStateSubmitButton'
  | 'EM_Container_Base_InvalidEmailFormFieldError'
  | 'EM_Container_Base_RequiredFormFieldError'
  | 'EM_Container_Base_NotificationDismissButtonText'
  | 'EM_Container_Base_ConversationEndedMinimizedText'
  | 'EM_Container_Base_ExpiredJWT'
  | 'EM_Chat_FileTransfer_SelectNewFileText'
  | 'EM_PreChat_Base_PrechatCustomFieldLabel'
  | 'EM_Chat_FileTransfer_FileSendingText'
  | 'EM_Chat_FileTransfer_DownloadFileButtonTitle'
  | 'EM_Chat_FileTransfer_SelectFileAttachmentButtonTitle'
  | 'EM_Chat_FileTransfer_CancelFileAttachmentButtonTitle'
  | 'EM_Chat_FileTransfer_DownloadFileButtonAssistiveText'
  | 'EM_Chat_FileTransfer_SelectFileAttachmentButtonAssistiveText'
  | 'EM_Chat_FileTransfer_CancelFileAttachmentButtonAssistiveText'
  | 'EM_Chat_ChatBody_Sent'
  | 'EM_Chat_ChatBody_Delivered'
  | 'EM_Chat_ChatBody_Read'
  | 'EM_Chat_ChoicesMessage_MenuAssistiveText'
  | 'EM_Chat_ChoicesSelectionResponse_PlaceholderText'
  | 'EM_Chat_ChoicesMessage_ButtonsAssistiveText'
  | 'EM_Container_Base_HeaderAnnouncementTransferRequestSuccess'
  | 'EM_Container_Base_HeaderAnnouncementTransferRequestFailure'
  | 'EM_Container_Base_SystemMessageTransferRequestSuccess'
  | 'EM_Container_Base_SystemMessageTransferRequestFailure'
  | 'EM_Container_Base_SystemMessageTransferRequestTryAgain'
  | 'EM_Chat_ChatBody_AgentTypingIndicatorAssistiveText'
  | 'EM_Chat_ChatBody_ChatbotTypingIndicatorAssistiveText'
  | 'EM_Container_Base_InputFooterTextAreaPlaceholderOnlyParticipant'
  | 'EM_Container_Base_AgentJoinAnnouncement'
  | 'EM_Container_Base_AgentLeaveAnnouncement'
  | 'EM_Container_Base_JWTExpiredAnnouncement'
  | 'EM_Container_Base_ParticipantJoinedText'
  | 'EM_Container_Base_ParticipantLeftText'
  | 'EM_Container_Base_NewMessageText'
  | 'EM_Container_Base_MultipleNewMessagesText'
  | 'EM_Container_Base_JwtExpiredText'
  | 'EM_Container_Base_TransferInitiatedText'
  | 'EM_Container_Base_TransferFailedText'
  | 'EM_Chat_ChatBody_NotSent'
  | 'EM_Chat_ChatBody_SpinnerDefaultAssistiveText'
  | 'EM_Chat_ChatBody_FetchMoreEntriesSpinnerAssistiveText'
  | 'EM_Container_Base_MinimizeButtonAssistiveText'
  | 'EM_Container_Base_CloseButtonAssistiveText'
  | 'EM_Container_Base_ConfirmationDialogMenuItemAssistiveText'
  | 'EM_Container_Base_MinimizedNotificationAssistiveText'
  | 'EM_Container_Base_MinimizedStateAssistiveText'
  | 'EM_Chat_ChatBody_NotRoutedToAgentRoutingResult'
  | 'EM_Container_Base_TitleNotificationSenderDisplayName'
  | 'EM_Container_Base_MessagingIframeTitle'
  | 'EM_Container_Base_FilePreviewIframeTitle'
  | 'EM_Container_Base_FilePreviewIframeCloseButtonTitle'
  | 'EM_Chat_ChatBody_MessageResendButtonText'
  | 'EM_Chat_ChatBody_EstimatedWaitTimeInMinute'
  | 'EM_Chat_ChatBody_EstimatedWaitTimeInMinutes'
  | 'EM_Container_Base_InputFooterEmojiButtonAssistiveText'
  | 'EM_Container_Base_InputFooterEmojiKeyboardAssistiveText'
  | 'EM_Container_Base_PostchatFrameTitle'
  | 'EM_Container_Base_PostchatHeaderText'
  | 'EM_Container_Base_PostchatHeaderBackButtonTitle'
  | 'EM_Container_Base_PostchatHeaderBackButtonAssistiveText'
  | 'EM_Container_Base_PostchatConfirmationDialogTitleText'
  | 'EM_Container_Base_PostchatConfirmationDialogBodyText'
  | 'EM_Container_Base_PostchatConfirmationDialogConfirmButton'
  | 'EM_Container_Base_PostchatConfirmationDialogCancelButton'
  | 'EM_Container_Base_JWTRetrievalFailureText'
  | 'EM_Chat_FileTransfer_MaximumNumberOfFilesAllowedErrorText'
  | 'EM_Chat_FileTransfer_UnsupportedFileTypeErrorText'
  | 'EM_Chat_FileTransfer_FileExceededSizeLimitErrorText'
  | 'EM_PreChat_ChoiceList_PrechatCustomFieldLabel'
  | 'EM_Container_Base_PrechatChoiceListValueNone'
  | 'EM_Container_Base_MenuButtonAssistiveText'
  | 'EM_Container_Base_CloseMenuButtonAssistiveText'
  | 'EM_Chat_ChatBody_Yesterday'
  | 'EM_PreChat_TermsAndConditions'
  | 'EM_Container_Base_ReconnectInProgress'
  | 'EM_Container_Base_ReconnectInProgressAssistiveText'
  | 'EM_Container_Base_MinimizedReconnectInProgress'
  | 'EM_Container_Base_PrechatTermsAndConditionsAcknowledgement'
  | 'EM_Container_Base_ChatWindowAssistiveText';

export type EmbeddedServiceResourceType = 'SettingsFile' | 'ChatInvitation';

export type EmbeddedServiceFlowType =
  | 'FL_Flow'
  | 'FS_NewAppointment'
  | 'FS_ModifyAppointment'
  | 'FS_CancelAppointment'
  | 'LA_Survey';

export type EmbeddedServiceLayoutType = string;

export type EmbeddedServiceQuickActionType = 'Prechat' | 'OfflineCase';

export type EmbeddedServiceFontSize = 'Small' | 'Medium' | 'Large';

export type EmbeddedServiceScenario = 'Sales' | 'Service' | 'Basic';

export type EmbeddedServiceChannelType =
  | 'EmbeddedServiceConfig'
  | 'MessagingChannel'
  | 'Phone'
  | 'CustomURL'
  | 'EmbeddedMessaging';

export type MilestoneTimeUnits = 'Minutes' | 'Hours' | 'Days';

export type EventDeliveryType = 'StartFlow' | 'ResumeFlow';

export type EventRelayAdminState = 'RUN' | 'STOP' | 'PAUSE';

export type EventRelayUsageType = 'AMAZON_EVENTBRIDGE' | 'INTERNAL_MANAGED_SUBSCRIPTIONS' | 'INTERNAL_REPLICATION';

export type ExperienceContainerType = string;

export type ActionLogSchemaType = 'Other' | 'ExpressionSet';

export type EASAppType = 'PublicSector' | 'Loyalty' | 'HealthCloud' | 'IndustryServiceExcellence' | 'IndustriesPricing';

export type EvaluationResult = 'Passed' | 'Failed' | 'NoResult';

export type ExpressionSetStepType =
  | 'Calculation'
  | 'Aggregation'
  | 'MatrixLookup'
  | 'ReferenceProcedure'
  | 'Condition'
  | 'DecisionTableLookup'
  | 'Branch'
  | 'BusinessElement'
  | 'ListEnabledGroup'
  | 'ListFilter';

export type ExpsSetInterfaceSourceType = 'PricingProcedure' | 'QualificationProcedure' | 'Sample';

export type ExpsSetStatus = 'Draft' | 'Active' | 'Inactive' | 'InvalidDraft' | 'Obsolete';

export type BusinessKnowledgeModel =
  | 'CreditPoints'
  | 'DebitPoints'
  | 'IssueVoucher'
  | 'IncreaseUsageForCumulativePromotion'
  | 'UpdateUsageForCumulativePromotion'
  | 'AssignParameterValues'
  | 'RunFlow'
  | 'GetOutputsFromDecisionTable'
  | 'UpdatePointBalance'
  | 'GetMemberPointBalance'
  | 'GetMemberTier'
  | 'BreAggregator'
  | 'GetOutputsFromDecisionMatrix'
  | 'GetMemberAttributesValues'
  | 'UpdateCurrentValueForMemberAttribute'
  | 'BreAggregatorAssignment'
  | 'Crud'
  | 'AssignBadgeToMember'
  | 'CheckMemberBadgeAssignment'
  | 'ChangeMemberTier'
  | 'RunProgramProcess'
  | 'GetMemberPromotions'
  | 'TestCustomElement'
  | 'AIAcceleratorSubscriberChurnPrediction'
  | 'RedeemVoucher'
  | 'ListPrice'
  | 'PriceAdjustmentMatrix'
  | 'SendMail'
  | 'VolumeDiscount'
  | 'GetUserData'
  | 'ListGroupCalculation'
  | 'RecordAlert'
  | 'AutomatedClaimsProcessingValidation'
  | 'EvaluateQualification'
  | 'SampleBusinessElementWithContext'
  | 'EvaluateDisqualification'
  | 'SampleDynamicCustomElement'
  | 'AttributeDiscount'
  | 'GroupingAndAggregatePricing'
  | 'ManualDiscount'
  | 'SubscriptionPricing'
  | 'Proration'
  | 'BundleDiscount'
  | 'ListGroup';

export type ExpsSetConditionOperator =
  | 'Equals'
  | 'NotEquals'
  | 'GreaterThan'
  | 'GreaterThanOrEquals'
  | 'LessThan'
  | 'LessThanOrEquals'
  | 'Contains'
  | 'DoesNotContain'
  | 'IsNull'
  | 'IsNotNull';

export type ExpsSetValueType = 'Literal' | 'Parameter' | 'PickList' | 'Formula' | 'Lookup';

export type ExpsSetAggregationFunction = 'Sum' | 'Avg' | 'Min' | 'Max' | 'ListSum' | 'ListAvg' | 'ListSize';

export type ExpsSetStepType =
  | 'Condition'
  | 'AdvancedCondition'
  | 'Branch'
  | 'DefaultPath'
  | 'SubExpression'
  | 'BusinessKnowledgeModel'
  | 'ListGroup'
  | 'ListFilter'
  | 'AdvancedListFilter';

export type ExpsSetDataType =
  | 'Text'
  | 'Numeric'
  | 'Date'
  | 'DateTime'
  | 'Sobject'
  | 'Boolean'
  | 'Percent'
  | 'Currency'
  | 'ActionOutput'
  | 'SubExpression'
  | 'DecisionMatrix'
  | 'DecisionTable'
  | 'Context'
  | 'ContextNode'
  | 'Picklist';

export type ExpsSetVariableLookupType = 'SubExpression' | 'DecisionMatrix' | 'DecisionTable';

export type ExpsSetVariableType = 'Variable' | 'Constant' | 'Formula';

export type ExpsSetObjectDataType = 'sObject' | 'JSON';

export type ApplicationSourceType =
  | 'REPLY_RECOMMENDATION'
  | 'ARTICLE_RECOMMENDATION'
  | 'UTTERANCE_RECOMMENDATION'
  | 'FAQ'
  | 'EAR_FOR_CONVERSATION'
  | 'USE_CASE_EXPLORER'
  | 'EAR_FOR_VOICE'
  | 'FTEST';

export type ExternalModelStatus = 'ENABLED' | 'DISABLED' | 'PAUSED';

export type ExtlClntAppDistState = 'Local' | 'Packaged';

export type AuthenticationProtocol =
  | 'NoAuthentication'
  | 'Certificate'
  | 'Oauth'
  | 'Password'
  | 'NTLM'
  | 'AwsSv4'
  | 'Jwt'
  | 'JwtExchange'
  | 'C2c'
  | 'ApiKey'
  | 'Custom'
  | 'InternalOAuth'
  | 'OrgJwt';

export type ExternalCredentialParamType =
  | 'ParameterGroup'
  | 'AuthProvider'
  | 'AuthProviderUrl'
  | 'AuthProviderUrlQueryParameter'
  | 'AuthProviderHttpHeader'
  | 'AuthProviderHttpCookie'
  | 'AuthProviderClientCertificate'
  | 'AuthProviderServerCertificate'
  | 'SigningCertificate'
  | 'FormulaVariable'
  | 'AuthProviderAuthParameter'
  | 'AuthParameter'
  | 'NamedPrincipal'
  | 'PerUserPrincipal'
  | 'AwsStsPrincipal'
  | 'AuthContext'
  | 'AuthQueryParameter'
  | 'AuthHeader'
  | 'AuthProtocolVariant'
  | 'JwtBodyClaim'
  | 'JwtHeaderClaim'
  | 'CreatedByNamespace';

export type DataConnectionStatus = 'Connected' | 'Failed' | 'Disconnected';

export type AvailabilityStatus = 'Available' | 'In_Use';

export type ExternalDataSrcDescSubtype = 'SchemaTableQualifiers' | 'SchemaTableMetadata';

export type ExternalDataSrcDescType = string;

export type ExternalPrincipalType = 'Anonymous' | 'PerUser' | 'NamedUser' | 'UserWithImpersonation';

export type ExternalDataSourceType =
  | 'Alert'
  | 'AmazonAthena'
  | 'AmazonDynamoDb'
  | 'AssetAttribute'
  | 'bcpApp'
  | 'bcpAppMember'
  | 'bcpEntity'
  | 'bcpEntityPermission'
  | 'bcpEntityPermSet'
  | 'bcpField'
  | 'bcpFieldPermission'
  | 'bcpMember'
  | 'bcpParticipant'
  | 'bcpParticipantAccess'
  | 'bcpPermissionSet'
  | 'bcpRecAccApproval'
  | 'bcpRecordAccess'
  | 'bcpRelParticipant'
  | 'ContentHubBox'
  | 'ContentHubGDrive'
  | 'contentHubItem'
  | 'ContentHubMock'
  | 'ContentHubOneDriveGraph'
  | 'ContentHubPerf'
  | 'ContentHubQuip'
  | 'ContentHubSharepointOffice365'
  | 'ContentHubSharepointOneDrive'
  | 'CryptoTrEnvChgLogSnp'
  | 'Datacloud'
  | 'Datajourney'
  | 'Engagement'
  | 'ExternalEvent'
  | 'ExternalKnowledge'
  | 'FLAttribute'
  | 'Ftest'
  | 'GraphQl'
  | 'Identity'
  | 'Jigsaw'
  | 'MbrPromotionsViewDS'
  | 'OData'
  | 'OData4'
  | 'OData401'
  | 'OIAttribute'
  | 'OpenSearch'
  | 'outgoingemail'
  | 'PromoRuleTempDS'
  | 'QLIAttribute'
  | 'Salesforce'
  | 'SciApi'
  | 'SelectableEmailAddressView'
  | 'SfdcOrg'
  | 'SimpleURL'
  | 'TrailheadEditWithId'
  | 'usermobileconfig'
  | 'usrconnectionstatus'
  | 'Wrapper';

export type StorageDriveType = string;

export type TargetObject = 'All' | 'Contract' | 'DocumentTemplate';

export type ExternalServiceRegistrationProviderType = 'MuleSoft' | 'Custom' | 'SchemaInferred' | 'Standard';

export type ScreenLockTimeout =
  | 'Never'
  | 'One'
  | 'Five'
  | 'Ten'
  | 'Thirty'
  | 'Sixty'
  | 'OneTwenty'
  | 'OneEighty'
  | 'TwoForty';

export type PermittedUsersPolicyType = 'AllSelfAuthorized' | 'AdminApprovedPreAuthorized';

export type PolicyAction = 'Block' | 'RaiseSessionLevel';

export type RefreshTokenPolicyType = 'Infinite' | 'Zero' | 'SpecificLifetime' | 'SpecificInactivity';

export type SessionSecurityLevel = 'LOW' | 'STANDARD' | 'HIGH_ASSURANCE';

export type FeatureParameterDataflowDirection = 'LmoToSubscriber' | 'SubscriberToLmo' | 'Provisioned';

export type ClassificationType = 'ComplianceCategory' | 'FieldSet';

export type EnforcementType = 'Scoping' | 'Restrict' | 'FieldRestrict' | 'D360_Restrict';

export type ApptAssistantRadiusUnit = 'Kilometer' | 'Meter' | 'Mile' | 'Yard';

export type MappingType =
  | 'WorkPlans_WorkPlanTemplate_WorkPlan'
  | 'WorkPlans_WorkStepTemplate_WorkStep'
  | 'WorkPlans_WorkPlanTemplateEntry_WorkStep';

export type WorkOrderDurationSource = 'WorkType' | 'TotalFromWorkPlan' | 'Custom';

export type RelationshipCardinality = 'OneToOne' | 'ManyToOne';

export type FileDownloadBehavior = 'DOWNLOAD' | 'EXECUTE_IN_BROWSER' | 'HYBRID';

export type FileType =
  | 'UNKNOWN'
  | 'PDF'
  | 'POWER_POINT'
  | 'POWER_POINT_X'
  | 'POWER_POINT_M'
  | 'POWER_POINT_T'
  | 'WORD'
  | 'WORD_X'
  | 'WORD_M'
  | 'WORD_T'
  | 'PPS'
  | 'PPSX'
  | 'EXCEL'
  | 'EXCEL_X'
  | 'EXCEL_M'
  | 'EXCEL_T'
  | 'GOOGLE_DOCUMENT'
  | 'GOOGLE_PRESENTATION'
  | 'GOOGLE_SPREADSHEET'
  | 'GOOGLE_DRAWING'
  | 'GOOGLE_FORM'
  | 'GOOGLE_SCRIPT'
  | 'LINK'
  | 'SLIDE'
  | 'AAC'
  | 'ACGI'
  | 'AI'
  | 'AVI'
  | 'BMP'
  | 'BOXNOTE'
  | 'CSV'
  | 'EPS'
  | 'EXE'
  | 'FLASH'
  | 'GIF'
  | 'GZIP'
  | 'HTM'
  | 'HTML'
  | 'HTX'
  | 'JPEG'
  | 'JPE'
  | 'PJP'
  | 'PJPEG'
  | 'JFIF'
  | 'JPG'
  | 'JS'
  | 'JSON'
  | 'MHTM'
  | 'MHTML'
  | 'MP3'
  | 'M4A'
  | 'M4V'
  | 'MP4'
  | 'MPEG'
  | 'MPG'
  | 'MOV'
  | 'MSG'
  | 'ODP'
  | 'ODS'
  | 'ODT'
  | 'OGG'
  | 'OGV'
  | 'PNG'
  | 'PSD'
  | 'RTF'
  | 'QUIPDOC'
  | 'QUIPSHEET'
  | 'QUIPCHAT'
  | 'QUIPSLIDES'
  | 'QUIPTEMPLATE'
  | 'SHTM'
  | 'SHTML'
  | 'SNOTE'
  | 'MCONTENT'
  | 'STYPI'
  | 'SVG'
  | 'SVGZ'
  | 'JPGZ'
  | 'TEXT'
  | 'THTML'
  | 'USDZ'
  | 'VISIO'
  | 'VTT'
  | 'WMV'
  | 'WRF'
  | 'XML'
  | 'ZIP'
  | 'XZIP'
  | 'WMA'
  | 'XSN'
  | 'INSIGHT'
  | 'TRTF'
  | 'TXML'
  | 'WEBVIEW'
  | 'RFC822'
  | 'ASF'
  | 'DWG'
  | 'JAR'
  | 'XJS'
  | 'OPX'
  | 'XPSD'
  | 'TIF'
  | 'TIFF'
  | 'WAV'
  | 'CSS'
  | 'THUMB720BY480'
  | 'THUMB240BY180'
  | 'THUMB120BY90'
  | 'ALLTHUMBS'
  | 'PAGED_FLASH'
  | 'XMOB'
  | 'PACK'
  | 'C'
  | 'CPP'
  | 'WORDT'
  | 'INI'
  | 'JAVA'
  | 'LOG'
  | 'POWER_POINTT'
  | 'SQL'
  | 'XHTML'
  | 'EXCELT'
  | 'WEBP'
  | 'AVIF'
  | 'ICS'
  | 'CAF'
  | 'V3GP'
  | 'V3G2';

export type FlexipageEventSourceTypeEnum = string;

export type FlexipageEventTargetTypeEnum =
  | 'FlexipageServices'
  | 'LwcServices'
  | 'InvocableApexServices'
  | 'InvocableExternalServices'
  | 'ActionServices'
  | 'ViewServices';

export type RegionFlagStatus = 'disabled' | 'enabled';

export type ComponentInstancePropertyTypeEnum = string;

export type ComponentInstanceType = 'Component' | 'Card';

export type FlexipageDataSourceModeEnum = 'Create' | 'Edit' | 'View';

export type FlexipageDataSourceTypeEnum = 'Record' | 'Apex';

export type FlexiPageRegionMode = 'Append' | 'Prepend' | 'Replace';

export type FlexiPageRegionType = 'Region' | 'Facet' | 'Background';

export type PlatformActionListContext =
  | 'ListView'
  | 'RelatedList'
  | 'ListViewRecord'
  | 'RelatedListRecord'
  | 'Record'
  | 'FeedElement'
  | 'Chatter'
  | 'Global'
  | 'Flexipage'
  | 'MruList'
  | 'MruRow'
  | 'RecordEdit'
  | 'Photo'
  | 'BannerPhoto'
  | 'ObjectHomeChart'
  | 'ListViewDefinition'
  | 'Dockable'
  | 'Lookup'
  | 'Assistant'
  | 'ActionDefinition';

export type PlatformActionType =
  | 'QuickAction'
  | 'StandardButton'
  | 'CustomButton'
  | 'ProductivityAction'
  | 'ActionLink'
  | 'InvocableAction';

export type FlexipageSchemaPropType = 'boolean' | 'integer' | 'string';

export type FlowDataType =
  | 'Currency'
  | 'Date'
  | 'Number'
  | 'String'
  | 'Boolean'
  | 'SObject'
  | 'DateTime'
  | 'Picklist'
  | 'Multipicklist'
  | 'Apex';

export type FlowAssignmentOperator =
  | 'Assign'
  | 'Add'
  | 'Subtract'
  | 'AddItem'
  | 'RemoveFirst'
  | 'RemoveBeforeFirst'
  | 'RemoveAfterFirst'
  | 'RemoveAll'
  | 'AddAtStart'
  | 'RemoveUncommon'
  | 'AssignCount'
  | 'RemovePosition';

export type FlowComparisonOperator =
  | 'None'
  | 'EqualTo'
  | 'NotEqualTo'
  | 'GreaterThan'
  | 'LessThan'
  | 'GreaterThanOrEqualTo'
  | 'LessThanOrEqualTo'
  | 'StartsWith'
  | 'EndsWith'
  | 'Contains'
  | 'IsNull'
  | 'IsChanged'
  | 'WasSet'
  | 'WasSelected'
  | 'WasVisited'
  | 'In'
  | 'NotIn';

export type FlowRecordFilterOperator =
  | 'EqualTo'
  | 'NotEqualTo'
  | 'GreaterThan'
  | 'LessThan'
  | 'GreaterThanOrEqualTo'
  | 'LessThanOrEqualTo'
  | 'StartsWith'
  | 'EndsWith'
  | 'Contains'
  | 'IsNull'
  | 'IsChanged'
  | 'In'
  | 'NotIn';

export type FlowStageStepAssigneeType = 'User' | 'Group' | 'Queue';

export type FlowTransformValueActionType = string;

export type FlowScheduledPathOffsetUnit = 'Hours' | 'Days' | 'Minutes' | 'Months' | 'Weeks';

export type FlowScheduledPathType = string;

export type FlowScheduledPathTimeSource = 'RecordTriggerEvent' | 'RecordField';

export type InvocableActionType =
  | 'apex'
  | 'chatterPost'
  | 'contentWorkspaceEnableFolders'
  | 'emailAlert'
  | 'emailSimple'
  | 'emailSObject'
  | 'externalService'
  | 'salesforceAPIPlatform'
  | 'flow'
  | 'metricRefresh'
  | 'processCreateWorkitem'
  | 'processStartStep'
  | 'processStopInstance'
  | 'processStopStep'
  | 'quickAction'
  | 'submit'
  | 'thanks'
  | 'thunderResponse'
  | 'createServiceReport'
  | 'deployOrchestration'
  | 'createResponseEventAction'
  | 'sfdcOutputAction'
  | 'invokeOrchOutputFlow'
  | 'generateWorkOrders'
  | 'deactivateSessionPermSet'
  | 'activateSessionPermSet'
  | 'aggregateValue'
  | 'orchestrationTimer'
  | 'orchestrationDebugLog'
  | 'choosePricebook'
  | 'component'
  | 'liveMessageNotification'
  | 'scaleCacheAsyncRefresh'
  | 'skillsBasedRouting'
  | 'addSkillRequirements'
  | 'addScreenPop'
  | 'findMatchingIndividuals'
  | 'routeWork'
  | 'scvOutboundCall'
  | 'checkAvailabilityForRouting'
  | 'createCustomField'
  | 'assignTrailheadBadge'
  | 'insightFeedback'
  | 'publishKnowledgeArticles'
  | 'routingAddressVerification'
  | 'assignTargetToSalesCadence'
  | 'removeTargetFromSalesCadence'
  | 'modifyCadenceTrackerAttributes'
  | 'invocableApplyLeadAssignmentRules'
  | 'salesCadenceListenerBranchStepTranslator'
  | 'pauseSalesCadenceTracker'
  | 'resumeSalesCadenceTracker'
  | 'changeSalesCadenceTargetAssignee'
  | 'sendSalesCadenceEvent'
  | 'selectTemplateForSalesCadenceStepTracker'
  | 'assignKnowledgeArticles'
  | 'createDraftFromOnlineKnowledgeArticle'
  | 'archiveKnowledgeArticles'
  | 'restoreKnowledgeArticleVersion'
  | 'customNotificationAction'
  | 'broadcastRenderSlackMsgPreview'
  | 'submitDigitalFormResponse'
  | 'contactRequestAction'
  | 'saveAppointment'
  | 'saveAppointmentInvitationDetails'
  | 'createWaitlist'
  | 'deleteKnowledgeArticles'
  | 'submitKnowledgeArticleForTranslation'
  | 'einsteinEPLitePredictionAction'
  | 'cartToOrderAction'
  | 'orderToCartAction'
  | 'activateOrderAction'
  | 'refreshActualsCalculation'
  | 'cancelAppointment'
  | 'recalculateForecast'
  | 'getBenefitAndCalculateRebateAmount'
  | 'upsertCustomRebatePayout'
  | 'calculateRebateAmountAndUpsertPayout'
  | 'processRebatesBatchCalculationJob'
  | 'generateRebatePayoutPeriods'
  | 'calculateAdvancedAccountForecast'
  | 'processAccountForecasts'
  | 'managedContentReleasePublish'
  | 'editQuipDocument'
  | 'attachQuipDocumentToRecord'
  | 'createQuipDocument'
  | 'createQuipFolder'
  | 'addUsersToQuipDocument'
  | 'removeUsersFromQuipDocument'
  | 'copyQuipDocument'
  | 'addMessageToQuipDocument'
  | 'addQuipDocumentToFolder'
  | 'removeQuipDocumentFromFolder'
  | 'createQuipChat'
  | 'addMessageToQuipChat'
  | 'addUsersToQuipChat'
  | 'removeUsersFromQuipChat'
  | 'copyQuipContent'
  | 'lockQuipDocument'
  | 'lockQuipSection'
  | 'quipLivePaste'
  | 'exportQuipDocumentToPdf'
  | 'priceCart'
  | 'cartInitiateAsyncStep'
  | 'cartCompleteAsyncStep'
  | 'cancelCartAsyncOperation'
  | 'createCart'
  | 'addCartItem'
  | 'deleteCart'
  | 'cancelFulfillmentOrderItem'
  | 'createFulfillmentOrder'
  | 'createInvoiceFromFulfillmentOrder'
  | 'createFulfillmentOrders'
  | 'captureFunds'
  | 'createOrderPaymentSummary'
  | 'cancelOrderItemSummariesPreview'
  | 'cancelOrderItemSummariesSubmit'
  | 'createCreditMemoOrderSummary'
  | 'ensureFundsOrderSummaryAsync'
  | 'ensureRefundsOrderSummaryAsync'
  | 'returnOrderItemSummariesPreview'
  | 'returnOrderItemSummariesSubmit'
  | 'createReturnOrder'
  | 'createOrderSummary'
  | 'adjustOrderItemSummariesPreview'
  | 'adjustOrderItemSummariesSubmit'
  | 'addOrderItemSummarySubmit'
  | 'distributePickedQuantities'
  | 'createOrderFromQuote'
  | 'createOrUpdateAssetFromOrder'
  | 'createBillingScheduleFromOrderItem'
  | 'changeFinancePeriodStatus'
  | 'applyPayment'
  | 'paymentSale'
  | 'automateRefund'
  | 'createInvoiceFromOrder'
  | 'createOrUpdateAssetFromOrderItem'
  | 'createContract'
  | 'ociTransferReservation'
  | 'ociReleaseReservation'
  | 'ociGetAvailability'
  | 'ociFulfillReservation'
  | 'ociCreateReservation'
  | 'orderRoutingRankByAverageDistance'
  | 'orderRoutingFindRoutesWithFewestSplits'
  | 'orderRoutingFindRoutesWithFewestSplitsUsingOCI'
  | 'holdFulfillmentOrderCapacity'
  | 'releaseHeldFulfillmentOrderCapacity'
  | 'confirmHeldFulfillmentOrderCapacity'
  | 'getFulfillmentOrderCapacityValues'
  | 'print'
  | 'exportSurveyResponses'
  | 'checkoutSessionAction'
  | 'checkCartInventoryAction'
  | 'calcCartTaxesAction'
  | 'calcCartShipmentAction'
  | 'calcCartPromotionsAction'
  | 'sendSurveyInvitation'
  | 'publishPardotContent'
  | 'storeReplyRecommendationsFeedback'
  | 'marketingEmail'
  | 'updateCheckoutSessionStateAction'
  | 'massUpdateAccountForecast'
  | 'massUpdateSalesAgreement'
  | 'buildWarrantyClaimContext'
  | 'decisionTableAction'
  | 'runDecisionMatrix'
  | 'createFinancialRecords'
  | 'addWorkPlans'
  | 'addWorkSteps'
  | 'generateWorkPlans'
  | 'deleteWorkPlans'
  | 'pardotGetListx'
  | 'pardotAddToListMembership'
  | 'getTier'
  | 'changeTier'
  | 'changeAllTierOrNone'
  | 'getPointsBalance'
  | 'updateAcctMgrTarget'
  | 'creditPoints'
  | 'debitPoints'
  | 'batchJobAction'
  | 'dataProcessingEngineAction'
  | 'adjustPointsAction'
  | 'cancelRedemption'
  | 'cancelAccrual'
  | 'addRebateMemberList'
  | 'saveRecommendationDecision'
  | 'outboundMessage'
  | 'internalTestAction'
  | 'internalTestConnectApiAction'
  | 'getDialerSoftphonePathSuffix'
  | 'performMultiLevelRollups'
  | 'rebatesProcessCSV'
  | 'processMemberBenefitAction'
  | 'assignMemberTierBenefits'
  | 'dynamicSendSurveyInvitation'
  | 'getIntelligentAccountSettingsToken'
  | 'issueVoucher'
  | 'setCheckoutDeliveryMethod'
  | 'refreshDecisionTable'
  | 'evaluationFlow'
  | 'stepInteractive'
  | 'stepBackground'
  | 'stepMuleSoft'
  | 'managedContentRoleStepInteractive'
  | 'managedContentVariantSetLockStepBackground'
  | 'managedContentVariantSetReadyStepBackground'
  | 'managedContentVariantAutoPublishStepBackground'
  | 'managedContentVariantAutoUnpublishStepBackground'
  | 'generateKnowledgeLogData'
  | 'submitFailedRecordsBatchJob'
  | 'getEligibleProgramRebateTypes'
  | 'returnReturnOrderItems'
  | 'slackPostMessage'
  | 'slackUpdateMessage'
  | 'slackPinMessage'
  | 'slackCreateChannel'
  | 'slackInviteUsersToChannel'
  | 'slackUserInChannel'
  | 'slackUserInWorkspace'
  | 'slackCheckUsersAreConnectedToSlack'
  | 'slackArchiveChannel'
  | 'slackInviteUserToWorkspace'
  | 'slackGetConversationInfo'
  | 'getLoyaltyPromotionBasedOnSalesforceCDP'
  | 'transferMemberPointsToGroups'
  | 'getLoyaltyPromotion'
  | 'createServiceDocument'
  | 'createArticleRecommendations'
  | 'discoveryPredict'
  | 'processProgramRebateTypeProducts'
  | 'fetchCaseClassificationRecommendations'
  | 'applyCaseClassificationRecommendations'
  | 'updateProgressForCumulativePromotionUsage'
  | 'updateAdvancedAccountForecastSetPartner'
  | 'swarmingCollaborationToolSettings'
  | 'getArticleSmartLinkUrl'
  | 'performSurveySentimentAnalysis'
  | 'pardotSlackCompletionActionNotification'
  | 'calculateProjectedRebateAmount'
  | 'runProgramProcessForTransactionJournal'
  | 'goalAchievedAction'
  | 'buildIdentityVerification'
  | 'getVerificationData'
  | 'createEinsteinDocReaderLogic'
  | 'sendNotification'
  | 'uploadBlockchainData'
  | 'saveMemberVerificationSteps'
  | 'limitRepetitions'
  | 'slackSendMessageToLaunchFlow'
  | 'manageRecurringSchedules'
  | 'importRecordsFromCsvFile'
  | 'authorizePayment'
  | 'getMemberActiveSegments'
  | 'getAvailableSwarmObject'
  | 'runExpressionSet'
  | 'mergeLoyaltyProgramMembership'
  | 'unmergeLoyaltyProgramMembership'
  | 'massUpdateAdvAccountForecast'
  | 'runProgramProcess'
  | 'getAssessmentResponseSummary'
  | 'industriesSendApexAsyncRequest'
  | 'slackJoinChannel'
  | 'createInvoiceFromChangeOrders'
  | 'generateInboxSchedulingLink'
  | 'generateInboxMeetingTimes'
  | 'confirmInboxMeetingTime'
  | 'sendEmailMessage'
  | 'goToCadenceStep'
  | 'createBenefitDisbursement'
  | 'createCareProgramEnrolleeWorkOrderStep'
  | 'generateTransactionJournals'
  | 'cdpRefreshDataStream'
  | 'generateMemberReferralCode'
  | 'cdpPublishSegment'
  | 'industriesSendExtAsyncRequest'
  | 'getDataCategoryDetails'
  | 'getDataCategoryGroups'
  | 'searchKnowledgeArticles'
  | 'cdpPublishCalculatedInsight'
  | 'cdpGetMlPrediction'
  | 'cdpTriggerModelPredJob'
  | 'scheduleHomeVisit'
  | 'scheduleRecurringHomeVisit'
  | 'generateAssessmentEnvelopeSignature'
  | 'sendChannelMessage'
  | 'createInvRsvForCart'
  | 'deleteInvRsvForCart'
  | 'initiateTextExtraction'
  | 'fetchActiveOcrTemplates'
  | 'fetchExtractedText'
  | 'createMaterialLineForSalesItem'
  | 'generateDisambiguationLogData'
  | 'cdpRunIdentityResolution'
  | 'handleResourceAbsence'
  | 'fetchRebateClaimDetails'
  | 'processGiftEntries'
  | 'processGiftCommitment'
  | 'pauseGiftCommitmentSchedule'
  | 'resumeGiftCommitmentSchedule'
  | 'closeGiftCommitment'
  | 'manageCustomGiftCmtSchds'
  | 'manageGiftDefaultDesignations'
  | 'manageRcrGiftCmtSchd'
  | 'updateProcessedGiftEntries'
  | 'assignEnablementProgram'
  | 'inviteToReorderPortal'
  | 'runRecordAggrBatchProcDef'
  | 'sendSmsMessage'
  | 'creaContactsFromGrpCensMembers'
  | 'creaPersAccountsFromGrpCensMbr'
  | 'creaUsersFromGrpCensusMembers'
  | 'enrollMembers'
  | 'initiateAmendQuantity'
  | 'manageGiftTrxnDesignations'
  | 'processReceivedDocument'
  | 'getEffectiveAccountsForStoreUser'
  | 'getProductRecommendations'
  | 'generateOrderSummaryUrl'
  | 'createBenefitDisbursementForServiceAppointment'
  | 'buildContext'
  | 'createContractDocGen'
  | 'checkinContract'
  | 'contractAction'
  | 'sendEsignContract'
  | 'persistContextData'
  | 'createReferral'
  | 'createChatSessionId'
  | 'addOrderToCart'
  | 'generateUserInputs'
  | 'rateProducts'
  | 'updateCareGapStatus'
  | 'sendConversationMessages'
  | 'initiateNaturalLangProcessing'
  | 'fetchBoostBuryRuleRecommendation'
  | 'captureUserFeedback'
  | 'createSearchBoostBuryRule';

export type FlowScreenFieldType =
  | 'DisplayText'
  | 'InputField'
  | 'LargeTextArea'
  | 'PasswordField'
  | 'RadioButtons'
  | 'DropdownBox'
  | 'MultiSelectCheckboxes'
  | 'MultiSelectPicklist'
  | 'ComponentInstance'
  | 'ComponentInput'
  | 'ComponentChoice'
  | 'ComponentMultiChoice'
  | 'ComponentDisplay'
  | 'Repeater'
  | 'RegionContainer'
  | 'Region'
  | 'ObjectProvided';

export type FlowScreenFieldInputsRevisited = 'UseStoredValues' | 'ResetValues';

export type FlowRegionContainerType = 'SectionWithHeader' | 'SectionWithoutHeader';

export type FlowElementSubtype =
  | 'SortCollectionProcessor'
  | 'RecommendationMapCollectionProcessor'
  | 'FilterCollectionProcessor'
  | 'WaitDate'
  | 'WaitAttribute'
  | 'WaitDuration'
  | 'InteractiveStep'
  | 'BackgroundStep'
  | 'MuleSoftStep'
  | 'ManagedContentRoleInteractiveStep'
  | 'ManagedContentVariantSetLockBackgroundStep'
  | 'ManagedContentVariantSetReadyBackgroundStep'
  | 'ManagedContentVariantAutoPublishBackgroundStep'
  | 'ManagedContentVariantAutoUnpublishBackgroundStep'
  | 'CreatePromptInstructions';

export type FlowCollectionProcessorType =
  | 'SortCollectionProcessor'
  | 'RecommendationMapCollectionProcessor'
  | 'FilterCollectionProcessor';

export type IterationOrder = 'Asc' | 'Desc';

export type FlowEntryType = 'Always' | 'AfterCompletion';

export type RecordTriggerType = 'Update' | 'Create' | 'CreateAndUpdate' | 'Delete' | 'None';

export type FlowStartFrequency = 'OnActivate' | 'Once' | 'Daily' | 'Weekly';

export type FlowTriggerType =
  | 'None'
  | 'Scheduled'
  | 'RecordBeforeSave'
  | 'RecordBeforeDelete'
  | 'RecordAfterSave'
  | 'PlatformEvent'
  | 'EventDrivenJourney'
  | 'Segment'
  | 'DataCloudDataChange'
  | 'FormSubmissionEvent';

export type FlowTransactionModel = 'Automatic' | 'NewTransaction' | 'CurrentTransaction';

export type FlowEnvironment = 'Default' | 'Slack';

export type FlowRunInMode = 'DefaultMode' | 'SystemModeWithSharing' | 'SystemModeWithoutSharing';

export type FlowVersionStatus = 'Active' | 'Draft' | 'Obsolete' | 'InvalidDraft';

export type FlowTestParameterType = 'InputTriggeringRecordInitial' | 'InputTriggeringRecordUpdated' | 'ScheduledPath';

export type FolderAccessTypes = 'Shared' | 'Public' | 'Hidden' | 'PublicInternal';

export type FolderShareAccessLevel = 'View' | 'EditAllContents' | 'Manage';

export type FolderSharedToType =
  | 'Group'
  | 'Role'
  | 'RoleAndSubordinates'
  | 'RoleAndSubordinatesInternal'
  | 'Manager'
  | 'ManagerAndSubordinatesInternal'
  | 'Organization'
  | 'Territory'
  | 'TerritoryAndSubordinates'
  | 'AllPrmUsers'
  | 'User'
  | 'PartnerUser'
  | 'AllCspUsers'
  | 'CustomerPortalUser'
  | 'PortalRole'
  | 'PortalRoleAndSubordinates'
  | 'ChannelProgramGroup';

export type PublicFolderAccess = 'ReadOnly' | 'ReadWrite';

export type ForecastingDateType =
  | 'OpportunityCloseDate'
  | 'ProductDate'
  | 'ScheduleDate'
  | 'OLIMeasureCloseDateOnly'
  | 'ProductDateOnly'
  | 'ScheduleDateOnly'
  | 'OpportunityCustomDate'
  | 'OLIMeasureOppCustomDateOnly';

export type DonorMatchingMethod = 'Duplicate_Management_Rules' | 'No_Matching';

export type PlannerAttrDataType = string;

export type PlannerAttrMappingType = 'input' | 'output';

export type PlannerFunctionInvocableTargetType =
  | 'apex'
  | 'flow'
  | 'standardInvocableAction'
  | 'prompt'
  | 'externalService'
  | 'quickAction';

export type PageComponentType = 'links' | 'htmlArea' | 'imageOrNote' | 'visualforcePage';

export type PageComponentWidth = 'narrow' | 'wide';

export type IPAddressFeature = string;

export type IPAddressUsageScope = 'Exclusion' | 'Inclusion';

export type IconUsageType =
  | 'PersonLifeEvent'
  | 'InsurancePolicy'
  | 'BusinessMilestone'
  | 'Interaction'
  | 'AssetMilestone';

export type IdentityVerificationDataSourceType = 'Salesforce' | 'External';

export type IdentityVerificationProcFldDataSourceType = 'Salesforce' | 'External';

export type IdentityVerificationProcFldFieldDataType =
  | 'address'
  | 'checkbox'
  | 'currency'
  | 'dateonly'
  | 'datetime'
  | 'email'
  | 'number'
  | 'percent'
  | 'phone'
  | 'picklist'
  | 'reference'
  | 'text'
  | 'timeonly'
  | 'url'
  | 'other';

export type IdentityVerificationProcFldFieldType =
  | 'requiredVerifier'
  | 'optionalVerifier'
  | 'searchField'
  | 'resultField'
  | 'additionalResultField'
  | 'searchFilter';

export type IdentityVerificationSearchType = 'Text-Based' | 'Object-Based';

export type IdentityVerificationSearchLayoutType = 'Tab' | 'Stack';

export type IFrameWhitelistContext = 'VisualforcePages' | 'Surveys';

export type ExternalConnectionType = string;

export type InboundConnPropertyName = 'LinkId' | 'Region' | 'AwsVpcEndpointId' | 'SourceIpRanges';

export type ExternalConnectionStatus =
  | 'Unprovisioned'
  | 'Allocating'
  | 'PendingAcceptance'
  | 'PendingActivation'
  | 'RejectedRemotely'
  | 'DeletedRemotely'
  | 'TeardownInProgress'
  | 'Ready';

export type AttrDataType = 'String' | 'Integer' | 'Double' | 'Date' | 'DateTime' | 'Percentage' | 'Boolean';

export type DefinitionType = 'Apex' | 'LowCode' | 'Java';

export type KnowledgeCaseEditor = 'simple' | 'standard';

export type KnowledgeLanguageLookupValueType = 'User' | 'Queue';

export type FeedLayoutFilterPosition = 'CenterDropDown' | 'LeftFixed' | 'LeftFloat';

export type FeedLayoutFilterType = 'AllUpdates' | 'FeedItemType' | 'Custom';

export type FeedLayoutComponentType =
  | 'HelpAndToolLinks'
  | 'CustomButtons'
  | 'Following'
  | 'Followers'
  | 'CustomLinks'
  | 'Milestones'
  | 'SimilarCases'
  | 'CaseExperts'
  | 'Topics'
  | 'CaseUnifiedFiles'
  | 'Visualforce';

export type LayoutHeader = 'PersonalTagging' | 'PublicTagging';

export type UiBehavior = 'Edit' | 'Required' | 'Readonly';

export type ReportChartComponentSize = 'SMALL' | 'MEDIUM' | 'LARGE';

export type LayoutSectionStyle = 'TwoColumnsTopToBottom' | 'TwoColumnsLeftToRight' | 'OneColumn' | 'CustomLinks';

export type SummaryLayoutStyle =
  | 'Default'
  | 'QuoteTemplate'
  | 'DefaultQuoteTemplate'
  | 'ServiceReportTemplate'
  | 'ChildServiceReportTemplateStyle'
  | 'DefaultServiceReportTemplate'
  | 'CaseInteraction'
  | 'QuickActionLayoutLeftRight'
  | 'QuickActionLayoutTopDown'
  | 'PathAssistant';

export type VisibleOrRequired = 'VisibleOptional' | 'VisibleRequired' | 'NotVisible';

export type LetterheadHorizontalAlignment = 'None' | 'Left' | 'Center' | 'Right';

export type LetterheadVerticalAlignment = 'None' | 'Top' | 'Middle' | 'Bottom';

export type LightningBoltCategory =
  | 'Communications'
  | 'Education'
  | 'FinancialServices'
  | 'Government'
  | 'HealthcareLifeSciences'
  | 'Manufacturing'
  | 'Media'
  | 'Nonprofits'
  | 'ProfessionalServices'
  | 'RealEstate'
  | 'Retail'
  | 'TravelTransportationHospitality'
  | 'HighTech'
  | 'GeneralBusiness';

export type SupervisorAgentStatusFilter = 'Online' | 'Away' | 'Offline';

export type LiveChatButtonPresentation = 'Slide' | 'Fade' | 'Appear' | 'Custom';

export type LiveChatButtonInviteEndPosition =
  | 'TopLeft'
  | 'Top'
  | 'TopRight'
  | 'Left'
  | 'Center'
  | 'Right'
  | 'BottomLeft'
  | 'Bottom'
  | 'BottomRight';

export type LiveChatButtonInviteStartPosition =
  | 'TopLeft'
  | 'TopLeftTop'
  | 'Top'
  | 'TopRightTop'
  | 'TopRight'
  | 'TopRightRight'
  | 'Right'
  | 'BottomRightRight'
  | 'BottomRight'
  | 'BottomRightBottom'
  | 'Bottom'
  | 'BottomLeftBottom'
  | 'BottomLeft'
  | 'BottomLeftLeft'
  | 'Left'
  | 'TopLeftLeft';

export type LiveChatButtonRoutingType = 'Choice' | 'LeastActive' | 'MostAvailable';

export type LiveChatButtonType = 'Standard' | 'Invite';

export type SensitiveDataActionType = 'Remove' | 'Replace';

export type LoyaltyPgmProcExecutionType = 'RealTime' | 'Batch' | 'BatchAndRealTime';

export type LoyaltyPgmProcCondOperator =
  | 'Equals'
  | 'NotEquals'
  | 'GreaterThan'
  | 'GreaterThanOrEquals'
  | 'LessThan'
  | 'LessThanOrEquals'
  | 'Contains'
  | 'DoesNotContain'
  | 'IsNull'
  | 'IsNotNull';

export type LoyaltyPgmProcCondType = 'Literal' | 'Parameter' | 'Formula' | 'Lookup';

export type LoyaltyPgmProcRuleType = 'Condition' | 'Action' | 'ConditionGroup' | 'DefaultPath';

export type LoyaltyPgmProcParmDataType = 'Text' | 'Numeric' | 'Date' | 'DateTime' | 'Sobject' | 'Boolean';

export type LoyaltyPgmProcParmType = 'Variable' | 'Constant' | 'Formula';

export type LoyaltyPgmProcActParamOper = string;

export type LoyaltyPgmProcActParamType = 'Literal' | 'Parameter';

export type LoyaltyPgmProcActionType =
  | 'CreditPoints'
  | 'DebitPoints'
  | 'IssueVoucher'
  | 'IncreaseUsageForCumulativePromotion'
  | 'UpdateUsageForCumulativePromotion'
  | 'AssignParameterValues'
  | 'RunFlow'
  | 'GetOutputsFromDecisionTable'
  | 'UpdatePointBalance'
  | 'GetMemberPointBalance'
  | 'GetMemberTier'
  | 'GetMemberAttributesValues'
  | 'UpdateCurrentValueForMemberAttribute'
  | 'RunProgramProcess'
  | 'Crud'
  | 'AssignBadgeToMember'
  | 'CheckMemberBadgeAssignment'
  | 'ChangeMemberTier'
  | 'GetMemberPromotions'
  | 'RedeemVoucher'
  | 'SendMail';

export type LoyaltyPgmProcCrudActType = 'create' | 'update';

export type LoyaltyPgmProcRuleStatus = 'Draft' | 'Active' | 'Inactive';

export type LoyaltyPgmProcStatus = 'Draft' | 'Active' | 'Inactive';

export type MLRelationType = 'Inner' | 'Leftouter' | 'Leftinner' | 'Full';

export type MLFieldType =
  | 'Prediction'
  | 'Pushback'
  | 'Included'
  | 'Excluded'
  | 'Join'
  | 'Related'
  | 'Expression'
  | 'SegmentExpression'
  | 'TrainingExpression'
  | 'ScoringExpression'
  | 'PositiveExpression'
  | 'NegativeExpression'
  | 'SourceDate'
  | 'Retriever';

export type MLDataDefinitionType = 'Recipient' | 'Candidate' | 'Interaction' | 'Prediction' | 'Generative';

export type MLGenerativeDefinitionStatus = 'Enabled' | 'Disabled' | 'Draft';

export type MLGenerativeType = 'Standard' | 'Grounded';

export type MLPredictionDefinitionStatus = 'Enabled' | 'Disabled' | 'Draft';

export type MLRecommendationDefinitionStatus = 'Enabled' | 'Disabled' | 'Draft';

export type MCNodeType =
  | 'TEXT'
  | 'MTEXT'
  | 'RTE'
  | 'IMG'
  | 'NAMEFIELD'
  | 'MEDIA'
  | 'REFERENCE'
  | 'URL'
  | 'DATETIME'
  | 'DATE'
  | 'PHONE'
  | 'EMAIL'
  | 'ENCRYPTEDSTRING'
  | 'BOOLEAN'
  | 'CURRENCY'
  | 'INT'
  | 'DOUBLE'
  | 'PERCENT'
  | 'TIME'
  | 'ADDRESS'
  | 'LOCATION';

export type ContactPointType = 'Email' | 'Phone' | 'Web' | 'Social' | 'MailingAddress' | 'InPerson' | 'Video';

export type AudienceFieldType =
  | 'Boolean'
  | 'Text'
  | 'Encrypted'
  | 'Number'
  | 'Double'
  | 'Date'
  | 'DateTime'
  | 'Email'
  | 'Phone'
  | 'Time'
  | 'URL';

export type MarketAudienceStatus = 'New' | 'Counting' | 'Activating' | 'Activated' | 'Disabled' | 'Error';

export type MarketSegmentType = 'UI' | 'DBT' | 'Lookalike' | 'EinsteinGptSegmentsUI' | 'Waterfall';

export type BlankValueBehavior = 'MatchBlanks' | 'NullNotAllowed';

export type MatchingMethod =
  | 'Exact'
  | 'FirstName'
  | 'LastName'
  | 'CompanyName'
  | 'Phone'
  | 'City'
  | 'Street'
  | 'Zip'
  | 'Title';

export type MatchingRuleStatus =
  | 'Inactive'
  | 'DeactivationFailed'
  | 'Activating'
  | 'Deactivating'
  | 'Active'
  | 'ActivationFailed';

export type MessagingAutoResponseType = 'InitialResponse' | 'AgentEngagedResponse' | 'AgentEndEngagementResponse';

export type MessagingChannelTargetLookupValueType = 'Queue' | 'Intent';

export type MessagingChannelType = 'EmbeddedMessaging' | 'Voice';

export type MessagingSessionHandlerType = 'Queue' | 'Flow';

export type MessagingChannelStandardParameterType = 'FirstName' | 'LastName' | 'Email' | 'Subject';

export type MfgProgramTransformationType = 'BusinessTransformation' | 'ForecastSetRelation';

export type MfgProgramTemplateStatus = 'Active' | 'Inactive' | 'Draft';

export type MilestoneTypeRecurrenceType = 'none' | 'recursIndependently' | 'recursChained';

export type CalculatedInsightCreationType = string;

export type MktDataConnectionMethod = 'Ingress' | 'Egress';

export type MktDataConnectionStatus = 'PROCESSING' | 'INACTIVE' | 'TESTING' | 'ACTIVE' | 'ERROR' | 'DELETING';

export type MlAIModelAlgorithmType = 'Unknown' | 'Glm' | 'Gbm' | 'Xgboost' | 'RandomForest';

export type MlGenerativeModelType = string;

export type MlModelType = 'Predictive' | 'Generative';

export type MlParameterType = 'Discrete' | 'Continuous';

export type MlModelPredictionType = 'Regression' | 'BinaryClassification' | 'MulticlassClassification';

export type MlRuntimeType = 'External' | 'Internal';

export type MlModelSourceType = 'ModelConnector' | 'EdcNoCode' | 'LLMGateway';

export type MlModelArtifactStatus = 'Enabled' | 'Disabled';

export type MlObjectiveType = 'Predictive' | 'Generative' | 'Mixed';

export type MlOutcomeGoalType = 'None' | 'Minimize' | 'Maximize';

export type MlModelKitStatus = 'Disabled' | 'Enabled' | 'Draft';

export type MlGenerativeModelCapability = 'COMPLETION' | 'CHAT_COMPLETION' | 'EMBEDDING';

export type MlActivatedModelStatus = 'Disabled' | 'Enabled';

export type ModerationRuleAction = 'Block' | 'FreezeAndNotify' | 'Review' | 'Replace' | 'Flag';

export type RateLimitTimePeriod = 'Short' | 'Medium';

export type ModerationRuleType = 'Content' | 'Rate';

export type OrgDomainShard =
  | 'none'
  | 'sandbox'
  | 'develop'
  | 'patch'
  | 'trailblaze'
  | 'scratch'
  | 'demo'
  | 'free'
  | 'bt'
  | 'sfdctest'
  | 'sfdcdot';

export type OrgDomainRedirectOption = 'Undeployed' | 'Redirect' | 'WarnOnRedirect' | 'NoRedirect';

export type OrgDomainProdSuffix =
  | 'MySalesforceLimited'
  | 'DatabaseLimited'
  | 'CloudforceLimited'
  | 'OrgLevelCertificateLimited'
  | 'Restricted1'
  | 'MySalesforce'
  | 'Restricted2';

export type CalloutStatus = 'Enabled' | 'Disabled';

export type NamedCredentialParamType =
  | 'Url'
  | 'UrlQueryParameter'
  | 'HttpHeader'
  | 'HttpCookie'
  | 'ClientCertificate'
  | 'ServerCertificate'
  | 'FormulaVariable'
  | 'Authentication'
  | 'OutboundNetworkConnection'
  | 'AllowedManagedPackageNamespaces'
  | 'CreatedByNamespace';

export type NamedCredentialType =
  | 'Legacy'
  | 'AnonymousEndpoint'
  | 'SecuredEndpoint'
  | 'PrivateEndpoint'
  | 'Credentials';

export type NetworkPageOverrideSetting = 'Designer' | 'VisualForce' | 'Standard' | 'Configurable';

export type AudienceCriteriaType = 'CustomList' | 'MaxDaysInCommunity';

export type RecommendationChannel =
  | 'DefaultChannel'
  | 'CustomChannel1'
  | 'CustomChannel2'
  | 'CustomChannel3'
  | 'CustomChannel4'
  | 'CustomChannel5';

export type SitesArchiveStatus = 'TemporarilyArchived' | 'Archived' | 'NotArchived';

export type NetworkStatus = 'UnderConstruction' | 'Live' | 'DownForMaintenance';

export type ObjHierarchyMappingType = 'ParentToParent' | 'ParentToChild' | 'ChildToChild' | 'Support';

export type MappingUsageType =
  | 'ConvertToSalesAgreement'
  | 'EligibleProgramRebateType'
  | 'MapJournalToMemberAggregate'
  | 'TransformationMapping'
  | 'CLMFieldMapping';

export type OcrApplicationType = 'Industries' | 'EinsteinDocumentReader';

export type ItemType = string;

export type OcrMappingType = 'FormField' | 'TableColumn';

export type OmniDataTransformInputType = 'JSON' | 'XML' | 'SObject' | 'Custom';

export type ODTItemFilterDataType =
  | 'ADDRESS'
  | 'ANYTYPE'
  | 'BASE64'
  | 'BOOLEAN'
  | 'COMBOBOX'
  | 'CURRENCY'
  | 'DATACATEGORY'
  | 'GROUPREFERENCE'
  | 'DATE'
  | 'DATETIME'
  | 'DOUBLE'
  | 'EMAIL'
  | 'ENCRYPTEDSTRING'
  | 'ID'
  | 'INTEGER'
  | 'LONG'
  | 'MULTIPICKLIST'
  | 'PERCENT'
  | 'PHONE'
  | 'PICKLIST'
  | 'REFERENCE'
  | 'STRING'
  | 'TEXTAREA'
  | 'TIME'
  | 'URL';

export type OmniProcessType = string;

export type OmniSupervisorActionName =
  | 'ChangeQueues'
  | 'ChangeSkills'
  | 'AssignLearning'
  | 'AWSDashboard'
  | 'ManageQueues'
  | 'CustomAction';

export type OmniSupervisorActionTab =
  | 'AllAgents'
  | 'AgentDetails'
  | 'QueuesBacklog'
  | 'QueueDetails'
  | 'AssignedWork'
  | 'AssignedWorkDetails'
  | 'SkillsBacklog'
  | 'SkillDetails';

export type OmniSuperSkillVisibilityType = 'AllSkills' | 'AnySkill';

export type OmniUiCardType = 'Parent' | 'Child';

export type OutboundConnPropertyName =
  | 'LinkId'
  | 'Region'
  | 'AwsVpcEndpointId'
  | 'AwsVpcEndpointServiceName'
  | 'ProxyUrl';

export type APIAccessLevel = 'Unrestricted' | 'Restricted';

export type ParticipantRoleAccessLevel = 'None' | 'Read' | 'Edit';

export type IdempotencySupportStatus = 'No' | 'Yes';

export type PermissionSetTabVisibility = 'None' | 'Available' | 'Visible';

export type LicenseExpirationPolicy = 'AllowNamespaceAccess' | 'BlockNamespaceAccess';

export type PlatformCacheType = 'Session' | 'Organization';

export type PlatformEventChannelType = 'event' | 'data';

export type Frequency = 'Daily' | 'Weekly' | 'Fortnightly' | 'Monthly' | 'Once' | 'Quarterly' | 'Yearly';

export type PortalRoles = 'Executive' | 'Manager' | 'Worker' | 'PersonAccount';

export type PortalType = 'CustomerSuccess' | 'Partner' | 'Network';

export type ConditionLogic = string;

export type InputValueType = 'Variable' | 'Expression' | 'String';

export type TypeOfAction = 'Add' | 'Edit' | 'Delete';

export type AccumulateResultCondInputType = 'Variable' | 'Expression' | 'String';

export type AccumulateResultOperator =
  | 'Any'
  | 'Equals'
  | 'NotEquals'
  | 'LessThan'
  | 'LessOrEqual'
  | 'GreaterThan'
  | 'GreaterOrEqual';

export type ConditionAggregationFunction = 'Sum' | 'Average' | 'Minimum' | 'Maximum' | 'Count';

export type TargetEntityMatchType = string;

export type ConditionFilterInputValueType = 'Variable' | 'String' | 'Expression';

export type ConditionFilterOperator =
  | 'Equals'
  | 'NotEquals'
  | 'LessThan'
  | 'LessOrEqual'
  | 'GreaterThan'
  | 'GreaterOrEqual'
  | 'IsNull'
  | 'NotNull';

export type ConditionType = 'SingleCriterion' | 'Aggregation';

export type ExecutionStageOfPriceRule = 'PreCalculate' | 'Completion';

export type RuleStatus =
  | 'Draft'
  | 'Activated'
  | 'Deactivated'
  | 'Verified'
  | 'ActivationInProgress'
  | 'DeactivationInProgress';

export type PriceSheetColumnType = 'Input' | 'Output';

export type ProductFamilyUsageType = string;

export type CategoryGroupVisibility = 'ALL' | 'NONE' | 'CUSTOM';

export type LoginFlowType = string;

export type UiLoginFlowType = 'VisualWorkflow' | 'VisualForce';

export type TabVisibility = 'Hidden' | 'DefaultOff' | 'DefaultOn';

export type PromptDisplayPosition =
  | 'TopLeft'
  | 'TopCenter'
  | 'TopRight'
  | 'BottomLeft'
  | 'BottomCenter'
  | 'BottomRight'
  | 'MiddleLeft'
  | 'MiddleCenter'
  | 'MiddleRight';

export type PromptDisplayType = 'DockedComposer' | 'FloatingPanel' | 'Walkthrough' | 'Targeted';

export type PromptElementRelativePosition =
  | 'TopLeft'
  | 'TopCenter'
  | 'TopRight'
  | 'LeftTop'
  | 'LeftCenter'
  | 'LeftBottom'
  | 'RightTop'
  | 'RightCenter'
  | 'RightBottom'
  | 'BottomLeft'
  | 'BottomCenter'
  | 'BottomRight';

export type PromptExperience = 'Lightning' | 'Site';

export type PromptImageLocation = 'Top' | 'Bottom' | 'Left' | 'Right';

export type PromptThemeColor = 'Theme1' | 'Theme2' | 'Theme3' | 'Theme4';

export type PromptThemeSaturation = 'Dark' | 'Light';

export type PromptUserAccess = 'Everyone' | 'SpecificPermissions';

export type PromptUserProfileAccess = 'Everyone' | 'SpecificProfiles';

export type CapacityType = 'INHERITED' | 'INTERRUPTIBLE' | 'NOT_INTERRUPTIBLE';

export type RoutingModel = 'LEAST_ACTIVE' | 'MOST_AVAILABLE' | 'EXTERNAL_ROUTING';

export type ActionSubtype = 'ScreenAction' | 'Action';

export type QuickActionLabel =
  | 'Custom'
  | 'LogACall'
  | 'LogANote'
  | 'New'
  | 'NewRecordType'
  | 'Update'
  | 'UpdateRecordType'
  | 'NewChild'
  | 'NewChildRecordType'
  | 'CreateNew'
  | 'CreateNewRecordType'
  | 'SendEmail'
  | 'QuickRecordType'
  | 'Quick'
  | 'EditDescription'
  | 'Defer'
  | 'ChangeDueDate'
  | 'ChangePriority'
  | 'ChangeStatus'
  | 'SocialPost'
  | 'Escalate'
  | 'EscalateToRecord'
  | 'OfferFeedback'
  | 'RequestFeedback'
  | 'AddRecord'
  | 'AddMember'
  | 'Reply'
  | 'ReplyAll'
  | 'Forward'
  | 'ScheduleAppointment'
  | 'EnrollInProgram'
  | 'ModifyAppointment'
  | 'PatientDetails'
  | 'Quip'
  | 'SendConversationMessage';

export type QuickActionType =
  | 'Create'
  | 'VisualforcePage'
  | 'Post'
  | 'SendEmail'
  | 'Email'
  | 'LogACall'
  | 'CaseComment'
  | 'ChangeStatus'
  | 'SocialPost'
  | 'Canvas'
  | 'Update'
  | 'MobileSmartActions'
  | 'MobileCreateFull'
  | 'ChangePriority'
  | 'ChangeDueDate'
  | 'LightningComponent'
  | 'LightningWebComponent'
  | 'Flow'
  | 'MobileExtension'
  | 'Quip'
  | 'SendConversationMessage';

export type StrategyReactionType = 'Accepted' | 'Rejected';

export type RecommendationConditionOperator =
  | 'EQUALS'
  | 'GREATER_THAN'
  | 'GREATER_THAN_OR_EQUAL_TO'
  | 'LESS_THAN'
  | 'LESS_THAN_OR_EQUAL_TO'
  | 'NOT_EQUALS'
  | 'LIKE'
  | 'STARTS_WITH'
  | 'ENDS_WITH'
  | 'CONTAINS';

export type RecommendationConditionValueType = 'TEXT' | 'NUMBER' | 'BOOLEAN' | 'DATE' | 'DATE_TIME' | 'TIME';

export type ChannelSource = 'Other' | 'Phone' | 'Chat';

export type PinnedAction = 'None' | 'Top' | 'Bottom';

export type RecordActionType = 'Flow' | 'QuickAction' | 'Omniscript';

export type ComponentName = 'ActionsAndRecommendations' | 'ActionLauncher';

export type RecordAggregationDefinitionAggregationType = string;

export type RecordAggregationJoinConditionType = 'AggregateTo' | 'Intermediate' | 'AggregateFrom';

export type RecordAggregationObjectFilterOperator =
  | 'Equals'
  | 'NotEquals'
  | 'LessThan'
  | 'LessThanOrEquals'
  | 'GreaterThan'
  | 'GreaterThanOrEquals'
  | 'Contains'
  | 'In'
  | 'NotIn';

export type RecordAggregationDefinitionStatus = 'Draft' | 'Active' | 'Inactive';

export type ReportAggregateDatatype = 'currency' | 'percent' | 'number';

export type ReportBucketFieldType = 'text' | 'number' | 'picklist';

export type ReportFormulaNullTreatment = 'n' | 'z';

export type ChartType =
  | 'None'
  | 'Scatter'
  | 'ScatterGrouped'
  | 'Bubble'
  | 'BubbleGrouped'
  | 'HorizontalBar'
  | 'HorizontalBarGrouped'
  | 'HorizontalBarStacked'
  | 'HorizontalBarStackedTo100'
  | 'VerticalColumn'
  | 'VerticalColumnGrouped'
  | 'VerticalColumnStacked'
  | 'VerticalColumnStackedTo100'
  | 'Line'
  | 'LineGrouped'
  | 'LineCumulative'
  | 'LineCumulativeGrouped'
  | 'Pie'
  | 'Donut'
  | 'Funnel'
  | 'VerticalColumnLine'
  | 'VerticalColumnGroupedLine'
  | 'VerticalColumnStackedLine'
  | 'Plugin';

export type ChartPosition = 'CHART_TOP' | 'CHART_BOTTOM';

export type ReportChartSize = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge';

export type ObjectFilterOperator = 'with' | 'without';

export type CurrencyIsoCode =
  | 'ADP'
  | 'AED'
  | 'AFA'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'ATS'
  | 'AUD'
  | 'XAV'
  | 'AWG'
  | 'AZM'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BEF'
  | 'BGL'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYB'
  | 'BYN'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLF'
  | 'CLP'
  | 'CNH'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CSD'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CYP'
  | 'CZK'
  | 'DEM'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'ECS'
  | 'EEK'
  | 'EGP'
  | 'ERN'
  | 'ESP'
  | 'ETB'
  | 'EUR'
  | 'FIM'
  | 'FJD'
  | 'FKP'
  | 'XFL'
  | 'FRF'
  | 'GBP'
  | 'GEL'
  | 'GHC'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GRD'
  | 'GTQ'
  | 'GWP'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRD'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'IEP'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'ITL'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LTL'
  | 'LUF'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'XMA'
  | 'MDL'
  | 'MGA'
  | 'MGF'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MRU'
  | 'MTL'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZM'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NLG'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'XPA'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PTE'
  | 'PYG'
  | 'QAR'
  | 'RMB'
  | 'ROL'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RUR'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDD'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SIT'
  | 'SKK'
  | 'SLE'
  | 'SLL'
  | 'XSO'
  | 'SOS'
  | 'SRD'
  | 'SRG'
  | 'SSP'
  | 'STD'
  | 'STN'
  | 'SUR'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJR'
  | 'TJS'
  | 'TMM'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TPE'
  | 'TRL'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEB'
  | 'VEF'
  | 'VES'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'YUM'
  | 'ZAR'
  | 'ZMK'
  | 'ZMW'
  | 'ZWD'
  | 'ZWL';

export type DataCategoryFilterOperation = 'above' | 'below' | 'at' | 'aboveOrBelow';

export type ReportFormat = 'MultiBlock' | 'Matrix' | 'Summary' | 'Tabular';

export type ReportAggrType = 'Sum' | 'Average' | 'Maximum' | 'Minimum' | 'Unique' | 'RowCount' | 'Median';

export type UserDateGranularity =
  | 'None'
  | 'Day'
  | 'Week'
  | 'Month'
  | 'Quarter'
  | 'Year'
  | 'FiscalQuarter'
  | 'FiscalYear'
  | 'MonthInYear'
  | 'DayInMonth'
  | 'FiscalPeriod'
  | 'FiscalWeek';

export type ReportSortType = 'Column' | 'Aggregate' | 'CustomSummaryFormula';

export type UserDateInterval =
  | 'INTERVAL_CURRENT'
  | 'INTERVAL_CURNEXT1'
  | 'INTERVAL_CURPREV1'
  | 'INTERVAL_NEXT1'
  | 'INTERVAL_PREV1'
  | 'INTERVAL_CURNEXT3'
  | 'INTERVAL_CURFY'
  | 'INTERVAL_PREVFY'
  | 'INTERVAL_PREV2FY'
  | 'INTERVAL_AGO2FY'
  | 'INTERVAL_NEXTFY'
  | 'INTERVAL_PREVCURFY'
  | 'INTERVAL_PREVCUR2FY'
  | 'INTERVAL_CURNEXTFY'
  | 'INTERVAL_CUSTOM'
  | 'INTERVAL_YESTERDAY'
  | 'INTERVAL_TODAY'
  | 'INTERVAL_TOMORROW'
  | 'INTERVAL_LASTWEEK'
  | 'INTERVAL_THISWEEK'
  | 'INTERVAL_NEXTWEEK'
  | 'INTERVAL_LASTMONTH'
  | 'INTERVAL_THISMONTH'
  | 'INTERVAL_NEXTMONTH'
  | 'INTERVAL_LASTTHISMONTH'
  | 'INTERVAL_THISNEXTMONTH'
  | 'INTERVAL_CURRENTQ'
  | 'INTERVAL_CURNEXTQ'
  | 'INTERVAL_CURPREVQ'
  | 'INTERVAL_NEXTQ'
  | 'INTERVAL_PREVQ'
  | 'INTERVAL_CURNEXT3Q'
  | 'INTERVAL_CURY'
  | 'INTERVAL_PREVY'
  | 'INTERVAL_PREV2Y'
  | 'INTERVAL_AGO2Y'
  | 'INTERVAL_NEXTY'
  | 'INTERVAL_PREVCURY'
  | 'INTERVAL_PREVCUR2Y'
  | 'INTERVAL_CURNEXTY'
  | 'INTERVAL_LAST7'
  | 'INTERVAL_LAST30'
  | 'INTERVAL_LAST60'
  | 'INTERVAL_LAST90'
  | 'INTERVAL_LAST120'
  | 'INTERVAL_NEXT7'
  | 'INTERVAL_NEXT30'
  | 'INTERVAL_NEXT60'
  | 'INTERVAL_NEXT90'
  | 'INTERVAL_NEXT120'
  | 'LAST_FISCALWEEK'
  | 'THIS_FISCALWEEK'
  | 'NEXT_FISCALWEEK'
  | 'LAST_FISCALPERIOD'
  | 'THIS_FISCALPERIOD'
  | 'NEXT_FISCALPERIOD'
  | 'LASTTHIS_FISCALPERIOD'
  | 'THISNEXT_FISCALPERIOD'
  | 'CURRENT_ENTITLEMENT_PERIOD'
  | 'PREVIOUS_ENTITLEMENT_PERIOD'
  | 'PREVIOUS_TWO_ENTITLEMENT_PERIODS'
  | 'TWO_ENTITLEMENT_PERIODS_AGO'
  | 'CURRENT_AND_PREVIOUS_ENTITLEMENT_PERIOD'
  | 'CURRENT_AND_PREVIOUS_TWO_ENTITLEMENT_PERIODS';

export type ReportTypeCategory =
  | 'accounts'
  | 'opportunities'
  | 'forecasts'
  | 'cases'
  | 'leads'
  | 'campaigns'
  | 'activities'
  | 'busop'
  | 'products'
  | 'admin'
  | 'territory'
  | 'other'
  | 'content'
  | 'usage_entitlement'
  | 'wdc'
  | 'calibration'
  | 'territory2'
  | 'quotes'
  | 'individual'
  | 'employee'
  | 'data_cloud';

export type ActualsCalculationMode = 'Manual' | 'Orders' | 'OrdersThroughContracts';

export type SamlIdentityLocationType = 'SubjectNameId' | 'Attribute';

export type SamlIdentityType = 'Username' | 'FederationId' | 'UserId';

export type SamlType = 'SAML1_1' | 'SAML2_0';

export type SamlSpSLOBinding = 'RedirectBinding' | 'PostBinding';

export type DomainType = 'FTest' | 'FTest2';

export type SearchResultActionScope = string;

export type SearchResultActionType = 'FlowDefinition' | 'LightningWebComponent';

export type Complexity =
  | 'NoRestriction'
  | 'AlphaNumeric'
  | 'SpecialCharacters'
  | 'UpperLowerCaseNumeric'
  | 'UpperLowerCaseNumericSpecialCharacters'
  | 'Any3UpperLowerCaseNumericSpecialCharacters';

export type Expiration = 'ThirtyDays' | 'SixtyDays' | 'NinetyDays' | 'SixMonths' | 'OneYear' | 'Never';

export type LockoutInterval = 'FifteenMinutes' | 'ThirtyMinutes' | 'SixtyMinutes' | 'Forever';

export type MaxLoginAttempts = 'ThreeAttempts' | 'FiveAttempts' | 'TenAttempts' | 'NoLimit';

export type QuestionRestriction = 'None' | 'DoesNotContainPassword';

export type SessionTimeout =
  | 'TwentyFourHours'
  | 'TwelveHours'
  | 'EightHours'
  | 'FourHours'
  | 'TwoHours'
  | 'NinetyMinutes'
  | 'SixtyMinutes'
  | 'ThirtyMinutes'
  | 'FifteenMinutes';

export type ServiceAISetupDefStatus =
  | 'FIELDS_SELECTED'
  | 'TRAINING'
  | 'READY_TO_ACTIVATE'
  | 'SERVING'
  | 'RETIRED'
  | 'ARCHIVED'
  | 'READY_FOR_REVIEW'
  | 'TRAINING_FAILURE';

export type ServiceAISetupFieldType =
  | 'CASE_DESC'
  | 'CASE_SUBJ'
  | 'ARTICLE_TITLE'
  | 'ARTICLE_CONTENT'
  | 'ARTICLE_SUMMARY'
  | 'ARTICLE_ANSWER'
  | 'ARTICLE_QUESTION';

export type SvcCtlgItemAttrAttributeType = 'Base' | 'Extended';

export type SvcCatalogItemAttrDataType =
  | 'Attachment'
  | 'Checkbox'
  | 'Currency'
  | 'Date'
  | 'Datetime'
  | 'DisplayText'
  | 'Email'
  | 'IPAddress'
  | 'Integer'
  | 'Lookup'
  | 'ListOfBoolean'
  | 'ListOfDouble'
  | 'ListOfInteger'
  | 'ListOfMaps'
  | 'ListOfString'
  | 'MultilineText'
  | 'Map'
  | 'Number'
  | 'NumericScale'
  | 'Picklist'
  | 'Percentage'
  | 'Queue'
  | 'SingleCheckbox'
  | 'SinglelineText'
  | 'Text'
  | 'Toggle'
  | 'URL';

export type SvcCatalogItemDependencyType =
  | 'PreprocessorApexClass'
  | 'FlowDefinition'
  | 'IntegrationProviderDef'
  | 'OmniScriptConfig';

export type SvcCatalogItemUsageType = 'Employee' | 'CustomerService' | 'Industry' | 'FinancialServices';

export type SlackRecordLayoutViewMode = 'recordcrud' | 'urlunfurling';

export type CaseSubjectOption = 'SocialPostSource' | 'SocialPostContent' | 'BuildCustom';

export type StationaryAssetType = 'CommercialBuilding' | 'DataCenter';

export type StreamingAppDataConnectorType = 'MobileApp' | 'WebApp';

export type UnitType = 'Volume' | 'Weight' | 'Energy' | 'Other';

export type PropertyDisplayType =
  | 'Lookup'
  | 'Picklist'
  | 'Text'
  | 'Checkbox'
  | 'Number'
  | 'Queue'
  | 'Date'
  | 'DateTime';

export type SvcCatalogItemAttrType = 'FulfillmentInput' | 'UserQuestion';

export type PublishStatusType = 'Draft' | 'Published' | 'PendingChanges' | 'Deprecated';

export type TimeSheetFrequency = 'Daily' | 'Weekly' | 'EveryTwoWeeks' | 'TwiceAMonth' | 'Monthly';

export type DaysOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export type TransactionSecurityEventName =
  | 'ReportEvent'
  | 'ApiEvent'
  | 'AdminSetupEvent'
  | 'LoginEvent'
  | 'ListViewEvent'
  | 'CredentialStuffingEventStore'
  | 'ReportAnomalyEventStore'
  | 'SessionHijackingEventStore'
  | 'ApiAnomalyEventStore'
  | 'BulkApiResultEventStore'
  | 'PermissionSetEventStore'
  | 'FileEventStore';

export type MonitoredEvents = 'AuditTrail' | 'Login' | 'Entity' | 'DataExport' | 'AccessResource';

export type TxnSecurityPolicyType = 'CustomApexPolicy' | 'CustomConditionBuilderPolicy';

export type ObjectRelationshipType = 'Direct' | 'Indirect' | 'Self' | 'InverseDirect';

export type UserAccessPolicyStatus = 'Design' | 'Testing' | 'Migrate' | 'Updating' | 'Failed' | 'Active' | 'Completed';

export type UserAccessPolicyTriggerType = 'Create' | 'Update' | 'CreateAndUpdate';

export type UserAccessPolicyActionType = 'Grant' | 'Revoke';

export type UserAccessPolicyActionTargetType =
  | 'PermissionSet'
  | 'PermissionSetGroup'
  | 'PermissionSetLicense'
  | 'PackageLicense'
  | 'Group'
  | 'Queue';

export type UserAccessPolicyFilterOperation = 'equals' | 'notEquals' | 'in';

export type UserAccessPolicyFilterTargetType =
  | 'PermissionSet'
  | 'PermissionSetGroup'
  | 'PermissionSetLicense'
  | 'Profile'
  | 'UserRole'
  | 'PackageLicense'
  | 'User';

export type NetworkUserType = 'Internal' | 'Customer' | 'Partner';

export type VehicleAssetType = 'FleetVehicle' | 'PrivateJet';

export type VisualizationResourceType = 'js' | 'css';

export type CountryIsoCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GW'
  | 'GY'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PS'
  | 'PT'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'XK'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';

export type TaxLocaleType = 'Net' | 'Gross';

export type OrderLifeCycleType = 'MANAGED' | 'UNMANAGED';

export type PricingStrategy = 'LowestPrice' | 'Priority';

export type ProductGrouping = 'VariationParent' | 'NoGrouping';

export type WebStoreType = 'B2B' | 'B2C' | 'B2CE';

export type LookupValueType = 'User' | 'Queue' | 'RecordType';

export type FieldUpdateOperation = 'Formula' | 'Literal' | 'Null' | 'NextValue' | 'PreviousValue' | 'LookupValue';

export type KnowledgeWorkflowAction = 'PublishAsNew' | 'Publish';

export type SendAction = string;

export type ActionTaskAssignedToTypes =
  | 'user'
  | 'role'
  | 'opportunityTeam'
  | 'accountTeam'
  | 'owner'
  | 'accountOwner'
  | 'creator'
  | 'accountCreator'
  | 'partnerUser'
  | 'portalRole';

export type ActionEmailRecipientTypes =
  | 'group'
  | 'role'
  | 'user'
  | 'opportunityTeam'
  | 'accountTeam'
  | 'roleSubordinates'
  | 'owner'
  | 'creator'
  | 'partnerUser'
  | 'accountOwner'
  | 'customerPortalUser'
  | 'portalRole'
  | 'portalRoleSubordinates'
  | 'contactLookup'
  | 'userLookup'
  | 'roleSubordinatesInternal'
  | 'email'
  | 'caseTeam'
  | 'campaignMemberDerivedOwner';

export type ActionEmailSenderType = 'CurrentUser' | 'OrgWideEmailAddress' | 'DefaultWorkflowUser';

export type WorkflowTriggerTypes = 'onCreateOnly' | 'onCreateOrTriggeringUpdate' | 'onAllChanges' | 'OnRecursiveUpdate';

export type WorkflowTimeUnits = 'Hours' | 'Days';

export type ExtendedErrorCode =
  | 'ACTIONCALL_DUPLICATE_INPUT_PARAM'
  | 'ACTIONCALL_DUPLICATE_OUTPUT_PARAM'
  | 'ACTIONCALL_INPUT_VALIDATION_FAILED'
  | 'ACTIONCALL_INVALID_INPUT_PARAM_NAME'
  | 'ACTIONCALL_MISSING_NAME'
  | 'ACTIONCALL_MISSING_REQUIRED_PARAM'
  | 'ACTIONCALL_MISSING_REQUIRED_TYPE'
  | 'ACTIONCALL_NOT_FOUND_WITH_NAME_AND_TYPE'
  | 'ACTIONCALL_NOT_SUPPORTED_FOR_PROCESSTYPE'
  | 'ACTIONCALL_NOT_SUPPORTED_FOR_TRIGGERTYPE'
  | 'ACTIONCALL_TRANSACTION_MODEL_NOT_ALLOWED'
  | 'ACTIONCALL_TRANSACTION_MODEL_NOT_SUPPORTED'
  | 'ACTIONCALL_TRIGGERING_RECORD_MISMATCHED_OBJECTTYPE'
  | 'ACTION_CALL_INPUT_SETUPREFTYPE_REQUIRES_SETUPREFVALUE'
  | 'ACTION_CALL_INVALID_CONFIGURATION'
  | 'ACTION_CALL_INVALID_INPUT_PARAM'
  | 'ACTION_CALL_INVALID_OUTPUT_PARAM'
  | 'ACTION_INPUT_PARAMETER_REQUIRES_ID_TYPE_FOR_SETUP_REFERENCE'
  | 'ACTION_INPUT_PARAMETER_TYPE_AND_SETUP_REFERENCE_TYPE_DO_NOT_MATCH'
  | 'ACTION_TYPE_REQUIRED_FOR_STEP'
  | 'ADDING_ATTACHMENT_QUESTIONS_ADDITION_TO_EXISTING_SURVEY'
  | 'APEXCALLOUT_INPUT_DUPLICATE'
  | 'APEXCALLOUT_INPUT_INCOMPATIBLE_DATATYPE'
  | 'APEXCALLOUT_INVALID'
  | 'APEXCALLOUT_MISSING_CLASSNAME'
  | 'APEXCALLOUT_NOT_FOUND'
  | 'APEXCALLOUT_OUTPUT_INCOMPATIBLE_DATATYPE'
  | 'APEXCALLOUT_OUTPUT_INVALID'
  | 'APEXCALLOUT_REQUIRED_INPUT_MISSING'
  | 'APEXCLASS_MISSING_INTERFACE'
  | 'APEX_CLASS_VARIABLE_NOT_FOUND'
  | 'ASSIGNEE_AUTOPROC'
  | 'ASSIGNEE_USER_USERNAME'
  | 'ASSIGNMENTITEM_ELEMENT_MISSING_DATATYPE'
  | 'ASSIGNMENTITEM_ELEMENT_NOT_SUPPORTED'
  | 'ASSIGNMENTITEM_FIELD_INVALID_DATATYPE'
  | 'ASSIGNMENTITEM_FIELD_INVALID_DATATYPE_WITH_ELEMENT'
  | 'ASSIGNMENTITEM_INCOMPATIBLE_DATATYPES'
  | 'ASSIGNMENTITEM_INVALID_ASSIGNTOREFERENCE'
  | 'ASSIGNMENTITEM_INVALID_COLLECTION'
  | 'ASSIGNMENTITEM_INVALID_DATATYPE_IN_ELEMENT'
  | 'ASSIGNMENTITEM_INVALID_ELEMENTREFERENCE'
  | 'ASSIGNMENTITEM_INVALID_MERGE_FIELD'
  | 'ASSIGNMENTITEM_INVALID_OPERATOR'
  | 'ASSIGNMENTITEM_INVALID_REFERENCE'
  | 'ASSIGNMENTITEM_INVALID_VALUE'
  | 'ASSIGNMENTITEM_LEFT_DATATYPE_INVALID_FOR_OPERATOR'
  | 'ASSIGNMENTITEM_MODIFIES_NONVARIABLE'
  | 'ASSIGNMENTITEM_NONEXISTENT_REFERENCE'
  | 'ASSIGNMENTITEM_REQUIRED'
  | 'ASSIGNMENTITEM_RIGHT_DATATYPE_INVALID_FOR_OPERATOR'
  | 'AUTOLAUNCHED_CHOICELOOKUP_NOT_SUPPORTED'
  | 'AUTOLAUNCHED_CHOICE_NOT_SUPPORTED'
  | 'AUTOLAUNCHED_SCREEN_NOT_SUPPORTED'
  | 'AUTOLAUNCHED_STEP_NOT_SUPPORTED'
  | 'AUTOLAUNCHED_SUBFLOW_INCOMPATIBLE_FLOWTYPE'
  | 'AUTOLAUNCHED_WAIT_NOT_SUPPORTED'
  | 'BEFORE_SAVE_FLOW_RECORD_UPDATE_CANNOT_HAVE_FAULT_CONNECTOR'
  | 'BEFORE_SAVE_FLOW_RECORD_UPDATE_INVALID_REFERENCE'
  | 'BEFORE_SAVE_FLOW_RECORD_UPDATE_RELATED_RECORD_REQUIRES_INPUTASSIGNMENTS'
  | 'BEFORE_SAVE_FLOW_RECORD_UPDATE_REQUIRES_INPUTASSIGNMENTS'
  | 'BOTH_START_NODE_AND_REFERENCE_FOUND'
  | 'CHOICEFIELD_DEFAULT_CHOICE_NOT_FOUND'
  | 'CHOICEFIELD_MISSING_CHOICE'
  | 'CHOICELOOKUP_DATATYPE_INCOMPATIBLE_WITH_CHOICEFIELD'
  | 'CHOICE_DATATYPE_INCOMPATIBLE_WITH_CHOICEFIELD'
  | 'CHOICE_LOOKUP_COLLECTION_REFERENCE_NULL'
  | 'CHOICE_LOOKUP_INVALID_COLLECTION_REFERENCE'
  | 'CHOICE_NOT_SUPPORTED_FOR_SCREENFIELDTYPE'
  | 'CHOICE_USED_MULTIPLE_TIMES_IN_SAME_FIELD'
  | 'COLLECTION_PROCESSOR_DUPLICATE_MAPITEM'
  | 'COLLECTION_PROCESSOR_INVALID_COLLECTION_REFERENCE'
  | 'COLLECTION_PROCESSOR_INVALID_CONFIGURATION'
  | 'COLLECTION_PROCESSOR_INVALID_OUTPUTSOBJECTTYPE'
  | 'COLLECTION_PROCESSOR_MAX_SORT_FIELDS_LIMIT_EXCEEDED'
  | 'COLLECTION_PROCESSOR_MISMATCHED_OBJECTTYPE'
  | 'COLLECTION_PROCESSOR_MISSING_MAP'
  | 'COLLECTION_PROCESSOR_MISSING_OUTPUTSOBJECTTYPE'
  | 'COLLECTION_PROCESSOR_MISSING_PARAMETER'
  | 'COLLECTION_PROCESSOR_MISSING_SORT'
  | 'COLLECTION_PROCESSOR_NOT_SUPPORTED_FOR_API_VERSION'
  | 'COLLECTION_PROCESSOR_REQUIRES_PERM'
  | 'COLLECTION_PROCESSOR_SORT_FIELD_INVALID_FOR_OBJECT'
  | 'COLLECTION_PROCESSOR_TYPE_NOT_SUPPORTED'
  | 'COLLECTION_PROCESSOR_VARIABLE_NULL'
  | 'CONDITIONAL_SCREENFIELD_VISIBILITY_NOT_SUPPORTED_FOR_ENVIRONMENT'
  | 'CONDITION_BUILDER_MISSING_FLOW_VARIABLE'
  | 'CONDITION_BUILDER_MISSING_REQUIRED_PERMISSIONS'
  | 'CONDITION_BUILDER_UNSUPPORTED_FLOW_VARIABLE'
  | 'CONDITION_INVALID_LEFTOPERAND'
  | 'CONDITION_LOGIC_EXCEEDS_LIMIT'
  | 'CONDITION_LOGIC_INVALID'
  | 'CONDITION_LOGIC_MISSING'
  | 'CONDITION_MISSING_DATATYPE'
  | 'CONDITION_MISSING_OPERATOR'
  | 'CONDITION_OPERAND_DATATYPES_INCOMPATIBLE'
  | 'CONDITION_OPERAND_INCOMPATIBLE_WITH_ELEMENT'
  | 'CONDITION_OPERATOR_INCOMPATIBLE'
  | 'CONDITION_REFERENCED_ELEMENT_NOT_FOUND'
  | 'CONDITION_RIGHTOPERAND_NULL'
  | 'CONDITION_TRAVERSAL_TOO_DEEP'
  | 'CONNECTOR_MISSING_TARGET'
  | 'CONSTANT_INCLUDES_REFERENCES'
  | 'CONTENT_KEY_OR_ID_NOT_FOUND'
  | 'CUSTOMEVENTS_NOT_ENABLED'
  | 'CUSTOMEVENT_MISSING_PROCESSMETADATAVALUES'
  | 'CUSTOMEVENT_OBJECTTYPE_NOT_FOUND'
  | 'CUSTOMEVENT_OBJECTTYPE_NOT_SUPPORTED'
  | 'CUSTOMEVENT_PROCESSMETADATAVALUES_MISSING_NAME'
  | 'CUSTOMEVENT_PROCESSMETADATAVALUES_MORE_THAN_ONE_NAME'
  | 'DATATYPE_INVALID'
  | 'DATATYPE_MISSING'
  | 'DATA_TYPE_NOT_SUPPORTED_FOR_PROCESSTYPE'
  | 'DECISION_DEFAULT_CONNECTOR_MISSING_LABEL'
  | 'DECISION_MISSING_OUTCOME'
  | 'DETERMINATION_FLOW_ACTION_TYPE_REQUIRED'
  | 'DYNAMIC_TYPE_MAPPING_MISSING'
  | 'EITHER_CONDITIONS_OR_ACTION_NOT_SUPPORTED'
  | 'ELEMENT_CONNECTS_TO_SELF'
  | 'ELEMENT_COORDINATES_INVALID'
  | 'ELEMENT_INVALID_CONNECTOR'
  | 'ELEMENT_INVALID_REFERENCE'
  | 'ELEMENT_INVALID_REFERENCE_FOR_CONFLICTING_FIELD_VALUE'
  | 'ELEMENT_MISSING_CONNECTOR'
  | 'ELEMENT_MISSING_LABEL'
  | 'ELEMENT_MISSING_NAME'
  | 'ELEMENT_MISSING_REFERENCE'
  | 'ELEMENT_MORE_THAN_ONE_FIELD'
  | 'ELEMENT_NAME_INVALID'
  | 'ELEMENT_NEVER_USED'
  | 'ELEMENT_NOT_SUPPORTED_IN_SUBFLOW_FOR_TRIGGER_TYPE'
  | 'ELEMENT_SCALE_SMALLER_THAN_DEFAULTVALUE'
  | 'ELEMENT_SUBTYPE_NOT_SUPPORTED_FOR_ELEMENTTYPE'
  | 'ELEMENT_SUBTYPE_NOT_SUPPORTED_FOR_PROCESSTYPE'
  | 'ELEMENT_TYPE_NOT_SUPPORTED_FOR_ENVIRONMENT'
  | 'ENTRY_CONDITION_CONFLICTING_FILTERS'
  | 'ENVIRONMENTS_VALUE_CHANGED'
  | 'ENVIRONMENT_PERMISSION_REQUIRED'
  | 'ERROR_DETAIL_EXT_TEST_ERROR'
  | 'ERROR_DETAIL_EXT_TEST_INVALID_PROP_ERROR'
  | 'EXTERNAL_OBJECTS_NOT_SUPPORTED'
  | 'EXTERNAL_OBJECT_FIELDS_NOT_SUPPORTED'
  | 'EX_AUTOLAUNCHED_SUBFLOW_INCOMPATIBLE_FLOWTYPE'
  | 'FEATURE_DISABLED'
  | 'FIELDASSIGNMENT_FIELD_INCOMPATIBLE_DATATYPE'
  | 'FIELDASSIGNMENT_INVALID_DATATYPE'
  | 'FIELDASSIGNMENT_INVALID_ELEMENT'
  | 'FIELDASSIGNMENT_INVALID_REFERENCE'
  | 'FIELDASSIGNMENT_MULTIPLE_REFERENCES_SAME_FIELD'
  | 'FIELDASSIGNMENT_PICKLISTFIELD_INCOMPATIBLE_DATATYPE'
  | 'FIELDASSIGNMENT_REFERENCED_ELEMENT_MISSING_DATATYPE'
  | 'FIELDSERVICE_UNSUPPORTED_FIELD_TYPE'
  | 'FIELD_INVALID_VALUE'
  | 'FIELD_NOT_FOUND'
  | 'FIELD_RELATIONSHIP_NOT_SUPPORTED'
  | 'FIELD_TYPE_NOT_SUPPORTED_AS_CHILD_OF_SCREENFIELD_REGION_OR_REGIONCONTAINER'
  | 'FIELD_TYPE_NOT_SUPPORTED_AS_PARENT'
  | 'FIELD_VALUE_REQUIRES_PERM'
  | 'FLEXIPAGE_COMPONENT_ATTRIBUTE_EXPRESSION_EXCEPTION'
  | 'FLEXIPAGE_COMPONENT_ATTRIBUTE_GENERIC_EXCEPTION'
  | 'FLEXIPAGE_COMPONENT_ATTRIBUTE_MISSING_REQUIRED'
  | 'FLEXIPAGE_COMPONENT_ATTRIBUTE_TOO_LONG'
  | 'FLEXIPAGE_COMPONENT_CUSTOM_VALIDATION_EXCEPTION'
  | 'FLEXIPAGE_COMPONENT_DESIGN_EXCEPTION'
  | 'FLEXIPAGE_COMPONENT_EVENT_DUPLICATE_TARGET_EXCEPTION'
  | 'FLEXIPAGE_COMPONENT_EVENT_EMPTY_TARGET_MAPPING_EXCEPTION'
  | 'FLEXIPAGE_COMPONENT_EVENT_INVALID_FORMFACTOR_EXCEPTION'
  | 'FLEXIPAGE_COMPONENT_EVENT_INVALID_SERVICE_EXCEPTION'
  | 'FLEXIPAGE_COMPONENT_EVENT_SOURCE_EXCEPTION'
  | 'FLEXIPAGE_COMPONENT_MAX_LIMIT_EXCEPTION'
  | 'FLEXIPAGE_COMPONENT_RULE_VALIDATION_EXCEPTION'
  | 'FLEXIPAGE_DUPLICATE_PROPERTY_COMPONENT_EXCEPTION'
  | 'FLEXIPAGE_EVENT_ATTRIBUTE_GENERIC_EXCEPTION'
  | 'FLEXIPAGE_INVALID_ITEM_INSTANCE_TYPE_EXCEPTION'
  | 'FLEXIPAGE_INVALID_PROPERTY_TYPE_COMPONENT_EXCEPTION'
  | 'FLEXIPAGE_INVALID_PROPERTY_TYPE_EVENT_TARGET_EXCEPTION'
  | 'FLEXIPAGE_ITEM_INSTANCE_CUSTOM_VALIDATION_EXCEPTION'
  | 'FLEXIPAGE_MAX_INTERACTIONS_EXCEPTION'
  | 'FLEXIPAGE_PICKLIST_INVALID_VALUE_EXCEPTION'
  | 'FLEXIPAGE_RENAMED_COMPONENT_VALIDATION_EXCEPTION'
  | 'FLEXIPAGE_TEMPLATE_INVALID_SWITCH'
  | 'FLOW_ALREADY_OVERRIDDEN'
  | 'FLOW_COMPLEX_VALUE_COLLECTION_TYPE_EXPECTED'
  | 'FLOW_COMPLEX_VALUE_INVALID_JSON'
  | 'FLOW_COMPLEX_VALUE_INVALID_MERGE_FIELD'
  | 'FLOW_COMPLEX_VALUE_NOT_SUPPORTED'
  | 'FLOW_COMPLEX_VALUE_SCALAR_TYPE_EXPECTED'
  | 'FLOW_CONTEXT_RECORD_ASSIGNMENT_VARIABLE_INVALID'
  | 'FLOW_CUSTOM_ERROR_COMPOUND_FIELD_NOT_SUPPORTED'
  | 'FLOW_CUSTOM_ERROR_EMPTY_MESSAGES_LIST'
  | 'FLOW_CUSTOM_ERROR_INVALID_OR_INCOMPLETE_FIELD'
  | 'FLOW_CUSTOM_ERROR_MULTIPLE_ERRORS_ON_FIELD'
  | 'FLOW_CUSTOM_ERROR_MULTIPLE_PAGE_ERRORS_EXCEPTION'
  | 'FLOW_CUSTOM_ERROR_NO_FIELD_SELECTION_FOR_FIELD_ERROR'
  | 'FLOW_ELEMENT_SCALE_LESS_THAN_ZERO'
  | 'FLOW_FORMULA_FIELD_MISSING'
  | 'FLOW_FORMULA_NOT_SUPPORTED'
  | 'FLOW_IMMEDIATE_PATH_INCOMPATIBLE_WITH_EXTERNAL_CALLOUTS'
  | 'FLOW_IMMEDIATE_PATH_INCOMPATIBLE_WITH_EXTERNAL_OBJECTS'
  | 'FLOW_INCLUDES_STEP'
  | 'FLOW_INPUTPARAM_MISMATCHED_APEX_CLASS'
  | 'FLOW_INTERVIEW_BULK_EXECUTION'
  | 'FLOW_INTERVIEW_HANDLED_ERROR'
  | 'FLOW_INTERVIEW_INPUT_VALIDATION'
  | 'FLOW_INTERVIEW_INTERACTION_NOT_FOUND'
  | 'FLOW_INTERVIEW_INVALID_CHOICE_USER_INPUT'
  | 'FLOW_INTERVIEW_INVALID_FIELD_VALUE'
  | 'FLOW_INTERVIEW_INVALID_START_REQUEST'
  | 'FLOW_INTERVIEW_LIMIT_EXCEEDED'
  | 'FLOW_INTERVIEW_MISSING_CHOICE_FOR_REQUIRED_CHOICE_FIELD'
  | 'FLOW_INTERVIEW_MISSING_VALUE_FOR_REQUIRED_INPUT_FIELD'
  | 'FLOW_INTERVIEW_NAVIGATE'
  | 'FLOW_INTERVIEW_RANGE_VALIDATION'
  | 'FLOW_INTERVIEW_REGEX_VALIDATION'
  | 'FLOW_INTERVIEW_RESUME_INTERVIEW'
  | 'FLOW_INTERVIEW_SAVE_RESULT'
  | 'FLOW_INTERVIEW_SET_CHOICE_SELECTED'
  | 'FLOW_INTERVIEW_START_INTERVIEW'
  | 'FLOW_INTERVIEW_TYPE_CONVERSION'
  | 'FLOW_INVALID_NAME'
  | 'FLOW_NAME_USED_IN_OTHER_CLIENT'
  | 'FLOW_OVERRIDABLE_CANNOT_BE_OVERRIDE'
  | 'FLOW_OVERRIDABLE_CANNOT_BE_TEMPLATE'
  | 'FLOW_OVERRIDDEN_FLOW_INVALID_REFERENCE'
  | 'FLOW_OVERRIDE_EXTRA_VARIABLE'
  | 'FLOW_OVERRIDE_INCOMPATIBLE_PROCESS_TYPE'
  | 'FLOW_OVERRIDE_INCOMPATIBLE_TYPE'
  | 'FLOW_OVERRIDE_INCOMPATIBLE_VARIABLE'
  | 'FLOW_RECORD_PRIOR_AUTOLAUNCH_UPDATE_ONLY'
  | 'FLOW_RECORD_PRIOR_INVALID_IN_RECORD_CREATE'
  | 'FLOW_RECORD_PRIOR_INVALID_IN_RECORD_DELETE'
  | 'FLOW_RECORD_PRIOR_INVALID_IN_RECORD_UPDATE'
  | 'FLOW_RECORD_PRIOR_READ_ONLY'
  | 'FLOW_REFERENCES_APEX_CLASS_NOT_IN_SAME_PACKAGE'
  | 'FLOW_RESOURCE_NOT_SUPPORTED_FOR_ENVIRONMENT'
  | 'FLOW_RULE_REQUIRE_RECORD_CHANGED_NEVER_CHECKED_FOR_RECORD_PRIOR'
  | 'FLOW_SCHEDULED_PATH_ALLOWED_ONE_ASYNCAFTERCOMMIT_PATH'
  | 'FLOW_SCHEDULED_PATH_ASYNCAFTERCOMMIT_REQUIRES_RECORD_CHANGED_OR_ISCHANGED'
  | 'FLOW_SCHEDULED_PATH_CANNOT_USE_IS_CHANGED'
  | 'FLOW_SCHEDULED_PATH_INCOMPATIBLE_TIME_SOURCE'
  | 'FLOW_SCHEDULED_PATH_INCOMPATIBLE_WHEN_DECISION_REQUIRES_RECORD_CHANGED'
  | 'FLOW_SCHEDULED_PATH_INCOMPATIBLE_WITH_FLOW_TRIGGER_TYPE'
  | 'FLOW_SCHEDULED_PATH_INCOMPATIBLE_WITH_RECORD_PRIOR'
  | 'FLOW_SCHEDULED_PATH_INVALID_BATCH_SIZE'
  | 'FLOW_SCHEDULED_PATH_INVALID_OFFSET'
  | 'FLOW_SCHEDULED_PATH_REQUIRED_FIELDS_MISSING'
  | 'FLOW_SCHEDULED_PATH_REQUIRES_DEFAULT_WORKFLOW_USER'
  | 'FLOW_SCHEDULED_PATH_REQUIRES_RECORD_CHANGED_TO_MEET_CRITERIA'
  | 'FLOW_SCHEDULE_INFORMATION_INCOMPLETE'
  | 'FLOW_SOBJECT_VARIABLE_NOT_PERSISTED'
  | 'FLOW_SOURCE_TEMPLATE_INVALID_REFERENCE'
  | 'FLOW_STAGE_INCLUDES_REFERENCES'
  | 'FLOW_STAGE_ORDER_DUPLICATE'
  | 'FLOW_STAGE_ORDER_OUT_OF_RANGE'
  | 'FLOW_SYSTEM_VARIABLE_NOT_SUPPORTED_FOR_TRIGGERTYPE'
  | 'FLOW_TEST_API_NAME_DUPLICATED'
  | 'FLOW_TEST_ASSERTION_MISSING'
  | 'FLOW_TEST_ASSERTION_NOT_SUPPORTED'
  | 'FLOW_TEST_CONDITION_INCOMPATIBLE'
  | 'FLOW_TEST_CONDITION_INVALID_DATATYPE_MAPPING'
  | 'FLOW_TEST_CONDITION_LIMIT'
  | 'FLOW_TEST_CONDITION_NOT_SUPPORTED'
  | 'FLOW_TEST_DATATYPE_INVALID'
  | 'FLOW_TEST_FLOW_INVALID'
  | 'FLOW_TEST_IMMEDIATE_PATH_MISSING'
  | 'FLOW_TEST_MERGE_FIELD_INVALID'
  | 'FLOW_TEST_MERGE_FIELD_NOT_SUPPORTED'
  | 'FLOW_TEST_OPERATOR_INVALID'
  | 'FLOW_TEST_PARAMETER_DUPLICATED'
  | 'FLOW_TEST_PARAMETER_INCOMPATIBLE'
  | 'FLOW_TEST_PARAMETER_INVALID'
  | 'FLOW_TEST_PARAMETER_LEFTVALUEREFERENCE_INVALID'
  | 'FLOW_TEST_PARAMETER_MISSING'
  | 'FLOW_TEST_PARAMETER_NOT_SUPPORTED'
  | 'FLOW_TEST_PARAMETER_TYPE_INVALID'
  | 'FLOW_TEST_PARAMETER_VALUE_INVALID'
  | 'FLOW_TEST_PARAMETER_VALUE_MISSING'
  | 'FLOW_TEST_PARAMS_REQUIRED'
  | 'FLOW_TEST_POINTS_DUPLICATED'
  | 'FLOW_TEST_POINT_MISSING'
  | 'FLOW_TEST_POINT_NOT_SUPPORTED'
  | 'FLOW_TEST_PROCESSTYPE_INVALID'
  | 'FLOW_TEST_RIGHTVALUE_INVALID'
  | 'FLOW_TRANSFORM_APEX_CLASS_INCOMPATIBLE'
  | 'FLOW_TRANSFORM_API_VERSION_NOT_SUPPORTED'
  | 'FLOW_TRANSFORM_ELEMENT_REFERENCE_INVALID'
  | 'FLOW_TRANSFORM_ELEMENT_REFERENCE_TYPE_INCOMPATIBLE'
  | 'FLOW_TRANSFORM_FMLA_COLL_MULT_RSRC'
  | 'FLOW_TRANSFORM_MAP_COLL_MISSING'
  | 'FLOW_TRANSFORM_MAP_COLL_MULT_SOURCE'
  | 'FLOW_TRANSFORM_MAP_COLL_NUM_OF_REF'
  | 'FLOW_TRANSFORM_MAP_COLL_RELA_RECORDS'
  | 'FLOW_TRANSFORM_MAP_COL_PRIMITIVE_INCOMPA'
  | 'FLOW_TRANSFORM_MAP_MULTIPLE_RESOURCES'
  | 'FLOW_TRANSFORM_MAP_RSRC_TYPE_NOT_SUPPORTED'
  | 'FLOW_TRANSFORM_OUTPUT_FIELD_API_NAME_INVALID'
  | 'FLOW_TRANSFORM_TYPE_NOT_SUPPORTED'
  | 'FLOW_TRANSFORM_VALUES_MISSING'
  | 'FLOW_TRANSFORM_VALUE_INVALID'
  | 'FLOW_TRIGGER_DERIVED_FIELD_NOT_SUPPORTED'
  | 'FLOW_TRIGGER_ORDER_OUT_OF_BOUNDS'
  | 'FLOW_TRIGGER_TYPE_INCOMPATIBLE_WITH_RECORD_TRIGGER_TYPE'
  | 'FORMULA_CMT_LIMIT_EXCEEDED'
  | 'FORMULA_EXPRESSION_INVALID'
  | 'FORM_NOT_REFERENCED_BY_LANDING_PAGE'
  | 'FTEST_EXTENSION_CODE_FOR_TEST'
  | 'GLOBAL_VARIABLE_NOT_SUPPORTED_FOR_PROCESSTYPE'
  | 'HTTP_METHOD_NOT_SUPPORTED'
  | 'INCONSISTENT_ACTION_VERSIONS'
  | 'INCONSISTENT_DYNAMIC_TYPE_MAPPING'
  | 'INCONSISTENT_VALUE_FOR_DYNAMIC_VALUE_FIELD'
  | 'INDIVIDUAL_CONTACT_POINT_NOT_FOUND'
  | 'INDIVIDUAL_NOT_FOUND'
  | 'INPUTPARAM_CONFIGURATION_NOT_FOUND'
  | 'INPUTPARAM_INCOMPATIBLE_CONFIGURATION_ONLY'
  | 'INPUTPARAM_INCOMPATIBLE_DATATYPE'
  | 'INPUTPARAM_INCOMPATIBLE_WITH_COLLECTION_VARIABLE'
  | 'INPUTPARAM_INCOMPATIBLE_WITH_NONCOLLECTION_VARIABLE'
  | 'INPUTPARAM_MISMATCHED_OBJECTTYPE'
  | 'INPUTVARIABLE_COLLECTION_NOT_SUPPORTED_FOR_DYNAMIC_ACTION'
  | 'INPUTVARIABLE_COLLECTION_NOT_SUPPORTED_FOR_ENVIRONMENT'
  | 'INPUTVARIABLE_DATATYPE_NOT_SUPPORTED_FOR_DYNAMIC_ACTION'
  | 'INPUTVARIABLE_DATATYPE_NOT_SUPPORTED_FOR_ENVIRONMENT'
  | 'INVALID_ACTION_TYPE_FOR_STEP'
  | 'INVALID_ASSIGNEE'
  | 'INVALID_CONTENT_TYPE'
  | 'INVALID_EMAIL_ADDRESS'
  | 'INVALID_ENVIRONMENTS_VALUE'
  | 'INVALID_FLOW'
  | 'INVALID_FLOW_INTERVIEW'
  | 'INVALID_PROCESSTYPE_ENVIRONMENT_COMBINATION'
  | 'INVALID_QUERY_LOCATOR_FORMAT'
  | 'INVALID_REGEX_IN_SURVEY_QUESTIONS'
  | 'INVALID_SEGMENT_STATUS_FOR_ACTIVATION'
  | 'INVALID_SENDER_TYPE'
  | 'INVALID_SETUP_REFERENCE_TYPE'
  | 'INVALID_SURVEY_VARIABLE_NAME_OR_TYPE'
  | 'INVALID_TIME_ZONE'
  | 'INVOCABLE_ACTION_TYPE_NOT_SUPPORTED_FOR_ENVIRONMENT'
  | 'LOCATOR_LOCATION_EXCEEDS_SIZE'
  | 'LOOP_ASSIGNNEXTVALUETO_MISMATCHED_APEXCLASSTYPE'
  | 'LOOP_ASSIGNNEXTVALUETO_MISMATCHED_DATATYPE'
  | 'LOOP_ASSIGNNEXTVALUETO_MISMATCHED_OBJECTTYPE'
  | 'LOOP_ASSIGNNEXTVALUETO_MISSING'
  | 'LOOP_ASSIGNNEXTVALUETO_MISSING_VARIABLE'
  | 'LOOP_ASSIGNNEXTVALUETO_REFERENCE_NOT_FOUND'
  | 'LOOP_COLLECTION_ELEMENT_NOT_FOUND'
  | 'LOOP_COLLECTION_NOT_FOUND'
  | 'LOOP_COLLECTION_NOT_SUPPORTED_FOR_FIELD'
  | 'LOOP_MISSING_COLLECTION'
  | 'MAX_CHILD_TYPES'
  | 'MAX_EXTERNAL_REFERENCES_IN_QUERY'
  | 'MAX_STATEMENT_SIZE'
  | 'MESSAGING_API_ENTITLEMENT_REACHED'
  | 'MISSING_ASSIGNEE'
  | 'MISSING_ASSIGNEE_TYPE'
  | 'MISSING_EMAIL_RECIPIENTS'
  | 'MULTIPLE_ASSIGNEES_NOT_ALLOWED'
  | 'NON_EXPOSED_COMPONENT_IN_FLOW'
  | 'NON_GLOBAL_COMPONENT_IN_EXPORTED_FLOW'
  | 'NUMBER_OF_SCREENFIELD_REGIONS_EXCEEDS_LIMIT'
  | 'OBJECTTYPE_INVALID'
  | 'OBJECT_CANNOT_BE_CREATED'
  | 'OBJECT_CANNOT_BE_DELETED'
  | 'OBJECT_CANNOT_BE_QUERIED'
  | 'OBJECT_CANNOT_BE_UPDATED'
  | 'OBJECT_ENCRYPTED_FIELDS_NOT_SUPPORTED'
  | 'OBJECT_NOT_FOUND'
  | 'OBJECT_TYPE_DOES_NOT_EXIST'
  | 'OBJECT_TYPE_NOT_CDC_ENABLED'
  | 'ORCHESTRATION_REQUIRESASYNCPROCESSING_NOT_SUPPORTED'
  | 'ORCHESTRATION_REQUIRESASYNCPROCESSING_REQUIRED'
  | 'ORG_WIDE_EMAIL_INVALID'
  | 'ORG_WIDE_EMAIL_NOT_USED'
  | 'OUTPUTPARAM_ASSIGNTOREFERENCE_INVALID'
  | 'OUTPUTPARAM_ASSIGNTOREFERENCE_NOTFOUND'
  | 'OUTPUTPARAM_INCOMPATIBLE_DATATYPE'
  | 'OUTPUTPARAM_MISMATCHED_OBJECTTYPE'
  | 'OUTPUTPARAM_MISMATCHED_WITH_COLLECTION_VARIABLE'
  | 'OUTPUTPARAM_MISSING_ASSIGNTOREFERENCE'
  | 'OUTPUTPARAM_MISTMATCHED_WITH_NONCOLLECTION_VARIABLE'
  | 'PARAM_DATATYPE_NOT_SUPPORTED'
  | 'PAST_SCHEDULE_FLOW_WILL_NOT_RUN'
  | 'PRICE_ADJUSTMENT_TIER_VALIDATION_ERROR'
  | 'PROCESSMETADATAVALUES_NOT_SUPPORTED_FOR_PROCESSTYPE'
  | 'PROCESSMETADATAVALUE_NONEXISTENT_ELEMENT'
  | 'PROCESSTYPE_COMPONENTTYPE_NOT_SUPPORTED'
  | 'PROCESSTYPE_ELEMENT_CONFIG_NOT_SUPPORTED'
  | 'PROCESSTYPE_ELEMENT_NOT_SUPPORTED'
  | 'PROCESSTYPE_EVALUATIONFLOW_REQUIRED'
  | 'PROCESSTYPE_NOT_SUPPORTED'
  | 'PROCESSTYPE_SCREEN_FIELDTYPE_NOT_SUPPORTED'
  | 'PROCESS_TYPE_ELEMENT_ATTRIBUTE_REQUIRED'
  | 'PROCESS_TYPE_INCOMPATIBLE'
  | 'PROMPT_FLOW_CONTAINS_INVALID_VARIABLE'
  | 'QUERY_LOCATOR_EXPIRED'
  | 'QUERY_LOCATOR_NOT_FOUND'
  | 'RECOMMENDATION_STRATEGY_EXCEPTION'
  | 'RECORDFILTER_ENCRYPTED_FIELDS_NOT_SUPPORTED'
  | 'RECORDFILTER_GEOLOCATION_FIELDS_NOT_SUPPORTED'
  | 'RECORDFILTER_INVALID_DATATYPE'
  | 'RECORDFILTER_INVALID_ELEMENT'
  | 'RECORDFILTER_INVALID_OPERATOR'
  | 'RECORDFILTER_INVALID_REFERENCE'
  | 'RECORDFILTER_MISSING_DATATYPE'
  | 'RECORDFILTER_MULTIPLE_QUERIES_SAME_FIELD'
  | 'RECORDFILTER_NON_PRIMITIVE'
  | 'RECORDLOOKUP_IDASSIGNMENT_VARIABLE_INCOMPATIBLE_DATATYPE'
  | 'RECORDLOOKUP_IDASSIGNMENT_VARIABLE_NOT_FOUND'
  | 'RECORDUPDATE_MISSING_FILTERS'
  | 'RECORD_CHANGE_LISTENER_CONDITIONS_NON_RECORD_GLOBAL_VARIABLE'
  | 'RECORD_CHANGE_LISTENER_CONDITIONS_NOT_SUPPORTED'
  | 'RECORD_CHANGE_LISTENER_CONDITIONS_THRESHOLD_BREACHED'
  | 'RECORD_PRIOR_VALUE_REMAIN_SAME_BEFORE_TRIGGER'
  | 'REFERENCED_ELEMENT_NOT_FOUND'
  | 'REQUIRED_VARIABLE_INVALID'
  | 'REQUIRED_VARIABLE_MISSING'
  | 'RESOURCE_NOT_SUPPORTED'
  | 'RULE_MISSING_CONDITION'
  | 'RULE_REQUIRE_RECORD_CHANGED_NEVER_CHECKED'
  | 'SCHEDULE_TRIGGERED_FLOW_REQUIRES_DEFAULT_WORKFLOW_USER'
  | 'SCREENACTION_NOT_SUPPORTED_IN_ORG'
  | 'SCREENCOMPONENT_CONTAINS_VISIBILITY_RULE'
  | 'SCREENFIELD_API_VERSION_NOT_SUPPORTED'
  | 'SCREENFIELD_BOOLEAN_ISREQUIRED_IS_FALSE'
  | 'SCREENFIELD_CANNOT_HAVE_BOTH_DEFAULTVALUE_AND_DEFAULTSELECTEDCHOICEREFERENCE'
  | 'SCREENFIELD_DEFAULTVALUE_NOT_SUPPORTED'
  | 'SCREENFIELD_EXTENSION_DUPLICATE_INPUT_PARAM'
  | 'SCREENFIELD_EXTENSION_DUPLICATE_OUTPUT_PARAM'
  | 'SCREENFIELD_EXTENSION_IMPLEMENTATION_INVALID'
  | 'SCREENFIELD_EXTENSION_INPUT_ATTRIBUTE_INVALID'
  | 'SCREENFIELD_EXTENSION_NAME_INVALID'
  | 'SCREENFIELD_EXTENSION_NAME_MISSING'
  | 'SCREENFIELD_EXTENSION_NAME_NOT_SUPPORTED'
  | 'SCREENFIELD_EXTENSION_OUTPUT_ATTRIBUTE_INVALID'
  | 'SCREENFIELD_EXTENSION_REQUIRED_INPUT_MISSING'
  | 'SCREENFIELD_INPUTS_NOT_SUPPORTED'
  | 'SCREENFIELD_INPUTS_ON_NEXT_NAV_TO_ASSOC_SCRN_NOT_SUPPORTED'
  | 'SCREENFIELD_INVALID_DATATYPE'
  | 'SCREENFIELD_MULTISELECTCHOICE_SEMICOLON_NOT_SUPPORTED'
  | 'SCREENFIELD_OBJECTFIELDREFERENCE_INVALID_FORMAT'
  | 'SCREENFIELD_OBJECTPROVIDED_CANNOT_HAVE_DEFAULTVALUE'
  | 'SCREENFIELD_OBJECTPROVIDED_CANNOT_HAVE_HELPTEXT'
  | 'SCREENFIELD_OBJECTPROVIDED_INVALID_DATATYPE'
  | 'SCREENFIELD_OBJECTPROVIDED_ISREQUIRED_NOT_SUPPORTED'
  | 'SCREENFIELD_OBJECTPROVIDED_LIGHTNING_RUNTIME_DISABLED'
  | 'SCREENFIELD_OBJECTPROVIDED_MISSING_OBJECTFIELDREFERENCE'
  | 'SCREENFIELD_OUTPUTS_NOT_SUPPORTED'
  | 'SCREENFIELD_REGION_CONTAINS_DUPLICATE_INPUT_PARAMETER_VALUES'
  | 'SCREENFIELD_REGION_INPUT_PARAMETER_NOT_SUPPORTED'
  | 'SCREENFIELD_REGION_MISSING_REQUIRED_PERMISSIONS'
  | 'SCREENFIELD_REGION_NOT_IN_CONTAINER'
  | 'SCREENFIELD_REGION_REQUIRED_INPUT_PARAMETER_MISSING'
  | 'SCREENFIELD_REGION_WIDTH_SUM_EXCEEDS_LIMIT'
  | 'SCREENFIELD_REGION_WIDTH_VALUE_INVALID'
  | 'SCREENFIELD_TYPE_NOT_SUPPORTED'
  | 'SCREENFIELD_TYPE_NOT_SUPPORTED_FOR_API_VERSION'
  | 'SCREENFIELD_TYPE_NOT_SUPPORTED_FOR_ENVIRONMENT'
  | 'SCREENFIELD_USERINPUT_NOT_SUPPORTED_FOR_CHOICETYPE'
  | 'SCREENFIELD_VALIDATIONRULE_NOT_SUPPORTED'
  | 'SCREENFIELD_VALIDATION_RULES_NOT_SUPPORTED_FOR_ENVIRONMENT'
  | 'SCREENFOOTER_MERGEFIELD_NOT_SUPPORTED'
  | 'SCREENRULE_ACTION_INVALID_ATTRIBUTE'
  | 'SCREENRULE_ACTION_INVALID_ATTRIBUTE_FOR_API_VERSION'
  | 'SCREENRULE_ACTION_INVALID_VALUE'
  | 'SCREENRULE_ACTION_MISSING_ATTRIBUTE'
  | 'SCREENRULE_ACTION_MISSING_FIELDREFERENCE'
  | 'SCREENRULE_ACTION_MISSING_VALUE'
  | 'SCREENRULE_ATTRIBUTE_NOT_SUPPORTED_FOR_SCREENFIELD'
  | 'SCREENRULE_FIELD_NOT_FOUND_ON_SCREEN'
  | 'SCREENRULE_MISSING_ACTION'
  | 'SCREENRULE_NOT_SUPPORTED_IN_ORG'
  | 'SCREENRULE_SCREENFIELD_NOT_VISIBLE'
  | 'SCREENRULE_VISIBILITY_NOT_SUPPORTED_IN_ORG'
  | 'SCREEN_ALLOWBACK_ALLOWFINISH_BOTH_FALSE'
  | 'SCREEN_CONTAINS_LIGHTNING_COMPONENT'
  | 'SCREEN_CONTAINS_REGION_CONTAINER_COMPONENT'
  | 'SCREEN_FIELD_REGION_CONTAINER_TYPE_INVALID_VALUE'
  | 'SCREEN_FIELD_REGION_CONTAINER_TYPE_MISSING'
  | 'SCREEN_FIELD_SECTION_HEADER_INVALID_VALUE'
  | 'SCREEN_FIELD_SECTION_HEADER_MISSING'
  | 'SCREEN_MISSING_FOOTER_AND_LIGHTNING_COMPONENT'
  | 'SCREEN_MISSING_LABEL'
  | 'SCREEN_MULTISELECTFIELD_DOESNT_SUPPORT_CHOICE_WITH_USERINPUT'
  | 'SCREEN_PAUSEDTEXT_NOT_SHOWN_WHEN_ALLOWPAUSE_IS_FALSE'
  | 'SETTING_FIELD_MAKES_OTHER_FIELD_REQUIRED'
  | 'SETTING_FIELD_MAKES_OTHER_FIELD_UNSUPPORTED'
  | 'SETTING_FIELD_VALUE_MAKES_OTHER_FIELD_UNSUPPORTED'
  | 'SETTING_FIELD_VALUE_MAKES_OTHER_FIELD_VALUE_UNSUPPORTED'
  | 'SETUP_REFERENCE_ALLOWED_ONLY_IN_ACTION_INPUT'
  | 'SETUP_REFERENCE_TYPE_NOT_PACKAGEABLE'
  | 'SETUP_REFERENCE_VALUE_REQUIRES_DEVELOPER_NAMES'
  | 'SLACK_API_EXCEPTION_EXTENSION'
  | 'SOBJECT_ELEMENT_INCOMPATIBLE_DATATYPE'
  | 'SOBJECT_ELEMENT_MISMATCHED_OBJECTTYPE'
  | 'SORT_ENCRYPTED_FIELDS_NOT_SUPPORTED'
  | 'SORT_FIELD_MISSING'
  | 'SORT_FIELD_NOT_SUPPORTED'
  | 'SORT_GEOLOCATION_FIELDS_NOT_SUPPORTED'
  | 'SORT_LIMIT_INVALID'
  | 'SORT_ORDER_MISSING'
  | 'SPECIFIC_FIELD_VALUE_MAKES_OTHER_FIELD_REQUIRED'
  | 'SPECIFIC_FIELD_VALUE_MAKES_OTHER_FIELD_VALUE_REQUIRED'
  | 'STAGE_NAME_NOT_FULLY_QUALIFIED'
  | 'START_ELEMENT_MISSING'
  | 'SUBFLOW_DESKTOP_DESIGNER_FLOWS_NOT_SUPPORTED'
  | 'SUBFLOW_DIFFERENT_RUNMODE'
  | 'SUBFLOW_INPUT_MISSING_NAME'
  | 'SUBFLOW_INPUT_MULTIPLE_ASSIGNMENTS_TO_ONE_VARIABLE'
  | 'SUBFLOW_INPUT_REFERENCES_FIELD_ON_SOBJECT_VARIABLE'
  | 'SUBFLOW_INPUT_VARIABLE_NOT_FOUND_IN_REFERENCEDFLOW'
  | 'SUBFLOW_INPUT_VARIABLE_NO_INPUT_ACCESS'
  | 'SUBFLOW_INVALID_NAME'
  | 'SUBFLOW_INVALID_REFERENCE'
  | 'SUBFLOW_MASTER_FLOW_TYPE_NOT_AUTOLAUNCHED'
  | 'SUBFLOW_MISSING_NAME'
  | 'SUBFLOW_NO_ACTIVE_VERSION'
  | 'SUBFLOW_OUTPUT_INCOMPATIBLE_DATATYPES'
  | 'SUBFLOW_OUTPUT_MISMATCHED_APEX_CLASS'
  | 'SUBFLOW_OUTPUT_MISMATCHED_COLLECTIONTYPES'
  | 'SUBFLOW_OUTPUT_MISMATCHED_OBJECTS'
  | 'SUBFLOW_OUTPUT_MISSING_ASSIGNTOREFERENCE'
  | 'SUBFLOW_OUTPUT_MISSING_NAME'
  | 'SUBFLOW_OUTPUT_MULTIPLE_ASSIGNMENTS_TO_ONE_VARIABLE'
  | 'SUBFLOW_OUTPUT_REFERENCES_FIELD_ON_SOBJECT_VARIABLE'
  | 'SUBFLOW_OUTPUT_TARGET_DOES_NOT_EXIST_IN_MASTER_FLOW'
  | 'SUBFLOW_OUTPUT_VARIABLE_NOT_FOUND_IN_MASTERFLOW'
  | 'SUBFLOW_OUTPUT_VARIABLE_NOT_FOUND_IN_REFERENCEDFLOW'
  | 'SUBFLOW_OUTPUT_VARIABLE_NO_OUTPUT_ACCESS'
  | 'SUBFLOW_PROCESSTYPE_NOT_SUPPORTED'
  | 'SUBFLOW_PROCESS_TYPE_INCOMPATIBLE'
  | 'SUBFLOW_REFERENCES_MASTERFLOW'
  | 'SURVEY_ADVANCED_CONDITION_LOGIC_NOT_SUPPORTED'
  | 'SURVEY_CHOICE_NOT_REFERENCED_BY_A_QUESTION'
  | 'SURVEY_CHOICE_REFERENCED_BY_MULTIPLE_QUESTIONS'
  | 'SURVEY_ELEMENT_NEVER_REACHED'
  | 'SURVEY_ENRICH_INVALID_CONFIGURATION'
  | 'SURVEY_INACTIVE_SUBFLOWS'
  | 'SURVEY_INVALID_ATTACHMENT_QUESTION_CONFIGURATION'
  | 'SURVEY_INVALID_CMT_CONFIGURED'
  | 'SURVEY_INVALID_CUSTOM_THANK_YOU_CONFIGURATION'
  | 'SURVEY_INVALID_LINK_TARGET_IN_QUESTION_LABEL'
  | 'SURVEY_INVALID_MATRIX_QUESTION_CONFIGURATION'
  | 'SURVEY_INVALID_MERGE_FIELD_CONFIGURATION'
  | 'SURVEY_INVALID_OUTPUT_VARIABLE'
  | 'SURVEY_MISSING_QUESTION_OR_SUBFLOW'
  | 'SURVEY_MISSING_REQUIRED_VARIABLES'
  | 'SURVEY_MULTIPLE_SCREENS_CANNOT_CONNECT_TO_SAME_DECISION'
  | 'SURVEY_NESTED_SUBFLOWS'
  | 'SURVEY_NONSURVEY_SUBFLOWS'
  | 'SURVEY_RULE_INVALID_LEFT_OPERAND'
  | 'SURVEY_RULE_INVALID_RIGHT_OPERAND'
  | 'SURVEY_SAVE_ERROR'
  | 'SURVEY_SCREENFIELD_TYPE_NOT_SUPPORTED_FOR_QUESTION'
  | 'SURVEY_START_ELEMENT_INVALID'
  | 'SURVEY_VARIABLE_ACCESS_INVALID'
  | 'SYSTEM_MODE_NOT_ALLOWED'
  | 'SYSTEM_VARIABLE_MISSING_FIELD_REFERENCE'
  | 'TEMPORARY_QUERY_MORE_FAILURE'
  | 'TRIGGERED_FLOW_REDUNDANT_QUERY'
  | 'TRIGGERING_RECORD_UPDATE_REQUIRES_INPUTASSIGNMENTS'
  | 'TRIGGER_ORDER_NOT_SUPPORTED'
  | 'TRIGGER_TYPE_CONTEXT_OBJECT_NOT_SUPPORTED'
  | 'TRIGGER_TYPE_ELEMENT_NOT_SUPPORTED'
  | 'TRIGGER_TYPE_INCOMPATIBLE_WITH_PROCESS_TYPE'
  | 'TRIGGER_TYPE_NOT_ALLOWED_FOR_SUBFLOW'
  | 'TYPE_MAPPING_DUPLICATED'
  | 'TYPE_MAPPING_NAME_MISSING'
  | 'TYPE_MAPPING_NOT_FOUND'
  | 'TYPE_MAPPING_NOT_SUPPORTED'
  | 'TYPE_MAPPING_NOT_SUPPORTED_FOR_API_VERSION'
  | 'TYPE_MAPPING_NOT_SUPPORTED_FOR_PROCESS_TYPE'
  | 'UNAUTHORIZED_USER_FOR_CURSOR'
  | 'UNEXPECTED_ERROR'
  | 'VALIDATION_EXCEPTION'
  | 'VALUE_CHAR_LIMIT_EXCEEDED'
  | 'VARIABLE_FIELD_NOT_SUPPORTED_FOR_DATATYPE'
  | 'VARIABLE_FIELD_NOT_SUPPORTED_FOR_DATATYPE_AND_COLLECTION'
  | 'VARIABLE_FIELD_REQUIRED_FOR_DATATYPE'
  | 'VARIABLE_NAME_IS_RESERVED_FOR_PROCESS_TYPE'
  | 'VARIABLE_SCALE_EXCEEDS_LIMIT'
  | 'VARIABLE_SCALE_NEGATIVE_INTEGER'
  | 'VARIABLE_SCALE_NULL'
  | 'VERSION_NOT_VALID'
  | 'VISIBILITY_RULE_EXCEEDS_CONDITION_LIMIT'
  | 'VISIBILITY_RULE_NOT_AVAILABLE_IN_ORG'
  | 'VISIBILITY_RULE_NOT_SUPPORTED_FOR_API_VERSION'
  | 'VISIBILITY_RULE_NOT_SUPPORTED_FOR_PROCESSTYPE'
  | 'VISIBILITY_RULE_NO_CONDITIONS'
  | 'WAITEVENT_BATCH_SIZE_NOT_SUPPORTED_FOR_EVENTTYPE'
  | 'WAITEVENT_DEFAULT_CONNECTOR_MISSING_LABEL'
  | 'WAITEVENT_DUPLICATE_INPUT_PARAM'
  | 'WAITEVENT_INPUT_NOT_SUPPORTED_FOR_EVENTTYPE'
  | 'WAITEVENT_INPUT_REQUIRES_LITERAL_VALUE'
  | 'WAITEVENT_INVALID_CONDITION_LOGIC'
  | 'WAITEVENT_INVALID_VALUE'
  | 'WAITEVENT_MISSING'
  | 'WAITEVENT_MISSING_CONNECTOR'
  | 'WAITEVENT_MISSING_EVENTTYPE'
  | 'WAITEVENT_OBJECT_NOT_SUPPORTED_FOR_EVENTTYPE'
  | 'WAITEVENT_OUTPUT_NOT_SUPPORTED_FOR_EVENTTYPE'
  | 'WAITEVENT_RELATIVEALARM_INVALID_DATETIME_FIELD'
  | 'WAITEVENT_RELATIVEALARM_INVALID_FIELD'
  | 'WAITEVENT_RELATIVEALARM_INVALID_OBJECTTYPE'
  | 'WAITEVENT_RELATIVEALARM_INVALID_OFFSETNUMBER'
  | 'WAITEVENT_RELATIVEALARM_INVALID_OFFSETUNIT'
  | 'WAITEVENT_REQUIRED_INPUT_MISSING'
  | 'WAITEVENT_RESUME_DATE_IN_PAST'
  | 'WAITEVENT_TYPE_INVALID_OR_NOT_SUPPORTED'
  | 'WORKFLOW_MISSING_PROCESSMETADATAVALUES'
  | 'WORKFLOW_OBJECTTYPE_NOT_FOUND'
  | 'WORKFLOW_OBJECTTYPE_NOT_SUPPORTED'
  | 'WORKFLOW_OBJECTVARIABLE_AND_OLDOBJECTVARIABLE_REFERENCE_SAME_SOBJECT_VARIABLE'
  | 'WORKFLOW_OBJECTVARIABLE_DOESNT_SUPPORT_INPUT'
  | 'WORKFLOW_OLDOBJECTVARIABLE_DOESNT_SUPPORT_INPUT'
  | 'WORKFLOW_PROCESSMETADATAVALUES_MORE_THAN_ONE_NAME'
  | 'WORKFLOW_PROCESS_METADATAVALUES_MISSING_NAME'
  | 'WORKFLOW_RECURSIVECOUNTVARIABLE_DOESNT_SUPPORT_INPUT'
  | 'WORKFLOW_RULE_NOT_DEACTIVATED'
  | 'WORKFLOW_TRIGGERTYPE_INVALID_VALUE';

export type TestLevel = 'NoTestRun' | 'RunSpecifiedTests' | 'RunLocalTests' | 'RunAllTestsInOrg';

export type PerfOption = 'NONE' | 'MINIMUM';

export type LogCategory =
  | 'Db'
  | 'Workflow'
  | 'Validation'
  | 'Callout'
  | 'Apex_code'
  | 'Apex_profiling'
  | 'Visualforce'
  | 'System'
  | 'Wave'
  | 'Nba'
  | 'All';

export type LogCategoryLevel = 'None' | 'Finest' | 'Finer' | 'Fine' | 'Debug' | 'Info' | 'Warn' | 'Error';

export type LogType = 'None' | 'Debugonly' | 'Db' | 'Profiling' | 'Callout' | 'Detail';

export type ID = string;

export type StatusCode =
  | 'ALERT_NOTIFICATION_LIMIT_EXCEEDED'
  | 'ALL_OR_NONE_OPERATION_ROLLED_BACK'
  | 'ALREADY_APPLIED'
  | 'ALREADY_IN_PROCESS'
  | 'ALREADY_REDEEMED_VOUCHER'
  | 'APEX_DATA_ACCESS_RESTRICTION'
  | 'APEX_FAILED'
  | 'APPLICATION_ALREADY_EXISTS'
  | 'ASSIGNEE_TYPE_REQUIRED'
  | 'ATTRIBUTE_DEFINITION_LIMIT_EXCEEDED'
  | 'AURA_COMPILE_ERROR'
  | 'AUTH_PROVIDER_NEEDS_AUTH'
  | 'AUTH_PROVIDER_NOT_FOUND'
  | 'B2B_SEARCH_ADMIN_ERROR'
  | 'BAD_CUSTOM_ENTITY_PARENT_DOMAIN'
  | 'BCC_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED'
  | 'BLOCKED_EXCLUSIVE'
  | 'CANNOT_CASCADE_PRODUCT_ACTIVE'
  | 'CANNOT_CHANGE_FIELD_TYPE_OF_APEX_REFERENCED_FIELD'
  | 'CANNOT_CHANGE_FIELD_TYPE_OF_REFERENCED_FIELD'
  | 'CANNOT_CREATE_ANOTHER_MANAGED_PACKAGE'
  | 'CANNOT_DEACTIVATE_DIVISION'
  | 'CANNOT_DELETE_GLOBAL_ACTION_LIST'
  | 'CANNOT_DELETE_LAST_DATED_CONVERSION_RATE'
  | 'CANNOT_DELETE_MANAGED_OBJECT'
  | 'CANNOT_DISABLE_LAST_ADMIN'
  | 'CANNOT_ENABLE_IP_RESTRICT_REQUESTS'
  | 'CANNOT_EXECUTE_FLOW_TRIGGER'
  | 'CANNOT_FREEZE_SELF'
  | 'CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY'
  | 'CANNOT_MODIFY_MANAGED_OBJECT'
  | 'CANNOT_PASSWORD_LOCKOUT'
  | 'CANNOT_POST_TO_ARCHIVED_GROUP'
  | 'CANNOT_RENAME_APEX_REFERENCED_FIELD'
  | 'CANNOT_RENAME_APEX_REFERENCED_OBJECT'
  | 'CANNOT_RENAME_REFERENCED_FIELD'
  | 'CANNOT_RENAME_REFERENCED_OBJECT'
  | 'CANNOT_REPARENT_RECORD'
  | 'CANNOT_UPDATE_CONVERTED_LEAD'
  | 'CANNOT_UPDATE_IS_THIRD_PARTY'
  | 'CANNOT_UPDATE_PAYMENT_METHOD_SET'
  | 'CANT_DISABLE_CORP_CURRENCY'
  | 'CANT_UNSET_CORP_CURRENCY'
  | 'CART_DELIVERY_GROUP_NOT_FOUND'
  | 'CART_ITEM_NOT_FOUND'
  | 'CART_NOT_FOUND'
  | 'CHECKOUT_CONFLICT'
  | 'CHECKOUT_EXPIRED'
  | 'CHECKOUT_INVALIDATED'
  | 'CHECKOUT_LOCKED'
  | 'CHECKOUT_NOT_FOUND'
  | 'CHECKOUT_UNAUTHORIZED'
  | 'CHILD_SHARE_FAILS_PARENT'
  | 'CIRCULAR_DEPENDENCY'
  | 'CLEAN_SERVICE_ERROR'
  | 'CLONE_FIELD_INTEGRITY_EXCEPTION'
  | 'CLONE_NOT_SUPPORTED'
  | 'CMS_FOLDER_ITEM_MOVE_FAILED'
  | 'COLLISION_DETECTED'
  | 'COMMERCE_SEARCH_INDEXING_SYSTEM_ERROR'
  | 'COMMERCE_SEARCH_MQ_ERROR'
  | 'COMMERCE_SEARCH_PROVIDER_LIMIT_EXCEEDED'
  | 'COMMERCE_SEARCH_RESOURCE_NOT_FOUND'
  | 'COMMERCIAL_CONTROL_ERROR'
  | 'COMMUNITY_NOT_ACCESSIBLE'
  | 'CONFLICT'
  | 'CONFLICTING_ENVIRONMENT_HUB_MEMBER'
  | 'CONFLICTING_SSO_USER_MAPPING'
  | 'CONTENT_NOT_FOUND'
  | 'CONTENT_SEARCH_NOT_ENABLED'
  | 'CONTENT_TYPE_DISABLED_FOR_API'
  | 'CONTENT_TYPE_NOT_FOUND'
  | 'COUPON_REDEMPTION_LIMIT_EXCEEDED'
  | 'CUSTOM_APEX_ERROR'
  | 'CUSTOM_CLOB_FIELD_LIMIT_EXCEEDED'
  | 'CUSTOM_ENTITY_OR_FIELD_LIMIT'
  | 'CUSTOM_FIELD_INDEX_LIMIT_EXCEEDED'
  | 'CUSTOM_INDEX_EXISTS'
  | 'CUSTOM_LINK_LIMIT_EXCEEDED'
  | 'CUSTOM_METADATA_LIMIT_EXCEEDED'
  | 'CUSTOM_METADATA_REL_FIELD_MANAGEABILITY'
  | 'CUSTOM_SETTINGS_LIMIT_EXCEEDED'
  | 'CUSTOM_TAB_LIMIT_EXCEEDED'
  | 'DATAASSESSMENT_CONFIG_ASSESSMENT_IN_PROGRESS_ERROR'
  | 'DATAASSESSMENT_CONFIG_SERVICE_ERROR'
  | 'DATACLOUDADDRESS_NO_RECORDS_FOUND'
  | 'DATACLOUDADDRESS_PROCESSING_ERROR'
  | 'DATACLOUDADDRESS_SERVER_ERROR'
  | 'DATA_MAPPING_NOT_FOUND'
  | 'DATA_MAPPING_SCHEMA_NOT_FOUND'
  | 'DATA_TRANSFER_RECORD_LIMIT_EXCEEDED'
  | 'DATA_TYPE_NOT_SUPPORTED'
  | 'DATE_OUT_OF_RANGE'
  | 'DELETE_FAILED'
  | 'DELETE_NOT_ALLOWED'
  | 'DELETE_OPERATION_TOO_LARGE'
  | 'DELETE_REQUIRED_ON_CASCADE'
  | 'DEPENDENCY_EXISTS'
  | 'DUPLICATES_DETECTED'
  | 'DUPLICATE_CASE_SOLUTION'
  | 'DUPLICATE_COMM_NICKNAME'
  | 'DUPLICATE_CUSTOM_ENTITY_DEFINITION'
  | 'DUPLICATE_CUSTOM_TAB_MOTIF'
  | 'DUPLICATE_DEVELOPER_NAME'
  | 'DUPLICATE_EXTERNAL_ID'
  | 'DUPLICATE_MASTER_LABEL'
  | 'DUPLICATE_SENDER_DISPLAY_NAME'
  | 'DUPLICATE_USERNAME'
  | 'DUPLICATE_VALUE'
  | 'EMAIL_ADDRESS_BOUNCED'
  | 'EMAIL_EXTERNAL_TRANSPORT_CONNECTION_ERROR'
  | 'EMAIL_EXTERNAL_TRANSPORT_PERMISSION_ERROR'
  | 'EMAIL_EXTERNAL_TRANSPORT_TOKEN_ERROR'
  | 'EMAIL_EXTERNAL_TRANSPORT_TOO_LARGE_ERROR'
  | 'EMAIL_EXTERNAL_TRANSPORT_TOO_MANY_REQUESTS_ERROR'
  | 'EMAIL_EXTERNAL_TRANSPORT_UNKNOWN_ERROR'
  | 'EMAIL_NOT_PROCESSED_DUE_TO_PRIOR_ERROR'
  | 'EMAIL_OPTED_OUT'
  | 'EMAIL_TEMPLATE_FORMULA_ERROR'
  | 'EMAIL_TEMPLATE_MERGEFIELD_ACCESS_ERROR'
  | 'EMAIL_TEMPLATE_MERGEFIELD_ERROR'
  | 'EMAIL_TEMPLATE_MERGEFIELD_VALUE_ERROR'
  | 'EMAIL_TEMPLATE_PROCESSING_ERROR'
  | 'EMPTY_CATALOG'
  | 'EMPTY_INGESTION_JOB'
  | 'EMPTY_SCONTROL_FILE_NAME'
  | 'ENHANCED_EMAIL_TEMPLATE_COMPILATION_ERROR'
  | 'ENTITY_FAILED_IFLASTMODIFIED_ON_UPDATE'
  | 'ENTITY_IS_ARCHIVED'
  | 'ENTITY_IS_DELETED'
  | 'ENTITY_IS_LOCKED'
  | 'ENTITY_SAVE_ERROR'
  | 'ENTITY_SAVE_VALIDATION_ERROR'
  | 'ENVIRONMENT_HUB_MEMBERSHIP_CONFLICT'
  | 'ENVIRONMENT_HUB_MEMBERSHIP_ERROR_JOINING_HUB'
  | 'ENVIRONMENT_HUB_MEMBERSHIP_USER_ALREADY_IN_HUB'
  | 'ENVIRONMENT_HUB_MEMBERSHIP_USER_NOT_ORG_ADMIN'
  | 'ERROR_CALCULATING_EXPIRY_DATE'
  | 'ERROR_IN_MAILER'
  | 'EXCEEDED_MAX_SEMIJOIN_SUBSELECTS_WRITE'
  | 'EXCHANGE_WEB_SERVICES_URL_INVALID'
  | 'EXTERNAL_RESOURCE_FORBIDDEN'
  | 'FAILED_ACTIVATION'
  | 'FAILED_DUE_TO_OTHER_INPUTS'
  | 'FAILED_TO_RESOLVE_MAPPING'
  | 'FAILED_TO_RESOLVE_SCHEMA_INFORMATION'
  | 'FIELD_CUSTOM_VALIDATION_EXCEPTION'
  | 'FIELD_FILTER_VALIDATION_EXCEPTION'
  | 'FIELD_INTEGRITY_EXCEPTION'
  | 'FIELD_KEYWORD_LIST_MATCH_LIMIT'
  | 'FIELD_MAPPING_ERROR'
  | 'FIELD_MODERATION_RULE_BLOCK'
  | 'FIELD_NOT_UPDATABLE'
  | 'FILE_EXTENSION_NOT_ALLOWED'
  | 'FILE_SIZE_LIMIT_EXCEEDED'
  | 'FILTERED_LOOKUP_LIMIT_EXCEEDED'
  | 'FIND_DUPLICATES_ERROR'
  | 'FLOW_EXCEPTION'
  | 'FUNCTIONALITY_NOT_ENABLED'
  | 'GET_EINSTEIN_TENANT_ERROR'
  | 'GUEST_INSUFFICIENT_ACCESS'
  | 'HAS_PUBLIC_REFERENCES'
  | 'HTML_FILE_UPLOAD_NOT_ALLOWED'
  | 'IAS_AM_AUTH_BAD_REQUEST'
  | 'IAS_AM_AUTH_UNAUTHORIZED'
  | 'IAS_INVALID_AUTH'
  | 'IAS_INVALID_REQUEST_PARAMETER'
  | 'IAS_RECORD_DOES_NOT_EXIST'
  | 'IAS_TENANT_NOT_PROVISIONED'
  | 'IAS_UNCOMMITTED_WORK'
  | 'IMAGE_TOO_LARGE'
  | 'INACTIVE_OWNER_OR_USER'
  | 'INACTIVE_RULE_ERROR'
  | 'INDEX_ITEM_LIMIT_EXCEEDED'
  | 'INDEX_PAYLOAD_NOT_FOUND'
  | 'INGESTION_JOB_RECORDS_LIMIT_EXCEEDED'
  | 'INGESTION_TOTAL_FILE_SIZE_LIMIT_EXCEEDED'
  | 'INPUTPARAM_INCOMPATIBLE_DATATYPE'
  | 'INSERT_UPDATE_DELETE_NOT_ALLOWED_DURING_MAINTENANCE'
  | 'INSUFFICIENT_ACCESS'
  | 'INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY'
  | 'INSUFFICIENT_ACCESS_OR_READONLY'
  | 'INSUFFICIENT_ACCESS_TO_INSIGHTSEXTERNALDATA'
  | 'INSUFFICIENT_BALANCE'
  | 'INSUFFICIENT_BENEFIT_REMAINING'
  | 'INSUFFICIENT_CREDITS'
  | 'INTEGRATION_CANCELLED'
  | 'INTERNAL_ERROR'
  | 'INVALID_ACCESS_LEVEL'
  | 'INVALID_ACCESS_TOKEN'
  | 'INVALID_ACCOUNT'
  | 'INVALID_ACTION_VERSION'
  | 'INVALID_API_INPUT'
  | 'INVALID_ARGUMENT_TYPE'
  | 'INVALID_ASSIGNEE_TYPE'
  | 'INVALID_ASSIGNMENT_RULE'
  | 'INVALID_AUTH_HEADER'
  | 'INVALID_BATCH_OPERATION'
  | 'INVALID_BUSINESS_HOURS_NAME'
  | 'INVALID_CATEGORY_NETWORK'
  | 'INVALID_CHECKOUT_INPUT'
  | 'INVALID_CONTACT'
  | 'INVALID_CONTENT_TYPE'
  | 'INVALID_CREDIT_CARD_INFO'
  | 'INVALID_CROSS_REFERENCE_KEY'
  | 'INVALID_CROSS_REFERENCE_TYPE_FOR_FIELD'
  | 'INVALID_CURRENCY_CONV_RATE'
  | 'INVALID_CURRENCY_CORP_RATE'
  | 'INVALID_CURRENCY_ISO'
  | 'INVALID_DATASET_REFERENCE_INPUT'
  | 'INVALID_DATA_CATEGORY_GROUP_REFERENCE'
  | 'INVALID_DATA_URI'
  | 'INVALID_EBV_OPERATION'
  | 'INVALID_EMAIL_ADDRESS'
  | 'INVALID_EMPTY_KEY_OWNER'
  | 'INVALID_ENTITY_FOR_MATCH_ENGINE_ERROR'
  | 'INVALID_ENTITY_FOR_MATCH_OPERATION_ERROR'
  | 'INVALID_ENTITY_FOR_UPSERT'
  | 'INVALID_ENVIRONMENT_HUB_MEMBER'
  | 'INVALID_EVENT_DELIVERY'
  | 'INVALID_EVENT_INPUT'
  | 'INVALID_EVENT_SUBSCRIPTION'
  | 'INVALID_EXTENSION_ID'
  | 'INVALID_EXTERNAL_ID_FIELD_NAME'
  | 'INVALID_FIELD'
  | 'INVALID_FIELD_FOR_INSERT_UPDATE'
  | 'INVALID_FIELD_WHEN_USING_TEMPLATE'
  | 'INVALID_FILTER_ACTION'
  | 'INVALID_GOOGLE_DOCS_URL'
  | 'INVALID_ID_FIELD'
  | 'INVALID_INET_ADDRESS'
  | 'INVALID_INPUT'
  | 'INVALID_INPUT_FORMAT'
  | 'INVALID_KEY_FIELD_INPUT'
  | 'INVALID_LINEITEM_CLONE_STATE'
  | 'INVALID_MARKUP'
  | 'INVALID_MASTER_OR_TRANSLATED_SOLUTION'
  | 'INVALID_MERCHANT_ACCOUNT_MODE'
  | 'INVALID_MERCHANT_ACCOUNT_MODE_OR_STATUS'
  | 'INVALID_MERGE_RECORD'
  | 'INVALID_MESSAGE_ID_REFERENCE'
  | 'INVALID_NAMESPACE_PREFIX'
  | 'INVALID_OAUTH_URL'
  | 'INVALID_OPERATION'
  | 'INVALID_OPERATOR'
  | 'INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST'
  | 'INVALID_OWNER'
  | 'INVALID_PACKAGE_LICENSE'
  | 'INVALID_PACKAGE_VERSION'
  | 'INVALID_PARTNER_NETWORK_STATUS'
  | 'INVALID_PAYLOAD_VERSION'
  | 'INVALID_PERSON_ACCOUNT_OPERATION'
  | 'INVALID_PROFILE'
  | 'INVALID_PROMOTION'
  | 'INVALID_PROVIDER_TYPE'
  | 'INVALID_QUERY_KEY'
  | 'INVALID_QUERY_LOCATOR'
  | 'INVALID_QUERY_VALUE'
  | 'INVALID_READ_ONLY_USER_DML'
  | 'INVALID_RECEIVEDDOCUMENTID_ATTACHMENT'
  | 'INVALID_RECORD_ATTRIBUTE_VALUE'
  | 'INVALID_RECORD_TYPE'
  | 'INVALID_REFRESH_TOKEN'
  | 'INVALID_REORDER_PORTAL_RECORD_ASSOCIATION'
  | 'INVALID_REQUEST_STATE'
  | 'INVALID_RUNTIME_VALUE'
  | 'INVALID_SAVE_AS_ACTIVITY_FLAG'
  | 'INVALID_SCS_INBOUND_USER'
  | 'INVALID_SEARCH_PROVIDER_REQUEST'
  | 'INVALID_SESSION_ID'
  | 'INVALID_SETUP_OWNER'
  | 'INVALID_SIGNUP_COUNTRY'
  | 'INVALID_SIGNUP_OPTION'
  | 'INVALID_SITE_DELETE_EXCEPTION'
  | 'INVALID_SITE_FILE_IMPORTED_EXCEPTION'
  | 'INVALID_SITE_FILE_TYPE_EXCEPTION'
  | 'INVALID_SOURCE_OBJECT_ID'
  | 'INVALID_STATUS'
  | 'INVALID_SUBDOMAIN'
  | 'INVALID_TARGET_OBJECT_NAME'
  | 'INVALID_TEXT_REPRESENTATION'
  | 'INVALID_TYPE'
  | 'INVALID_TYPE_FOR_OPERATION'
  | 'INVALID_TYPE_ON_FIELD_IN_RECORD'
  | 'INVALID_UNMERGE_RECORD'
  | 'INVALID_USERID'
  | 'INVALID_USER_OBJECT'
  | 'IP_RANGE_LIMIT_EXCEEDED'
  | 'ITEM_NOT_FOUND'
  | 'JIGSAW_IMPORT_LIMIT_EXCEEDED'
  | 'LICENSE_LIMIT_EXCEEDED'
  | 'LIGHT_PORTAL_USER_EXCEPTION'
  | 'LIMIT_EXCEEDED'
  | 'LIST_PRICE_NOT_FOUND'
  | 'MALFORMED_ID'
  | 'MANAGER_NOT_DEFINED'
  | 'MASSMAIL_RETRY_LIMIT_EXCEEDED'
  | 'MASS_MAIL_LIMIT_EXCEEDED'
  | 'MATCH_DEFINITION_ERROR'
  | 'MATCH_OPERATION_ERROR'
  | 'MATCH_OPERATION_INVALID_ENGINE_ERROR'
  | 'MATCH_OPERATION_INVALID_RULE_ERROR'
  | 'MATCH_OPERATION_MISSING_ENGINE_ERROR'
  | 'MATCH_OPERATION_MISSING_OBJECT_TYPE_ERROR'
  | 'MATCH_OPERATION_MISSING_OPTIONS_ERROR'
  | 'MATCH_OPERATION_MISSING_RULE_ERROR'
  | 'MATCH_OPERATION_UNKNOWN_RULE_ERROR'
  | 'MATCH_OPERATION_UNSUPPORTED_VERSION_ERROR'
  | 'MATCH_PRECONDITION_FAILED'
  | 'MATCH_PRECONDITION_REQUIRED'
  | 'MATCH_RUNTIME_ERROR'
  | 'MATCH_SERVICE_ERROR'
  | 'MATCH_SERVICE_TIMED_OUT'
  | 'MATCH_SERVICE_UNAVAILABLE_ERROR'
  | 'MAXIMUM_CCEMAILS_EXCEEDED'
  | 'MAXIMUM_DASHBOARD_COMPONENTS_EXCEEDED'
  | 'MAXIMUM_HIERARCHY_CHILDREN_REACHED'
  | 'MAXIMUM_HIERARCHY_LEVELS_REACHED'
  | 'MAXIMUM_HIERARCHY_TREE_SIZE_REACHED'
  | 'MAXIMUM_SIZE_OF_ATTACHMENT'
  | 'MAXIMUM_SIZE_OF_DOCUMENT'
  | 'MAX_ACTIONS_PER_RULE_EXCEEDED'
  | 'MAX_ACTIVE_RULES_EXCEEDED'
  | 'MAX_APPROVAL_STEPS_EXCEEDED'
  | 'MAX_DEPTH_IN_FLOW_EXECUTION'
  | 'MAX_FORMULAS_PER_RULE_EXCEEDED'
  | 'MAX_LIMIT_EXCEEDED'
  | 'MAX_RULES_EXCEEDED'
  | 'MAX_RULE_ENTRIES_EXCEEDED'
  | 'MAX_TASK_DESCRIPTION_EXCEEEDED'
  | 'MAX_TM_RULES_EXCEEDED'
  | 'MAX_TM_RULE_ITEMS_EXCEEDED'
  | 'MAX_TRIGGERS_EXCEEDED'
  | 'MERGE_FAILED'
  | 'METADATA_FIELD_UPDATE_ERROR'
  | 'METHOD_NOT_ALLOWED'
  | 'MISMATCHING_TYPES'
  | 'MISSING_ARGUMENT'
  | 'MISSING_OMNI_PROCESS_ID'
  | 'MISSING_RECEIVEDDOCUMENTID_ATTACHMENT'
  | 'MISSING_RECORD'
  | 'MIXED_DML_OPERATION'
  | 'MODEL_NOT_ACTIVE'
  | 'MULTIPLE_CONTENT_FOUND'
  | 'MULTIPLE_VOUCHERS'
  | 'NONUNIQUE_SHIPPING_ADDRESS'
  | 'NOT_FOUND'
  | 'NOT_RECOVERABLE_SEARCH_PROVIDER_ERROR'
  | 'NO_ACCESS_TOKEN'
  | 'NO_ACCESS_TOKEN_FROM_REFRESH'
  | 'NO_APPLICABLE_PROCESS'
  | 'NO_ATTACHMENT_PERMISSION'
  | 'NO_AUTH_PROVIDER'
  | 'NO_BUSINESS_HOURS_FOUND'
  | 'NO_INACTIVE_DIVISION_MEMBERS'
  | 'NO_MASS_MAIL_PERMISSION'
  | 'NO_MESSAGE_TYPE_MESSAGES'
  | 'NO_PARTNER_PERMISSION'
  | 'NO_REFRESH_TOKEN'
  | 'NO_SEARCH_ATTRIBUTES'
  | 'NO_SINGLE_MAIL_PERMISSION'
  | 'NO_SORT_PRICEBOOK_ASSOCIATED_ERROR'
  | 'NO_SUCH_USER_EXISTS'
  | 'NO_TOKEN_ENDPOINT'
  | 'NUMBER_OUTSIDE_VALID_RANGE'
  | 'NUM_HISTORY_FIELDS_BY_SOBJECT_EXCEEDED'
  | 'OCR_INVALID_REQUEST'
  | 'OPERATION_ENQUEUED'
  | 'OPERATION_WITH_CALLBACK_ENQUEUED'
  | 'OPTED_OUT_OF_MASS_MAIL'
  | 'OP_WITH_INVALID_USER_TYPE_EXCEPTION'
  | 'ORCHESTRATION_INVALID'
  | 'ORDER_MANAGEMENT_ACTION_NOT_ALLOWED'
  | 'ORDER_MANAGEMENT_INVALID_RECORD'
  | 'ORDER_MANAGEMENT_RECORD_EXISTS'
  | 'ORDER_MANAGEMENT_RECORD_NOT_FOUND'
  | 'ORG_SETTING_REQUIRED'
  | 'PACKAGE_DISABLED'
  | 'PACKAGE_LICENSE_REQUIRED'
  | 'PACKAGING_API_INSTALL_FAILED'
  | 'PACKAGING_API_UNINSTALL_FAILED'
  | 'PALI_INVALID_ACTION_ID'
  | 'PALI_INVALID_ACTION_NAME'
  | 'PALI_INVALID_ACTION_TYPE'
  | 'PAL_INVALID_ASSISTANT_RECOMMENDATION_TYPE_ID'
  | 'PAL_INVALID_ENTITY_ID'
  | 'PAL_INVALID_FLEXIPAGE_ID'
  | 'PAL_INVALID_LAYOUT_ID'
  | 'PAL_INVALID_PARAMETERS'
  | 'PARAMETER_TOO_LARGE'
  | 'PARTICIPANT_RELATIONSHIP_EXISTS'
  | 'PAYLOAD_SIZE_EXCEEDED'
  | 'PA_API_EXCEPTION'
  | 'PA_AXIS_FAULT'
  | 'PA_INVALID_ID_EXCEPTION'
  | 'PA_NO_ACCESS_EXCEPTION'
  | 'PA_NO_DATA_FOUND_EXCEPTION'
  | 'PA_URI_SYNTAX_EXCEPTION'
  | 'PA_VISIBLE_ACTIONS_FILTER_ORDERING_EXCEPTION'
  | 'PENDING_COMMIT'
  | 'PICKLIST_INACTIVE_VALUES_EXCEEDED'
  | 'PLATFORM_EVENT_ENCRYPTION_ERROR'
  | 'PLATFORM_EVENT_PUBLISHING_UNAVAILABLE'
  | 'PLATFORM_EVENT_PUBLISH_FAILED'
  | 'PORTAL_NO_ACCESS'
  | 'PORTAL_USER_ALREADY_EXISTS_FOR_CONTACT'
  | 'PORTAL_USER_CREATION_RESTRICTED_WITH_ENCRYPTION'
  | 'PRICE_NOT_FOUND'
  | 'PRIVATE_CONTACT_ON_ASSET'
  | 'PROCESSING_HALTED'
  | 'PROGRAM_PROGRESS_NOT_ACTIVE'
  | 'PROMOTION_NOT_FOUND'
  | 'QA_INVALID_CREATE_FEED_ITEM'
  | 'QA_INVALID_SUCCESS_MESSAGE'
  | 'QUERY_REFINEMENT_VALUE_LIMIT_EXCEEDED'
  | 'QUERY_TIMEOUT'
  | 'QUERY_TOKEN_COUNT_LIMIT_EXCEEDED'
  | 'QUICK_ACTION_LIST_ITEM_NOT_ALLOWED'
  | 'QUICK_ACTION_LIST_NOT_ALLOWED'
  | 'RECORD_CREATION_FAILED'
  | 'RECORD_IN_USE_BY_WORKFLOW'
  | 'RECORD_MISSING_REQUIRED_FIELD'
  | 'RECORD_UPDATE_FAILED'
  | 'RECOVERABLE_SEARCH_PROVIDER_ERROR'
  | 'REFRESH_FAILED'
  | 'RELATED_ENTITY_FILTER_VALIDATION_EXCEPTION'
  | 'REL_FIELD_BAD_ACCESSIBILITY'
  | 'REPUTATION_MINIMUM_NUMBER_NOT_REACHED'
  | 'REQUEST_RUNNING_TOO_LONG'
  | 'REQUIRED_FEATURE_MISSING'
  | 'REQUIRED_FIELD_MISSING'
  | 'REQUIRE_CONNECTED_APP_SCS'
  | 'REQUIRE_CONNECTED_APP_SESSION_SCS'
  | 'REQUIRE_RUNAS_USER'
  | 'RESOURCE_NOT_AVAILABLE'
  | 'RETRIEVE_EXCHANGE_ATTACHMENT_FAILED'
  | 'RETRIEVE_EXCHANGE_EMAIL_FAILED'
  | 'RETRIEVE_EXCHANGE_EVENT_FAILED'
  | 'RETRIEVE_GOOGLE_EMAIL_FAILED'
  | 'RETRIEVE_GOOGLE_EVENT_FAILED'
  | 'RETRIEVE_USER_CONFIG_ERROR'
  | 'ROUTES_EVALUATION_LIMIT_EXCEEDED'
  | 'SALESFORCE_INBOX_TRANSPORT_CONNECTION_ERROR'
  | 'SALESFORCE_INBOX_TRANSPORT_INVALID_INPUT_ERROR'
  | 'SALESFORCE_INBOX_TRANSPORT_TOKEN_ERROR'
  | 'SALESFORCE_INBOX_TRANSPORT_UNKNOWN_ERROR'
  | 'SCHEMA_OBJECT_NOT_FOUND'
  | 'SCREEN_POP_REQUIRED_INPUT_MISSING'
  | 'SEARCH_INCLUDE_RULES_MAX_RULE_DEFINITION_LIMIT_EXCEEDED'
  | 'SEARCH_INCLUDE_RULES_MIN_RULE_DEFINITION_NOT_MET'
  | 'SEARCH_PROVIDER_REQUEST_RATE_EXCEEDED'
  | 'SEGMENT_COUNT_LIMIT_EXCEEDED'
  | 'SELF_REFERENCE_FROM_FLOW'
  | 'SELF_REFERENCE_FROM_TRIGGER'
  | 'SERVICE_UNAVAILABLE'
  | 'SESSION_EXPIRED'
  | 'SESSION_INVALIDATED'
  | 'SHARE_NEEDED_FOR_CHILD_OWNER'
  | 'SINGLE_EMAIL_LIMIT_EXCEEDED'
  | 'SLACK_API_ERROR'
  | 'SOCIAL_ACCOUNT_NOT_FOUND'
  | 'SOCIAL_ACTION_INVALID'
  | 'SOCIAL_PERSONA_NOT_FOUND'
  | 'SOCIAL_POST_INVALID'
  | 'SOCIAL_POST_NOT_FOUND'
  | 'SPECIFICATION_GENERATION_EXCEPTION'
  | 'STANDARD_PRICE_NOT_DEFINED'
  | 'STORAGE_LIMIT_EXCEEDED'
  | 'STRING_TOO_LONG'
  | 'SUBDOMAIN_IN_USE'
  | 'TABSET_LIMIT_EXCEEDED'
  | 'TEMPLATE_NOT_ACTIVE'
  | 'TEMPLATE_NOT_FOUND'
  | 'TERMS_OF_SERVICE_UNREAD'
  | 'TERRITORY_REALIGN_IN_PROGRESS'
  | 'TEXT_DATA_OUTSIDE_SUPPORTED_CHARSET'
  | 'TEXT_TO_PICKLIST_VALUES_EXCEEDED'
  | 'TOO_MANY_APEX_REQUESTS'
  | 'TOO_MANY_ENUM_VALUE'
  | 'TOO_MANY_JOBS'
  | 'TOO_MANY_POSSIBLE_USERS_EXIST'
  | 'TRANSFER_REQUIRES_READ'
  | 'TXN_SECURITY_NO_ACCESS'
  | 'UISF_ENTITY_QUERY_FAILED'
  | 'UISF_NO_MAPPINGS_FOUND'
  | 'UISF_TOKEN_NOT_FOUND'
  | 'UISF_UNKNOWN_EXCEPTION'
  | 'UISF_USER_MAPPING_FAILED'
  | 'UNABLE_TO_LOCK_ROW'
  | 'UNAUTHORIZED_SEARCH_PROVIDER_REQUEST'
  | 'UNAVAILABLE_RECORDTYPE_EXCEPTION'
  | 'UNAVAILABLE_REF'
  | 'UNDEFINED_MAPPING_DEFINITION'
  | 'UNDELETE_FAILED'
  | 'UNKNOWN_EXCEPTION'
  | 'UNKNOWN_TOKEN_ERROR'
  | 'UNPROCESSABLE_REQUEST'
  | 'UNQUALIFIED_CART'
  | 'UNSAFE_HTML_CONTENT'
  | 'UNSPECIFIED_EMAIL_ADDRESS'
  | 'UNSUPPORTED_APEX_TRIGGER_OPERATON'
  | 'UNSUPPORTED_MODE'
  | 'UNSUPPORTED_PAYMENT_GATEWAY_TYPE'
  | 'UNSUPPORTED_PAYMENT_REQUEST_TYPE'
  | 'UNSUPPORTED_SITE'
  | 'UNSUPPORTED_SITE_FILE_IMPORTED_EXCEPTION'
  | 'UNSUPPORTED_SOCIAL_PROVIDER'
  | 'UNVERIFIED_SENDER_ADDRESS'
  | 'UPDATE_GOOGLE_EMAIL_LABEL_FAILED'
  | 'USER_OWNS_PORTAL_ACCOUNT_EXCEPTION'
  | 'USER_WITHOUT_WEM_PERMISSION'
  | 'USER_WITH_APEX_SHARES_EXCEPTION'
  | 'VARIANT_NOT_FOUND'
  | 'VF_COMPILE_ERROR'
  | 'VOICE_CAPACITY_ERROR'
  | 'WEBLINK_SIZE_LIMIT_EXCEEDED'
  | 'WEBLINK_URL_INVALID'
  | 'WEM_SEGMENTS_CAN_NOT_HAVE_NON_ACTIVE_SEGMENT_TYPE'
  | 'WEM_SHIFT_SEGMENT_TIME_IS_OUTSIDE_OF_THE_SHIFT_DURATION'
  | 'WEM_USER_NOT_ORG_ADMIN'
  | 'WORKSPACE_NOT_FOUND'
  | 'WRONG_CONTROLLER_TYPE'
  | 'XCLEAN_DJ_MATCH_IGNORABLE_ERROR'
  | 'XCLEAN_DJ_MATCH_INTERNAL_DJ_ERROR'
  | 'XCLEAN_DJ_MATCH_NON_RETRIABLE_ERROR'
  | 'XCLEAN_DJ_MATCH_RETRIABLE_ERROR'
  | 'XCLEAN_DJ_MATCH_UNKNOWN_ERROR'
  | 'XCLEAN_UNEXPECTED_ERROR';

export interface CancelDeployResult {
  done: boolean;
  id: ID;
}

export interface DeployResult {
  canceledBy?: string;
  canceledByName?: string;
  checkOnly: boolean;
  completedDate?: Date;
  createdBy: string;
  createdByName: string;
  createdDate: Date;
  details: DeployDetails;
  done: boolean;
  errorMessage?: string;
  errorStatusCode?: StatusCode;
  id: ID;
  ignoreWarnings: boolean;
  lastModifiedDate?: Date;
  numberComponentErrors: number;
  numberComponentsDeployed: number;
  numberComponentsTotal: number;
  numberTestErrors: number;
  numberTestsCompleted: number;
  numberTestsTotal: number;
  rollbackOnError: boolean;
  runTestsEnabled: boolean;
  startDate?: Date;
  stateDetail?: string;
  status: DeployStatus;
  success: boolean;
}

export interface DeployDetails {
  componentFailures?: DeployMessage | DeployMessage[];
  componentSuccesses?: DeployMessage | DeployMessage[];
  retrieveResult?: RetrieveResult;
  runTestResult?: RunTestsResult;
}

export interface DeployMessage {
  changed: boolean;
  columnNumber?: number;
  componentType?: string;
  created: boolean;
  createdDate: Date;
  deleted: boolean;
  fileName: string;
  fullName: string;
  id?: string;
  lineNumber?: number;
  problem?: string;
  problemType?: DeployProblemType;
  success: boolean;
}

export interface RetrieveResult {
  done: boolean;
  errorMessage?: string;
  errorStatusCode?: StatusCode;
  fileProperties?: FileProperties | FileProperties[];
  id: string;
  messages?: RetrieveMessage | RetrieveMessage[];
  status: RetrieveStatus;
  success: boolean;
  zipFile: string;
}

export interface FileProperties {
  createdById: string;
  createdByName: string;
  createdDate: Date;
  fileName: string;
  fullName: string;
  id: string;
  lastModifiedById: string;
  lastModifiedByName: string;
  lastModifiedDate: Date;
  manageableState?: ManageableState;
  namespacePrefix?: string;
  type: string;
}

export interface RetrieveMessage {
  fileName: string;
  problem: string;
}

export interface RunTestsResult {
  apexLogId?: string;
  codeCoverage?: CodeCoverageResult | CodeCoverageResult[];
  codeCoverageWarnings?: CodeCoverageWarning | CodeCoverageWarning[];
  failures?: RunTestFailure | RunTestFailure[];
  flowCoverage?: FlowCoverageResult | FlowCoverageResult[];
  flowCoverageWarnings?: FlowCoverageWarning | FlowCoverageWarning[];
  numFailures: number;
  numTestsRun: number;
  successes?: RunTestSuccess | RunTestSuccess[];
  totalTime: number;
}

export interface CodeCoverageResult {
  dmlInfo?: CodeLocation | CodeLocation[];
  id: ID;
  locationsNotCovered?: CodeLocation | CodeLocation[];
  methodInfo?: CodeLocation | CodeLocation[];
  name: string;
  namespace?: string;
  numLocations: number;
  numLocationsNotCovered: number;
  soqlInfo?: CodeLocation | CodeLocation[];
  soslInfo?: CodeLocation | CodeLocation[];
  type: string;
}

export interface CodeLocation {
  column: number;
  line: number;
  numExecutions: number;
  time: number;
}

export interface CodeCoverageWarning {
  id: ID;
  message: string;
  name?: string;
  namespace?: string;
}

export interface RunTestFailure {
  id: ID;
  message: string;
  methodName?: string;
  name: string;
  namespace?: string;
  packageName: string;
  seeAllData?: boolean;
  stackTrace?: string;
  time: number;
  type: string;
}

export interface FlowCoverageResult {
  elementsNotCovered?: string | string[];
  flowId: string;
  flowName: string;
  flowNamespace?: string;
  numElements: number;
  numElementsNotCovered: number;
  processType: FlowProcessType;
}

export interface FlowCoverageWarning {
  flowId?: string;
  flowName?: string;
  flowNamespace?: string;
  message: string;
}

export interface RunTestSuccess {
  id: ID;
  methodName: string;
  name: string;
  namespace?: string;
  seeAllData?: boolean;
  time: number;
}

export interface AsyncResult {
  done: boolean;
  id: ID;
  message?: string;
  state: AsyncRequestState;
  statusCode?: StatusCode;
}

export interface Metadata {
  fullName?: string;
  module?: string;
}

export interface AIApplication extends Metadata {
  developerName: string;
  masterLabel?: string;
  predictionDefinitions?: AIPredictionDefinition | AIPredictionDefinition[];
  status: AIApplicationStatus;
  type: AIApplicationType;
}

export interface AIPredictionDefinition {
  dataDefinitions?: AIDataDefinition | AIDataDefinition[];
  description: string;
  predictionTargets?: AIPredictionTarget | AIPredictionTarget[];
  status: AIPredictionDefinitionStatus;
  type: AIPredictionType;
}

export interface AIDataDefinition {
  dataFilter?: AIFilterGroup;
  description?: string;
  fieldType?: AIManagedFieldType;
  managedFields?: AIManagedField | AIManagedField[];
  modelDefinitions?: AIModelDefinition | AIModelDefinition[];
}

export interface AIFilterGroup {
  rootFilter: AIFilter;
}

export interface AIFilter {
  lhField?: AIPredictionField;
  lhFilter?: AIFilter;
  lhUnit?: AIFilterUnit;
  operation: AIFilterOperation;
  rhField?: AIPredictionField;
  rhFilter?: AIFilter;
  rhUnit?: AIFilterUnit;
  sortOrder?: number;
  values?: AIFilterValue | AIFilterValue[];
}

export interface AIPredictionField {
  entity: string;
  field: string;
  relatedPredictionField?: AIPredictionField;
}

export interface AIFilterValue {
  side: AISide;
  sortOrder?: number;
  type: AIValueType;
  value: string;
}

export interface AIManagedField {
  field: AIPredictionField;
}

export interface AIModelDefinition {
  approvalType?: AIModelDefinitionApprovalType;
  externalId: string;
  scoringFilter?: AIFilterGroup;
  status: AIModelDefinitionStatus;
  trainSplitRatio?: string;
  trainingFilter?: AIFilterGroup;
  type?: AIModelType;
}

export interface AIPredictionTarget {
  predictionExpressions?: AIPredictionExpression | AIPredictionExpression[];
  pushbackField?: AIPredictionField;
  strategy?: AIPredictionStrategy;
  targetField?: AIPredictionField;
}

export interface AIPredictionExpression {
  expressionFilterGroup?: AIFilterGroup;
  predictionExpressionName?: string;
}

export interface AIApplicationConfig extends Metadata {
  aiApplicationDeveloperName: string;
  applicationId?: string;
  developerName: string;
  insightReasonEnabled?: boolean;
  masterLabel?: string;
  rank?: number;
  scoringMode?: AIScoringMode;
}

export interface AIConvSummarizationConfig extends Metadata {
  fieldName: string;
  name: string;
  objectName: string;
  recommendationOutputFieldName: RecsOutputFieldName;
  status: ConfigStatus;
}

export interface AIModel extends Metadata {
  approvalStatus: AIModelApproval;
  contentVersion?: string;
  dataset?: string;
  externalId?: string;
  failureReasonCode?: string;
  modelContent?: string;
  modelDef: string;
  modelFactors?: AIModelFactor | AIModelFactor[];
  modelGraphs?: AIModelGraph | AIModelGraph[];
  modelMetrics?: AIModelMetric | AIModelMetric[];
  priority?: number;
  scoringStatus: AIScoringStatus;
  trainingEndTime: Date;
  trainingStartTime: Date;
  type: AIModelType;
}

export interface AIModelFactor {
  externalId?: string;
  factorComponents?: AIFactorComponent | AIFactorComponent[];
  intensityType: AIIntensityType;
  intensityValue: number;
  lowerLimit: number;
  type: AIModelFactorType;
  upperLimit: number;
}

export interface AIFactorComponent {
  leftHandDerivedField?: string;
  leftHandField?: string;
  operator: AIModelMetricOperation;
  rightHandDerivedField?: string;
  rightHandField?: string;
  sortOrder?: number;
  value: string;
}

export interface AIModelGraph {
  dataSetType: AIDataSetType;
  graphPoints: string;
  graphType: AIModelGraphType;
  schemaVersion: string;
}

export interface AIModelMetric {
  classLabel1?: string;
  classLabel2?: string;
  iteration?: number;
  metricType: AIMetricType;
  metricValue: number;
}

export interface AIReplyRecommendationsSettings extends Metadata {
  enableAIReplyRecommendations?: boolean;
}

export interface AIScoringModelDefVersion extends Metadata {
  aiScoringModelDefinition: string;
  aiScoringSteps?: AIScoringStep | AIScoringStep[];
  developerName: string;
  masterLabel: string;
  modelMode: AIScoringModelDefVersionMode;
}

export interface AIScoringStep {
  aiModelConfigStep: string;
  stepDetail?: string;
}

export interface AIScoringModelDefinition extends Metadata {
  aiModelConfig: string;
  aiScoringModelDefVersions?: AIScoringModelDefVersion | AIScoringModelDefVersion[];
  description?: string;
  masterLabel: string;
}

export interface AIUsecaseDefinition extends Metadata {
  aiUsecaseFieldMappings?: AIUsecaseFieldMapping | AIUsecaseFieldMapping[];
  aiUsecaseModels?: AIUsecaseModel | AIUsecaseModel[];
  creatorType: CreatorType;
  masterLabel: string;
  maximumInsightCount?: number;
  maximumRecommendationCount?: number;
  maximumSuggestionCount?: number;
  primaryResponseObject?: string;
  recommendationResponseObject?: string;
  recommendationSource?: RcmdSourceType;
  secondaryResponseObject?: string;
  shouldSaveFeatures?: boolean;
  shouldSaveInsights?: boolean;
  shouldSaveRecommendation?: boolean;
  shouldSaveRequestResponse?: boolean;
  shouldSaveScore?: boolean;
  shouldSaveSuggestions?: boolean;
  suggestionImpactMinimumPct?: number;
  usecaseName: string;
}

export interface AIUsecaseFieldMapping {
  developerName: string;
  joinFieldInformation?: string;
  mappedFieldName: string;
  mappedFieldType: MappedFieldType;
  masterLabel: string;
  responseFieldName: string;
  responseObject: string;
  sequenceNumber?: number;
}

export interface AIUsecaseModel {
  aiFeatureExtractors?: AIFeatureExtractor | AIFeatureExtractor[];
  arePredctGenInRealTime: boolean;
  defaultFeatureExtractor?: AIFeatureExtractor;
  developerName: string;
  masterLabel: string;
  predictionDefinition: string;
  predictionPlatform: PredictionPlatform;
}

export interface AIFeatureExtractor {
  batchInputSourceIdentifier?: string;
  batchInputSourceType?: BatchInputSourceType;
  className?: string;
  developerName: string;
  extractorType: ExtractorType;
  featureInputType: FeatureInputType;
  inputContext?: string;
  masterLabel: string;
}

export interface AccountForecastSettings extends Metadata {
  accountFilterId?: string;
  accountForecastFormulas?: AccountForecastFormula | AccountForecastFormula[];
  acctPrdctPrdFrcstVolCnt?: number;
  calculationFrequency: CalculationFrequency;
  displayDuration: number;
  displayedForecastMetrics: string;
  displayedRevenueMetrics: string;
  editableAtStartOfPeriod: boolean;
  editsAllowedFor: number;
  forecastFrequency: ForecastFrequency;
  objectMapping?: ObjectMapping;
  opportunityItemScheduleEnabled?: boolean;
  opportunityProbabilityEnabled?: boolean;
  primaryNotifEmailAddress?: string;
  productFilterId?: string;
  recalculateAllFrcstCnt?: number;
  regenerateForecastCnt?: number;
  salesAgreementFilterId?: string;
  secondaryNotifEmailAddress?: string;
  startingPeriod: number;
}

export interface AccountForecastFormula {
  endingPeriod: number;
  formula: string;
  formulaType: FormulaType;
  startingPeriod: number;
}

export interface ObjectMapping {
  inputObject: string;
  mappingFields?: ObjectMappingField | ObjectMappingField[];
  outputObject: string;
}

export interface ObjectMappingField {
  inputField: string;
  outputField: string;
}

export interface AccountInsightsSettings extends Metadata {
  enableAccountInsights?: boolean;
}

export interface AccountIntelligenceSettings extends Metadata {
  enableAccountLogos?: boolean;
  enableAutomatedAccountFields?: boolean;
  enableNewsStories?: boolean;
}

export interface AccountRelationshipShareRule extends Metadata {
  accessLevel: string;
  accountToCriteriaField: string;
  description?: string;
  entityType: string;
  masterLabel: string;
  staticFormulaCriteria?: string;
  type: string;
}

export interface AccountSettings extends Metadata {
  enableAccountDiscovery?: boolean;
  enableAccountHistoryTracking?: boolean;
  enableAccountInsightsInMobile?: boolean;
  enableAccountOwnerReport?: boolean;
  enableAccountTeams?: boolean;
  enableContactHistoryTracking?: boolean;
  enableRelateContactToMultipleAccounts?: boolean;
  showViewHierarchyLink?: boolean;
}

export interface AccountingModelConfig extends Metadata {
  accountingType: AccountingType;
  defaultAccrualAccountCode?: string;
  defaultWriteOffAccountCode?: string;
  earliestCreatedDate: Date;
  expectedCashFlowGrouping?: ExpectedCashFlowGrouping;
  financeBook?: string;
  internalMappingDetails: string;
  isActive: boolean;
  isGroupedByFundAccount?: boolean;
  isUsed: boolean;
  jobFilterCriteria?: string;
  masterLabel: string;
  paidCashFlowGrouping?: PaidCashFlowGrouping;
  recordTypeFilter?: string;
  runOrder?: number;
}

export interface AcctMgrTargetSettings extends Metadata {
  acctMgrPeriodicTargetDstrCnt?: number;
  periodType: PeriodTypes;
  pricebookId?: string;
  teamMemberHierarchyType: TeamMemberHierarchyType;
}

export interface ActionLauncherItemDef extends Metadata {
  identifier: string;
  itemActionType: ItemActionType;
  itemCategory: ItemCategory;
  itemLanguage: string;
  masterLabel: string;
  subType: string;
  type: string;
  versionNumber?: string;
}

export interface ActionLinkGroupTemplate extends Metadata {
  actionLinkTemplates?: ActionLinkTemplate | ActionLinkTemplate[];
  category: PlatformActionGroupCategory;
  executionsAllowed: ActionLinkExecutionsAllowed;
  hoursUntilExpiration?: number;
  isPublished: boolean;
  name: string;
}

export interface ActionLinkTemplate {
  actionUrl: string;
  headers?: string;
  isConfirmationRequired: boolean;
  isGroupDefault: boolean;
  label?: string;
  labelKey: string;
  linkType: ActionLinkType;
  method: ActionLinkHttpMethod;
  position: number;
  requestBody?: string;
  userAlias?: string;
  userVisibility: ActionLinkUserVisibility;
}

export interface ActionPlanTemplate extends Metadata {
  actionPlanTemplateItem?: ActionPlanTemplateItem | ActionPlanTemplateItem[];
  actionPlanTemplateItemDependencies?: ActionPlanTemplateItemDependency | ActionPlanTemplateItemDependency[];
  description?: string;
  isAdHocItemCreationEnabled: boolean;
  name: string;
  targetEntityType: string;
  uniqueName: string;
}

export interface ActionPlanTemplateItem {
  actionPlanTemplateItemValue?: ActionPlanTemplateItemValue | ActionPlanTemplateItemValue[];
  displayOrder?: number;
  isRequired?: boolean;
  itemEntityType: string;
  name: string;
  uniqueName: string;
}

export interface ActionPlanTemplateItemValue {
  itemEntityType: string;
  name: string;
  valueFormula?: string;
  valueLiteral?: string;
}

export interface ActionPlanTemplateItemDependency {
  creationType: string;
  name: string;
  previousTemplateItem: ActionPlanTemplateItem;
  templateItem: ActionPlanTemplateItem;
}

export interface ActionsSettings extends Metadata {
  enableDefaultQuickActionsOn?: boolean;
  enableMdpEnabled?: boolean;
  enableOfflineWebLinks?: boolean;
  enableThirdPartyActions?: boolean;
}

export interface ActivationPlatform extends Metadata {
  activationPlatformAdditionalMetadata?: string;
  activationPlatformConnectorType?: ActivationPlatformConnectorType;
  dataConnector?: string;
  description: string;
  enabled: boolean;
  includeSegmentNames?: boolean;
  logoUrl?: string;
  masterLabel: string;
  notes?: string;
  outputFormat: ActivationPlatformFileOutputFormat;
  outputGrouping: ActivationPlatformFileOutputGrouping;
  periodicRefreshFrequecy?: ActivationPlatformPeriodicFullRefresh;
  platformType: ActivationPlatformType;
  refreshFrequency: ActivationPlatformRefreshFrequency;
  refreshMode: ActivationPlatformRefreshMode;
}

export interface ActivationPlatformActvAttr extends Metadata {
  activationPlatform: string;
  fieldName?: string;
  isRequired: boolean;
  masterLabel: string;
  objectName?: string;
}

export interface ActivationPlatformField extends Metadata {
  activationPlatform: string;
  helpText?: string;
  isHidden: boolean;
  isRequired: boolean;
  masterLabel: string;
  type?: ActivationPlatformFieldDataType;
}

export interface ActivitiesSettings extends Metadata {
  allowUsersToRelateMultipleContactsToTasksAndEvents?: boolean;
  autoRelateEventAttendees?: boolean;
  enableActivityReminders?: boolean;
  enableCalendarHomeLWC?: boolean;
  enableClickCreateEvents?: boolean;
  enableDragAndDropScheduling?: boolean;
  enableEmailTracking?: boolean;
  enableFlowTaskNotifsViaApex?: boolean;
  enableGroupTasks?: boolean;
  enableHideChildEventsPreference?: boolean;
  enableListViewScheduling?: boolean;
  enableLogNote?: boolean;
  enableMLSingleClientProfile?: boolean;
  enableMultidayEvents?: boolean;
  enableRecurringEvents?: boolean;
  enableRecurringTasks?: boolean;
  enableRollUpActivToContactsAcct?: boolean;
  enableSidebarCalendarShortcut?: boolean;
  enableSimpleTaskCreateUI?: boolean;
  enableTimelineCompDateSort?: boolean;
  enableUNSTaskDelegatedToNotifications?: boolean;
  enableUserListViewCalendars?: boolean;
  meetingRequestsLogo?: string;
  showCustomLogoMeetingRequests?: boolean;
  showEventDetailsMultiUserCalendar?: boolean;
  showHomePageHoverLinksForEvents?: boolean;
  showMyTasksHoverLinks?: boolean;
}

export interface ActvPfrmDataConnectorS3 extends Metadata {
  bucketName: string;
  exportDirectory: string;
  masterLabel: string;
}

export interface ActvPlatformAdncIdentifier extends Metadata {
  activationPlatform: string;
  identifierHashMethod?: ActivationPlatformIdentifierHashMethod;
  identifierType: ActivationPlatformIdentifierType;
  masterLabel: string;
}

export interface ActvPlatformFieldValue extends Metadata {
  activationPlatformField: string;
  isDefault: boolean;
  masterLabel: string;
  value?: string;
}

export interface ActvPlatformOAuthConnector extends Metadata {
  masterLabel: string;
  oauthProvider: OAuthProviderType;
  oauthUrl: string;
}

export interface AddOnDefinition extends Metadata {
  cloudServiceProvider?: string;
  defaultLicenseDuration?: number;
  defaultStatus?: DefaultLicenseStatus;
  description?: string;
  includedPlatformLicenseDefinitions?: IncludedPlatformLicenseDefinition | IncludedPlatformLicenseDefinition[];
  includedUserLicenseDefinitions?: IncludedUserLicenseDefinition | IncludedUserLicenseDefinition[];
  licenseOwner?: string;
  managementServiceProvider?: string;
  managementTenantId?: string;
  name: string;
}

export interface IncludedPlatformLicenseDefinition {
  fullName?: string;
  name: string;
  quantity?: number;
}

export interface IncludedUserLicenseDefinition {
  fullName?: string;
  name: string;
  quantity?: number;
}

export interface AddressSettings extends Metadata {
  countriesAndStates: CountriesAndStates;
}

export interface CountriesAndStates {
  countries?: Country | Country[];
}

export interface Country {
  active: boolean;
  integrationValue: string;
  isoCode: string;
  label: string;
  orgDefault: boolean;
  standard: boolean;
  states?: State | State[];
  visible: boolean;
}

export interface State {
  active: boolean;
  integrationValue: string;
  isoCode: string;
  label: string;
  standard: boolean;
  visible: boolean;
}

export interface AdvAccountForecastSet extends Metadata {
  accountFieldName?: string;
  calculationFrequency?: AdvAcctFcstCalcFrequency;
  description?: string;
  dimensions?: AdvAcctForecastDimension | AdvAcctForecastDimension[];
  displayGroups?: AdvAcctFrcstDisplayGroup | AdvAcctFrcstDisplayGroup[];
  forecastAdjPeriods?: AdvAcctForecastAdjPeriod | AdvAcctForecastAdjPeriod[];
  forecastFactObjectName: string;
  forecastFormulas?: AdvAccountForecastFormula | AdvAccountForecastFormula[];
  forecastPeriodGroupName: string;
  forecastQuantityFieldName?: string;
  forecastRevenueFieldName?: string;
  forecastSetFieldName?: string;
  forecastSetName: string;
  forecastStatusFieldName?: string;
  generationDpeDefName?: string;
  measureDefinitions?: AdvAcctForecastMeasureDef | AdvAcctForecastMeasureDef[];
  periodFieldName?: string;
  recalculateDpeDefName?: string;
  regenerationDpeDefName?: string;
  rolloverDpeDefName?: string;
  rolloverFrequency?: AdvAcctFcstCalcFrequency;
  status: AdvAccForecastSetStatus;
}

export interface AdvAcctForecastDimension {
  advAcctForecastDimName: string;
  dimensionFieldName: string;
  dimensionSourceName?: string;
  hierarchySequenceNumber: number;
}

export interface AdvAcctFrcstDisplayGroup {
  advAcctFrcstDisplayGroupName: string;
  displayGroupItems?: AdvAcctFrcstDplyGroupItem | AdvAcctFrcstDplyGroupItem[];
  displayGroupType?: AdvAcctFrcstDisplayGroupType;
  isDefault?: boolean;
  userProfileName?: string;
}

export interface AdvAcctFrcstDplyGroupItem {
  advAcctFrcstDplyGroupItemName: string;
  displayOrder: number;
  measureReferenceName?: string;
}

export interface AdvAcctForecastAdjPeriod {
  adjustmentDayCount: number;
  frequency: PeriodTypes;
  profileName?: string;
  startDay: number;
}

export interface AdvAccountForecastFormula {
  endPeriod: number;
  formulaExpression: string;
  formulaType: AdvAcctFcstFormulaType;
  startPeriod: number;
}

export interface AdvAcctForecastMeasureDef {
  advAcctForecastMeasureDefName: string;
  aggregationType?: AdvAcctFcstAggregationType;
  computationMethod?: AdvAcctFcstComputationMethod;
  forecastDataMeasureName: string;
  forecastMeasureName: string;
  forecastMeasureType: AdvAcctFcstMeasureType;
  isAdjustmentTracked?: boolean;
}

export interface AdvAcctForecastDimSource extends Metadata {
  advAcctForecastDimSrcName: string;
  sourceObjectName: string;
}

export interface AdvAcctForecastPeriodGroup extends Metadata {
  forecastPeriodGroupName: string;
  forecastPeriods?: AdvAccountForecastPeriod | AdvAccountForecastPeriod[];
  startPeriod: number;
  status: ForecastPeriodGroupStatus;
}

export interface AdvAccountForecastPeriod {
  displayDuration: number;
  sequenceNumber: number;
  type: PeriodTypes;
}

export interface AdvancedObjectMapping extends Metadata {
  client: FieldMappingClient;
  description?: string;
  label: string;
  rows?: AdvancedFieldMapping | AdvancedFieldMapping[];
  sourceObject?: string;
  targetObject?: string;
}

export interface AdvancedFieldMapping {
  sourceField: string;
  sourceObject: string;
  targetField: string;
  targetObject: string;
}

export interface Ai4mSettings extends Metadata {
  enableUmaGlobalModel?: boolean;
  enableUmaSto?: boolean;
}

export interface AnalyticSnapshot extends Metadata {
  description?: string;
  groupColumn?: string;
  mappings?: AnalyticSnapshotMapping | AnalyticSnapshotMapping[];
  name: string;
  runningUser?: string;
  sourceReport: string;
  targetObject: string;
}

export interface AnalyticSnapshotMapping {
  aggregateType?: ReportSummaryType;
  sourceField: string;
  sourceType: ReportJobSourceTypes;
  targetField: string;
}

export interface AnalyticsSettings extends Metadata {
  alwaysGenPreviews?: boolean;
  analyticsAdoptionMetadata?: boolean;
  autoInstallApps?: boolean;
  bundleCachingOptOut?: boolean;
  canAccessAnalyticsViaAPI?: boolean;
  canAnnotateDashboards?: boolean;
  canEnableSavedView?: boolean;
  canExploreDataConversationally?: boolean;
  canShareAppsWithCommunities?: boolean;
  canViewThumbnailAssets?: boolean;
  enableAmazonRedshiftOutputConnector?: boolean;
  enableAnalyticsEncryption?: boolean;
  enableAnalyticsSharingEnable?: boolean;
  enableAutoCompleteCombo?: boolean;
  enableAutonomousExperience?: boolean;
  enableAzureDLGen2OutputConnector?: boolean;
  enableC360GlobalProfileData?: boolean;
  enableCreateLegacyDataflows?: boolean;
  enableCrmaDataCloudIntegration?: boolean;
  enableDashboardChangeOwnerPref?: boolean;
  enableDashboardComponentSnapshot?: boolean;
  enableDashboardFlexiTable?: boolean;
  enableDashboardToPDFEnable?: boolean;
  enableDataCloudReportingPref?: boolean;
  enableEmailReportsToPortalUsers?: boolean;
  enableFirebirdEditor?: boolean;
  enableFloatingReportHeaders?: boolean;
  enableInsights?: boolean;
  enableInsightsHCMode?: boolean;
  enableLightningReportBuilder?: boolean;
  enableLotusNotesImages?: boolean;
  enableMassEnableReportBuilder?: boolean;
  enableNewChartsEngine?: boolean;
  enableNullDimension?: boolean;
  enableOrgCanSeeLivePreviews?: boolean;
  enableOrgCanViewTableau?: boolean;
  enableOrgCanViewThumbnailForOA?: boolean;
  enableOrgHasMobileOfflineEnabled?: boolean;
  enableOrgHasWatchlistEnabled?: boolean;
  enableQueryLiveConnectors?: boolean;
  enableRemoveFooterForRepDisplay?: boolean;
  enableRemoveFooterFromRepExp?: boolean;
  enableReportHideXlsExportPref?: boolean;
  enableReportInlineEditPref?: boolean;
  enableReportNotificationsEnable?: boolean;
  enableRequestPrioritySchdl?: boolean;
  enableS1AnalyticsEclairEnable?: boolean;
  enableS3OutputConnector?: boolean;
  enableSFXJoinedReportsEnable?: boolean;
  enableSalesforceOutputConnector?: boolean;
  enableSecureImageSharing?: boolean;
  enableSnowflakeOutputConnector?: boolean;
  enableTableauHyperOutputConnector?: boolean;
  enableUseOldChartsLookAndFeel?: boolean;
  enableWaveAssetsNewDateVersion?: boolean;
  enableWaveCustomFiscal?: boolean;
  enableWaveIndexMVDim?: boolean;
  enableWaveIndexMVDimV2?: boolean;
  enableWaveMultiCurrency?: boolean;
  enableWaveRecordNavigation?: boolean;
  enableWaveReplication?: boolean;
  enableWaveSharingInheritance?: boolean;
  enableWaveSqlCFIndexing?: boolean;
  enableWaveTrendedDatasetCleanup?: boolean;
  etlOrchestrationPref?: boolean;
  isDiscoveryOptimizationEnabled?: boolean;
  isHighVolumePushbackEnabled?: boolean;
  maxHoursAppInProgress?: number;
  queryCachingOptOut?: boolean;
  recipeDirectDataPref?: boolean;
  recipeFiscalPref?: boolean;
  recipePreCachingOptOut?: boolean;
  recipeStagedDataPref?: boolean;
  replaceBlankMeasuresWithNulls?: boolean;
  setWaveIsYearEndFiscalYear?: boolean;
  sonicEnabled?: boolean;
  turnOnTimeZones?: boolean;
}

export interface AndroidPushApplicationSetup extends Metadata {
  serverKey: string;
}

export interface AnimationRule extends Metadata {
  animationFrequency: string;
  developerName: string;
  isActive: boolean;
  masterLabel: string;
  recordTypeContext: string;
  recordTypeName?: string;
  sobjectType: string;
  targetField: string;
  targetFieldChangeToValues: string;
}

export interface ApexEmailNotifications extends Metadata {
  apexEmailNotification?: ApexEmailNotification | ApexEmailNotification[];
}

export interface ApexEmailNotification {
  email?: string;
  user?: string;
}

export interface ApexSettings extends Metadata {
  defaultQueueableDelay?: number;
  enableAggregateCodeCoverageOnly?: boolean;
  enableApexAccessRightsPref?: boolean;
  enableApexApprovalLockUnlock?: boolean;
  enableApexCtrlImplicitWithSharingPref?: boolean;
  enableApexPropertyGetterPref?: boolean;
  enableAuraApexCtrlAuthUserAccessCheckPref?: boolean;
  enableAuraApexCtrlGuestUserAccessCheckPref?: boolean;
  enableCompileOnDeploy?: boolean;
  enableDisableParallelApexTesting?: boolean;
  enableDoNotEmailDebugLog?: boolean;
  enableGaplessTestAutoNum?: boolean;
  enableMngdCtrlActionAccessPref?: boolean;
  enableNonCertifiedApexMdCrud?: boolean;
  enableRestrictCommunityExecAnon?: boolean;
  enableSecureNoArgConstructorPref?: boolean;
}

export interface ApexTestSuite extends Metadata {
  testClassName?: string | string[];
}

export interface AppExperienceSettings extends Metadata {
  doesHideAllAppsInAppLauncher?: boolean;
}

export interface AppMenu extends Metadata {
  appMenuItems?: AppMenuItem | AppMenuItem[];
}

export interface AppMenuItem {
  name: string;
  type: string;
}

export interface AppNotificationType extends Metadata {
  notificationType: string;
  pushByDefault: boolean;
  subscribed: boolean;
}

export interface ApplePushApplicationSetup extends Metadata {
  applicationBundle?: string;
  certificate?: string;
  environment: string;
  keyIdentifier?: string;
  password?: string;
  signingKey?: string;
  teamIdentifier?: string;
}

export interface Application extends Metadata {
  contactEmail?: string;
  contactPhone?: string;
  description?: string;
  developerName: string;
  iconUrl?: string;
  infoUrl?: string;
  label: string;
  logoUrl?: string;
  moduleRefs: ModuleRefs;
  version?: string;
}

export interface ModuleRefs {
  moduleRef?: ModuleRef | ModuleRef[];
}

export interface ModuleRef {
  name: string;
  namespacePrefix?: string;
  version?: string;
}

export interface ApplicationRecordTypeConfig extends Metadata {
  applicationObjectName: ApplicationObjectName;
  applicationUsageType: ApplicationUsageType;
  recordTypeName: string;
}

export interface ApplicationSubtypeDefinition extends Metadata {
  applicationUsageType: AppDomainUsageType;
  description?: string;
  masterLabel: string;
}

export interface AppointmentAssignmentPolicy extends Metadata {
  masterLabel: string;
  policyApplicableDuration: PolicyApplicableDuration;
  policyType: AssignmentPolicyType;
  utilizationFactor: UtilizationFactor;
}

export interface AppointmentSchedulingPolicy extends Metadata {
  appointmentAssignmentPolicy?: string;
  appointmentStartTimeInterval: string;
  extCalEventHandler?: string;
  isSvcTerrOpHoursWithShiftsUsed?: boolean;
  isSvcTerritoryMemberShiftUsed?: boolean;
  masterLabel: string;
  shouldCheckExternalCalendar: boolean;
  shouldConsiderCalendarEvents: boolean;
  shouldEnforceExcludedResource: boolean;
  shouldEnforceRequiredResource: boolean;
  shouldMatchSkill: boolean;
  shouldMatchSkillLevel: boolean;
  shouldRespectVisitingHours: boolean;
  shouldUsePrimaryMembers: boolean;
  shouldUseSecondaryMembers: boolean;
}

export interface ApprovalProcess extends Metadata {
  active: boolean;
  allowRecall?: boolean;
  allowedSubmitters?: ApprovalSubmitter | ApprovalSubmitter[];
  approvalPageFields?: ApprovalPageField;
  approvalStep?: ApprovalStep | ApprovalStep[];
  description?: string;
  emailTemplate?: string;
  enableMobileDeviceAccess?: boolean;
  entryCriteria?: ApprovalEntryCriteria;
  finalApprovalActions?: ApprovalAction;
  finalApprovalRecordLock?: boolean;
  finalRejectionActions?: ApprovalAction;
  finalRejectionRecordLock?: boolean;
  initialSubmissionActions?: ApprovalAction;
  label: string;
  nextAutomatedApprover?: NextAutomatedApprover;
  postTemplate?: string;
  processOrder?: number;
  recallActions?: ApprovalAction;
  recordEditability: RecordEditabilityType;
  showApprovalHistory?: boolean;
}

export interface ApprovalSubmitter {
  submitter?: string;
  type: ProcessSubmitterType;
}

export interface ApprovalPageField {
  field?: string | string[];
}

export interface ApprovalStep {
  allowDelegate?: boolean;
  approvalActions?: ApprovalAction;
  assignedApprover: ApprovalStepApprover;
  description?: string;
  entryCriteria?: ApprovalEntryCriteria;
  ifCriteriaNotMet?: StepCriteriaNotMetType;
  label: string;
  name: string;
  rejectBehavior?: ApprovalStepRejectBehavior;
  rejectionActions?: ApprovalAction;
}

export interface ApprovalAction {
  action?: WorkflowActionReference | WorkflowActionReference[];
}

export interface WorkflowActionReference {
  name: string;
  type: WorkflowActionType;
}

export interface ApprovalStepApprover {
  approver?: Approver | Approver[];
  whenMultipleApprovers?: RoutingType;
}

export interface Approver {
  name?: string;
  type: NextOwnerType;
}

export interface ApprovalEntryCriteria {
  booleanFilter?: string;
  criteriaItems?: FilterItem | FilterItem[];
  formula?: string;
}

export interface FilterItem {
  field: string;
  operation: FilterOperation;
  value?: string;
  valueField?: string;
}

export interface DuplicateRuleFilterItem extends FilterItem {
  sortOrder: number;
  table: string;
}

export interface ApprovalStepRejectBehavior {
  type: StepRejectBehaviorType;
}

export interface NextAutomatedApprover {
  useApproverFieldOfRecordOwner?: boolean;
  userHierarchyField: string;
}

export interface ArchiveSettings extends Metadata {
  enableEntityArchivingEnabled?: boolean;
}

export interface AssessmentQuestion extends Metadata {
  assessmentQuestionVersion?: AssessmentQuestionVersion;
  dataType: string;
  developerName: string;
  formulaResponseDataType?: string;
  name: string;
  questionCategory: string;
  relatedQuestion?: string;
}

export interface AssessmentQuestionVersion {
  additionalInformation?: string;
  description?: string;
  helpText?: string;
  isActive: boolean;
  name: string;
  optionSourceResponseValue?: boolean;
  questionText: string;
  responseValues?: string;
  status: string;
  versionNumber: number;
}

export interface AssessmentQuestionSet extends Metadata {
  assessmentQuestionDeveloperNames?: string | string[];
  developerName: string;
  name: string;
}

export interface AssignmentRule extends Metadata {
  active?: boolean;
  ruleEntry?: RuleEntry | RuleEntry[];
}

export interface RuleEntry {
  assignedTo?: string;
  assignedToType?: AssignToLookupValueType;
  booleanFilter?: string;
  businessHours?: string;
  businessHoursSource?: BusinessHoursSourceType;
  criteriaItems?: FilterItem | FilterItem[];
  disableEscalationWhenModified?: boolean;
  escalationAction?: EscalationAction | EscalationAction[];
  escalationStartTime?: EscalationStartTimeType;
  formula?: string;
  notifyCcRecipients?: boolean;
  overrideExistingTeams?: boolean;
  replyToEmail?: string;
  senderEmail?: string;
  senderName?: string;
  team?: string | string[];
  template?: string;
}

export interface EscalationAction {
  assignedTo?: string;
  assignedToTemplate?: string;
  assignedToType?: AssignToLookupValueType;
  minutesToEscalation?: number;
  notifyCaseOwner?: boolean;
  notifyEmail?: string | string[];
  notifyTo?: string;
  notifyToTemplate?: string;
}

export interface AssignmentRules extends Metadata {
  assignmentRule?: AssignmentRule | AssignmentRule[];
}

export interface AssistantContextItem extends Metadata {
  assistantVersionId: string;
  description?: string;
  developerName: string;
  index?: number;
  masterLabel?: string;
  parentContextItem?: string;
  parentRelationField?: string;
  searchType?: string;
  slotClass?: string;
  sobjectType?: string;
  whereClause?: string;
}

export interface AssistantDefinition extends Metadata {
  appVersionNumber?: number;
  assistantDefinitionProfiles?: AssistantDefinitionProfile | AssistantDefinitionProfile[];
  description?: string;
  developerName: string;
  masterLabel?: string;
  status?: AssistantDefinitionStatus;
}

export interface AssistantDefinitionProfile {
  profile?: string;
}

export interface AssistantSkillQuickAction extends Metadata {
  assistantSkillQuickActionParams?: AssistantSkillQuickActionParam | AssistantSkillQuickActionParam[];
  description?: string;
  developerName: string;
  masterLabel?: string;
  prompt?: string;
  quickAction?: string;
}

export interface AssistantSkillQuickActionParam {
  description?: string;
  field?: string;
  index?: number;
  prompt?: string;
  referenceTarget?: string;
  slotClass?: string;
}

export interface AssistantSkillSobjectAction extends Metadata {
  assistantSkillSobjectParams?: AssistantSkillSobjectParam | AssistantSkillSobjectParam[];
  description?: string;
  developerName: string;
  masterLabel?: string;
  prompt?: string;
  recordType?: string;
  sobjectType?: string;
  target?: string;
  type: AssistantSkillSobjectActionType;
}

export interface AssistantSkillSobjectParam {
  description?: string;
  field?: string;
  index?: number;
  prompt?: string;
  referenceTarget?: string;
  slotClass?: string;
}

export interface AssistantVersion extends Metadata {
  assistantDefinitionId: string;
  assistantSkills?: AssistantSkill | AssistantSkill[];
  assistantVersionActions?: AssistantVersionAction | AssistantVersionAction[];
  description?: string;
  developerName: string;
  masterLabel?: string;
  versionNumber?: number;
}

export interface AssistantSkill {
  assistantSkillIntents?: AssistantSkillIntent | AssistantSkillIntent[];
  description?: string;
  externalModel?: string;
  index?: number;
  mlDomain?: string;
  skillType?: AssistantSkillType;
}

export interface AssistantSkillIntent {
  action?: string;
  description?: string;
  field?: string;
  index?: number;
  intentName?: string;
  isPromptRequired?: boolean;
  isRequired?: boolean;
  mlIntent?: string;
  sobjectType?: string;
}

export interface AssistantVersionAction {
  action?: string;
}

export interface Audience extends Metadata {
  audienceName: string;
  container: string;
  criteria: AudienceCriteria;
  description?: string;
  formula?: string;
  formulaFilterType?: FormulaFilterType;
  isDefaultAudience?: boolean;
  targets?: PersonalizationTargetInfos;
}

export interface AudienceCriteria {
  criterion?: AudienceCriterion | AudienceCriterion[];
}

export interface AudienceCriterion {
  criteriaNumber?: number;
  criterionValue?: AudienceCriteriaValue;
  operator?: AudienceCriterionOperator;
  type: AudienceCriterionType;
}

export interface AudienceCriteriaValue {
  audienceDeveloperName?: string;
  city?: string;
  country?: string;
  domain?: string;
  entityField?: string;
  entityType?: string;
  fieldValue?: string;
  isEnabled?: string;
  permissionName?: string;
  permissionType?: string;
  profile?: string;
  subdivision?: string;
}

export interface PersonalizationTargetInfos {
  target?: PersonalizationTargetInfo | PersonalizationTargetInfo[];
}

export interface PersonalizationTargetInfo {
  groupName: string;
  priority?: number;
  targetType: string;
  targetValue: string;
}

export interface AuraDefinitionBundle extends Metadata {
  SVGContent?: string;
  apiVersion?: number;
  auraDefinitions?: AuraDefinitions;
  controllerContent?: string;
  description?: string;
  designContent?: string;
  documentationContent?: string;
  helperContent?: string;
  markup?: string;
  modelContent?: string;
  packageVersions?: PackageVersion | PackageVersion[];
  rendererContent?: string;
  styleContent?: string;
  testsuiteContent?: string;
  type?: AuraBundleType;
}

export interface AuraDefinitions {
  auraDefinition?: AuraDefinition | AuraDefinition[];
}

export interface AuraDefinition {
  defType: string;
  source: string;
}

export interface PackageVersion {
  majorNumber: number;
  minorNumber: number;
  namespace: string;
}

export interface AuthProvider extends Metadata {
  appleTeam?: string;
  authorizeUrl?: string;
  consumerKey?: string;
  consumerSecret?: string;
  controlPlane?: MuleSoftControlPlane;
  customMetadataTypeRecord?: string;
  defaultScopes?: string;
  ecKey?: string;
  errorUrl?: string;
  executionUser?: string;
  friendlyName: string;
  iconUrl?: string;
  idTokenIssuer?: string;
  includeOrgIdInIdentifier?: boolean;
  isPkceEnabled?: boolean;
  linkKickoffUrl?: string;
  logoutUrl?: string;
  oauthKickoffUrl?: string;
  plugin?: string;
  portal?: string;
  providerType: AuthProviderType;
  registrationHandler?: string;
  requireMfa?: boolean;
  sendAccessTokenInHeader?: boolean;
  sendClientCredentialsInHeader?: boolean;
  sendSecretInApis?: boolean;
  ssoKickoffUrl?: string;
  tokenUrl?: string;
  userInfoUrl?: string;
}

export interface AutoResponseRule extends Metadata {
  active?: boolean;
  ruleEntry?: RuleEntry | RuleEntry[];
}

export interface AutoResponseRules extends Metadata {
  autoResponseRule?: AutoResponseRule | AutoResponseRule[];
}

export interface AutomatedContactsSettings extends Metadata {
  enableAddContactAutomatically?: boolean;
  enableAddContactRoleAutomatically?: boolean;
  enableAddContactRoleWithSuggestion?: boolean;
  enableAddContactWithSuggestion?: boolean;
}

export interface BatchCalcJobDefinition extends Metadata {
  aggregates?: BatchCalcJobAggregate | BatchCalcJobAggregate[];
  appends?: BatchCalcJobUnion | BatchCalcJobUnion[];
  customNodes?: BatchCalcJobCustomNode | BatchCalcJobCustomNode[];
  datasources?: BatchCalcJobDatasource | BatchCalcJobDatasource[];
  description?: string;
  executionPlatformType?: ExecutionPlatformType;
  filters?: BatchCalcJobFilter | BatchCalcJobFilter[];
  forecasts?: BatchCalcJobForecast | BatchCalcJobForecast[];
  hierarchyPaths?: BatchCalcJobHierarchyPath | BatchCalcJobHierarchyPath[];
  isTemplate?: boolean;
  joins?: BatchCalcJobSourceJoin | BatchCalcJobSourceJoin[];
  label?: string;
  parameters?: BatchCalcJobParameter | BatchCalcJobParameter[];
  processType?: BatchCalcProcessType;
  status: BatchJobDefinitionStatus;
  transforms?: BatchCalcJobTransform | BatchCalcJobTransform[];
  writebacks?: BatchCalcJobWritebackObject | BatchCalcJobWritebackObject[];
}

export interface BatchCalcJobAggregate extends BatchCalcJobAbstractMetadataValue {
  description?: string;
  fields?: BatchCalcJobAggregateField | BatchCalcJobAggregateField[];
  groupBy?: string | string[];
  label: string;
  name: string;
  sourceName: string;
}

export interface BatchCalcJobAbstractMetadataValue extends DpeToRecipeTranslateAbstractMetadataValue {}

export interface DpeToRecipeTranslateAbstractMetadataValue {}

export interface BatchCalcJobCustomNode extends BatchCalcJobAbstractMetadataValue {
  description?: string;
  extensionName: string;
  extensionNamespace: string;
  label: string;
  name: string;
  parameters?: BatchCalcJobCustomNodeParameter | BatchCalcJobCustomNodeParameter[];
  sources?: string | string[];
}

export interface BatchCalcJobCustomNodeParameter {
  name: string;
  value?: string;
}

export interface BatchCalcJobDatasource extends BatchCalcJobAbstractMetadataValue {
  description?: string;
  fields?: BatchCalcJobDatasourceField | BatchCalcJobDatasourceField[];
  label: string;
  name: string;
  sourceName: string;
  type: BatchCalcJobDatasourceType;
}

export interface BatchCalcJobDatasourceField {
  alias?: string;
  name: string;
}

export interface BatchCalcJobFilter extends BatchCalcJobAbstractMetadataValue {
  criteria?: BatchCalcJobFilterCriteria | BatchCalcJobFilterCriteria[];
  description?: string;
  filterCondition?: string;
  filterParameterName?: string;
  isDynamicFilter?: boolean;
  label: string;
  name: string;
  sourceName: string;
}

export interface BatchCalcJobFilterCriteria {
  inputVariable?: string;
  operator: BatchCalcJobFilterOperator;
  sequence: number;
  sourceFieldName: string;
  value?: string;
}

export interface BatchCalcJobForecast extends BatchCalcJobAbstractMetadataValue {
  accuracyPercent?: BatchCalcJobFrcstAccuracy;
  aggregationFields?: BtchCalcJobFrcstAggrFld | BtchCalcJobFrcstAggrFld[];
  dateFieldName: string;
  description?: string;
  forecastModelType?: BatchCalcJobFrcstModel;
  forecastPeriodCount?: number;
  forecastPeriodType: BatchCalcJobFrcstPeriodType;
  groupFields?: BatchCalcJobFrcstGrpFld | BatchCalcJobFrcstGrpFld[];
  label: string;
  name: string;
  periodStartDateName: string;
  seasonality?: BatchCalcJobFrcstSeasonality;
  shouldExcludeLastPeriod?: boolean;
  sourceName: string;
}

export interface BtchCalcJobFrcstAggrFld {
  aggregateFunction: BatchCalcJobAggregateFunction;
  aggregationResultLabel: string;
  fieldName: string;
}

export interface BatchCalcJobFrcstGrpFld {
  fieldName: string;
  groupBy?: string;
}

export interface BatchCalcJobHierarchyPath extends BatchCalcJobAbstractMetadataValue {
  description?: string;
  hierarchyFieldName: string;
  isSelfFieldValueIncluded?: boolean;
  label: string;
  name: string;
  parentFieldName: string;
  selfFieldName: string;
  sourceName: string;
}

export interface BatchCalcJobParameter extends BatchCalcJobAbstractMetadataValue {
  dataType: BatchCalcJobParameterDataType;
  defaultValue?: string;
  description?: string;
  isMultiValue: boolean;
  label: string;
  name: string;
}

export interface BatchCalcJobSourceJoin extends BatchCalcJobAbstractMetadataValue {
  description?: string;
  fields?: BatchCalcJobJoinResultField | BatchCalcJobJoinResultField[];
  joinKeys?: BatchCalcJobJoinKey | BatchCalcJobJoinKey[];
  label: string;
  name: string;
  primarySourceName: string;
  secondarySourceName: string;
  type: BatchCalcJobSourceJoinType;
}

export interface BatchCalcJobJoinResultField {
  alias: string;
  sourceFieldName: string;
  sourceName: string;
}

export interface BatchCalcJobJoinKey {
  primarySourceFieldName: string;
  secondarySourceFieldName: string;
}

export interface BatchCalcJobTransform extends BatchCalcJobAbstractMetadataValue {
  description?: string;
  droppedFields?: BatchCalcJobTransformDroppedField | BatchCalcJobTransformDroppedField[];
  expressionFields?: BatchCalcJobTransformAddedField | BatchCalcJobTransformAddedField[];
  label: string;
  name: string;
  orderBy?: BatchCalcJobOrderByField | BatchCalcJobOrderByField[];
  partitionBy?: string | string[];
  sourceName: string;
  transformationType: BatchCalcJobTransformType;
}

export interface BatchCalcJobTransformDroppedField {
  sourceFieldName: string;
}

export interface BatchCalcJobTransformAddedField {
  alias: string;
  dataType: BatchCalcJobDataType;
  decimalPlaces?: number;
  expression: string;
  length?: number;
}

export interface BatchCalcJobOrderByField {
  name: string;
  orderType: BatchCalcJobOrderType;
}

export interface BatchCalcJobUnion extends BatchCalcJobAbstractMetadataValue {
  description?: string;
  isDisjointedSchema?: boolean;
  label: string;
  name: string;
  sources?: string | string[];
}

export interface BatchCalcJobWritebackObject extends BatchCalcJobAbstractMetadataValue {
  description?: string;
  fields?: BatchCalcJobWritebackMapping | BatchCalcJobWritebackMapping[];
  filterCondition?: string;
  folderName?: string;
  isChangedRow?: boolean;
  label: string;
  name: string;
  operationType?: BatchCalcJobWritebackOpn;
  sharingInheritanceObjectName?: string;
  sourceName: string;
  storageType?: BatchCalcJobWritebackType;
  targetObjectName: string;
  writebackRecordMaxLimit?: number;
  writebackSequence?: number;
  writebackUser?: string;
}

export interface BatchCalcJobWritebackMapping {
  parentName?: string;
  relationshipName?: string;
  runtimeParameter?: boolean;
  sourceFieldName: string;
  targetFieldName?: string;
}

export interface BatchCalcJobAggregateField {
  aggregateFunction: BatchCalcJobAggregateFunction;
  alias: string;
  sourceFieldName: string;
}

export interface BatchProcessJobDefinition extends Metadata {
  batchSize: number;
  dataSource: BatchDataSource;
  description?: string;
  executionProcessApiName?: string;
  flowApiName?: string;
  flowInputVariable?: string;
  masterLabel: string;
  processGroup: string;
  retryCount: number;
  retryInterval: number;
  status?: string;
  type?: string;
}

export interface BatchDataSource {
  condition: string;
  criteria?: string;
  filters?: BatchDataSrcFilterCriteria | BatchDataSrcFilterCriteria[];
  sourceObject: string;
  sourceObjectField?: string;
}

export interface BatchDataSrcFilterCriteria {
  dynamicValue: boolean;
  dynamicValueType?: string;
  fieldName: string;
  fieldValue: string;
  operator: string;
  sequenceNo: number;
}

export interface BenefitAction extends Metadata {
  benefitActionParameters?: BenefitActionParameter | BenefitActionParameter[];
  description?: string;
  flowDefinition?: string;
  isActive: boolean;
  isBenefitExpirationAllowed?: boolean;
  isBenefitUpdateAllowed?: boolean;
  masterLabel: string;
  memberBenefitVariableName?: string;
  processType: string;
  type: string;
}

export interface BenefitActionParameter {
  dataType: BenefitActionDataType;
  masterLabel: string;
  name?: string;
  objectName?: string;
  parameterValues?: BenefitActionParameterValue | BenefitActionParameterValue[];
  picklistName?: string;
}

export interface BenefitActionParameterValue {
  parameterValue: string;
}

export interface BlacklistedConsumer extends Metadata {
  blockedByApiWhitelisting: boolean;
  consumerKey: string;
  consumerName: string;
  masterLabel: string;
}

export interface BldgEnrgyIntensityCnfg extends Metadata {
  buildingEnergyIntensityType: BuildingEnergyIntensityType;
  recordType: string;
}

export interface BlockchainSettings extends Metadata {
  enableBcp?: boolean;
  enableEtpNft?: boolean;
}

export interface Bot extends Metadata {
  botMlDomain?: LocalMlDomain;
  botUser?: string;
  botVersions?: BotVersion | BotVersion[];
  contextVariables?: ConversationContextVariable | ConversationContextVariable[];
  conversationChannelProviders?: ConversationDefinitionChannelProvider | ConversationDefinitionChannelProvider[];
  defaultOutboundFlow?: string;
  description?: string;
  iconUrl?: string;
  label?: string;
  logPrivateConversationData?: boolean;
  richContentEnabled?: boolean;
  sessionTimeout?: number;
}

export interface LocalMlDomain {
  label: string;
  mlIntents?: MlIntent | MlIntent[];
  mlSlotClasses?: MlSlotClass | MlSlotClass[];
  name: string;
}

export interface MlIntent {
  description?: string;
  developerName: string;
  label: string;
  mlIntentUtterances?: MlIntentUtterance | MlIntentUtterance[];
  relatedMlIntents?: MlRelatedIntent | MlRelatedIntent[];
}

export interface MlIntentUtterance {
  language?: Language;
  utterance: string;
}

export interface MlRelatedIntent {
  relatedMlIntent: string;
}

export interface MlSlotClass {
  dataType: MlSlotClassDataType;
  description?: string;
  developerName: string;
  extractionRegex?: string;
  extractionType?: MlSlotClassExtractionType;
  label: string;
  mlSlotClassValues?: MlSlotClassValue | MlSlotClassValue[];
}

export interface MlSlotClassValue {
  synonymGroup?: SynonymGroup;
  synonymGroups?: SynonymGroup | SynonymGroup[];
  value: string;
}

export interface SynonymGroup {
  languages?: Language | Language[];
  terms?: string | string[];
}

export interface BotVersion extends Metadata {
  articleAnswersGPTEnabled?: boolean;
  botDialogGroups?: BotDialogGroup | BotDialogGroup[];
  botDialogs?: BotDialog | BotDialog[];
  citationsEnabled?: boolean;
  conversationGoals?: ConversationDefinitionGoal | ConversationDefinitionGoal[];
  conversationSystemDialogs?: ConversationSystemDialog | ConversationSystemDialog[];
  conversationVariables?: ConversationVariable | ConversationVariable[];
  entryDialog: string;
  intentDisambiguationEnabled?: boolean;
  intentV3Enabled?: boolean;
  knowledgeFallbackEnabled?: boolean;
  mainMenuDialog: string;
  nlpProviders?: ConversationDefinitionNlpProvider | ConversationDefinitionNlpProvider[];
  responseDelayMilliseconds?: number;
  smallTalkEnabled?: boolean;
}

export interface BotDialogGroup {
  description?: string;
  developerName: string;
  label: string;
}

export interface BotDialog {
  botDialogGroup?: string;
  botSteps?: BotStep | BotStep[];
  description?: string;
  developerName: string;
  isPlaceholderDialog?: boolean;
  label: string;
  mlIntent?: string;
  mlIntentTrainingEnabled?: boolean;
  showInFooterMenu?: boolean;
}

export interface BotStep {
  booleanFilter?: string;
  botInvocation?: BotInvocation;
  botMessages?: BotMessage | BotMessage[];
  botNavigation?: BotNavigation;
  botStepConditions?: BotStepCondition | BotStepCondition[];
  botSteps?: BotStep | BotStep[];
  botVariableOperation?: BotVariableOperation;
  conditionLogicType?: ConversationDefinitionLogicalOperatorType;
  conversationRecordLookup?: ConversationRecordLookup;
  conversationStepGoalMappings?: ConversationDefinitionStepGoalMapping | ConversationDefinitionStepGoalMapping[];
  conversationSystemMessage?: ConversationSystemMessage;
  messageDefinition?: ConversationDefinitionRichMessage;
  stepIdentifier?: string;
  type: BotStepType;
}

export interface BotInvocation {
  invocationActionName?: string;
  invocationActionType?: ConversationInvocableTargetType;
  invocationMappings?: BotInvocationMapping | BotInvocationMapping[];
}

export interface BotInvocationMapping {
  parameterName: string;
  recordName?: string;
  type: BotInvocationMappingType;
  value?: string;
  variableName?: string;
  variableType?: ConversationVariableType;
}

export interface BotMessage {
  message: string;
  messageIdentifier?: string;
}

export interface BotNavigation {
  botNavigationLinks?: BotNavigationLink | BotNavigationLink[];
  type: BotNavigationType;
}

export interface BotNavigationLink {
  label?: string;
  targetBotDialog?: string;
  targetVariable?: string;
  targetVariableType?: ConversationVariableType;
}

export interface BotStepCondition {
  leftOperandName: string;
  leftOperandType: ConversationVariableType;
  operatorType: BotStepConditionOperatorType;
  rightOperandValue?: string;
}

export interface BotVariableOperation {
  askCollectIfSet?: boolean;
  autoSelectIfSingleChoice?: boolean;
  botInvocation?: BotInvocation;
  botMessages?: BotMessage | BotMessage[];
  botQuickReplyOptions?: BotQuickReplyOption | BotQuickReplyOption[];
  botVariableOperands?: BotVariableOperand | BotVariableOperand[];
  invalidInputBotNavigation?: BotNavigation;
  messageDefinition?: ConversationDefinitionRichMessage;
  optionalCollect?: boolean;
  quickReplyOptionTemplate?: string;
  quickReplyType?: BotQuickReplyType;
  quickReplyWidgetType?: BotWidgetType;
  retryMessages?: BotMessage | BotMessage[];
  sourceVariableName?: string;
  sourceVariableType?: ConversationVariableType;
  successMessages?: BotMessage | BotMessage[];
  type: BotVariableOperationType;
  variableOperationIdentifier?: string;
}

export interface BotQuickReplyOption {
  literalValue: string;
  quickReplyOptionIdentifier?: string;
}

export interface BotVariableOperand {
  disableAutoFill?: boolean;
  sourceName?: string;
  sourceType?: ConversationVariableOperandSourceType;
  sourceValue?: string;
  targetName: string;
  targetType: ConversationVariableType;
}

export interface ConversationDefinitionRichMessage {
  executionType?: ConversationMessageExecutionType;
  messageDefinitionMappings?: BotInvocationMapping | BotInvocationMapping[];
  messageDefinitionName: string;
}

export interface ConversationRecordLookup {
  SObjectType: string;
  conditions?: ConversationRecordLookupCondition | ConversationRecordLookupCondition[];
  filterLogic?: string;
  lookupFields?: ConversationRecordLookupField | ConversationRecordLookupField[];
  maxLookupResults: number;
  sortFieldName?: string;
  sortOrder?: SortOrder;
  sourceVariableName?: string;
  sourceVariableType?: ConversationVariableType;
  targetVariableName: string;
}

export interface ConversationRecordLookupCondition {
  leftOperand: string;
  operatorType: string;
  rightOperandName?: string;
  rightOperandType?: ConversationVariableType;
  rightOperandValue?: string;
  sortOrder: number;
}

export interface ConversationRecordLookupField {
  fieldName: string;
}

export interface ConversationDefinitionStepGoalMapping {
  goalName: string;
}

export interface ConversationSystemMessage {
  systemMessageMappings?: ConversationSystemMessageMapping | ConversationSystemMessageMapping[];
  type: ConversationSystemMessageType;
}

export interface ConversationSystemMessageMapping {
  mappingType: ConversationMappingType;
  parameterType: ConversationSystemMessageParamType;
  variableName: string;
}

export interface ConversationDefinitionGoal {
  developerName: string;
  label: string;
}

export interface ConversationSystemDialog {
  dialog: string;
  type: ConversationSystemDialogType;
}

export interface ConversationVariable {
  SObjectType?: string;
  collectionType?: ConversationVariableCollectionType;
  dataType: ConversationDataType;
  developerName: string;
  label: string;
}

export interface ConversationDefinitionNlpProvider {
  language?: Language;
  nlpProviderName?: string;
  nlpProviderType: ConversationDefinitionNlpProviderType;
}

export interface ConversationContextVariable {
  SObjectType?: string;
  contextVariableMappings?: ConversationContextVariableMapping | ConversationContextVariableMapping[];
  dataType: ConversationDataType;
  developerName: string;
  label: string;
}

export interface ConversationContextVariableMapping {
  SObjectType: string;
  fieldName: string;
  messageType: MessageType;
}

export interface ConversationDefinitionChannelProvider {
  agentRequired?: boolean;
  chatButtonName: string;
}

export interface BotBlock extends Metadata {
  botBlockVersions?: BotBlockVersion | BotBlockVersion[];
  description?: string;
  icon?: string;
  masterLabel: string;
  richContentEnabled?: boolean;
}

export interface BotBlockVersion extends Metadata {
  botDialogs?: BotDialog | BotDialog[];
  conversationGoals?: ConversationDefinitionGoal | ConversationDefinitionGoal[];
  conversationLanguages: string;
  conversationVariables?: ConversationVariable | ConversationVariable[];
  description?: string;
  mlDomain: LocalMlDomain;
  permissionSet?: string;
  status: ConvDefBlockVersionStatus;
}

export interface BotSettings extends Metadata {
  enableBots?: boolean;
}

export interface BotTemplate extends Metadata {
  botDialogGroups?: BotDialogGroup | BotDialogGroup[];
  botDialogs?: BotDialog | BotDialog[];
  contextVariables?: ConversationContextVariable | ConversationContextVariable[];
  conversationGoals?: ConversationDefinitionGoal | ConversationDefinitionGoal[];
  conversationLanguages: string;
  conversationSystemDialogs?: ConversationSystemDialog | ConversationSystemDialog[];
  conversationVariables?: ConversationVariable | ConversationVariable[];
  description?: string;
  entryDialog?: string;
  icon?: string;
  mainMenuDialog?: string;
  masterLabel: string;
  mlDomain?: LocalMlDomain;
  permissionSet?: string;
  richContentEnabled?: boolean;
}

export interface BrandingSet extends Metadata {
  brandingSetProperty?: BrandingSetProperty | BrandingSetProperty[];
  description?: string;
  masterLabel: string;
  type?: string;
}

export interface BrandingSetProperty {
  propertyName: string;
  propertyValue?: string;
}

export interface BriefcaseDefinition extends Metadata {
  briefcaseRules?: BriefcaseRule | BriefcaseRule[];
  description?: string;
  isActive: boolean;
  masterLabel: string;
  type?: BriefcaseType;
}

export interface BriefcaseRule {
  briefcaseRuleFilters?: BriefcaseRuleFilter | BriefcaseRuleFilter[];
  filterLogic?: string;
  isAscendingOrder?: boolean;
  orderBy?: string;
  queryScope?: FilterScope;
  recordLimit?: number;
  relatedRules?: BriefcaseRule | BriefcaseRule[];
  relationshipField?: string;
  relationshipType?: BriefcaseRuleRelationshipType;
  targetEntity: string;
}

export interface BriefcaseRuleFilter {
  filterOperator: BriefcaseFilterOperator;
  filterSeqNumber: number;
  filterValue?: string;
  targetEntityField: string;
}

export interface BusinessHoursEntry extends Metadata {
  active?: boolean;
  default: boolean;
  fridayEndTime?: Date;
  fridayStartTime?: Date;
  mondayEndTime?: Date;
  mondayStartTime?: Date;
  name?: string;
  saturdayEndTime?: Date;
  saturdayStartTime?: Date;
  sundayEndTime?: Date;
  sundayStartTime?: Date;
  thursdayEndTime?: Date;
  thursdayStartTime?: Date;
  timeZoneId?: string;
  tuesdayEndTime?: Date;
  tuesdayStartTime?: Date;
  wednesdayEndTime?: Date;
  wednesdayStartTime?: Date;
}

export interface BusinessHoursSettings extends Metadata {
  businessHours?: BusinessHoursEntry | BusinessHoursEntry[];
  holidays?: Holiday | Holiday[];
}

export interface Holiday {
  activityDate?: Date;
  businessHours?: string | string[];
  description?: string;
  endTime?: Date;
  isRecurring?: boolean;
  name?: string;
  recurrenceDayOfMonth?: number;
  recurrenceDayOfWeek?: string | string[];
  recurrenceDayOfWeekMask?: number;
  recurrenceEndDate?: Date;
  recurrenceInstance?: string;
  recurrenceInterval?: number;
  recurrenceMonthOfYear?: string;
  recurrenceStartDate?: Date;
  recurrenceType?: string;
  startTime?: Date;
}

export interface BusinessProcess extends Metadata {
  description?: string;
  isActive?: boolean;
  values?: PicklistValue | PicklistValue[];
}

export interface PicklistValue extends Metadata {
  color?: string;
  default: boolean;
  description?: string;
  isActive?: boolean;
  allowEmail?: boolean;
  closed?: boolean;
  controllingFieldValues?: string | string[];
  converted?: boolean;
  cssExposed?: boolean;
  forecastCategory?: ForecastCategories;
  highPriority?: boolean;
  probability?: number;
  reverseRole?: string;
  reviewed?: boolean;
  won?: boolean;
}

export interface GlobalPicklistValue extends Metadata {
  color?: string;
  default: boolean;
  description?: string;
  isActive?: boolean;
}

export interface BusinessProcessGroup extends Metadata {
  businessProcessDefinitions?: BusinessProcessDefinition | BusinessProcessDefinition[];
  customerSatisfactionMetric: SurveyQuestionType;
  description?: string;
  masterLabel: string;
}

export interface BusinessProcessDefinition {
  businessProcessFeedbacks?: BusinessProcessFeedback | BusinessProcessFeedback[];
  description?: string;
  developerName: string;
  masterLabel: string;
  sequenceNumber: number;
}

export interface BusinessProcessFeedback {
  actionName: string;
  actionParam: string;
  actionType: ExpFeedbackCollType;
}

export interface BusinessProcessTypeDefinition extends Metadata {
  applicationUsageType: AppDomainUsageType;
  description?: string;
  masterLabel: string;
}

export interface CMSConnectSource extends Metadata {
  cmsConnectAsset?: CMSConnectAsset | CMSConnectAsset[];
  cmsConnectLanguage?: CMSConnectLanguage | CMSConnectLanguage[];
  cmsConnectPersonalization?: CMSConnectPersonalization;
  cmsConnectResourceType?: CMSConnectResourceType | CMSConnectResourceType[];
  connectionType: CMSSourceConnectionType;
  cssScope?: string;
  developerName: string;
  languageEnabled?: string;
  masterLabel: string;
  namedCredential?: string;
  personalizationEnabled?: string;
  rootPath?: string;
  sortOrder: number;
  status: CMSConnectionStatus;
  type: CMSConnectionSourceType;
  websiteUrl?: string;
}

export interface CMSConnectAsset {
  assetPath: string;
  assetType: string;
  sortOrder: number;
}

export interface CMSConnectLanguage {
  cmsLanguage: string;
  language: string;
}

export interface CMSConnectPersonalization {
  connectorPage: string;
  connectorPageAsset: string;
}

export interface CMSConnectResourceType {
  cmsConnectResourceDefinition?: CMSConnectResourceDefinition | CMSConnectResourceDefinition[];
  developerName: string;
  masterLabel: string;
  resourceType: string;
}

export interface CMSConnectResourceDefinition {
  developerName: string;
  masterLabel: string;
  options: number;
  payloadType: string;
  resourceIdPath?: string;
  resourceNamePath?: string;
  resourcePath: string;
  rootNodePath?: string;
}

export interface CallCenter extends Metadata {
  adapterUrl?: string;
  contactCenterChannels?: ContactCenterChannel | ContactCenterChannel[];
  customSettings?: string;
  displayName: string;
  displayNameLabel: string;
  internalNameLabel: string;
  sections?: CallCenterSection | CallCenterSection[];
  vendorCallCenterStatusMaps?: VendorCallCenterStatusMap | VendorCallCenterStatusMap[];
  version?: string;
}

export interface ContactCenterChannel {
  channel: string;
}

export interface CallCenterSection {
  items?: CallCenterItem | CallCenterItem[];
  label: string;
  name: string;
}

export interface CallCenterItem {
  label: string;
  name: string;
  value: string;
}

export interface VendorCallCenterStatusMap {
  externalStatus: string;
  servicePresenceStatus: string;
}

export interface CallCenterRoutingMap extends Metadata {
  callCenter: string;
  developerName: string;
  externalId: string;
  masterLabel: string;
  quickConnect?: string;
  referenceRecord: string;
}

export interface CallCoachingMediaProvider extends Metadata {
  isActive: boolean;
  providerDescription: string;
  providerName: string;
}

export interface CallCtrAgentFavTrfrDest extends Metadata {
  agent: string;
  callCenter: string;
  name: string;
  transferDestination: string;
}

export interface CampaignInfluenceModel extends Metadata {
  isActive?: boolean;
  isDefaultModel: boolean;
  isModelLocked: boolean;
  modelDescription?: string;
  name: string;
  recordPreference?: string;
}

export interface CampaignSettings extends Metadata {
  aiAttributionTimeframe?: number;
  enableAIAttribution?: boolean;
  enableAccountsAsCM?: boolean;
  enableAutoCampInfluenceDisabled?: boolean;
  enableB2bmaCampaignInfluence2?: boolean;
  enableCampaignHistoryTrackEnabled?: boolean;
  enableCampaignInfluence2?: boolean;
  enableCampaignMemberTWCF?: boolean;
  enableEKAI?: boolean;
  enableSuppressNoValueCI2?: boolean;
}

export interface CampaignTemplateDefinition extends Metadata {
  description: string;
  developerName: string;
  masterLabel: string;
}

export interface CanvasMetadata extends Metadata {
  accessMethod: string;
  canvasOptions?: string;
  canvasUrl: string;
  lifecycleClass?: string;
  locationOptions?: string;
  samlInitiationMethod?: string;
}

export interface CareBenefitVerifySettings extends Metadata {
  codeSetType?: string;
  defaultNpi?: string;
  generalPlanServiceTypeCode?: string;
  isDefault?: boolean;
  masterLabel: string;
  organizationName?: string;
  serviceApexClass?: string;
  serviceNamedCredential?: string;
  serviceTypeSourceSystem?: string;
  uriPath?: string;
}

export interface CareRequestConfiguration extends Metadata {
  careRequestRecordType: string;
  careRequestRecords?: CareRequestRecords | CareRequestRecords[];
  careRequestType: string;
  isActive?: boolean;
  isDefaultRecordType?: boolean;
  masterLabel: string;
}

export interface CareRequestRecords {
  careRequestRecord: string;
}

export interface CaseSettings extends Metadata {
  caseAssignNotificationTemplate?: string;
  caseAutoProcUser?: boolean;
  caseCloseNotificationTemplate?: string;
  caseCommentNotificationTemplate?: string;
  caseCreateNotificationTemplate?: string;
  caseFeedItemSettings?: FeedItemSettings | FeedItemSettings[];
  caseFeedReadUnreadLtng?: boolean;
  caseMergeInLightning?: boolean;
  closeCaseThroughStatusChange?: boolean;
  defaultCaseFeedLayoutOn?: boolean;
  defaultCaseOwner?: string;
  defaultCaseOwnerType?: string;
  defaultCaseUser?: string;
  emailActionDefaultsHandlerClass?: string;
  emailToCase?: EmailToCaseSettings;
  enableCaseFeed?: boolean;
  enableCaseSwarming?: boolean;
  enableCollapseEmailThread?: boolean;
  enableDraftEmails?: boolean;
  enableEarlyEscalationRuleTriggers?: boolean;
  enableEmailActionDefaultsHandler?: boolean;
  enableEmailContactOnCasePost?: boolean;
  enableEscalateQfiToCaseInternal?: boolean;
  enableEscalateQfiToCaseNetworks?: boolean;
  enableExtNetworksCaseFeedEnabled?: boolean;
  enableMultiLangSolnSrchCSS?: boolean;
  enableMultiLangSolnSrchPKB?: boolean;
  enableMultiLangSolution?: boolean;
  enableSolutionCategory?: boolean;
  enableSolutionInlineCategory?: boolean;
  enableSolutionShortSummary?: boolean;
  enableSuggestedArticlesApplication?: boolean;
  enableSuggestedArticlesCustomerPortal?: boolean;
  enableSuggestedArticlesPartnerPortal?: boolean;
  enableSuggestedSolutions?: boolean;
  escalateCaseBefore?: boolean;
  genericMessageEnabled?: boolean;
  keepCaseMergeRecords?: boolean;
  keepRecordTypeOnAssignmentRule?: boolean;
  notifyContactOnCaseComment?: boolean;
  notifyDefaultCaseOwner?: boolean;
  notifyOwnerOnCaseComment?: boolean;
  notifyOwnerOnCaseOwnerChange?: boolean;
  predictiveSupportEnabled?: boolean;
  showEmailAttachmentsInCaseAttachmentsRL?: boolean;
  showFewerCloseActions?: boolean;
  systemUserEmail?: string;
  useSystemEmailAddress?: boolean;
  useSystemUserAsDefaultCaseUser?: boolean;
  visibleInCssCheckbox?: boolean;
  webToCase?: WebToCaseSettings;
}

export interface FeedItemSettings {
  characterLimit?: number;
  displayFormat?: FeedItemDisplayFormat;
  feedItemType: FeedItemType;
}

export interface EmailToCaseSettings {
  enableE2CAttachmentAsFile?: boolean;
  enableE2CSourceTracking?: boolean;
  enableEmailToCase?: boolean;
  enableHtmlEmail?: boolean;
  enableOnDemandEmailToCase?: boolean;
  enableThreadIDInBody?: boolean;
  enableThreadIDInSubject?: boolean;
  notifyOwnerOnNewCaseEmail?: boolean;
  overEmailLimitAction?: EmailToCaseOnFailureActionType;
  preQuoteSignature?: boolean;
  routingAddresses?: EmailToCaseRoutingAddress | EmailToCaseRoutingAddress[];
  unauthorizedSenderAction?: EmailToCaseOnFailureActionType;
}

export interface EmailToCaseRoutingAddress {
  addressType?: EmailToCaseRoutingAddressType;
  authorizedSenders?: string;
  caseOrigin?: string;
  caseOwner?: string;
  caseOwnerType?: string;
  casePriority?: string;
  createTask?: boolean;
  emailAddress?: string;
  emailServicesAddress?: string;
  fallbackQueue?: string;
  isVerified?: boolean;
  routingFlow?: string;
  routingName?: string;
  saveEmailHeaders?: boolean;
  taskStatus?: string;
}

export interface WebToCaseSettings {
  caseOrigin?: string;
  defaultResponseTemplate?: string;
  enableWebToCase?: boolean;
}

export interface CaseSubjectParticle extends Metadata {
  index: number;
  textField?: string;
  type: CaseSubjectParticleType;
}

export interface ChannelLayout extends Metadata {
  doesExcludeFieldLabels?: boolean;
  doesExcludeFiles?: boolean;
  enabledChannels?: string | string[];
  label: string;
  layoutItems?: ChannelLayoutItem | ChannelLayoutItem[];
  recordType?: string;
}

export interface ChannelLayoutItem {
  field: string;
}

export interface ChannelObjectLinkingRule extends Metadata {
  actionForNoRecordFound: ActionForNoRecordFound;
  actionForSingleRecordFound: ActionForSingleRecordFound;
  channelType: ChannelType;
  description?: string;
  isLinkedRecordOpenedAsSubTab: boolean;
  isRuleActive: boolean;
  masterLabel: string;
  objectToLink: ObjectToLink;
  ruleName: string;
}

export interface ChatterAnswersSettings extends Metadata {
  emailFollowersOnBestAnswer?: boolean;
  emailFollowersOnReply?: boolean;
  emailOwnerOnPrivateReply?: boolean;
  emailOwnerOnReply?: boolean;
  enableAnswerViaEmail?: boolean;
  enableChatterAnswers: boolean;
  enableFacebookSSO?: boolean;
  enableInlinePublisher?: boolean;
  enableReputation?: boolean;
  enableRichTextEditor?: boolean;
  facebookAuthProvider?: string;
  showInPortals?: boolean;
}

export interface ChatterEmailsMDSettings extends Metadata {
  enableChatterDigestEmailsApiOnly?: boolean;
  enableChatterEmailAttachment?: boolean;
  enableCollaborationEmail?: boolean;
  enableDisplayAppDownloadBadges?: boolean;
  enableEmailReplyToChatter?: boolean;
  enableEmailToChatter?: boolean;
  noQnOwnNotifyOnCaseCmt?: boolean;
  noQnOwnNotifyOnRep?: boolean;
  noQnSubNotifyOnBestR?: boolean;
  noQnSubNotifyOnRep?: boolean;
}

export interface ChatterExtension extends Metadata {
  compositionComponent: string;
  description: string;
  extensionName: string;
  headerText?: string;
  hoverText?: string;
  icon: string;
  isProtected?: boolean;
  masterLabel: string;
  renderComponent: string;
  type: ChatterExtensionType;
}

export interface ChatterSettings extends Metadata {
  allowChatterGroupArchiving?: boolean;
  allowRecordsInChatterGroup?: boolean;
  enableApprovalRequest?: boolean;
  enableCaseFeedRelativeTimestamps?: boolean;
  enableChatter?: boolean;
  enableChatterEmoticons?: boolean;
  enableFeedEdit?: boolean;
  enableFeedPinning?: boolean;
  enableFeedsDraftPosts?: boolean;
  enableFeedsRichText?: boolean;
  enableInviteCsnUsers?: boolean;
  enableOutOfOfficeEnabledPref?: boolean;
  enableRichLinkPreviewsInFeed?: boolean;
  enableTodayRecsInFeed?: boolean;
  unlistedGroupsEnabled?: boolean;
}

export interface ClaimFinancialSettings extends Metadata {
  claimCovPendingAuthStatus: string;
  claimPendingAuthorityStatus: string;
  clmCovPymtDtlPendAuthSts: string;
  masterLabel: string;
}

export interface ClauseCatgConfiguration extends Metadata {
  description?: string;
  isProtected?: boolean;
  masterLabel: string;
  usageType: ClmCategoryUsageType;
}

export interface CleanDataService extends Metadata {
  cleanRules?: CleanRule | CleanRule[];
  description: string;
  masterLabel: string;
  matchEngine: string;
}

export interface CleanRule {
  bulkEnabled: boolean;
  bypassTriggers: boolean;
  bypassWorkflow: boolean;
  description: string;
  developerName: string;
  fieldMappings?: FieldMapping | FieldMapping[];
  masterLabel: string;
  matchRule: string;
  sourceSobjectType: string;
  status: CleanRuleStatus;
  targetSobjectType: string;
}

export interface FieldMapping {
  SObjectType: string;
  developerName: string;
  fieldMappingRows?: FieldMappingRow | FieldMappingRow[];
  masterLabel: string;
}

export interface FieldMappingRow {
  SObjectType: string;
  fieldMappingFields?: FieldMappingField | FieldMappingField[];
  fieldName: string;
  mappingOperation: MappingOperation;
}

export interface FieldMappingField {
  dataServiceField: string;
  dataServiceObjectName: string;
  priority: number;
}

export interface CloudServiceProvider extends Metadata {
  authParams: string;
  authType: AuthType;
  baseApiUrl: string;
  cloudServiceProviderApis?: CloudServiceProviderApi | CloudServiceProviderApi[];
  externalId: string;
  name: string;
  provisioningAutomationType?: ProvisioningAutomationType;
  sendAggregatedLicenseInfo?: boolean;
  sendAggregatedLicenses?: boolean;
  sendLicenseInfo?: boolean;
  sendTenantChange?: boolean;
  sendTenantUsage?: boolean;
  shouldIncludeOrderItems?: boolean;
  usageAggregateServiceUser?: string;
}

export interface CloudServiceProviderApi {
  cloudServiceProviderApiType: CloudServiceProviderApiType;
  name: string;
  version: number;
}

export interface CommandAction extends Metadata {
  actionType: string;
  description?: string;
  intents?: CommandActionIntent | CommandActionIntent[];
  label: string;
  parameters?: CommandActionParam | CommandActionParam[];
  responseTemplates?: CommandActionResponse | CommandActionResponse[];
  target?: string;
}

export interface CommandActionIntent {
  phrase: string;
  responseTemplates?: CommandActionResponse | CommandActionResponse[];
}

export interface CommandActionResponse {
  template: string;
}

export interface CommandActionParam {
  defaultValue?: string;
  description?: string;
  name: string;
  required?: boolean;
  type: string;
}

export interface CommerceSettings extends Metadata {
  commerceEnabled?: boolean;
  lowestUnitPriceTracking?: boolean;
}

export interface CommsServiceConsoleSettings extends Metadata {
  enableCommsServiceConsole?: boolean;
}

export interface CommunitiesSettings extends Metadata {
  applyLoginPageTypeToEmbeddedLogin?: boolean;
  blockEmbeddedLoginUnknownURLRedirect?: boolean;
  canModerateAllFeedPosts?: boolean;
  canModerateInternalFeedPosts?: boolean;
  embeddedVisualforcePages?: boolean;
  enableCommunityWorkspaces?: boolean;
  enableCspContactVisibilityPref?: boolean;
  enableCspNotesOnAccConPref?: boolean;
  enableEnablePRM?: boolean;
  enableExternalAccHierPref?: boolean;
  enableGuestPermDisOptOutCruc?: boolean;
  enableGuestRecordReassignOrgPref?: boolean;
  enableGuestSecurityOptOutCruc?: boolean;
  enableGuvSecurityOptOutPref?: boolean;
  enableInviteChatterGuestEnabled?: boolean;
  enableNameFieldsUserPIIEnabled?: boolean;
  enableNetPortalUserReportOpts?: boolean;
  enableNetworksEnabled?: boolean;
  enableOotbProfExtUserOpsEnable?: boolean;
  enablePRMAccRelPref?: boolean;
  enablePowerCustomerCaseStatus?: boolean;
  enablePreventBadgeGuestAccess?: boolean;
  enableRelaxPartnerAccountFieldPref?: boolean;
  enableUnsupportedBrowserModalPref?: boolean;
  enableUsernameUniqForOrgPref?: boolean;
}

export interface Community extends Metadata {
  active?: boolean;
  chatterAnswersFacebookSsoUrl?: string;
  communityFeedPage?: string;
  dataCategoryName?: string;
  description?: string;
  emailFooterDocument?: string;
  emailHeaderDocument?: string;
  emailNotificationUrl?: string;
  enableChatterAnswers?: boolean;
  enablePrivateQuestions?: boolean;
  expertsGroup?: string;
  portal?: string;
  reputationLevels?: ReputationLevels;
  showInPortal?: boolean;
  site?: string;
}

export interface ReputationLevels {
  chatterAnswersReputationLevels?: ChatterAnswersReputationLevel | ChatterAnswersReputationLevel[];
  ideaReputationLevels?: IdeaReputationLevel | IdeaReputationLevel[];
}

export interface ChatterAnswersReputationLevel {
  name: string;
  value: number;
}

export interface IdeaReputationLevel {
  name: string;
  value: number;
}

export interface CommunityAIModelMapping extends Metadata {
  modelContent: string;
  modelEntityType: ModelEntityType;
  modelStatus: ModelStatus;
  name: string;
  networkId?: string;
  setupDefinition?: string;
}

export interface CommunityTemplateDefinition extends Metadata {
  baseTemplate?: CommunityBaseTemplate;
  bundlesInfo?: CommunityTemplateBundleInfo | CommunityTemplateBundleInfo[];
  category: CommunityTemplateCategory;
  defaultBrandingSet?: string;
  defaultThemeDefinition: string;
  description?: string;
  enableExtendedCleanUpOnDelete?: boolean;
  masterLabel: string;
  navigationLinkSet?: NavigationLinkSet | NavigationLinkSet[];
  pageSetting?: CommunityTemplatePageSetting | CommunityTemplatePageSetting[];
  publisher?: string;
}

export interface CommunityTemplateBundleInfo {
  description?: string;
  image?: string;
  order: number;
  title: string;
  type: CommunityTemplateBundleInfoType;
}

export interface CommunityThemeBundleInfo extends CommunityTemplateBundleInfo {}

export interface NavigationLinkSet {
  navigationMenuItem?: NavigationMenuItem | NavigationMenuItem[];
}

export interface NavigationMenuItem {
  defaultListViewId?: string;
  label: string;
  menuItemBranding?: NavigationMenuItemBranding;
  position: number;
  publiclyAvailable?: boolean;
  subMenu?: NavigationSubMenu;
  target?: string;
  targetPreference?: string;
  type: string;
}

export interface NavigationMenuItemBranding {
  tileImage?: string;
}

export interface NavigationSubMenu {
  navigationMenuItem?: NavigationMenuItem | NavigationMenuItem[];
}

export interface CommunityTemplatePageSetting {
  page: string;
  themeLayout: string;
}

export interface CommunityThemeDefinition extends Metadata {
  bundlesInfo?: CommunityThemeBundleInfo | CommunityThemeBundleInfo[];
  customThemeLayoutType?: CommunityCustomThemeLayoutType | CommunityCustomThemeLayoutType[];
  defaultBrandingSet?: string;
  description?: string;
  enableExtendedCleanUpOnDelete?: boolean;
  masterLabel: string;
  publisher?: string;
  themeRouteOverride?: CommunityThemeRouteOverride | CommunityThemeRouteOverride[];
  themeSetting?: CommunityThemeSetting | CommunityThemeSetting[];
}

export interface CommunityCustomThemeLayoutType {
  description?: string;
  label: string;
}

export interface CommunityThemeRouteOverride {
  customThemeLayoutType?: string;
  pageAttributes: string;
  pageType: string;
  themeLayoutType?: CommunityThemeLayoutType;
}

export interface CommunityThemeSetting {
  customThemeLayoutType?: string;
  themeLayout: string;
  themeLayoutType?: CommunityThemeLayoutType;
}

export interface CompactLayout extends Metadata {
  fields?: string | string[];
  label: string;
}

export interface CompanySettings extends Metadata {
  enableCustomFiscalYear: boolean;
  fiscalYear?: FiscalYearSettings;
}

export interface FiscalYearSettings {
  fiscalYearNameBasedOn?: string;
  startMonth?: string;
}

export interface ConnectedApp extends Metadata {
  attributes?: ConnectedAppAttribute | ConnectedAppAttribute[];
  canvas?: CanvasMetadata;
  canvasConfig?: ConnectedAppCanvasConfig;
  contactEmail: string;
  contactPhone?: string;
  description?: string;
  iconUrl?: string;
  infoUrl?: string;
  ipRanges?: ConnectedAppIpRange | ConnectedAppIpRange[];
  label: string;
  logoUrl?: string;
  mobileAppConfig?: ConnectedAppMobileDetailConfig;
  mobileStartUrl?: string;
  oauthConfig?: ConnectedAppOauthConfig;
  oauthPolicy?: ConnectedAppOauthPolicy;
  permissionSetName?: string | string[];
  plugin?: string;
  pluginExecutionUser?: string;
  profileName?: string | string[];
  samlConfig?: ConnectedAppSamlConfig;
  sessionPolicy?: ConnectedAppSessionPolicy;
  startUrl?: string;
}

export interface ConnectedAppAttribute {
  formula: string;
  key: string;
}

export interface ConnectedAppCanvasConfig {
  accessMethod: AccessMethod;
  canvasUrl: string;
  lifecycleClass?: string;
  locations?: CanvasLocationOptions | CanvasLocationOptions[];
  options?: CanvasOptions | CanvasOptions[];
  samlInitiationMethod?: SamlInitiationMethod;
}

export interface ConnectedAppIpRange {
  description?: string;
  end: string;
  start: string;
}

export interface ConnectedAppMobileDetailConfig {
  applicationBinaryFile?: string;
  applicationBinaryFileName?: string;
  applicationBundleIdentifier?: string;
  applicationFileLength?: number;
  applicationIconFile?: string;
  applicationIconFileName?: string;
  applicationInstallUrl?: string;
  devicePlatform: DevicePlatformType;
  deviceType?: DeviceType;
  minimumOsVersion?: string;
  privateApp?: boolean;
  version: string;
}

export interface ConnectedAppOauthConfig {
  assetTokenConfig?: ConnectedAppOauthAssetToken;
  callbackUrl: string;
  certificate?: string;
  consumerKey?: string;
  consumerSecret?: string;
  idTokenConfig?: ConnectedAppOauthIdToken;
  isAdminApproved?: boolean;
  isClientCredentialEnabled?: boolean;
  isCodeCredentialEnabled?: boolean;
  isCodeCredentialPostOnly?: boolean;
  isConsumerSecretOptional?: boolean;
  isIntrospectAllTokens?: boolean;
  isNamedUserJwtEnabled?: boolean;
  isPkceRequired?: boolean;
  isSecretRequiredForRefreshToken?: boolean;
  oauthClientCredentialUser?: string;
  scopes?: ConnectedAppOauthAccessScope | ConnectedAppOauthAccessScope[];
  singleLogoutUrl?: string;
}

export interface ConnectedAppOauthAssetToken {
  assetAudiences: string;
  assetIncludeAttributes: boolean;
  assetIncludeCustomPerms: boolean;
  assetSigningCertId: string;
  assetValidityPeriod: number;
}

export interface ConnectedAppOauthIdToken {
  idTokenAudience?: string;
  idTokenIncludeAttributes?: boolean;
  idTokenIncludeCustomPerms?: boolean;
  idTokenIncludeStandardClaims?: boolean;
  idTokenValidity?: number;
}

export interface ConnectedAppOauthPolicy {
  ipRelaxation: string;
  refreshTokenPolicy: string;
  singleLogoutUrl?: string;
}

export interface ConnectedAppSamlConfig {
  acsUrl: string;
  certificate?: string;
  encryptionCertificate?: string;
  encryptionType?: SamlEncryptionType;
  entityUrl: string;
  issuer?: string;
  samlIdpSLOBindingEnum?: SamlIdpSLOBinding;
  samlNameIdFormat?: SamlNameIdFormatType;
  samlSigningAlgoType?: SamlSigningAlgoType;
  samlSloUrl?: string;
  samlSubjectCustomAttr?: string;
  samlSubjectType: SamlSubjectType;
}

export interface ConnectedAppSessionPolicy {
  policyAction?: string;
  sessionLevel?: string;
  sessionTimeout?: number;
}

export interface ConnectedAppSettings extends Metadata {
  enableAdminApprovedAppsOnly?: boolean;
  enableAdminApprovedAppsOnlyForExternalUser?: boolean;
  enableSkipUserProvisioningWizardWelcomePage?: boolean;
}

export interface ConnectivityDevConfigMetadata extends Metadata {
  allowNonSubscribedNotifTypes?: boolean;
  isOauth?: boolean;
  issuer?: string;
  mobileStartUrl?: string;
  nameIdFormat?: string;
  samlAscUrl?: string;
  samlCertificate?: string;
  samlEncryptionCertificate?: string;
  samlEncryptionType?: string;
  samlEntityUrl?: string;
  samlIdpSLOBinding?: string;
  samlSigningAlgoType?: string;
  samlSubjectType?: string;
  singleLogoutUrl?: string;
  startUrl?: string;
  subjectCustomAttr?: string;
}

export interface ContentSettings extends Metadata {
  enableCMSC2CConnections?: boolean;
  enableChatterFileLink?: boolean;
  enableContent?: boolean;
  enableContentAutoAssign?: boolean;
  enableContentDistForPortalUsers?: boolean;
  enableContentDistPwOptionsBit1?: boolean;
  enableContentDistPwOptionsBit2?: boolean;
  enableContentDistribution?: boolean;
  enableContentSupportMultiLanguage?: boolean;
  enableContentWorkspaceAccess?: boolean;
  enableDeleteFileInContentPacks?: boolean;
  enableFileShareSetByRecord?: boolean;
  enableFilesUsrShareNetRestricted?: boolean;
  enableJPGPreviews?: boolean;
  enableLibraryManagedFiles?: boolean;
  enableShowChatterFilesInContent?: boolean;
  enableSiteGuestUserToUploadFiles?: boolean;
  enableUploadFilesOnAttachments?: boolean;
  setValidContentTypeForAtchDocDownload?: boolean;
  skipContentAssetTriggers?: boolean;
  skipContentAssetTriggersOnDeploy?: boolean;
}

export interface ContextDefinition extends Metadata {
  contextDefinitionVersions?: ContextDefinitionVersion | ContextDefinitionVersion[];
  contextTtl?: number;
  description?: string;
  isProtected?: boolean;
  masterLabel: string;
  title: string;
}

export interface ContextDefinitionVersion {
  contextMappings?: ContextMapping | ContextMapping[];
  contextNodes?: ContextNode | ContextNode[];
  endDate?: string;
  startDate: string;
  versionNumber: number;
}

export interface ContextMapping {
  contextNodeMappings?: ContextNodeMapping | ContextNodeMapping[];
  default?: boolean;
  description?: string;
  title: string;
}

export interface ContextNodeMapping {
  contextAttributeMappings?: ContextAttributeMapping | ContextAttributeMapping[];
  contextNode?: string;
  object?: string;
}

export interface ContextAttributeMapping {
  contextAttrHydrationDetails?: ContextAttrHydrationDetail | ContextAttrHydrationDetail[];
  contextAttribute?: string;
  contextInputAttributeName: string;
}

export interface ContextAttrHydrationDetail {
  contextAttrHydrationDetails?: ContextAttrHydrationDetail | ContextAttrHydrationDetail[];
  objectName: string;
  queryAttribute: string;
}

export interface ContextNode {
  contextAttributes?: ContextAttribute | ContextAttribute[];
  contextTags?: ContextTag | ContextTag[];
  title: string;
  transposable?: boolean;
}

export interface ContextAttribute {
  contextTags?: ContextTag | ContextTag[];
  dataType: ContextAttributeDataType;
  domainSet?: string;
  fieldType: ContextAttributeFieldType;
  key?: boolean;
  title: string;
  value?: boolean;
}

export interface ContextTag {
  title: string;
}

export interface ContractSettings extends Metadata {
  autoCalculateEndDate?: boolean;
  autoExpirationDelay?: string;
  autoExpirationRecipient?: string;
  autoExpireContracts?: boolean;
  enableContractHistoryTracking?: boolean;
  notifyOwnersOnContractExpiration?: boolean;
}

export interface ContractType extends Metadata {
  contractTypeConfigs?: ContractTypeConfig | ContractTypeConfig[];
  isDefault?: boolean;
  masterLabel: string;
  subTypes?: string;
}

export interface ContractTypeConfig {
  configType: ContractConfigType;
  configValue: string;
  usageType?: ContractUsageType;
}

export interface ConvReasonReportDefinition extends Metadata {
  endDate: Date;
  externalModelIdentifier?: string;
  name: string;
  pipelineRunIdentifier?: string;
  refreshFrequency: RefreshFrequency;
  startDate: Date;
  status: ReportStatus;
}

export interface ConvReasonReportSegmentDef extends Metadata {
  convReasonReportDefinition: string;
  filterCriteria?: string;
  filterCriteriaAsJson?: string;
  name: string;
  segmentObject?: string;
  segmentType: SegmentationType;
  targetObject: string;
}

export interface ConversationChannelDefinition extends Metadata {
  connectedAppOauthLink: string;
  conversationVendorInfo?: string;
  customEventChnlAddrIdField: string;
  customEventPayloadField: string;
  customEventRecipientField: string;
  customPlatformEvent: string;
  developerName: string;
  masterLabel: string;
  supportsDoubleOptInConsent?: boolean;
  supportsExplicitConsent?: boolean;
  supportsImplicitConsent?: boolean;
  supportsIsoCountryCode?: boolean;
  supportsKeywords?: boolean;
}

export interface ConversationMessageDefinition extends Metadata {
  constants?: ConversationMessageConstant | ConversationMessageConstant[];
  description?: string;
  label: string;
  language?: string;
  messageHandlers?: ConversationMessageHandler | ConversationMessageHandler[];
  messageLayouts?: ConversationMessageLayout | ConversationMessageLayout[];
  optionsParameter?: ConversationMessageOptionsParameter;
  parameters?: ConversationMessageParameter | ConversationMessageParameter[];
  type: ConversationMessageDefinitionType;
}

export interface ConversationMessageConstant {
  compositeValues?: ConversationMessageConstantCompositeValue | ConversationMessageConstantCompositeValue[];
  constantType: ConversationMessageConstantType;
  primitiveValues?: ConversationMessageConstantPrimitiveValue | ConversationMessageConstantPrimitiveValue[];
}

export interface ConversationMessageConstantCompositeValue {
  constantItems?: ConversationMessageConstant | ConversationMessageConstant[];
  identifier: string;
}

export interface ConversationMessageConstantPrimitiveValue {
  contentAssetName?: string;
  textValue?: string;
  type: ConversationMessageConstantValueType;
  urlValue?: string;
}

export interface ConversationMessageHandler {
  activeRequestDurationMinutes: number;
  handlerName: string;
  handlerType: ConversationMessageHandlerType;
}

export interface ConversationMessageLayout {
  externalTemplates?: ConvMsgExternalTemplateVersion | ConvMsgExternalTemplateVersion[];
  formatType: ConversationMessageFormatType;
  layoutItems?: ConversationMessageLayoutItem | ConversationMessageLayoutItem[];
  messageType: ConversationMessageType;
}

export interface ConvMsgExternalTemplateVersion {
  accountIdentifier: string;
  accountName: string;
  language: string;
  status: ConvMsgExternalTemplateVersionStatus;
  templateName: string;
  templateVersionIdentifier: string;
}

export interface ConversationMessageLayoutItem {
  collectionType: ConversationMessageCollectionType;
  compositeValues?: ConversationMessageLayoutCompositeValue | ConversationMessageLayoutCompositeValue[];
  name: string;
  primitiveValues?: ConversationMessageLayoutPrimitiveValue | ConversationMessageLayoutPrimitiveValue[];
}

export interface ConversationMessageLayoutCompositeValue {
  compositeTypeName: string;
  layoutItems?: ConversationMessageLayoutItem | ConversationMessageLayoutItem[];
  valueSourceReference?: string;
}

export interface ConversationMessageLayoutPrimitiveValue {
  contentAssetName?: string;
  fieldName?: string;
  formulaTemplate?: string;
  literalValue?: string;
  mergeFields?: ConversationMessageMergeField | ConversationMessageMergeField[];
  type: ConversationMessageLayoutValueType;
  valueFormula?: string;
  valueSourceReference?: string;
}

export interface ConversationMessageMergeField {
  formulaTemplate: string;
  mergeFieldType: ConversationMessageMergeFieldType;
  name: string;
  valueSourceReference: string;
}

export interface ConversationMessageOptionsParameter {
  compositeTypeDetails?: ConversationMessageParameterCompositeDetails;
  optionsParameterType: ConversationMessageOptionsParameterType;
  primitiveTypeDetails?: ConversationMessageParameterPrimitiveDetails;
}

export interface ConversationMessageParameterCompositeDetails {
  compositeChildItems?: ConversationMessageParameterCompositeDetails | ConversationMessageParameterCompositeDetails[];
  isList?: boolean;
  isRequired?: boolean;
  label?: string;
  maxListItems?: number;
  name?: string;
  primitiveChildItems?: ConversationMessageParameterPrimitiveDetails | ConversationMessageParameterPrimitiveDetails[];
}

export interface ConversationMessageParameterPrimitiveDetails {
  isList?: boolean;
  isRequired?: boolean;
  label?: string;
  maxListItems?: number;
  name?: string;
  sobjectType?: string;
  valueType?: ConversationMessageValueType;
}

export interface ConversationMessageParameter {
  compositeTypeDetails?: ConversationMessageParameterCompositeDetails;
  parameterType: ConversationMessageParameterType;
  primitiveTypeDetails?: ConversationMessageParameterPrimitiveDetails;
}

export interface ConversationVendorInfo extends Metadata {
  agentSSOSupported?: boolean;
  awsAccountKey?: string;
  awsRootEmail?: string;
  awsTenantVersion?: number;
  bridgeComponent?: string;
  clientAuthMode?: ClientAuthMode;
  connectorUrl?: string;
  customConfig?: string;
  customLoginUrl?: string;
  developerName: string;
  einsteinConversationInsightsSupported?: boolean;
  integrationClass?: string;
  integrationClassName?: string;
  intelligenceSupported?: boolean;
  isTaxCompliant?: boolean;
  keyProvisioningSupported?: boolean;
  masterLabel: string;
  namedCredential?: string;
  namedCredentialSupported?: boolean;
  partnerContactCenterListSupported?: boolean;
  partnerPhoneNumbersSupported?: boolean;
  partnerTransferDestinationsSupported?: boolean;
  queueManagementSupported?: boolean;
  serverAuthMode?: ServerAuthMode;
  telephonySettingsComponent?: string;
  universalCallRecordingAccessSupported?: boolean;
  userSyncingSupported?: boolean;
  vendorType?: ConversationVendorType;
}

export interface ConversationalIntelligenceSettings extends Metadata {
  enableCallCoaching?: boolean;
  enableCallCoachingZoom?: boolean;
  enableCallSummarization?: boolean;
  enableDiarizationPref?: boolean;
  enableOpptyMatching?: boolean;
  enableUnifiedActivities?: boolean;
}

export interface CorsWhitelistOrigin extends Metadata {
  urlPattern: string;
}

export interface CspTrustedSite extends Metadata {
  canAccessCamera?: boolean;
  canAccessMicrophone?: boolean;
  context?: CspTrustedSiteContext;
  description?: string;
  endpointUrl: string;
  isActive: boolean;
  isApplicableToConnectSrc?: boolean;
  isApplicableToFontSrc?: boolean;
  isApplicableToFrameSrc?: boolean;
  isApplicableToImgSrc?: boolean;
  isApplicableToMediaSrc?: boolean;
  isApplicableToStyleSrc?: boolean;
  mobileExtension?: string;
}

export interface CurrencySettings extends Metadata {
  enableCurrencyEffectiveDates?: boolean;
  enableCurrencySymbolWithMultiCurrency?: boolean;
  enableMultiCurrency?: boolean;
  isMultiCurrencyActivationAllowed?: boolean;
  isParenCurrencyConvDisabled?: boolean;
}

export interface CustomAddressFieldSettings extends Metadata {
  enableCustomAddressField?: boolean;
}

export interface CustomApplication extends Metadata {
  actionOverrides?: AppActionOverride | AppActionOverride[];
  brand?: AppBrand;
  consoleConfig?: ServiceCloudConsoleConfig;
  defaultLandingTab?: string;
  description?: string;
  formFactors?: FormFactor | FormFactor[];
  isNavAutoTempTabsDisabled?: boolean;
  isNavPersonalizationDisabled?: boolean;
  isNavTabPersistenceDisabled?: boolean;
  isServiceCloudConsole?: boolean;
  label?: string;
  logo?: string;
  navType?: NavType;
  preferences?: AppPreferences;
  profileActionOverrides?: AppProfileActionOverride | AppProfileActionOverride[];
  setupExperience?: string;
  subscriberTabs?: string | string[];
  tabSetType?: string;
  tabs?: string | string[];
  uiType?: UiType;
  utilityBar?: string;
  workspaceConfig?: AppWorkspaceConfig;
}

export interface AppActionOverride extends ActionOverride {
  pageOrSobjectType: string;
}

export interface ActionOverride {
  actionName?: string;
  comment?: string;
  content?: string;
  formFactor?: FormFactor;
  skipRecordTypeSelect?: boolean;
  type?: ActionOverrideType;
}

export interface AppBrand {
  footerColor?: string;
  headerColor?: string;
  logo?: string;
  logoVersion?: number;
  shouldOverrideOrgTheme?: boolean;
}

export interface ServiceCloudConsoleConfig {
  componentList?: AppComponentList;
  detailPageRefreshMethod: string;
  footerColor?: string;
  headerColor?: string;
  keyboardShortcuts: KeyboardShortcuts;
  listPlacement: ListPlacement;
  listRefreshMethod: string;
  liveAgentConfig?: LiveAgentConfig;
  primaryTabColor?: string;
  pushNotifications?: PushNotification | PushNotification[];
  tabLimitConfig?: TabLimitConfig;
  whitelistedDomains?: string | string[];
}

export interface AppComponentList {
  alignment: string;
  components?: string | string[];
}

export interface KeyboardShortcuts {
  customShortcuts?: CustomShortcut | CustomShortcut[];
  defaultShortcuts?: DefaultShortcut | DefaultShortcut[];
}

export interface CustomShortcut extends DefaultShortcut {
  description?: string;
  eventName: string;
}

export interface DefaultShortcut {
  action: string;
  active: boolean;
  keyCommand: string;
}

export interface ListPlacement {
  height?: number;
  location: string;
  units?: string;
  width?: number;
}

export interface LiveAgentConfig {
  enableLiveChat?: boolean;
  openNewAccountSubtab?: boolean;
  openNewCaseSubtab?: boolean;
  openNewContactSubtab?: boolean;
  openNewLeadSubtab?: boolean;
  openNewVFPageSubtab?: boolean;
  pageNamesToOpen?: string | string[];
  showKnowledgeArticles?: boolean;
}

export interface PushNotification {
  fieldNames?: string | string[];
  objectName: string;
}

export interface TabLimitConfig {
  maxNumberOfPrimaryTabs?: string;
  maxNumberOfSubTabs?: string;
}

export interface AppPreferences {
  enableCustomizeMyTabs: boolean;
  enableKeyboardShortcuts: boolean;
  enableListViewHover: boolean;
  enableListViewReskin: boolean;
  enableMultiMonitorComponents: boolean;
  enablePinTabs: boolean;
  enableTabHover: boolean;
  enableTabLimits: boolean;
  saveUserSessions: boolean;
}

export interface AppProfileActionOverride extends ProfileActionOverride {
  profile: string;
}

export interface ProfileActionOverride {
  actionName: string;
  content?: string;
  formFactor: FormFactor;
  pageOrSobjectType: string;
  recordType?: string;
  type: ActionOverrideType;
}

export interface AppWorkspaceConfig {
  mappings?: WorkspaceMapping | WorkspaceMapping[];
}

export interface WorkspaceMapping {
  fieldName?: string;
  tab: string;
}

export interface CustomApplicationComponent extends Metadata {
  buttonIconUrl?: string;
  buttonStyle?: string;
  buttonText?: string;
  buttonWidth?: number;
  height?: number;
  isHeightFixed: boolean;
  isHidden: boolean;
  isWidthFixed: boolean;
  visualforcePage: string;
  width?: number;
}

export interface CustomDataType extends Metadata {
  customDataTypeComponents?: CustomDataTypeComponent | CustomDataTypeComponent[];
  description?: string;
  displayFormula?: string;
  editComponentsOnSeparateLines?: boolean;
  label: string;
  rightAligned?: boolean;
  supportComponentsInReports?: boolean;
}

export interface CustomDataTypeComponent {
  developerSuffix: string;
  enforceFieldRequiredness?: boolean;
  label: string;
  length?: number;
  precision?: number;
  scale?: number;
  sortOrder?: SortOrder;
  sortPriority?: number;
  type: FieldType;
}

export interface CustomFeedFilter extends Metadata {
  criteria?: FeedFilterCriterion | FeedFilterCriterion[];
  description?: string;
  isProtected?: boolean;
  label: string;
}

export interface FeedFilterCriterion {
  feedItemType: FeedItemType;
  feedItemVisibility?: FeedItemVisibility;
  relatedSObjectType?: string;
}

export interface CustomField extends Metadata {
  businessOwnerGroup?: string;
  businessOwnerUser?: string;
  businessStatus?: string;
  caseSensitive?: boolean;
  complianceGroup?: string;
  customDataType?: string;
  defaultValue?: string;
  deleteConstraint?: DeleteConstraint;
  deprecated?: boolean;
  description?: string;
  displayFormat?: string;
  displayLocationInDecimal?: boolean;
  encryptionScheme?: EncryptionScheme;
  escapeMarkup?: boolean;
  externalDeveloperName?: string;
  externalId?: boolean;
  fieldManageability?: FieldManageability;
  formula?: string;
  formulaTreatBlanksAs?: TreatBlanksAs;
  inlineHelpText?: string;
  isAIPredictionField?: boolean;
  isConvertLeadDisabled?: boolean;
  isFilteringDisabled?: boolean;
  isNameField?: boolean;
  isSortingDisabled?: boolean;
  label?: string;
  length?: number;
  lookupFilter?: LookupFilter;
  maskChar?: EncryptedFieldMaskChar;
  maskType?: EncryptedFieldMaskType;
  metadataRelationshipControllingField?: string;
  mktDataLakeFieldAttributes?: MktDataLakeFieldAttributes;
  mktDataModelFieldAttributes?: MktDataModelFieldAttributes;
  picklist?: Picklist;
  populateExistingRows?: boolean;
  precision?: number;
  readOnlyProxy?: boolean;
  referenceTargetField?: string;
  referenceTo?: string;
  relationshipLabel?: string;
  relationshipName?: string;
  relationshipOrder?: number;
  reparentableMasterDetail?: boolean;
  required?: boolean;
  restrictedAdminField?: boolean;
  scale?: number;
  securityClassification?: string;
  startingNumber?: number;
  stripMarkup?: boolean;
  summarizedField?: string;
  summaryFilterItems?: FilterItem | FilterItem[];
  summaryForeignKey?: string;
  summaryOperation?: SummaryOperations;
  trackFeedHistory?: boolean;
  trackHistory?: boolean;
  trackTrending?: boolean;
  translateData?: boolean;
  type?: FieldType;
  unique?: boolean;
  valueSet?: ValueSet;
  visibleLines?: number;
  writeRequiresMasterRead?: boolean;
}

export interface LookupFilter {
  active: boolean;
  booleanFilter?: string;
  description?: string;
  errorMessage?: string;
  filterItems?: FilterItem | FilterItem[];
  infoMessage?: string;
  isOptional: boolean;
}

export interface MktDataLakeFieldAttributes {
  dateFormat?: string;
  definitionCreationType?: DefinitionCreationType;
  externalName?: string;
  isEventDate?: boolean;
  isInternalOrganization?: boolean;
  isRecordModified?: boolean;
  keyQualifierName?: string;
  mktDatalakeSrcKeyQualifier?: string;
  primaryIndexOrder?: number;
  usageTag?: UsageTag;
}

export interface MktDataModelFieldAttributes {
  definitionCreationType?: DefinitionCreationType;
  invalidMergeActionType?: InvalidMergeActionType;
  isDynamicLookup?: boolean;
  keyQualifierName?: string;
  primaryIndexOrder?: number;
  refAttrDeveloperName?: string;
  usageTag?: MktDataModelFieldUsageTag;
}

export interface Picklist {
  controllingField?: string;
  picklistValues?: PicklistValue | PicklistValue[];
  restrictedPicklist?: boolean;
  sorted: boolean;
}

export interface ValueSet {
  controllingField?: string;
  restricted?: boolean;
  valueSetDefinition?: ValueSetValuesDefinition;
  valueSetName?: string;
  valueSettings?: ValueSettings | ValueSettings[];
}

export interface ValueSetValuesDefinition {
  sorted: boolean;
  value?: CustomValue | CustomValue[];
}

export interface CustomValue extends Metadata {
  color?: string;
  default: boolean;
  description?: string;
  isActive?: boolean;
  label?: string;
}

export interface StandardValue extends CustomValue {
  allowEmail?: boolean;
  closed?: boolean;
  converted?: boolean;
  cssExposed?: boolean;
  forecastCategory?: ForecastCategories;
  groupingString?: string;
  highPriority?: boolean;
  probability?: number;
  reverseRole?: string;
  reviewed?: boolean;
  won?: boolean;
}

export interface ValueSettings {
  controllingFieldValue?: string | string[];
  valueName: string;
}

export interface CustomHelpMenuSection extends Metadata {
  customHelpMenuItems?: CustomHelpMenuItem | CustomHelpMenuItem[];
  masterLabel: string;
}

export interface CustomHelpMenuItem {
  linkUrl: string;
  masterLabel: string;
  sortOrder: number;
}

export interface CustomIndex extends Metadata {
  allowNullValues?: boolean;
}

export interface CustomLabel extends Metadata {
  categories?: string;
  language: string;
  protected: boolean;
  shortDescription: string;
  value: string;
}

export interface CustomLabels extends Metadata {
  labels?: CustomLabel | CustomLabel[];
}

export interface CustomMetadata extends Metadata {
  description?: string;
  label?: string;
  protected?: boolean;
  values?: CustomMetadataValue | CustomMetadataValue[];
}

export interface CustomMetadataValue {
  field: string;
  value?: any;
}

export interface CustomNotificationType extends Metadata {
  customNotifTypeName: string;
  description?: string;
  desktop: boolean;
  masterLabel: string;
  mobile: boolean;
  slack?: boolean;
}

export interface CustomObject extends Metadata {
  actionOverrides?: ActionOverride | ActionOverride[];
  allowInChatterGroups?: boolean;
  articleTypeChannelDisplay?: ArticleTypeChannelDisplay;
  businessProcesses?: BusinessProcess | BusinessProcess[];
  compactLayoutAssignment?: string;
  compactLayouts?: CompactLayout | CompactLayout[];
  customHelp?: string;
  customHelpPage?: string;
  customSettingsType?: CustomSettingsType;
  deploymentStatus?: DeploymentStatus;
  deprecated?: boolean;
  description?: string;
  enableActivities?: boolean;
  enableBulkApi?: boolean;
  enableDataTranslation?: boolean;
  enableDivisions?: boolean;
  enableEnhancedLookup?: boolean;
  enableFeeds?: boolean;
  enableHistory?: boolean;
  enableLicensing?: boolean;
  enablePublishStatusTracking?: boolean;
  enableReports?: boolean;
  enableSearch?: boolean;
  enableSharing?: boolean;
  enableStreamingApi?: boolean;
  eventType?: PlatformEventType;
  externalDataSource?: string;
  externalIndexAvailable?: boolean;
  externalName?: string;
  externalRepository?: string;
  externalSharingModel?: SharingModel;
  fieldSets?: FieldSet | FieldSet[];
  fields?: CustomField | CustomField[];
  gender?: Gender;
  historyRetentionPolicy?: HistoryRetentionPolicy;
  household?: boolean;
  indexes?: Index | Index[];
  label?: string;
  listViews?: ListView | ListView[];
  mktDataLakeAttributes?: MktDataLakeAttributes;
  mktDataModelAttributes?: MktDataModelAttributes;
  nameField?: CustomField;
  pluralLabel?: string;
  profileSearchLayouts?: ProfileSearchLayouts | ProfileSearchLayouts[];
  publishBehavior?: PlatformEventPublishBehavior;
  recordTypeTrackFeedHistory?: boolean;
  recordTypeTrackHistory?: boolean;
  recordTypes?: RecordType | RecordType[];
  searchLayouts?: SearchLayouts;
  sharingModel?: SharingModel;
  sharingReasons?: SharingReason | SharingReason[];
  sharingRecalculations?: SharingRecalculation | SharingRecalculation[];
  startsWith?: StartsWith;
  validationRules?: ValidationRule | ValidationRule[];
  visibility?: SetupObjectVisibility;
  webLinks?: WebLink | WebLink[];
}

export interface ArticleTypeChannelDisplay {
  articleTypeTemplates?: ArticleTypeTemplate | ArticleTypeTemplate[];
}

export interface ArticleTypeTemplate {
  channel: Channel;
  page?: string;
  template: Template;
}

export interface FieldSet extends Metadata {
  availableFields?: FieldSetItem | FieldSetItem[];
  description: string;
  displayedFields?: FieldSetItem | FieldSetItem[];
  label: string;
}

export interface FieldSetItem {
  field?: string;
  isFieldManaged?: boolean;
  isRequired?: boolean;
}

export interface HistoryRetentionPolicy {
  archiveAfterMonths: number;
  archiveRetentionYears: number;
  description?: string;
  gracePeriodDays: number;
}

export interface Index extends Metadata {
  fields?: IndexField | IndexField[];
  label: string;
  minNumRequiredIndexedFields?: number;
  type?: string;
}

export interface IndexField {
  name: string;
  sortDirection: string;
}

export interface ListView extends Metadata {
  booleanFilter?: string;
  columns?: string | string[];
  division?: string;
  filterScope: FilterScope;
  filters?: ListViewFilter | ListViewFilter[];
  label: string;
  language?: Language;
  queue?: string;
  sharedTo?: SharedTo;
}

export interface ListViewFilter {
  field: string;
  operation: FilterOperation;
  value?: string;
}

export interface SharedTo {
  allCustomerPortalUsers?: string;
  allInternalUsers?: string;
  allPartnerUsers?: string;
  channelProgramGroup?: string | string[];
  channelProgramGroups?: string | string[];
  group?: string | string[];
  groups?: string | string[];
  guestUser?: string | string[];
  managerSubordinates?: string | string[];
  managers?: string | string[];
  portalRole?: string | string[];
  portalRoleAndSubordinates?: string | string[];
  queue?: string | string[];
  role?: string | string[];
  roleAndSubordinates?: string | string[];
  roleAndSubordinatesInternal?: string | string[];
  roles?: string | string[];
  rolesAndSubordinates?: string | string[];
  territories?: string | string[];
  territoriesAndSubordinates?: string | string[];
  territory?: string | string[];
  territoryAndSubordinates?: string | string[];
}

export interface MktDataLakeAttributes {
  creationType?: DefinitionCreationType;
  isEnabled?: boolean;
  objectCategory?: string;
}

export interface MktDataModelAttributes {
  creationType?: DefinitionCreationType;
  dataModelTaxonomy?: string;
  description?: string;
  isEnabled?: boolean;
  isSegmentable?: boolean;
  isUsedForMetrics?: boolean;
  objectCategory?: string;
  referenceEntityGroup?: string;
  referenceEntityName?: string;
  referenceEntitySubjectArea?: string;
}

export interface ProfileSearchLayouts {
  fields?: string | string[];
  profileName?: string;
}

export interface RecordType extends Metadata {
  active: boolean;
  businessProcess?: string;
  compactLayoutAssignment?: string;
  description?: string;
  label: string;
  picklistValues?: RecordTypePicklistValue | RecordTypePicklistValue[];
}

export interface RecordTypePicklistValue {
  picklist: string;
  values?: PicklistValue | PicklistValue[];
}

export interface SearchLayouts {
  customTabListAdditionalFields?: string | string[];
  excludedStandardButtons?: string | string[];
  listViewButtons?: string | string[];
  lookupDialogsAdditionalFields?: string | string[];
  lookupFilterFields?: string | string[];
  lookupPhoneDialogsAdditionalFields?: string | string[];
  massQuickActions?: string | string[];
  searchFilterFields?: string | string[];
  searchResultsAdditionalFields?: string | string[];
  searchResultsCustomButtons?: string | string[];
}

export interface SharingReason extends Metadata {
  label: string;
}

export interface SharingRecalculation {
  className: string;
}

export interface ValidationRule extends Metadata {
  active: boolean;
  description?: string;
  errorConditionFormula: string;
  errorDisplayField?: string;
  errorMessage: string;
  shouldEvaluateOnClient?: boolean;
}

export interface WebLink extends Metadata {
  availability: WebLinkAvailability;
  description?: string;
  displayType: WebLinkDisplayType;
  encodingKey?: Encoding;
  hasMenubar?: boolean;
  hasScrollbars?: boolean;
  hasToolbar?: boolean;
  height?: number;
  isResizable?: boolean;
  linkType: WebLinkType;
  masterLabel?: string;
  openType: WebLinkWindowType;
  page?: string;
  position?: WebLinkPosition;
  protected: boolean;
  requireRowSelection?: boolean;
  scontrol?: string;
  showsLocation?: boolean;
  showsStatus?: boolean;
  url?: string;
  width?: number;
}

export interface CustomObjectTranslation extends Metadata {
  caseValues?: ObjectNameCaseValue | ObjectNameCaseValue[];
  fieldSets?: FieldSetTranslation | FieldSetTranslation[];
  fields?: CustomFieldTranslation | CustomFieldTranslation[];
  gender?: Gender;
  layouts?: LayoutTranslation | LayoutTranslation[];
  nameFieldLabel?: string;
  quickActions?: QuickActionTranslation | QuickActionTranslation[];
  recordTypes?: RecordTypeTranslation | RecordTypeTranslation[];
  sharingReasons?: SharingReasonTranslation | SharingReasonTranslation[];
  standardFields?: StandardFieldTranslation | StandardFieldTranslation[];
  startsWith?: StartsWith;
  validationRules?: ValidationRuleTranslation | ValidationRuleTranslation[];
  webLinks?: WebLinkTranslation | WebLinkTranslation[];
  workflowTasks?: WorkflowTaskTranslation | WorkflowTaskTranslation[];
}

export interface ObjectNameCaseValue {
  article?: Article;
  caseType?: CaseType;
  plural?: boolean;
  possessive?: Possessive;
  value: string;
}

export interface FieldSetTranslation {
  label: string;
  name: string;
}

export interface CustomFieldTranslation {
  caseValues?: ObjectNameCaseValue | ObjectNameCaseValue[];
  gender?: Gender;
  help?: string;
  label?: string;
  lookupFilter?: LookupFilterTranslation;
  name: string;
  picklistValues?: PicklistValueTranslation | PicklistValueTranslation[];
  relationshipLabel?: string;
  startsWith?: StartsWith;
}

export interface LookupFilterTranslation {
  errorMessage: string;
  informationalMessage: string;
}

export interface PicklistValueTranslation {
  masterLabel: string;
  translation?: string;
}

export interface LayoutTranslation {
  layout: string;
  layoutType?: string;
  sections?: LayoutSectionTranslation | LayoutSectionTranslation[];
}

export interface LayoutSectionTranslation {
  label: string;
  section: string;
}

export interface QuickActionTranslation {
  aspect?: string;
  label: string;
  name: string;
}

export interface RecordTypeTranslation {
  description?: string;
  label: string;
  name: string;
}

export interface SharingReasonTranslation {
  label: string;
  name: string;
}

export interface StandardFieldTranslation {
  label?: string;
  name: string;
}

export interface ValidationRuleTranslation {
  errorMessage: string;
  name: string;
}

export interface WebLinkTranslation {
  label: string;
  name: string;
}

export interface WorkflowTaskTranslation {
  description?: string;
  name: string;
  subject?: string;
}

export interface CustomPageWebLink extends Metadata {
  availability: WebLinkAvailability;
  description?: string;
  displayType: WebLinkDisplayType;
  encodingKey?: Encoding;
  hasMenubar?: boolean;
  hasScrollbars?: boolean;
  hasToolbar?: boolean;
  height?: number;
  isResizable?: boolean;
  linkType: WebLinkType;
  masterLabel?: string;
  openType: WebLinkWindowType;
  page?: string;
  position?: WebLinkPosition;
  protected: boolean;
  requireRowSelection?: boolean;
  scontrol?: string;
  showsLocation?: boolean;
  showsStatus?: boolean;
  url?: string;
  width?: number;
}

export interface CustomPermission extends Metadata {
  connectedApp?: string;
  description?: string;
  isLicensed: boolean;
  label: string;
  requiredPermission?: CustomPermissionDependencyRequired | CustomPermissionDependencyRequired[];
}

export interface CustomPermissionDependencyRequired {
  customPermission: string;
  dependency: boolean;
}

export interface CustomSite extends Metadata {
  active: boolean;
  allowGuestPaymentsApi?: boolean;
  allowHomePage: boolean;
  allowStandardAnswersPages?: boolean;
  allowStandardIdeasPages: boolean;
  allowStandardLookups: boolean;
  allowStandardPortalPages: boolean;
  allowStandardSearch: boolean;
  analyticsTrackingCode?: string;
  authorizationRequiredPage?: string;
  bandwidthExceededPage?: string;
  browserXssProtection: boolean;
  cachePublicVisualforcePagesInProxyServers?: boolean;
  changePasswordPage?: string;
  chatterAnswersForgotPasswordConfirmPage?: string;
  chatterAnswersForgotPasswordPage?: string;
  chatterAnswersHelpPage?: string;
  chatterAnswersLoginPage?: string;
  chatterAnswersRegistrationPage?: string;
  clickjackProtectionLevel: SiteClickjackProtectionLevel;
  contentSniffingProtection: boolean;
  customWebAddresses?: SiteWebAddress | SiteWebAddress[];
  description?: string;
  enableAuraRequests?: boolean;
  favoriteIcon?: string;
  fileNotFoundPage?: string;
  forgotPasswordPage?: string;
  genericErrorPage?: string;
  guestProfile?: string;
  inMaintenancePage?: string;
  inactiveIndexPage?: string;
  indexPage: string;
  masterLabel: string;
  myProfilePage?: string;
  portal?: string;
  redirectToCustomDomain?: boolean;
  referrerPolicyOriginWhenCrossOrigin: boolean;
  robotsTxtPage?: string;
  selfRegPage?: string;
  serverIsDown?: string;
  siteAdmin?: string;
  siteGuestRecordDefaultOwner?: string;
  siteIframeWhiteListUrls?: SiteIframeWhiteListUrl | SiteIframeWhiteListUrl[];
  siteRedirectMappings?: SiteRedirectMapping | SiteRedirectMapping[];
  siteTemplate?: string;
  siteType: SiteType;
  subdomain?: string;
  urlPathPrefix?: string;
}

export interface SiteWebAddress {
  certificate?: string;
  domainName: string;
  primary: boolean;
}

export interface SiteIframeWhiteListUrl {
  url: string;
}

export interface SiteRedirectMapping {
  action: SiteRedirect;
  isActive?: boolean;
  isDynamic?: boolean;
  source: string;
  target: string;
}

export interface CustomTab extends Metadata {
  actionOverrides?: ActionOverride | ActionOverride[];
  auraComponent?: string;
  customObject?: boolean;
  description?: string;
  flexiPage?: string;
  frameHeight?: number;
  hasSidebar?: boolean;
  icon?: string;
  label?: string;
  lwcComponent?: string;
  motif?: string;
  page?: string;
  scontrol?: string;
  splashPageLink?: string;
  url?: string;
  urlEncodingKey?: Encoding;
}

export interface CustomerDataPlatformSettings extends Metadata {
  enableCustomerDataPlatform?: boolean;
}

export interface CustomizablePropensityScoringSettings extends Metadata {
  enableCpsPref?: boolean;
}

export interface Dashboard extends Metadata {
  backgroundEndColor: string;
  backgroundFadeDirection: ChartBackgroundDirection;
  backgroundStartColor: string;
  chartTheme?: ChartTheme;
  colorPalette?: ChartColorPalettes;
  dashboardChartTheme?: ChartTheme;
  dashboardColorPalette?: ChartColorPalettes;
  dashboardFilters?: DashboardFilter | DashboardFilter[];
  dashboardGridLayout?: DashboardGridLayout;
  dashboardResultRefreshedDate?: string;
  dashboardResultRunningUser?: string;
  dashboardType?: DashboardType;
  description?: string;
  folderName?: string;
  isGridLayout?: boolean;
  leftSection?: DashboardComponentSection;
  middleSection?: DashboardComponentSection;
  numSubscriptions?: number;
  owner?: string;
  rightSection?: DashboardComponentSection;
  runningUser?: string;
  textColor: string;
  title: string;
  titleColor: string;
  titleSize: number;
}

export interface DashboardFilter {
  dashboardFilterOptions?: DashboardFilterOption | DashboardFilterOption[];
  name: string;
}

export interface DashboardFilterOption {
  operator: DashboardFilterOperation;
  values?: string | string[];
}

export interface DashboardGridLayout {
  dashboardGridComponents?: DashboardGridComponent | DashboardGridComponent[];
  numberOfColumns: number;
  rowHeight: number;
}

export interface DashboardGridComponent {
  colSpan: number;
  columnIndex: number;
  dashboardComponent: DashboardComponent;
  rowIndex: number;
  rowSpan: number;
}

export interface DashboardComponent {
  autoselectColumnsFromReport?: boolean;
  chartAxisRange?: ChartRangeType;
  chartAxisRangeMax?: number;
  chartAxisRangeMin?: number;
  chartSummary?: ChartSummary | ChartSummary[];
  componentChartTheme?: ChartTheme;
  componentType: DashboardComponentType;
  dashboardComponentContents?: DashboardComponentContent | DashboardComponentContent[];
  dashboardDynamicValues?: DashboardDynamicValue | DashboardDynamicValue[];
  dashboardFilterColumns?: DashboardFilterColumn | DashboardFilterColumn[];
  dashboardTableColumn?: DashboardTableColumn | DashboardTableColumn[];
  decimalPrecision?: number;
  displayUnits?: ChartUnits;
  drillDownUrl?: string;
  drillEnabled?: boolean;
  drillToDetailEnabled?: boolean;
  enableHover?: boolean;
  expandOthers?: boolean;
  flexComponentProperties?: DashboardFlexTableComponentProperties;
  footer?: string;
  gaugeMax?: number;
  gaugeMin?: number;
  groupingColumn?: string | string[];
  groupingSortProperties?: DashboardComponentGroupingSortProperties;
  header?: string;
  indicatorBreakpoint1?: number;
  indicatorBreakpoint2?: number;
  indicatorHighColor?: string;
  indicatorLowColor?: string;
  indicatorMiddleColor?: string;
  legendPosition?: ChartLegendPosition;
  maxValuesDisplayed?: number;
  metricLabel?: string;
  page?: string;
  pageHeightInPixels?: number;
  report?: string;
  scontrol?: string;
  scontrolHeightInPixels?: number;
  showPercentage?: boolean;
  showPicturesOnCharts?: boolean;
  showPicturesOnTables?: boolean;
  showRange?: boolean;
  showTotal?: boolean;
  showValues?: boolean;
  sortBy?: DashboardComponentFilter;
  title?: string;
  useReportChart?: boolean;
}

export interface ChartSummary {
  aggregate?: ReportSummaryType;
  axisBinding?: ChartAxis;
  column: string;
}

export interface DashboardComponentContent {
  additionalInfo?: string;
  altText?: string;
  fileName?: string;
  fit?: Fit;
  horizontalAlignment?: HorizontalAlignment;
  richTextContent?: string;
  tooltip?: string;
  verticalAlignment?: VerticalAlignment;
}

export interface DashboardDynamicValue {
  additionalInfo?: string;
  fieldName: string;
  isDynamicUser?: boolean;
}

export interface DashboardFilterColumn {
  column: string;
}

export interface DashboardTableColumn {
  aggregateType?: ReportSummaryType;
  calculatePercent?: boolean;
  column: string;
  decimalPlaces?: number;
  showSubTotal?: boolean;
  showTotal?: boolean;
  sortBy?: DashboardComponentFilter;
}

export interface DashboardFlexTableComponentProperties {
  decimalPrecision?: number;
  flexTableColumn?: DashboardComponentColumn | DashboardComponentColumn[];
  flexTableSortInfo?: DashboardComponentSortInfo;
  hideChatterPhotos?: boolean;
}

export interface DashboardComponentColumn {
  breakPoint1?: number;
  breakPoint2?: number;
  breakPointOrder?: number;
  highRangeColor?: number;
  lowRangeColor?: number;
  midRangeColor?: number;
  reportColumn: string;
  showSubTotal?: boolean;
  showTotal?: boolean;
  type: DashboardComponentColumnType;
}

export interface DashboardComponentSortInfo {
  sortColumn?: string;
  sortOrder?: string;
}

export interface DashboardComponentGroupingSortProperties {
  groupingSorts?: DashboardComponentGroupingSort | DashboardComponentGroupingSort[];
}

export interface DashboardComponentGroupingSort {
  groupingLevel: string;
  inheritedReportGroupingSort?: string;
  sortColumn?: string;
  sortOrder?: string;
}

export interface DashboardComponentSection {
  columnSize: DashboardComponentSize;
  components?: DashboardComponent | DashboardComponent[];
}

export interface DataCategoryGroup extends Metadata {
  active: boolean;
  dataCategory: DataCategory;
  description?: string;
  label: string;
  objectUsage?: ObjectUsage;
}

export interface DataCategory {
  dataCategory?: DataCategory | DataCategory[];
  label: string;
  name: string;
}

export interface ObjectUsage {
  object?: string | string[];
}

export interface DataConnectorIngestApi extends Metadata {
  isProtected?: boolean;
  masterLabel: string;
  sourceName: string;
}

export interface DataConnectorS3 extends Metadata {
  delimiter?: string;
  fileNameWildcard?: string;
  fileType?: string;
  importFromDirectory?: string;
  masterLabel: string;
  s3AccessKey?: string;
  s3BucketName: string;
  s3SecretKey?: string;
}

export interface DataDotComSettings extends Metadata {
  enableAccountExportButtonOff?: boolean;
  enableAccountImportButtonOff?: boolean;
  enableAllowDupeContactFromLead?: boolean;
  enableAllowDupeLeadFromContact?: boolean;
  enableContactExportButtonOff?: boolean;
  enableContactImportButtonOff?: boolean;
  enableDDCSocialKeyEnabled?: boolean;
  enableDataDotComCleanEnabled?: boolean;
  enableDataDotComOptOutsEnabled?: boolean;
  enableDatacloudAPIEnabled?: boolean;
}

export interface DataModelTaxonomy extends Metadata {
  creationType?: DefinitionCreationType;
  dataModelType: DataModelType;
  dataObjectCategories?: DataObjectCategory | DataObjectCategory[];
  isProtected?: boolean;
  masterLabel: string;
  supplier: string;
  updateDate: Date;
  versionNbr: number;
}

export interface DataObjectCategory extends Metadata {
  definitionCreationType?: DefinitionCreationType;
  masterLabel: string;
}

export interface DataPackageKitDefinition extends Metadata {
  description?: string;
  developerName: string;
  isDeployed?: boolean;
  isEnabled?: boolean;
  masterLabel: string;
  versionNumber?: number;
}

export interface DataPackageKitObject extends Metadata {
  masterLabel: string;
  parentDataPackageKitDefinitionName: string;
  referenceObjectName: string;
  referenceObjectType: string;
}

export interface DataPlatform extends Metadata {
  dataConnectorType: DataConnectorType;
  dataPlatDataSetBundles?: DataPlatDataSetBundle | DataPlatDataSetBundle[];
  description?: string;
  forExportIntOrgName?: string;
  forImportIntOrgName?: string;
  isConfiguredByAdmin?: boolean;
  isProtected?: boolean;
  largeIconUri?: string;
  masterLabel: string;
  smallIconUri?: string;
}

export interface DataPlatDataSetBundle {
  bundleType?: string;
  dataPlatformDataSets?: DataPlatformDataSet | DataPlatformDataSet[];
  description?: string;
  iconUri?: string;
  sortOrder?: number;
}

export interface DataPlatformDataSet {
  dataSetType?: string;
  description?: string;
  iconUri?: string;
  sortOrder?: number;
}

export interface DataSource extends Metadata {
  masterLabel: string;
  prefix: string;
}

export interface DataSourceBundleDefinition extends Metadata {
  dataPlatform: string;
  description?: string;
  icon?: string;
  isMultiDeploymentSupported?: boolean;
  masterLabel: string;
}

export interface DataSourceField extends Metadata {
  datatype: string;
  dateFormat?: string;
  definitionCreationType?: DefinitionCreationType;
  externalName: string;
  fieldFormula?: string;
  isDataRequired?: boolean;
  isFormula?: boolean;
  keyQualifierName?: string;
  length?: number;
  masterLabel: string;
  precision?: number;
  primaryIndexOrder?: number;
  scale?: number;
  sequence: number;
  srcKeyQualifier?: string;
  usageTag?: UsageTag;
  versionNumber: number;
}

export interface DataSourceObject extends Metadata {
  dataSource: string;
  dataSourceFields?: DataSourceField | DataSourceField[];
  externalRecordIdentifier?: string;
  masterLabel: string;
  objectType?: DataObjectType;
}

export interface DataSourceTenant extends Metadata {
  externalRecordId: string;
  masterLabel: string;
}

export interface DataSrcDataModelFieldMap extends Metadata {
  masterLabel: string;
  sourceField: string;
  targetField: string;
  versionNumber: number;
}

export interface DataStreamDefinition extends Metadata {
  areHeadersIncludedInFile?: boolean;
  bulkIngest?: boolean;
  creationType: DefinitionCreationType;
  dataConnector: string;
  dataConnectorType?: string;
  dataExtensionIdentifier?: string;
  dataExtractField?: string;
  dataExtractMethods?: DataImportDataExtractMethods;
  dataPlatDataSetBundle?: string;
  dataPlatformDataSetItemName?: string;
  dataSource: string;
  description?: string;
  fileNameWildcard?: string;
  internalOrganization?: string;
  isLimitedToNewFiles?: boolean;
  isMissingFileFailure?: boolean;
  masterLabel: string;
  mktDataLakeObject: string;
  mktDataTranObject?: string;
}

export interface DataStreamTemplate extends Metadata {
  dataSourceBundleDefinition: string;
  dataSourceObject: string;
  masterLabel: string;
  objectCategory: string;
  refreshFrequency?: DataImportRefreshFrequency;
  refreshHours?: string;
  refreshMode?: DataImportRefreshMode;
}

export interface DataspaceScope extends Metadata {
  description?: string;
  isProtected?: boolean;
  masterLabel: string;
  metadataGroups?: DataspaceScopeSchemaAccess | DataspaceScopeSchemaAccess[];
}

export interface DataspaceScopeSchemaAccess {
  metadataGroup: string;
}

export interface DecisionMatrixDefinition extends Metadata {
  description?: string;
  groupKey?: string;
  label: string;
  processType?: ExpsSetProcessType;
  subGroupKey?: string;
  type?: DecisionMatrixType;
  versions?: DecisionMatrixDefinitionVersion | DecisionMatrixDefinitionVersion[];
}

export interface DecisionMatrixDefinitionVersion extends Metadata {
  columns?: DecisionMatrixDefinitionVersionColumn | DecisionMatrixDefinitionVersionColumn[];
  decisionMatrixDefinition?: string;
  endDate?: Date;
  groupKeyValue?: string;
  label: string;
  startDate: Date;
  status: DecisionMatrixDefStatus;
  subGroupKeyValue?: string;
  versionNumber: number;
}

export interface DecisionMatrixDefinitionVersionColumn {
  columnType: DecisionMatrixColumnType;
  dataType: DecisionMatrixDataType;
  displaySequence: number;
  isWildcardColumn: boolean;
  name: string;
  rangeValue?: string;
  wildcardValue?: string;
}

export interface DecisionTable extends Metadata {
  collectOperator?: DecisionTableCollectOperator;
  conditionCriteria?: string;
  conditionType?: DecisionTableConditionType;
  dataSourceType?: DecisionTableDataSourceType;
  decisionTableParameters?: DecisionTableParameter | DecisionTableParameter[];
  decisionTableSourceCriterias?: DecisionTableSourceCriteria | DecisionTableSourceCriteria[];
  description?: string;
  filterResultBy?: DecisionTableHitPolicy;
  lastSyncDate?: string;
  setupName: string;
  sourceConditionLogic?: string;
  sourceObject: string;
  status: DecisionTableStatus;
  type?: DecisionTableType;
  usageType?: DecisionTableUsageType;
}

export interface DecisionTableParameter {
  dataType?: DTParameterDataType;
  decimalScale?: number;
  domainObject?: string;
  fieldName: string;
  fieldPath?: string;
  isGroupByField?: boolean;
  isPriorityField?: boolean;
  isRequired?: boolean;
  length?: number;
  operator?: DecisionTableOperator;
  sequence?: number;
  sortType?: DecisionTableSortType;
  usage: DecisionTableParameterType;
}

export interface DecisionTableSourceCriteria {
  operator: DTSourceCriteriaOperator;
  sequenceNumber: number;
  sourceFieldName: string;
  value?: string;
  valueType: DTSourceCriteriaValueType;
}

export interface DecisionTableDatasetLink extends Metadata {
  decisionTableName: string;
  decisionTblDatasetParameters?: DecisionTblDatasetParameter | DecisionTblDatasetParameter[];
  description?: string;
  isDefault?: boolean;
  setupName: string;
  sourceObject?: string;
}

export interface DecisionTblDatasetParameter {
  datasetFieldName: string;
  datasetSourceObject: string;
  fieldName: string;
}

export interface PlatformEventSubscriberConfig extends Metadata {
  batchSize?: number;
  isProtected?: boolean;
  masterLabel: string;
  numPartitions?: number;
  partitionKey?: string;
  platformEventConsumer: string;
  user?: string;
}

export interface FtestTopLevelWithDeclMd1 extends Metadata {
  bitVectorFieldRound?: boolean;
  bitVectorFieldSquare?: boolean;
  bitVectorFieldTriangle?: boolean;
  booleanField?: boolean;
  dateField?: Date;
  dateTimeField?: Date;
  doubleField?: number;
  emailField?: string;
  integerField: number;
  isProtected?: boolean;
  masterLabel: string;
  staticEnumField?: FTestTopLevelSelection;
  typeOneItems?: FtestDetailWithDeclMd1 | FtestDetailWithDeclMd1[];
  typeTwoItems?: FtestDetailWithDeclMd2 | FtestDetailWithDeclMd2[];
}

export interface FtestDetailWithDeclMd1 {
  bitVectorFieldBlooper?: boolean;
  bitVectorFieldRound?: boolean;
  bitVectorFieldSquare?: boolean;
  bitVectorFieldTriangle?: boolean;
  booleanField?: boolean;
  dateField?: Date;
  dateTimeField?: Date;
  doubleField?: number;
  emailField?: string;
  enumOrIdField?: string;
  integerField: number;
  staticEnumField?: FTestTopLevelSelection;
  subItems?: FtestSubDetailWithDeclMd | FtestSubDetailWithDeclMd[];
}

export interface FtestSubDetailWithDeclMd {
  booleanField?: boolean;
  dateField?: Date;
  dateTimeField?: Date;
  doubleField?: number;
  emailField?: string;
  integerField: number;
  staticEnumField?: FTestTopLevelSelection;
}

export interface FtestDetailWithDeclMd2 {
  booleanField?: boolean;
  dateField?: Date;
  dateTimeField?: Date;
  doubleField?: number;
  emailField?: string;
  integerField: number;
  staticEnumField?: FTestTopLevelSelection;
}

export interface FtestTopLevelWithDeclMd3 extends Metadata {
  isProtected?: boolean;
  lookupThatCameBefore?: string;
  masterLabel: string;
}

export interface FtestTopLevelWithCrud extends Metadata {
  isProtected?: boolean;
  masterLabel: string;
  textField?: string;
}

export interface SchedulingObjective extends Metadata {
  isProtected?: boolean;
  masterLabel: string;
  schedulingCategory: SchedulingCategory;
  schedulingObjectiveParameters?: SchedulingObjectiveParameter | SchedulingObjectiveParameter[];
  schedulingObjectiveType: SchedulingObjectiveType;
}

export interface SchedulingObjectiveParameter {
  parameterKey: ObjectiveParameterKey;
  value?: string;
}

export interface FtestTopLevelWithDeclMd2 extends Metadata {
  enumOrIdField?: string;
  isProtected?: boolean;
  lookupField?: string;
  masterLabel: string;
  onOrOffField: FTestOnOffSelection;
  season?: FTestSeasonSelection;
  someUser?: string;
  staticResourceLookup?: string;
  textField?: string;
  urlField?: string;
}

export interface PipelineInspMetricConfig extends Metadata {
  isCumulative: boolean;
  isProtected?: boolean;
  masterLabel: string;
  metric: PipelineInspectionMetric;
}

export interface VirtualVisitConfig extends Metadata {
  comprehendServiceType?: VirtualVisitComprehendServiceType;
  experienceCloudSiteUrl?: string;
  externalMsgServiceIdentifier?: string;
  externalRoleIdentifier?: string;
  externalUserIdentifier?: string;
  isProtected?: boolean;
  masterLabel: string;
  messagingRegion?: string;
  namedCredential?: string;
  storageBucketName?: string;
  usageType?: VirtualVisitUsageType;
  videoCallApptTypeValue?: string;
  videoControlRegion?: string;
  visitRegion?: VirtualVisitVisitRegion;
}

export interface MobileSecurityAssignment extends Metadata {
  connectedApplication?: string;
  isProtected?: boolean;
  masterLabel: string;
  profile?: string;
}

export interface MobileSecurityPolicy extends Metadata {
  effectiveDate?: Date;
  isEnabled: boolean;
  isProtected?: boolean;
  masterLabel: string;
  mobilePlatform?: MobileSecurityMobilePlatform;
  mobileSecurityAssignment?: string;
  ruleValue: string;
  ruleValueType: MobileSecurityPolicyRuleValueType;
  severityLevel: MobileSecurityPolicySeverityLevel;
  type: MobileSecurityPolicyType;
}

export interface LearningAchievementConfig extends Metadata {
  description?: string;
  iconName?: string;
  isProtected?: boolean;
  learningAchievementType: LearningAchievementType;
  learningAchvRecordType: string;
  masterLabel: string;
}

export interface RecordAlertDataSource extends Metadata {
  apexClass?: string;
  isActive?: boolean;
  isProtected?: boolean;
  masterLabel: string;
  type: RecordAlertDataSourceType;
}

export interface DocumentCategory extends Metadata {
  description?: string;
  isProtected?: boolean;
  masterLabel: string;
}

export interface RecAlrtDataSrcExpSetDef extends Metadata {
  expressionSetDefinition: string;
  expressionSetObject: string;
  isActive: boolean;
  isProtected?: boolean;
  masterLabel: string;
  recordAlertDataSource: string;
}

export interface EmployeeDataSyncProfile extends Metadata {
  description?: string;
  employeeDataSyncField?: EmployeeDataSyncField | EmployeeDataSyncField[];
  isActive: boolean;
  isProtected?: boolean;
  masterLabel: string;
}

export interface EmployeeDataSyncField {
  description?: string;
  isActive: boolean;
  isDefault: boolean;
  isRequired: boolean;
  sourceField: string;
  targetField: string;
}

export interface RegisteredExternalService extends Metadata {
  configUrl?: string;
  description?: string;
  documentationUrl?: string;
  extensionPointName?: ExtensionPointName;
  externalServiceProvider: string;
  externalServiceProviderType: RegistryProviderType;
  iconUri?: string;
  isApplication?: boolean;
  isProtected?: boolean;
  masterLabel: string;
}

export interface AccountingFieldMapping extends Metadata {
  accountingModelConfig: string;
  isForAllocationType?: boolean;
  isForPaymentType?: boolean;
  isForTransactionType?: boolean;
  isProtected?: boolean;
  mappingBehavior: MappingBehaviorType;
  masterLabel: string;
  sourceField?: string;
  targetField: string;
}

export interface RecordAlertTemplate extends Metadata {
  description?: string;
  isProtected?: boolean;
  masterLabel: string;
  recordAlertCategory?: string;
  subject?: string;
}

export interface MobSecurityCertPinConfig extends Metadata {
  certificateHash: string;
  domainName: string;
  isEnabled: boolean;
  isProtected?: boolean;
  isSubdomainIncluded: boolean;
  masterLabel: string;
  mobilePlatform?: MobileSecurityMobilePlatform;
  mobileSecurityAssignment?: string;
  severityLevel: MobileSecurityPolicySeverityLevel;
  type: MobileSecurityCertPinType;
}

export interface SemanticModel extends Metadata {
  description?: string;
  isProtected?: boolean;
  masterLabel: string;
  semanticDataObjectReference?: SemanticDataObjectReference | SemanticDataObjectReference[];
  semanticModelContent?: SemanticModelContent | SemanticModelContent[];
}

export interface SemanticDataObjectReference {
  dataObjectName: string;
  dataObjectType: SemanticDataObjectType;
}

export interface SemanticModelContent {
  semanticDefinition?: string;
}

export interface SlackFeatureSettings extends Metadata {
  isProtected?: boolean;
  masterLabel: string;
}

export interface ActionableListDefinition extends Metadata {
  actionableListDatasetColumns?: ActionableListDatasetColumn | ActionableListDatasetColumn[];
  actionableListMemberStatuses?: ActionableListMemberStatus | ActionableListMemberStatus[];
  batchCalcJobDefinition?: string;
  datasetName?: string;
  edgeMart?: string;
  isActive?: boolean;
  isProtected?: boolean;
  masterLabel: string;
  objectName: string;
  sourceType?: ActionableListSourceType;
}

export interface ActionableListDatasetColumn {
  dataDomain?: DatasetColumnDataType;
  dataType?: DatatableDataType;
  displayOrder?: number;
  isDefault?: boolean;
  isGroupedByListDefObj?: boolean;
  objectName?: string;
  sourceColumnApiName?: string;
  sourceFieldName?: string;
}

export interface ActionableListMemberStatus {
  iconName?: string;
  status?: string;
}

export interface CareProviderSearchConfig extends Metadata {
  isActive?: boolean;
  isProtected?: boolean;
  mappedObject: ProviderSearchObjectMapping;
  masterLabel: string;
  sourceField?: string;
  targetField?: string;
}

export interface CareSystemFieldMapping extends Metadata {
  externalIdField?: string;
  isActive?: boolean;
  isProtected?: boolean;
  masterLabel: string;
  role: SourceSystemFieldRole;
  sourceSystem?: string;
  targetObject?: string;
}

export interface CareLimitType extends Metadata {
  isProtected?: boolean;
  limitType?: string;
  masterLabel: string;
  metricType?: CareLimitTypeMetricType;
}

export interface AssessmentConfiguration extends Metadata {
  configuration: AssessmentConfigurationOption;
  isProtected?: boolean;
  masterLabel: string;
  resolution: string;
  type: AssessmentType;
}

export interface SchedulingRule extends Metadata {
  isProtected?: boolean;
  masterLabel: string;
  schedulingCategory: SchedulingCategory;
  schedulingRuleParameters?: SchedulingRuleParameter | SchedulingRuleParameter[];
  schedulingRuleType: SchedulingRuleType;
}

export interface SchedulingRuleParameter {
  schedulingParameterKey: SchedulingParameterKey;
  value?: string;
}

export interface CareProviderAfflRoleConfig extends Metadata {
  affiliationType?: CareProviderAfflType;
  isProtected?: boolean;
  masterLabel: string;
  providerRole?: string;
}

export interface DatasetImportRequest extends Metadata {
  asyncApiJob?: string;
  dataConnector?: string;
  dataFile?: string;
  dataPrepRecipe?: string;
  isProtected?: boolean;
  masterLabel: string;
  user: string;
}

export interface PortalDelegablePermissionSet extends Metadata {
  isProtected?: boolean;
  masterLabel: string;
  permissionSet: string;
  profile: string;
}

export interface RelatedRecordAssocCriteria extends Metadata {
  associationHandlerApexClass?: string;
  associationType: AssociationType;
  description?: string;
  eventType: AssociationEventType;
  isProtected?: boolean;
  masterLabel: string;
  preCondition: string;
  referenceObject: string;
  selectedOwnerField?: string;
  status: AssociationStatusType;
}

export interface DocumentCategoryDocumentType extends Metadata {
  documentCategory: string;
  documentType: string;
  isProtected?: boolean;
  masterLabel: string;
}

export interface SemanticDefinition extends Metadata {
  description?: string;
  isProtected?: boolean;
  masterLabel: string;
  semanticDimension?: SemanticDimension | SemanticDimension[];
  semanticMeasurement?: SemanticMeasurement | SemanticMeasurement[];
  semanticRelationship?: SemanticRelationship | SemanticRelationship[];
  type: SemanticDefinitionType;
}

export interface SemanticDimension {
  dataType: SemanticDimensionDataType;
  expression: string;
}

export interface SemanticMeasurement {
  aggregationType: SemanticAggregationType;
  dataType: SemanticMeasurementDataType;
  decimalPlace: number;
  expression: string;
}

export interface SemanticRelationship {
  joinType: SemanticRelationshipJoinType;
  leftObjectName: string;
  leftObjectType: SemanticDataObjectType;
  rightObjectName: string;
  rightObjectType: SemanticDataObjectType;
  semanticRelationshipCriteria?: SemanticRelationshipCriteria | SemanticRelationshipCriteria[];
}

export interface SemanticRelationshipCriteria {
  leftFieldName: string;
  rightFieldName: string;
}

export interface ShiftSegmentType extends Metadata {
  adherenceThreshold: number;
  category: ShiftSegmentTypeCategory;
  color?: string;
  isActive?: boolean;
  isProtected?: boolean;
  masterLabel: string;
  servicePresenceStatus?: string;
}

export interface PlatformSlackSettings extends Metadata {
  enableSlackService?: boolean;
  enableSlackServiceAlerts?: boolean;
  slackCapabilitiesEnabled?: boolean;
}

export interface DataImportManagementSettings extends Metadata {
  enableDataConnectorHubspot?: boolean;
  enableEasyImport?: boolean;
}

export interface WorkforceEngagementSettings extends Metadata {
  enableHistoricalAdherence?: boolean;
  enableIndividualAdherence?: boolean;
  enableIntradayManagement?: boolean;
  enableMachineLearningForecasting?: boolean;
  enableRealTimeAdherence?: boolean;
  enableWorkforceEngagement?: boolean;
  enableWorkforceEngagementConfiguration?: boolean;
}

export interface KnowledgeGenerationSettings extends Metadata {
  enableKnowledgeGeneration?: boolean;
}

export interface ClaimMgmtFoundationEnabledSettings extends Metadata {
  enableWarrantyClaimMgmt?: boolean;
}

export interface MailMergeSettings extends Metadata {
  enableExtendedMailMerge?: boolean;
  saveMailMergeDocsAsSalesforceDocs?: boolean;
}

export interface AccountingSettings extends Metadata {
  enableAccountingSubledger?: boolean;
  enableFinancePeriod?: boolean;
  enablePaymentMethodAdjust?: boolean;
  enableScheduledJob?: boolean;
}

export interface CollectionsDashboardSettings extends Metadata {
  enableCollectionsDashboard?: boolean;
}

export interface InvLatePymntRiskCalcSettings extends Metadata {
  enableInvLatePymntRiskCalc?: boolean;
}

export interface FTestSettings extends Metadata {
  enableTestPref?: boolean;
}

export interface MediaAdSalesSettings extends Metadata {
  enableMediaAdSales?: boolean;
}

export interface BranchManagementSettings extends Metadata {
  associateAccountWithBranch?: boolean;
}

export interface DynamicFormsSettings extends Metadata {
  enableFormsOnMobile?: boolean;
}

export interface IndustriesPricingSettings extends Metadata {
  enableHighAvailability?: boolean;
  enablePricingWaterfall?: boolean;
  enablePricingWaterfallPersistence?: boolean;
  enableSalesforcePricing?: boolean;
}

export interface FTestAccessSettings extends Metadata {
  enableTestPref?: boolean;
}

export interface CodeBuilderSettings extends Metadata {
  enableCodeBuilder?: boolean;
}

export interface IndustriesContextSettings extends Metadata {
  enableContextDefinitions?: boolean;
}

export interface SandboxSettings extends Metadata {
  disableSandboxExpirationEmails?: boolean;
}

export interface InterestTaggingSettings extends Metadata {
  enableInterestTagging?: boolean;
}

export interface PlatformEventSettings extends Metadata {
  enableEnhancedUsageMetrics?: boolean;
}

export interface AssociationEngineSettings extends Metadata {
  enableAssociationEngine?: boolean;
}

export interface SourceTrackingSettings extends Metadata {
  enableSourceTrackingSandboxes?: boolean;
}

export interface OrgSettings extends Metadata {
  enableCustomerSuccessPortal?: boolean;
  enableIncludeContractStatus?: boolean;
  enableMakeDeploymentsMandatory?: boolean;
  enableManageSelfServiceUsers?: boolean;
  enableOrgFeedSentimentAnalysis?: boolean;
  enableRADeploymentAttributeOnly?: boolean;
  enableResetDivisionOnLogin?: boolean;
}

export interface DevHubSettings extends Metadata {
  devOpsCenterBetaMsa?: boolean;
  enableDevOpsCenter?: boolean;
  enableDevOpsCenterGA?: boolean;
  enablePackaging2?: boolean;
  enableScratchOrgManagementPref?: boolean;
  enableShapeExportPref?: boolean;
}

export interface IncludeEstTaxInQuoteSettings extends Metadata {
  enableQuoteEstimatedTax?: boolean;
}

export interface ReferralMarketingSettings extends Metadata {
  enableMarketingCloudIntegration?: boolean;
}

export interface IndustriesLoyaltySettings extends Metadata {
  enableAutomaticMemberTierAssessmentSelection?: boolean;
  enableAutomaticVoucherCodeGeneration?: boolean;
  enableFixedTypeNQPAggregation?: boolean;
  enableLoyaltyApiAccessForExternalSiteUsers?: boolean;
  enableLoyaltyRedeemedPointsExpirationInfoPref?: boolean;
  enableLoyaltyRulesVerifyCdpMemberSegment?: boolean;
  enableLoyaltyServiceExcellence?: boolean;
  enableNQPRealTimePointBalance?: boolean;
  enableNonQualifyingPointsConsolidation?: boolean;
  enableQPRealTimePointBalance?: boolean;
}

export interface Web3Settings extends Metadata {
  enableMultisig?: boolean;
}

export interface IndustriesUnifiedPromotionsSettings extends Metadata {
  enableUnifiedPromotions?: boolean;
}

export interface PaymentsManagementEnabledSettings extends Metadata {
  paymentsManagementEnabled?: boolean;
}

export interface EinsteinGptSettings extends Metadata {
  enableEinsteinGptPlatform?: boolean;
}

export interface AppAnalyticsSettings extends Metadata {
  enableSimulationMode?: boolean;
}

export interface MapsAndLocationSettings extends Metadata {
  enableAddressAutoComplete?: boolean;
  enableMapsAndLocation?: boolean;
}

export interface OnlineSalesSettings extends Metadata {
  enableSubscriptionAppEnrolled?: boolean;
}

export interface DelegateGroup extends Metadata {
  customObjects?: string | string[];
  groups?: string | string[];
  label: string;
  loginAccess: boolean;
  permissionSetGroups?: string | string[];
  permissionSets?: string | string[];
  profiles?: string | string[];
  roles?: string | string[];
}

export interface DeploymentSettings extends Metadata {
  doesSkipAsyncApexValidation?: boolean;
}

export interface DigitalExperienceBundle extends Metadata {
  description?: string;
  label: string;
  spaceResources?: DigitalExperience | DigitalExperience[];
}

export interface DigitalExperience extends MetadataWithContent {
  fileName: string;
  filePath?: string;
  format: string;
}

export interface MetadataWithContent extends Metadata {
  content?: string;
}

export interface AccessControlPolicy extends MetadataWithContent {
  active: boolean;
  deploymentStatus: ACPStatus;
  description?: string;
  masterLabel: string;
  targetEntity: string;
  version: number;
}

export interface ApexClass extends MetadataWithContent {
  apiVersion: number;
  packageVersions?: PackageVersion | PackageVersion[];
  status: ApexCodeUnitStatus;
}

export interface ApexComponent extends MetadataWithContent {
  apiVersion?: number;
  description?: string;
  label: string;
  packageVersions?: PackageVersion | PackageVersion[];
}

export interface ApexPage extends MetadataWithContent {
  apiVersion: number;
  availableInTouch?: boolean;
  confirmationTokenRequired?: boolean;
  description?: string;
  label: string;
  packageVersions?: PackageVersion | PackageVersion[];
}

export interface ApexTrigger extends MetadataWithContent {
  apiVersion: number;
  packageVersions?: PackageVersion | PackageVersion[];
  status: ApexCodeUnitStatus;
}

export interface Certificate extends MetadataWithContent {
  caSigned: boolean;
  encryptedWithPlatformEncryption?: boolean;
  expirationDate?: Date;
  keySize?: number;
  masterLabel: string;
  privateKeyExportable?: boolean;
}

export interface CodeBundle extends MetadataWithContent {
  apiVersion: number;
  description?: string;
}

export interface ContentAsset extends MetadataWithContent {
  format?: ContentAssetFormat;
  isVisibleByExternalUsers?: boolean;
  language: string;
  masterLabel: string;
  originNetwork?: string;
  relationships?: ContentAssetRelationships;
  versions: ContentAssetVersions;
}

export interface ContentAssetRelationships {
  emailTemplate?: ContentAssetLink | ContentAssetLink[];
  insightsApplication?: ContentAssetLink | ContentAssetLink[];
  network?: ContentAssetLink | ContentAssetLink[];
  organization?: ContentAssetLink;
  workspace?: ContentAssetLink | ContentAssetLink[];
}

export interface ContentAssetLink {
  access: ContentAssetAccess;
  isManagingWorkspace?: boolean;
  name?: string;
}

export interface ContentAssetVersions {
  version?: ContentAssetVersion | ContentAssetVersion[];
}

export interface ContentAssetVersion {
  number: string;
  pathOnClient: string;
  zipEntry?: string;
}

export interface DataPipeline extends MetadataWithContent {
  apiVersion: number;
  label: string;
  scriptType: DataPipelineType;
}

export interface DataWeaveResource extends MetadataWithContent {
  apiVersion: number;
  isGlobal?: boolean;
  isProtected?: boolean;
}

export interface DiscoveryAIModel extends MetadataWithContent {
  algorithmType: DiscoveryAlgorithmType;
  classificationThreshold?: number;
  description?: string;
  label: string;
  modelFields?: DiscoveryModelField | DiscoveryModelField[];
  modelRuntimeType: DiscoveryModelRuntimeType;
  predictedField: string;
  predictionType: DiscoveryPredictionType;
  sourceType: DiscoveryModelSourceType;
  status: DiscoveryAIModelStatus;
  trainingMetrics?: string;
  transformations?: DiscoveryModelTransform | DiscoveryModelTransform[];
}

export interface DiscoveryModelField {
  isDisparateImpact?: boolean;
  isSensitive?: boolean;
  label: string;
  name: string;
  type: DiscoveryModelFieldType;
  values?: string | string[];
}

export interface DiscoveryModelTransform {
  config?: string;
  sourceFieldNames?: string | string[];
  targetFieldNames?: string | string[];
  type: DiscoveryAIModelTransformationType;
}

export interface DiscoveryStory extends MetadataWithContent {
  application: string;
  autopilot?: DiscoveryStoryAutopilotStatus;
  classificationThreshold?: number;
  label: string;
  outcome: DiscoveryStoryOutcome;
  sourceContainer: string;
  sourceType: DiscoveryStorySourceType;
  validationContainer?: string;
}

export interface DiscoveryStoryOutcome {
  failureValue?: string;
  field: string;
  goal: DiscoveryStoryOutcomeGoal;
  label: string;
  successValue?: string;
  type: DiscoveryStoryOutcomeType;
}

export interface Document extends MetadataWithContent {
  description?: string;
  internalUseOnly: boolean;
  keywords?: string;
  name?: string;
  public: boolean;
}

export interface DocumentTemplate extends MetadataWithContent {
  customClassName?: string;
  defaultFontStyle?: string;
  documentConversionResourceName?: string;
  documentGenerationMechanism?: DocumentGenerationMechanism;
  extractOmniDataTransformName?: string;
  fileExtension?: string;
  hasBatchableSection?: boolean;
  isActive?: boolean;
  isSectionProcessed?: boolean;
  lastEmbeddedTmplSectionKey?: string;
  mapperOmniDataTransformName?: string;
  masterLabel?: string;
  name?: string;
  namespace?: string;
  sectionHeaderFontStyle?: string;
  sectionHeaderFontStyleValue?: string;
  shouldDisplayUnmappedToken?: boolean;
  shouldExtractEmbeddedTmplToken?: boolean;
  status?: DocumentTemplateStatus;
  targetTokenItemObject?: TargetTokenItemObject;
  targetTokenObject?: TargetTokenObject;
  tokenList?: string;
  tokenMappingMethodType?: TokenMappingMethodType;
  tokenMappingType: TokenMappingType;
  type: DocumentTemplateType;
  uniqueName?: string;
  usageType?: DocumentTemplateUsageType;
  versionNumber?: string;
  xmlRelationshipMetadata?: string;
}

export interface EclairGeoData extends MetadataWithContent {
  maps?: EclairMap | EclairMap[];
  masterLabel: string;
}

export interface EclairMap {
  boundingBoxBottom?: number;
  boundingBoxLeft?: number;
  boundingBoxRight?: number;
  boundingBoxTop?: number;
  mapLabel?: string;
  mapName: string;
  projection: string;
}

export interface EmailTemplate extends MetadataWithContent {
  apiVersion?: number;
  attachedDocuments?: string | string[];
  attachments?: Attachment | Attachment[];
  available: boolean;
  description?: string;
  encodingKey: Encoding;
  letterhead?: string;
  name: string;
  packageVersions?: PackageVersion | PackageVersion[];
  pageDevName?: string;
  relatedEntityType?: string;
  style: EmailTemplateStyle;
  subject?: string;
  textOnly?: string;
  type: EmailTemplateType;
  uiType?: EmailTemplateUiType;
}

export interface Attachment {
  content: string;
  name: string;
}

export interface FieldServiceMobileExtension extends MetadataWithContent {
  description?: string;
  developerName: string;
  fileName: string;
  masterLabel?: string;
  size?: number;
  version?: number;
}

export interface InboundCertificate extends MetadataWithContent {
  expirationDate: Date;
  issuer: string;
  masterLabel: string;
  serialId: string;
}

export interface NetworkBranding extends MetadataWithContent {
  loginBackgroundImageUrl?: string;
  loginFooterText?: string;
  loginLogo?: string;
  loginLogoName?: string;
  loginPrimaryColor?: string;
  loginQuaternaryColor?: string;
  loginRightFrameUrl?: string;
  network?: string;
  pageFooter?: string;
  pageHeader?: string;
  primaryColor: string;
  primaryComplementColor: string;
  quaternaryColor: string;
  quaternaryComplementColor: string;
  secondaryColor: string;
  staticLogoImageUrl?: string;
  tertiaryColor: string;
  tertiaryComplementColor: string;
  zeronaryColor: string;
  zeronaryComplementColor: string;
}

export interface Orchestration extends MetadataWithContent {
  context: string;
  masterLabel: string;
}

export interface Schema extends MetadataWithContent {
  description?: string;
  schemaContentType: PlatformSchemaContentType;
  sequenceNumber: number;
}

export interface Scontrol extends MetadataWithContent {
  contentSource: SControlContentSource;
  description?: string;
  encodingKey: Encoding;
  fileContent?: string;
  fileName?: string;
  name: string;
  supportsCaching: boolean;
}

export interface SiteDotCom extends MetadataWithContent {
  label: string;
  siteType: SiteType;
}

export interface SlackApp extends MetadataWithContent {
  apiVersion?: number;
  appKey: string;
  appToken: string;
  botScopes?: string;
  clientKey: string;
  clientSecret: string;
  isProtected?: boolean;
  masterLabel: string;
  signingSecret: string;
  userScopes?: string;
}

export interface StaticResource extends MetadataWithContent {
  cacheControl: StaticResourceCacheControl;
  contentType: string;
  description?: string;
}

export interface UiPlugin extends MetadataWithContent {
  description?: string;
  extensionPointIdentifier: string;
  isEnabled: boolean;
  language: string;
  masterLabel: string;
}

export interface UiViewDefinition extends MetadataWithContent {
  type: FlexiPageType;
}

export interface UserAuthCertificate extends MetadataWithContent {
  developerName: string;
  expirationDate?: Date;
  masterLabel: string;
  serialNumber: string;
  user: string;
}

export interface ViewDefinition extends MetadataWithContent {
  apiVersion?: number;
  description?: string;
  isProtected?: boolean;
  masterLabel: string;
  targetType: ViewTargetType;
}

export interface WaveDashboard extends MetadataWithContent {
  application: string;
  dateVersion?: number;
  description?: string;
  masterLabel: string;
  templateAssetSourceName?: string;
}

export interface WaveComponent extends WaveDashboard {}

export interface WaveDataflow extends MetadataWithContent {
  application?: string;
  dataflowType?: string;
  description?: string;
  masterLabel: string;
}

export interface WaveLens extends MetadataWithContent {
  application: string;
  datasets?: string | string[];
  dateVersion?: number;
  description?: string;
  masterLabel: string;
  templateAssetSourceName?: string;
  visualizationType: string;
}

export interface WaveRecipe extends MetadataWithContent {
  application?: string;
  dataflow: string;
  format?: string;
  masterLabel: string;
  securityPredicate?: string;
  targetDatasetAlias?: string;
  templateAssetSourceName?: string;
}

export interface DigitalExperienceConfig extends Metadata {
  label: string;
  site: Site;
  space: string;
}

export interface Site {
  urlPathPrefix?: string;
}

export interface DisclosureDefinition extends Metadata {
  description?: string;
  disclosureType: string;
  isProtected?: boolean;
  masterLabel: string;
}

export interface DisclosureDefinitionVersion extends Metadata {
  description?: string;
  disclosureDefCurrVer?: string;
  disclosureDefinition: string;
  isActive?: boolean;
  isCurrentVersion?: boolean;
  isProtected?: boolean;
  masterLabel: string;
  omniScriptCnfgApiName: string;
  omniScriptConfiguration?: string;
  versionNumber: string;
}

export interface DisclosureType extends Metadata {
  description?: string;
  disclosureBodyLogo?: string;
  disclosureBodyUrl?: string;
  disclosureCategory: string;
  isProtected?: boolean;
  masterLabel: string;
}

export interface DiscoveryGoal extends Metadata {
  active: boolean;
  deployedModels?: DiscoveryDeployedModel | DiscoveryDeployedModel[];
  label: string;
  modelCards?: DiscoveryModelCard | DiscoveryModelCard[];
  outcome: DiscoveryGoalOutcome;
  predictionType: DiscoveryPredictionType;
  pushbackField?: string;
  pushbackType?: DiscoveryPushbackType;
  subscribedEntity?: string;
  terminalStateFilters?: DiscoveryFilter | DiscoveryFilter[];
}

export interface DiscoveryDeployedModel {
  active: boolean;
  aiModel: string;
  classificationThreshold?: number;
  fieldMappings?: DiscoveryFieldMap | DiscoveryFieldMap[];
  filters?: DiscoveryFilter | DiscoveryFilter[];
  label: string;
  name: string;
  prescribableFields?: DiscoveryPrescribableField | DiscoveryPrescribableField[];
}

export interface DiscoveryFieldMap {
  mappedField: string;
  modelField: string;
  sobjectFieldJoinKey?: string;
  source?: string;
  sourceFieldJoinKey?: string;
  sourceType: DiscoveryFieldMapSourceType;
}

export interface DiscoveryFilter {
  field: string;
  operator: DiscoveryFilterOperator;
  type?: DiscoveryFilterFieldType;
  values?: DiscoveryFilterValue | DiscoveryFilterValue[];
}

export interface DiscoveryFilterValue {
  type: DiscoveryFilterValueType;
  value: string;
}

export interface DiscoveryPrescribableField {
  customDefinitions?: DiscoveryCustomPrescribableFieldDefinition | DiscoveryCustomPrescribableFieldDefinition[];
  name: string;
}

export interface DiscoveryCustomPrescribableFieldDefinition {
  filters?: DiscoveryFilter | DiscoveryFilter[];
  template?: string;
}

export interface DiscoveryModelCard {
  contactEmail?: string;
  contactName?: string;
  label?: string;
  sections?: string;
}

export interface DiscoveryGoalOutcome {
  field: string;
  fieldLabel: string;
  goal: DiscoveryOutcomeGoal;
  mappedField?: string;
}

export interface DiscoverySettings extends Metadata {
  enableEinsteinAnswersPref?: boolean;
  enableEinsteinArticleRecommendations?: boolean;
}

export interface DocumentChecklistSettings extends Metadata {
  dciCustomSharing?: boolean;
  deleteDCIWithFiles?: boolean;
}

export interface DocumentGenerationSetting extends Metadata {
  batchDocGnrnPctLimitPerHour?: number;
  documentTemplateLibraryName: string;
  generationMechanism?: GenerationMechanism;
  guestAccessNamedCredential?: string;
  isBatchDocGnrnEnabled?: boolean;
  isServerSideDocGenEnabled?: boolean;
  masterLabel: string;
  previewType?: PreviewType;
}

export interface DocumentType extends Metadata {
  description?: string;
  isActive: boolean;
  masterLabel: string;
}

export interface DuplicateRule extends Metadata {
  actionOnInsert: DupeActionType;
  actionOnUpdate: DupeActionType;
  alertText?: string;
  description?: string;
  duplicateRuleFilter?: DuplicateRuleFilter;
  duplicateRuleMatchRules?: DuplicateRuleMatchRule | DuplicateRuleMatchRule[];
  isActive: boolean;
  masterLabel: string;
  operationsOnInsert?: string | string[];
  operationsOnUpdate?: string | string[];
  securityOption: DupeSecurityOptionType;
  sortOrder: number;
}

export interface DuplicateRuleFilter {
  booleanFilter?: string;
  duplicateRuleFilterItems?: DuplicateRuleFilterItem | DuplicateRuleFilterItem[];
}

export interface DuplicateRuleMatchRule {
  matchRuleSObjectType: string;
  matchingRule: string;
  objectMapping?: ObjectMapping;
}

export interface EACSettings extends Metadata {
  addRcCompToFlexiPages?: boolean;
  autoPopulateGoogleMeetLinks?: boolean;
  automatedEmailFilter?: boolean;
  dSThresholdNotification?: boolean;
  enableActivityAnalyticsPref?: boolean;
  enableActivityCapture?: boolean;
  enableActivityMetrics?: boolean;
  enableActivitySyncEngine?: boolean;
  enableEACForEveryonePref?: boolean;
  enableEnforceEacSharingPref?: boolean;
  enableInboxActivitySharing?: boolean;
  enableInsightsInTimeline?: boolean;
  enableInsightsInTimelineEacStd?: boolean;
  enableUnifiedActivitiesPref?: boolean;
  provisionProductivityFeatures?: boolean;
  salesforceEventsOnlyPref?: boolean;
  sensitiveEmailFilter?: boolean;
  showEACCalendarPref?: boolean;
  syncInternalEvents?: boolean;
}

export interface ESignatureConfig extends Metadata {
  configType?: ConfigType;
  configValue?: string;
  description?: string;
  groupType?: ConfigGroup;
  masterLabel: string;
  vendor: Vendor;
}

export interface ESignatureEnvelopeConfig extends Metadata {
  expirationPeriod?: number;
  expirationWarningPeriod?: number;
  firstReminderPeriod?: number;
  isExpirationEnabled?: boolean;
  isReminderEnabled?: boolean;
  isVendorDefaultNtfcnEnabled?: boolean;
  masterLabel: string;
  reminderIntervalPeriod?: number;
  targetObjectName: string;
  vendor: Vendor;
  vendorAccountIdentifier?: string;
}

export interface EditionDefinition extends Metadata {
  cloudServiceProvider?: string;
  defaultLicenseDuration?: number;
  defaultStatus?: DefaultLicenseStatus;
  description?: string;
  includedPlatformLicenseDefinitions?: IncludedPlatformLicenseDefinition | IncludedPlatformLicenseDefinition[];
  includedUserLicenseDefinitions?: IncludedUserLicenseDefinition | IncludedUserLicenseDefinition[];
  licenseOwner?: string;
  managementServiceProvider?: string;
  managementTenantId?: string;
  name: string;
}

export interface EinsteinAgentSettings extends Metadata {
  einsteinAgentRecommendations?: boolean;
  reRunAttributeBasedRules?: boolean;
  runAssignmentRules?: boolean;
  summarizationRecs?: boolean;
  voiceWrapUpRecs?: boolean;
}

export interface EinsteinAssistantSettings extends Metadata {
  enableEinsteinAssistantDataExtractionEnabled?: boolean;
  enableEinsteinAssistantEnabled?: boolean;
  enableEinsteinEnableVoiceLogging?: boolean;
}

export interface EinsteinDealInsightsSettings extends Metadata {
  enableUnlikelyToCloseThisMonth?: boolean;
}

export interface EinsteinDocumentCaptureSettings extends Metadata {
  enableEinsteinDocumentReader?: boolean;
}

export interface EmailAdministrationSettings extends Metadata {
  enableComplianceBcc?: boolean;
  enableEmailConsentManagement?: boolean;
  enableEmailSenderIdCompliance?: boolean;
  enableEmailSpfCompliance?: boolean;
  enableEmailToSalesforce?: boolean;
  enableEmailTrackingIPBlocklist?: boolean;
  enableEmailWorkflowApproval?: boolean;
  enableEnhancedEmailEnabled?: boolean;
  enableHandleBouncedEmails?: boolean;
  enableHtmlEmail?: boolean;
  enableInternationalEmailAddresses?: boolean;
  enableListEmailLogActivities?: boolean;
  enableResendBouncedEmails?: boolean;
  enableRestrictTlsToDomains?: boolean;
  enableSendThroughGmailPref?: boolean;
  enableSendViaExchangePref?: boolean;
  enableSendViaGmailPref?: boolean;
  enableUseOrgFootersForExtTrans?: boolean;
  enableVerifyEmailDomainByDkim?: boolean;
  sendEmailsEvenWhenAutomationUpdatesSameRecord?: boolean;
  sendMassEmailNotification?: boolean;
  sendTextOnlySystemEmails?: boolean;
}

export interface EmailIntegrationSettings extends Metadata {
  doesEmailLogAsEmailMessageInOutlook?: boolean;
  doesGmailStayConnectedToSalesforce?: boolean;
  enableContactAndEventSync?: boolean;
  enableEmailTrackingInMobile?: boolean;
  enableEngageForOutlook?: boolean;
  enableExtensionHostUnrestricted?: boolean;
  enableGmailIntegration?: boolean;
  enableInboxInternalEmailTracking?: boolean;
  enableInboxMobileIntune?: boolean;
  enableOutlookIntegration?: boolean;
  enableOutlookMobileIntegration?: boolean;
  enableProductivityFeatures?: boolean;
  enableSupplementalContactInfoInMobile?: boolean;
  isLayoutCustomizationAllowed?: boolean;
  orgIsSyncingEventsOutbound?: boolean;
  shouldUseTrustedDomainsList?: boolean;
}

export interface EmailServicesFunction extends Metadata {
  apexClass: string;
  attachmentOption: EmailServicesAttOptions;
  authenticationFailureAction: EmailServicesErrorAction;
  authorizationFailureAction: EmailServicesErrorAction;
  authorizedSenders?: string;
  emailServicesAddresses?: EmailServicesAddress | EmailServicesAddress[];
  errorRoutingAddress?: string;
  functionInactiveAction: EmailServicesErrorAction;
  functionName: string;
  isActive?: boolean;
  isAuthenticationRequired?: boolean;
  isErrorRoutingEnabled?: boolean;
  isTextAttachmentsAsBinary?: boolean;
  isTlsRequired?: boolean;
  overLimitAction: EmailServicesErrorAction;
}

export interface EmailServicesAddress {
  authorizedSenders?: string;
  developerName: string;
  isActive?: boolean;
  localPart: string;
  runAsUser: string;
}

export interface EmailTemplateSettings extends Metadata {
  enableTemplateEnhancedFolderPref?: boolean;
}

export interface EmbeddedServiceBranding extends Metadata {
  contrastInvertedColor?: string;
  contrastPrimaryColor?: string;
  embeddedServiceConfig: string;
  font?: string;
  height?: number;
  masterLabel: string;
  navBarColor?: string;
  navBarTextColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  secondaryNavBarColor?: string;
  width?: number;
}

export interface EmbeddedServiceConfig extends Metadata {
  areGuestUsersAllowed?: boolean;
  authMethod?: EmbeddedServiceAuthMethod;
  branding?: string;
  deploymentFeature: EmbeddedServiceDeploymentFeature;
  deploymentType: EmbeddedServiceDeploymentType;
  embeddedServiceAppointmentSettings?: EmbeddedServiceAppointmentSettings;
  embeddedServiceCustomComponents?: EmbeddedServiceCustomComponent | EmbeddedServiceCustomComponent[];
  embeddedServiceCustomLabels?: EmbeddedServiceCustomLabel | EmbeddedServiceCustomLabel[];
  embeddedServiceCustomizations?: EmbeddedServiceCustomization | EmbeddedServiceCustomization[];
  embeddedServiceFlowConfig?: EmbeddedServiceFlowConfig;
  embeddedServiceFlows?: EmbeddedServiceFlow | EmbeddedServiceFlow[];
  embeddedServiceLayouts?: EmbeddedServiceLayout | EmbeddedServiceLayout[];
  isEnabled?: boolean;
  isTermsAndConditionsEnabled?: boolean;
  isTermsAndConditionsRequired?: boolean;
  masterLabel: string;
  shouldHideAuthDialog?: boolean;
  site?: string;
}

export interface EmbeddedServiceAppointmentSettings {
  appointmentConfirmImg?: string;
  enabled: boolean;
  homeImg?: string;
  logoImg?: string;
  shouldShowExistingAppointment?: boolean;
  shouldShowNewAppointment?: boolean;
}

export interface EmbeddedServiceCustomComponent {
  componentBundleType?: EmbeddedServiceComponentBundleType;
  customComponent?: string;
  customComponentType?: EmbeddedServiceCustomComponentType;
}

export interface EmbeddedServiceCustomLabel {
  customLabel?: string;
  feature?: EmbeddedServiceFeature;
  labelKey?: EmbeddedServiceLabelKey;
}

export interface EmbeddedServiceCustomization {
  customizationName: string;
  description?: string;
  embeddedServiceResources?: EmbeddedServiceResource | EmbeddedServiceResource[];
}

export interface EmbeddedServiceResource {
  resource: string;
  resourceType: EmbeddedServiceResourceType;
}

export interface EmbeddedServiceFlowConfig extends Metadata {
  enabled: boolean;
}

export interface EmbeddedServiceFlow {
  flow: string;
  flowType: EmbeddedServiceFlowType;
  isAuthenticationRequired: boolean;
}

export interface EmbeddedServiceLayout {
  embeddedServiceLayoutRules?: EmbeddedServiceLayoutRule | EmbeddedServiceLayoutRule[];
  layout: string;
  layoutType?: EmbeddedServiceLayoutType;
}

export interface EmbeddedServiceLayoutRule {
  appointmentStatus: string;
}

export interface EmbeddedServiceFieldService extends Metadata {
  embeddedServiceConfig: string;
  enabled: boolean;
  fieldServiceConfirmCardImg?: string;
  fieldServiceHomeImg?: string;
  fieldServiceLogoImg?: string;
  masterLabel: string;
  shouldShowExistingAppointment?: boolean;
  shouldShowNewAppointment?: boolean;
}

export interface EmbeddedServiceLiveAgent extends Metadata {
  avatarImg?: string;
  embeddedServiceConfig: string;
  embeddedServiceQuickActions?: EmbeddedServiceQuickAction | EmbeddedServiceQuickAction[];
  enabled: boolean;
  fontSize: EmbeddedServiceFontSize;
  isOfflineCaseEnabled?: boolean;
  isQueuePositionEnabled?: boolean;
  liveAgentChatUrl?: string;
  liveAgentContentUrl?: string;
  liveChatButton: string;
  liveChatDeployment: string;
  masterLabel: string;
  offlineCaseBackgroundImg?: string;
  prechatBackgroundImg?: string;
  prechatEnabled: boolean;
  prechatJson?: string;
  scenario: EmbeddedServiceScenario;
  smallCompanyLogoImg?: string;
  waitingStateBackgroundImg?: string;
}

export interface EmbeddedServiceQuickAction {
  embeddedServiceLiveAgent: string;
  order: number;
  quickActionDefinition: string;
  quickActionType?: EmbeddedServiceQuickActionType;
}

export interface EmbeddedServiceMenuSettings extends Metadata {
  branding?: string;
  embeddedServiceCustomLabels?: EmbeddedServiceCustomLabel | EmbeddedServiceCustomLabel[];
  embeddedServiceCustomizations?: EmbeddedServiceCustomization | EmbeddedServiceCustomization[];
  embeddedServiceMenuItems?: EmbeddedServiceMenuItem | EmbeddedServiceMenuItem[];
  isEnabled?: boolean;
  masterLabel?: string;
  site?: string;
}

export interface EmbeddedServiceMenuItem {
  channel?: string;
  channelType?: EmbeddedServiceChannelType;
  customUrl?: string;
  displayOrder?: number;
  embeddedServiceCustomLabels?: EmbeddedServiceCustomLabel | EmbeddedServiceCustomLabel[];
  iconUrl?: string;
  isDisplayedOnPageLoad: boolean;
  itemName: string;
  osOptionsHideInIOS?: boolean;
  osOptionsHideInLinuxOS?: boolean;
  osOptionsHideInMacOS?: boolean;
  osOptionsHideInOtherOS?: boolean;
  osOptionsHideInWindowsOS?: boolean;
  phoneNumber?: string;
  shouldOpenUrlInSameTab?: boolean;
}

export interface EmployeeFieldAccessSettings extends Metadata {
  enableEmployeeFieldMaskDefaults?: boolean;
  enableEmployeeFieldMasking?: boolean;
}

export interface EmployeeUserSettings extends Metadata {
  emailEncoding: string;
  enableEmployeeAutoCreateUser?: boolean;
  enableEmployeeIsSourceOfTruth?: boolean;
  permset?: string;
  profile: string;
  usernameSuffix?: string;
}

export interface EncryptionKeySettings extends Metadata {
  canOptOutOfDerivationWithBYOK?: boolean;
  enableBringYourOwnkms?: boolean;
  enableCacheOnlyKeys?: boolean;
  enableReplayDetection?: boolean;
}

export interface EnhancedNotesSettings extends Metadata {
  enableEnhancedNotes?: boolean;
  enableTasksOnEnhancedNotes?: boolean;
}

export interface EntitlementProcess extends Metadata {
  SObjectType?: string;
  active?: boolean;
  businessHours?: string;
  description?: string;
  entryStartDateField?: string;
  exitCriteriaBooleanFilter?: string;
  exitCriteriaFilterItems?: FilterItem | FilterItem[];
  exitCriteriaFormula?: string;
  isRecordTypeApplied?: boolean;
  isVersionDefault?: boolean;
  milestones?: EntitlementProcessMilestoneItem | EntitlementProcessMilestoneItem[];
  name?: string;
  recordType?: string;
  versionMaster?: string;
  versionNotes?: string;
  versionNumber?: number;
}

export interface EntitlementProcessMilestoneItem {
  businessHours?: string;
  criteriaBooleanFilter?: string;
  milestoneCriteriaFilterItems?: FilterItem | FilterItem[];
  milestoneCriteriaFormula?: string;
  milestoneName?: string;
  minutesCustomClass?: string;
  minutesToComplete?: number;
  successActions?: WorkflowActionReference | WorkflowActionReference[];
  timeTriggers?: EntitlementProcessMilestoneTimeTrigger | EntitlementProcessMilestoneTimeTrigger[];
  useCriteriaStartTime?: boolean;
}

export interface EntitlementProcessMilestoneTimeTrigger {
  actions?: WorkflowActionReference | WorkflowActionReference[];
  timeLength?: number;
  workflowTimeTriggerUnit: MilestoneTimeUnits;
}

export interface EntitlementSettings extends Metadata {
  assetLookupLimitedToActiveEntitlementsOnAccount?: boolean;
  assetLookupLimitedToActiveEntitlementsOnContact?: boolean;
  assetLookupLimitedToSameAccount?: boolean;
  assetLookupLimitedToSameContact?: boolean;
  enableEntitlementVersioning: boolean;
  enableEntitlements: boolean;
  enableMilestoneFeedItem?: boolean;
  enableMilestoneStoppedTime?: boolean;
  entitlementLookupLimitedToActiveStatus?: boolean;
  entitlementLookupLimitedToSameAccount?: boolean;
  entitlementLookupLimitedToSameAsset?: boolean;
  entitlementLookupLimitedToSameContact?: boolean;
  ignoreMilestoneBusinessHours?: boolean;
}

export interface EntitlementTemplate extends Metadata {
  businessHours?: string;
  casesPerEntitlement?: number;
  entitlementProcess?: string;
  isPerIncident?: boolean;
  term?: number;
  type?: string;
}

export interface EntityImplements extends Metadata {
  fieldImplements?: FieldImplements | FieldImplements[];
  isDefault?: boolean;
  isFullyMapped?: boolean;
}

export interface FieldImplements {
  field?: string;
  interfaceField?: string;
}

export interface EscalationRule extends Metadata {
  active?: boolean;
  ruleEntry?: RuleEntry | RuleEntry[];
}

export interface EscalationRules extends Metadata {
  escalationRule?: EscalationRule | EscalationRule[];
}

export interface EssentialsSettings extends Metadata {
  emailConnectorEnabled?: boolean;
}

export interface EventDelivery extends Metadata {
  eventParameters?: EventParameterMap | EventParameterMap[];
  eventSubscription: string;
  referenceData?: string;
  type: EventDeliveryType;
}

export interface EventParameterMap {
  parameterName: string;
  parameterValue?: string;
}

export interface EventRelayConfig extends Metadata {
  destinationResourceName: string;
  eventChannel: string;
  label?: string;
  relayOption?: string;
  state?: EventRelayAdminState;
  usageType?: EventRelayUsageType;
}

export interface EventSettings extends Metadata {
  bypassMeteringBlock?: boolean;
  enableApexLimitEvents?: boolean;
  enableDeleteMonitoringData?: boolean;
  enableDynamicStreamingChannel?: boolean;
  enableEventLogGeneration?: boolean;
  enableEventLogWaveIntegration?: boolean;
  enableLoginForensics?: boolean;
  enableStreamingApi?: boolean;
  enableTransactionSecurityPolicies?: boolean;
}

export interface EventSubscription extends Metadata {
  active?: boolean;
  eventParameters?: EventParameterMap | EventParameterMap[];
  eventType: string;
  referenceData: string;
}

export interface ExperienceBundle extends Metadata {
  experienceResources?: ExperienceResources;
  label: string;
  type: SiteType;
  urlPathPrefix?: string;
}

export interface ExperienceResources {
  experienceResource?: ExperienceResource | ExperienceResource[];
}

export interface ExperienceResource {
  fileName: string;
  format: string;
  source?: string;
  type: string;
}

export interface ExperienceBundleSettings extends Metadata {
  enableExperienceBundleMetadata?: boolean;
}

export interface ExperienceContainer extends Metadata {
  masterLabel: string;
  space: string;
  type: ExperienceContainerType;
}

export interface ExperiencePropertyTypeBundle extends Metadata {
  description?: string;
  masterLabel: string;
  resources?: ExperiencePropertyTypeBundleResource | ExperiencePropertyTypeBundleResource[];
}

export interface ExperiencePropertyTypeBundleResource {
  fileName: string;
  filePath: string;
  source: string;
}

export interface ExplainabilityActionDefinition extends Metadata {
  actionLogSchemaType: ActionLogSchemaType;
  applicationSubtype: string;
  applicationType: EASAppType;
  description?: string;
  internal: boolean;
  masterLabel: string;
  processType: string;
}

export interface ExplainabilityActionVersion extends Metadata {
  actionLogMessageTemplate?: string;
  actionSpecification: string;
  active: boolean;
  definitionVersion: number;
  description?: string;
  explainabilityActionDef: string;
  masterLabel: string;
}

export interface ExplainabilityMsgTemplate extends Metadata {
  evaluationResult: EvaluationResult;
  expressionSetStepType: ExpressionSetStepType;
  isDefault?: boolean;
  masterLabel: string;
  message: string;
}

export interface ExpressionSetDefinition extends Metadata {
  contextDefinitions?: string | string[];
  description?: string;
  interfaceSourceType?: ExpsSetInterfaceSourceType;
  label: string;
  processType?: ExpsSetProcessType;
  template?: boolean;
  versions?: ExpressionSetDefinitionVersion | ExpressionSetDefinitionVersion[];
}

export interface ExpressionSetDefinitionVersion extends Metadata {
  description?: string;
  endDate?: Date;
  expressionSetDefinition?: string;
  label: string;
  shouldShowExplExternally?: boolean;
  startDate: Date;
  status: ExpsSetStatus;
  steps?: ExpressionSetStep | ExpressionSetStep[];
  uiTier?: boolean;
  variables?: ExpressionSetVariable | ExpressionSetVariable[];
  versionNumber: number;
}

export interface ExpressionSetStep {
  actionType?: BusinessKnowledgeModel;
  advancedCondition?: ExpressionSetAdvancedCondition;
  aggregation?: ExpressionSetAggregation;
  assignment?: ExpressionSetAssignment;
  conditionExpression?: ExpressionSetConditionExpression;
  customElement?: ExpressionSetCustomElement;
  decisionTable?: ExpressionSetDecisionTable;
  description?: string;
  failedExplainerTemplate?: string;
  failedMessageTokenMappings?: ExplainabilityMessageTemplateTokenMapping | ExplainabilityMessageTemplateTokenMapping[];
  label: string;
  name: string;
  noResultExplainerTemplate?: string;
  noResultMessageTokenMappings?:
    | ExplainabilityMessageTemplateTokenMapping
    | ExplainabilityMessageTemplateTokenMapping[];
  parentStep?: string;
  passedExplainerTemplate?: string;
  passedMessageTokenMappings?: ExplainabilityMessageTemplateTokenMapping | ExplainabilityMessageTemplateTokenMapping[];
  resultIncluded?: boolean;
  sequenceNumber: number;
  shouldExposExecPathMsgOnly?: boolean;
  shouldExposeConditionDetails?: boolean;
  shouldShowExplExternally?: boolean;
  stepType: ExpsSetStepType;
  subExpression?: ExpressionSetSubExpression;
}

export interface ExpressionSetAdvancedCondition {
  conditionLogic: string;
  criteria?: ExpressionSetConditionCriteria | ExpressionSetConditionCriteria[];
  errorMessage?: string;
  resultParameter?: string;
  successMessage?: string;
}

export interface ExpressionSetConditionCriteria {
  operator: ExpsSetConditionOperator;
  sequenceNumber: number;
  sourceFieldName: string;
  value?: string;
  valueType?: ExpsSetValueType;
}

export interface ExpressionSetAggregation {
  aggergatedParameter: string;
  aggregateFunction: ExpsSetAggregationFunction;
  expression: string;
}

export interface ExpressionSetAssignment {
  assignedParameter: string;
  expression: string;
}

export interface ExpressionSetConditionExpression {
  errorMessage?: string;
  expression: string;
  resultParameter?: string;
  successMessage?: string;
}

export interface ExpressionSetCustomElement {
  parameters?: ExpressionSetElementParameter | ExpressionSetElementParameter[];
}

export interface ExpressionSetElementParameter {
  input: boolean;
  name: string;
  output: boolean;
  type?: ExpsSetValueType;
  value: string;
}

export interface ExpressionSetDecisionTable {
  decisionTableName: string;
  mappings?: ExpressionSetElementParameter | ExpressionSetElementParameter[];
  type: string;
}

export interface ExplainabilityMessageTemplateTokenMapping {
  expressionSetMessageToken: string;
  resourceReference: string;
}

export interface ExpressionSetSubExpression {
  expressionSet: string;
}

export interface ExpressionSetVariable {
  collection?: boolean;
  dataType: ExpsSetDataType;
  decimalPlaces?: number;
  description?: string;
  fields?: ExpressionSetVariableField | ExpressionSetVariableField[];
  input?: boolean;
  lookupName?: string;
  lookupType?: ExpsSetVariableLookupType;
  name: string;
  objectName?: string;
  output?: boolean;
  resultStep?: string;
  type: ExpsSetVariableType;
  value?: string;
}

export interface ExpressionSetVariableField {
  dataType: ExpsSetDataType;
  decimalPlaces?: number;
  fields?: ExpressionSetVariableField | ExpressionSetVariableField[];
  lookupName?: string;
  lookupType?: ExpsSetVariableLookupType;
  name: string;
  objectName?: string;
}

export interface ExpressionSetMessageToken extends Metadata {
  description?: string;
  developerName: string;
  masterLabel: string;
}

export interface ExpressionSetObjectAlias extends Metadata {
  dataType: ExpsSetObjectDataType;
  mappings?: ExpressionSetObjectAliasField | ExpressionSetObjectAliasField[];
  objectApiName: string;
  usageType: ExpsSetProcessType;
}

export interface ExpressionSetObjectAliasField {
  dataType?: ExpsSetDataType;
  decimalScale?: number;
  fieldAlias: string;
  sourceFieldName: string;
}

export interface ExternalAIModel extends Metadata {
  applicationSourceType: ApplicationSourceType;
  externalModelKey: string;
  externalModelStatus: ExternalModelStatus;
  name: string;
  threshold?: number;
  trainingJobName?: string;
}

export interface ExternalClientAppSettings extends Metadata {
  enableConsumerSecretApiAccess?: boolean;
  enableExternalClientApps?: boolean;
}

export interface ExternalClientApplication extends Metadata {
  contactEmail?: string;
  contactPhone?: string;
  description?: string;
  distributionState?: ExtlClntAppDistState;
  iconUrl?: string;
  infoUrl?: string;
  isProtected?: boolean;
  label?: string;
  logoUrl?: string;
  orgScopedExternalApp?: string;
}

export interface ExternalCredential extends Metadata {
  authenticationProtocol: AuthenticationProtocol;
  description?: string;
  externalCredentialParameters?: ExternalCredentialParameter | ExternalCredentialParameter[];
  label: string;
}

export interface ExternalCredentialParameter {
  authProvider?: string;
  certificate?: string;
  description?: string;
  parameterGroup?: string;
  parameterName: string;
  parameterType: ExternalCredentialParamType;
  parameterValue?: string;
  sequenceNumber?: number;
}

export interface ExternalDataConnector extends Metadata {
  dataConnectionStatus: DataConnectionStatus;
  dataConnectorConfiguration: string;
  dataConnectorType: DataConnectorType;
  dataPlatform: string;
  externalDataTranObjects?: ExternalDataTranObject | ExternalDataTranObject[];
  masterLabel: string;
}

export interface ExternalDataTranObject extends Metadata {
  availabilityStatus: AvailabilityStatus;
  creationType: DefinitionCreationType;
  externalDataTranFields?: ExternalDataTranField | ExternalDataTranField[];
  masterLabel: string;
  mktDataTranObject?: string;
  objectCategory: string;
}

export interface ExternalDataTranField extends Metadata {
  creationType?: DefinitionCreationType;
  datatype: string;
  dateFormat?: string;
  externalName?: string;
  isDataRequired?: boolean;
  length?: number;
  masterLabel: string;
  mktDataTranField?: string;
  precision?: number;
  primaryIndexOrder?: number;
  scale?: number;
  sequence?: number;
}

export interface ExternalDataSource extends Metadata {
  authProvider?: string;
  certificate?: string;
  customConfiguration?: string;
  customHttpHeaders?: CustomHttpHeader | CustomHttpHeader[];
  endpoint?: string;
  externalDataSrcDescriptors?: ExternalDataSrcDescriptor | ExternalDataSrcDescriptor[];
  isWritable?: boolean;
  label: string;
  namedCredential?: string;
  oauthRefreshToken?: string;
  oauthScope?: string;
  oauthToken?: string;
  password?: string;
  principalType: ExternalPrincipalType;
  protocol: AuthenticationProtocol;
  repository?: string;
  type: ExternalDataSourceType;
  username?: string;
  version?: string;
}

export interface CustomHttpHeader {
  description?: string;
  headerFieldName: string;
  headerFieldValue: string;
  isActive?: boolean;
}

export interface ExternalDataSrcDescriptor extends Metadata {
  customObject?: string;
  descriptor: string;
  descriptorVersion?: string;
  developerName: string;
  externalDataSource: string;
  subtype: ExternalDataSrcDescSubtype;
  systemVersion: number;
  type: ExternalDataSrcDescType;
}

export interface ExternalDocStorageConfig extends Metadata {
  documentPath: string;
  externalDocStorageIdentifier: string;
  masterLabel: string;
  namedCredential: string;
  recordType?: string;
  storageDriveType: StorageDriveType;
  targetObject: TargetObject;
}

export interface ExternalServiceRegistration extends Metadata {
  description?: string;
  label: string;
  namedCredential?: string;
  namedCredentialReference?: string;
  operations?: ExternalServiceOperation | ExternalServiceOperation[];
  providerAssetEndpoint?: string;
  registrationProviderType?: ExternalServiceRegistrationProviderType;
  schema?: string;
  schemaAbsoluteUrl?: string;
  schemaType?: string;
  schemaUploadFileExtension?: string;
  schemaUploadFileName?: string;
  schemaUrl?: string;
  serviceBinding?: string;
  serviceDescriptor?: string;
  status: string;
  systemVersion?: number;
}

export interface ExternalServiceOperation {
  active: boolean;
  name: string;
}

export interface ExtlClntAppGlobalOauthSettings extends Metadata {
  callbackUrl?: string;
  consumerKey?: string;
  consumerSecret?: string;
  externalClientApplication: string;
  idTokenConfig?: ExternalAppIdTokenConfig;
  isConsumerSecretOptional?: boolean;
  isIntrospectAllTokens?: boolean;
  isPkceRequired?: boolean;
  isSecretRequiredForRefreshToken?: boolean;
  label?: string;
  shouldRotateConsumerKey?: boolean;
  shouldRotateConsumerSecret?: boolean;
}

export interface ExternalAppIdTokenConfig {
  idTokenAudience?: string;
  idTokenIncludeAttributes?: boolean;
  idTokenIncludeStandardClaims?: boolean;
  idTokenValidityInMinutes?: number;
}

export interface ExtlClntAppMobileConfigurablePolicies extends Metadata {
  externalClientApplication: string;
  label?: string;
  screenLockTimeout: ScreenLockTimeout;
}

export interface ExtlClntAppMobileSettings extends Metadata {
  externalClientApplication: string;
  isScreenLockEnabled: boolean;
  label?: string;
}

export interface ExtlClntAppOauthConfigurablePolicies extends Metadata {
  commaSeparatedPermissionSet?: string;
  customAttributes?: ExtlClntAppOauthPoliciesAttribute | ExtlClntAppOauthPoliciesAttribute[];
  externalClientApplication: string;
  ipRelaxationPolicyType?: string;
  label?: string;
  permittedUsersPolicyType?: PermittedUsersPolicyType;
  policyAction?: PolicyAction;
  refreshTokenPolicyType?: RefreshTokenPolicyType;
  refreshTokenValidityPeriod?: number;
  refreshTokenValidityUnit?: string;
  requiredSessionLevel?: SessionSecurityLevel;
  sessionTimeoutInMinutes?: number;
  singleLogoutUrl?: string;
  startUrl?: string;
}

export interface ExtlClntAppOauthPoliciesAttribute {
  formula: string;
  key: string;
}

export interface ExtlClntAppOauthSettings extends Metadata {
  commaSeparatedOauthScopes?: string;
  customAttributes?: ExtlClntAppOauthSettingsAttribute | ExtlClntAppOauthSettingsAttribute[];
  externalClientApplication: string;
  label?: string;
  oauthLink?: string;
  singleLogoutUrl?: string;
  trustedIpRanges?: ExtlClntAppOauthIpRange | ExtlClntAppOauthIpRange[];
}

export interface ExtlClntAppOauthSettingsAttribute {
  formula: string;
  key: string;
}

export interface ExtlClntAppOauthIpRange {
  description?: string;
  endIpAddress: string;
  startIpAddress: string;
}

export interface ExtlClntAppSampleConfigurablePolicies extends Metadata {
  adminOnlyPolicy?: string;
  externalClientApplication: string;
  label: string;
  policy1?: string;
  policy2?: string;
}

export interface ExtlClntAppSampleSettings extends Metadata {
  devicePlatform: DevicePlatformType;
  deviceType: DeviceType;
  externalClientApplication: string;
  label: string;
  minimumOsVersion?: string;
  policy1?: string;
  policy1DevManaged?: boolean;
  policy2?: string;
  policy2DevManaged?: boolean;
  version?: string;
}

export interface FTestFieldMappingMd extends Metadata {
  label: string;
}

export interface FTestToolingFLU extends Metadata {
  int: number;
  stringWithDifferentName: string;
  text2?: string;
}

export interface FeatureParameterBoolean extends Metadata {
  dataflowDirection: FeatureParameterDataflowDirection;
  masterLabel: string;
  value: boolean;
}

export interface FeatureParameterDate extends Metadata {
  dataflowDirection: FeatureParameterDataflowDirection;
  masterLabel: string;
  value: Date;
}

export interface FeatureParameterInteger extends Metadata {
  dataflowDirection: FeatureParameterDataflowDirection;
  masterLabel: string;
  value: number;
}

export interface FieldRestrictionRule extends Metadata {
  active: boolean;
  classification?: string | string[];
  classificationType?: ClassificationType;
  description?: string;
  enforcementType: EnforcementType;
  masterLabel: string;
  recordFilter: string;
  targetEntity: string;
  userCriteria: string;
  version: number;
}

export interface FieldServiceSettings extends Metadata {
  apptAssistantExpiration?: number;
  apptAssistantInfoUrl?: string;
  apptAssistantRadiusUnitValue?: ApptAssistantRadiusUnit;
  apptAssistantRadiusValue?: number;
  apptAssistantStatus?: string;
  canPopulateGoogleAddress?: boolean;
  canSendAppCenterCrashReports?: boolean;
  canStoreMobileAnalytics?: boolean;
  deepLinkPublicSecurityKey?: string;
  doesAllowEditSaForCrew?: boolean;
  doesAvlCalcInclOvertime?: boolean;
  doesAvlCalcInclPrimOnly?: boolean;
  doesShareSaParentWoWithAr?: boolean;
  doesShareSaWithAr?: boolean;
  enableBatchWindow?: boolean;
  enableFloatingWorkOrder?: boolean;
  enablePopulateWorkOrderAddress?: boolean;
  enableWorkOrders?: boolean;
  enableWorkPlansAutoGeneration?: boolean;
  enableWorkStepManualStatusUpdate?: boolean;
  fieldServiceNotificationsOrgPref?: boolean;
  fieldServiceOrgPref?: boolean;
  isGeoCodeSyncEnabled?: boolean;
  isLocationHistoryEnabled?: boolean;
  mobileFeedbackEmails?: string;
  o2EngineEnabled?: boolean;
  objectMappingItem?: ObjectMappingItem | ObjectMappingItem[];
  optimizationServiceAccess?: boolean;
  serviceAppointmentsDueDateOffsetOrgValue?: number;
  workOrderDurationSource?: WorkOrderDurationSource;
  workOrderLineItemSearchFields?: string | string[];
  workOrderSearchFields?: string | string[];
}

export interface ObjectMappingItem {
  mappingType: MappingType;
  objectMapping: ObjectMapping;
}

export interface FieldSrcTrgtRelationship extends Metadata {
  definitionCreationType: DefinitionCreationType;
  lookupFieldName?: string;
  masterLabel: string;
  relationshipCardinality: RelationshipCardinality;
  sourceFieldName: string;
  targetFieldName: string;
}

export interface FileUploadAndDownloadSecuritySettings extends Metadata {
  dispositions?: FileTypeDispositionAssignmentBean | FileTypeDispositionAssignmentBean[];
  noHtmlUploadAsAttachment: boolean;
}

export interface FileTypeDispositionAssignmentBean {
  behavior: FileDownloadBehavior;
  fileType: FileType;
  securityRiskFileType: boolean;
}

export interface FilesConnectSettings extends Metadata {
  enableContentHubAllowed?: boolean;
  enableContentHubCvtLinksAllowed?: boolean;
  enableContentHubEOSearchLayout?: boolean;
}

export interface FlexiPage extends Metadata {
  description?: string;
  events?: FlexiPageEvent | FlexiPageEvent[];
  flexiPageRegions?: FlexiPageRegion | FlexiPageRegion[];
  masterLabel: string;
  parentFlexiPage?: string;
  platformActionlist?: PlatformActionList;
  quickActionList?: QuickActionList;
  sobjectType?: string;
  template: FlexiPageTemplateInstance;
  type: FlexiPageType;
}

export interface FlexiPageEvent {
  sourceName: string;
  sourceProperties?: FlexiPageEventSourceProperty | FlexiPageEventSourceProperty[];
  sourceType: FlexipageEventSourceTypeEnum;
  targets?: FlexiPageEventTarget | FlexiPageEventTarget[];
}

export interface FlexiPageEventSourceProperty {
  name: string;
  value: string;
}

export interface FlexiPageEventTarget {
  mappings?: FlexiPageEventPropertyMapping | FlexiPageEventPropertyMapping[];
  method: string;
  name: string;
  properties?: FlexiPageEventTargetProperty | FlexiPageEventTargetProperty[];
  type: FlexipageEventTargetTypeEnum;
}

export interface FlexiPageEventPropertyMapping {
  name: string;
  value?: string;
}

export interface FlexiPageEventTargetProperty {
  name: string;
  value: string;
}

export interface FlexiPageRegion {
  appendable?: RegionFlagStatus;
  itemInstances?: ItemInstance | ItemInstance[];
  mode?: FlexiPageRegionMode;
  name: string;
  prependable?: RegionFlagStatus;
  replaceable?: RegionFlagStatus;
  type: FlexiPageRegionType;
}

export interface ItemInstance {
  componentInstance?: ComponentInstance;
  fieldInstance?: FieldInstance;
}

export interface ComponentInstance {
  componentInstanceProperties?: ComponentInstanceProperty | ComponentInstanceProperty[];
  componentName: string;
  componentType?: ComponentInstanceType;
  flexipageDataSources?: FlexipageDataSource | FlexipageDataSource[];
  identifier?: string;
  visibilityRule?: UiFormulaRule;
}

export interface ComponentInstanceProperty {
  name?: string;
  type?: ComponentInstancePropertyTypeEnum;
  value?: string;
  valueList?: ComponentInstancePropertyList;
}

export interface ComponentInstancePropertyList {
  valueListItems?: ComponentInstancePropertyListItem | ComponentInstancePropertyListItem[];
}

export interface ComponentInstancePropertyListItem {
  value?: string;
  visibilityRule?: UiFormulaRule;
}

export interface UiFormulaRule {
  booleanFilter?: string;
  criteria?: UiFormulaCriterion | UiFormulaCriterion[];
}

export interface UiFormulaCriterion {
  leftValue: string;
  operator: string;
  rightValue?: string;
}

export interface FlexipageDataSource {
  definition?: string;
  flexipageDataSourceProperties?: FlexipageDataSourceProperty | FlexipageDataSourceProperty[];
  mode?: FlexipageDataSourceModeEnum;
  name: string;
  type: FlexipageDataSourceTypeEnum;
}

export interface FlexipageDataSourceProperty {
  name: string;
  value: string;
}

export interface FieldInstance {
  fieldInstanceProperties?: FieldInstanceProperty | FieldInstanceProperty[];
  fieldItem: string;
  identifier?: string;
  visibilityRule?: UiFormulaRule;
}

export interface FieldInstanceProperty {
  name?: string;
  value?: string;
}

export interface PlatformActionList {
  actionListContext: PlatformActionListContext;
  platformActionListItems?: PlatformActionListItem | PlatformActionListItem[];
  relatedSourceEntity?: string;
}

export interface PlatformActionListItem {
  actionName: string;
  actionType: PlatformActionType;
  sortOrder: number;
  subtype?: string;
}

export interface QuickActionList {
  quickActionListItems?: QuickActionListItem | QuickActionListItem[];
}

export interface QuickActionListItem {
  quickActionName: string;
}

export interface FlexiPageTemplateInstance {
  componentType?: ComponentInstanceType;
  flexipageDataSources?: FlexipageDataSource | FlexipageDataSource[];
  identifier?: string;
  name: string;
  properties?: ComponentInstanceProperty | ComponentInstanceProperty[];
  schemaProperties?: FlexiPageCompSchemaPropertyDef | FlexiPageCompSchemaPropertyDef[];
}

export interface FlexiPageCompSchemaPropertyDef {
  description?: string;
  isRequired?: boolean;
  label?: string;
  name: string;
  type: FlexipageSchemaPropType;
}

export interface Flow extends Metadata {
  actionCalls?: FlowActionCall | FlowActionCall[];
  apexPluginCalls?: FlowApexPluginCall | FlowApexPluginCall[];
  apiVersion?: number;
  assignments?: FlowAssignment | FlowAssignment[];
  choices?: FlowChoice | FlowChoice[];
  collectionProcessors?: FlowCollectionProcessor | FlowCollectionProcessor[];
  constants?: FlowConstant | FlowConstant[];
  customErrors?: FlowCustomError | FlowCustomError[];
  decisions?: FlowDecision | FlowDecision[];
  description?: string;
  dynamicChoiceSets?: FlowDynamicChoiceSet | FlowDynamicChoiceSet[];
  environments?: FlowEnvironment | FlowEnvironment[];
  formulas?: FlowFormula | FlowFormula[];
  interviewLabel?: string;
  isAdditionalPermissionRequiredToRun?: boolean;
  isOverridable?: boolean;
  isTemplate?: boolean;
  label: string;
  loops?: FlowLoop | FlowLoop[];
  migratedFromWorkflowRuleName?: string;
  orchestratedStages?: FlowOrchestratedStage | FlowOrchestratedStage[];
  overriddenFlow?: string;
  processMetadataValues?: FlowMetadataValue | FlowMetadataValue[];
  processType?: FlowProcessType;
  recordCreates?: FlowRecordCreate | FlowRecordCreate[];
  recordDeletes?: FlowRecordDelete | FlowRecordDelete[];
  recordLookups?: FlowRecordLookup | FlowRecordLookup[];
  recordRollbacks?: FlowRecordRollback | FlowRecordRollback[];
  recordUpdates?: FlowRecordUpdate | FlowRecordUpdate[];
  runInMode?: FlowRunInMode;
  screens?: FlowScreen | FlowScreen[];
  sourceTemplate?: string;
  stages?: FlowStage | FlowStage[];
  start?: FlowStart;
  startElementReference?: string;
  status?: FlowVersionStatus;
  steps?: FlowStep | FlowStep[];
  subflows?: FlowSubflow | FlowSubflow[];
  textTemplates?: FlowTextTemplate | FlowTextTemplate[];
  timeZoneSidKey?: string;
  transforms?: FlowTransform | FlowTransform[];
  triggerOrder?: number;
  variables?: FlowVariable | FlowVariable[];
  waits?: FlowWait | FlowWait[];
}

export interface FlowActionCall extends FlowNode {
  actionName?: string;
  actionType?: InvocableActionType;
  connector?: FlowConnector;
  dataTypeMappings?: FlowDataTypeMapping | FlowDataTypeMapping[];
  faultConnector?: FlowConnector;
  flowTransactionModel?: FlowTransactionModel;
  inputParameters?: FlowActionCallInputParameter | FlowActionCallInputParameter[];
  nameSegment?: string;
  outputParameters?: FlowActionCallOutputParameter | FlowActionCallOutputParameter[];
  storeOutputAutomatically?: boolean;
  versionSegment?: number;
}

export interface FlowNode extends FlowElement {
  elementSubtype?: FlowElementSubtype;
  label?: string;
  locationX: number;
  locationY: number;
}

export interface FlowElement extends FlowBaseElement {
  description?: string;
  name?: string;
}

export interface FlowBaseElement {
  processMetadataValues?: FlowMetadataValue | FlowMetadataValue[];
}

export interface FlowMetadataValue {
  name: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowElementReferenceOrValue {
  apexValue?: string;
  booleanValue?: boolean;
  dateTimeValue?: Date;
  dateValue?: Date;
  elementReference?: string;
  formulaDataType?: FlowDataType;
  formulaExpression?: string;
  numberValue?: number;
  setupReference?: string;
  setupReferenceType?: string;
  sobjectValue?: string;
  stringValue?: string;
}

export interface FlowActionCallInputParameter extends FlowBaseElement {
  name: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowActionCallOutputParameter extends FlowBaseElement {
  assignToReference: string;
  name: string;
}

export interface FlowApexPluginCallInputParameter extends FlowBaseElement {
  name: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowApexPluginCallOutputParameter extends FlowBaseElement {
  assignToReference: string;
  name: string;
}

export interface FlowAssignmentItem extends FlowBaseElement {
  assignToReference: string;
  operator: FlowAssignmentOperator;
  value?: FlowElementReferenceOrValue;
}

export interface FlowChoiceUserInput extends FlowBaseElement {
  isRequired?: boolean;
  promptText?: string;
  validationRule?: FlowInputValidationRule;
}

export interface FlowInputValidationRule {
  errorMessage: string;
  formulaExpression: string;
}

export interface FlowCollectionMapItem extends FlowBaseElement {
  assignToFieldReference: string;
  operator: FlowAssignmentOperator;
  value: FlowElementReferenceOrValue;
}

export interface FlowCollectionSortOption extends FlowBaseElement {
  doesPutEmptyStringAndNullFirst: boolean;
  sortField?: string;
  sortOrder: SortOrder;
}

export interface FlowCondition extends FlowBaseElement {
  conditionType?: string;
  leftValueReference?: string;
  operator: FlowComparisonOperator;
  rightValue?: FlowElementReferenceOrValue;
}

export interface FlowConnector extends FlowBaseElement {
  isGoTo?: boolean;
  targetReference: string;
}

export interface FlowCustomErrorMessage extends FlowBaseElement {
  errorMessage: string;
  fieldSelection?: string;
  isFieldError: boolean;
}

export interface FlowDataTypeMapping extends FlowBaseElement {
  typeName: string;
  typeValue: string;
}

export interface FlowInputFieldAssignment extends FlowBaseElement {
  field: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowOutputFieldAssignment extends FlowBaseElement {
  assignToReference: string;
  field: string;
}

export interface FlowRecordFilter extends FlowBaseElement {
  field: string;
  operator: FlowRecordFilterOperator;
  value?: FlowElementReferenceOrValue;
}

export interface FlowScreenActionInputParameter extends FlowBaseElement {
  name: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowScreenFieldInputParameter extends FlowBaseElement {
  name: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowScreenFieldOutputParameter extends FlowBaseElement {
  assignToReference: string;
  name: string;
}

export interface FlowScreenRule extends FlowBaseElement {
  conditionLogic?: string;
  conditions?: FlowCondition | FlowCondition[];
  label: string;
  ruleActions?: FlowScreenRuleAction | FlowScreenRuleAction[];
}

export interface FlowScreenRuleAction extends FlowBaseElement {
  attribute: string;
  fieldReference: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowScreenTrigger extends FlowBaseElement {
  eventName: string;
  eventSource: string;
  handlers?: FlowScreenTriggerHandler | FlowScreenTriggerHandler[];
}

export interface FlowScreenTriggerHandler extends FlowBaseElement {
  screenActionName: string;
}

export interface FlowStageStepAssignee extends FlowBaseElement {
  assignee: FlowElementReferenceOrValue;
  assigneeType: FlowStageStepAssigneeType;
}

export interface FlowStageStepEntryActionInputParameter extends FlowBaseElement {
  name: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowStageStepEntryActionOutputParameter extends FlowBaseElement {
  assignToReference: string;
  name: string;
}

export interface FlowStageStepExitActionInputParameter extends FlowBaseElement {
  name: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowStageStepExitActionOutputParameter extends FlowBaseElement {
  assignToReference: string;
  name: string;
}

export interface FlowStageStepInputParameter extends FlowBaseElement {
  name: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowStageStepOutputParameter extends FlowBaseElement {
  assignToReference: string;
  name: string;
}

export interface FlowSubflowInputAssignment extends FlowBaseElement {
  name: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowSubflowOutputAssignment extends FlowBaseElement {
  assignToReference: string;
  name: string;
}

export interface FlowTransformValue extends FlowBaseElement {
  transformValueActions?: FlowTransformValueAction | FlowTransformValueAction[];
}

export interface FlowTransformValueAction extends FlowBaseElement {
  outputFieldApiName?: string;
  transformType: FlowTransformValueActionType;
  value?: FlowElementReferenceOrValue;
}

export interface FlowVisibilityRule extends FlowBaseElement {
  conditionLogic?: string;
  conditions?: FlowCondition | FlowCondition[];
}

export interface FlowWaitEventInputParameter extends FlowBaseElement {
  name: string;
  value?: FlowElementReferenceOrValue;
}

export interface FlowWaitEventOutputParameter extends FlowBaseElement {
  assignToReference: string;
  name: string;
}

export interface FlowChoice extends FlowElement {
  choiceText: string;
  dataType: FlowDataType;
  userInput?: FlowChoiceUserInput;
  value?: FlowElementReferenceOrValue;
}

export interface FlowConstant extends FlowElement {
  dataType: FlowDataType;
  value?: FlowElementReferenceOrValue;
}

export interface FlowDynamicChoiceSet extends FlowElement {
  collectionReference?: string;
  dataType: FlowDataType;
  displayField: string;
  filterLogic?: string;
  filters?: FlowRecordFilter | FlowRecordFilter[];
  limit?: number;
  object: string;
  outputAssignments?: FlowOutputFieldAssignment | FlowOutputFieldAssignment[];
  picklistField?: string;
  picklistObject?: string;
  sortField?: string;
  sortOrder?: SortOrder;
  valueField?: string;
}

export interface FlowFormula extends FlowElement {
  dataType?: FlowDataType;
  expression: string;
  scale?: number;
}

export interface FlowRule extends FlowElement {
  conditionLogic: string;
  conditions?: FlowCondition | FlowCondition[];
  connector?: FlowConnector;
  doesRequireRecordChangedToMeetCriteria?: boolean;
  label: string;
}

export interface FlowScheduledPath extends FlowElement {
  connector?: FlowConnector;
  label?: string;
  maxBatchSize?: number;
  offsetNumber?: number;
  offsetUnit?: FlowScheduledPathOffsetUnit;
  pathType?: FlowScheduledPathType;
  recordField?: string;
  timeSource?: FlowScheduledPathTimeSource;
}

export interface FlowScreenAction extends FlowElement {
  actionName?: string;
  actionType?: InvocableActionType;
  inputParameters?: FlowScreenActionInputParameter | FlowScreenActionInputParameter[];
  label: string;
  nameSegment?: string;
  versionSegment?: number;
}

export interface FlowScreenField extends FlowElement {
  choiceReferences?: string | string[];
  dataType?: FlowDataType;
  dataTypeMappings?: FlowDataTypeMapping | FlowDataTypeMapping[];
  defaultSelectedChoiceReference?: string;
  defaultValue?: FlowElementReferenceOrValue;
  extensionName?: string;
  fieldText?: string;
  fieldType: FlowScreenFieldType;
  fields?: FlowScreenField | FlowScreenField[];
  helpText?: string;
  inputParameters?: FlowScreenFieldInputParameter | FlowScreenFieldInputParameter[];
  inputsOnNextNavToAssocScrn?: FlowScreenFieldInputsRevisited;
  isRequired?: boolean;
  isVisible?: boolean;
  objectFieldReference?: string;
  outputParameters?: FlowScreenFieldOutputParameter | FlowScreenFieldOutputParameter[];
  regionContainerType?: FlowRegionContainerType;
  scale?: number;
  storeOutputAutomatically?: boolean;
  validationRule?: FlowInputValidationRule;
  visibilityRule?: FlowVisibilityRule;
}

export interface FlowStage extends FlowElement {
  isActive: boolean;
  label: string;
  stageOrder: number;
}

export interface FlowStageStep extends FlowElement {
  actionName?: string;
  actionType?: InvocableActionType;
  assignees?: FlowStageStepAssignee | FlowStageStepAssignee[];
  entryActionInputParameters?: FlowStageStepEntryActionInputParameter | FlowStageStepEntryActionInputParameter[];
  entryActionName?: string;
  entryActionOutputParameters?: FlowStageStepEntryActionOutputParameter | FlowStageStepEntryActionOutputParameter[];
  entryActionType?: InvocableActionType;
  entryConditionLogic: string;
  entryConditions?: FlowCondition | FlowCondition[];
  exitActionInputParameters?: FlowStageStepExitActionInputParameter | FlowStageStepExitActionInputParameter[];
  exitActionName?: string;
  exitActionOutputParameters?: FlowStageStepExitActionOutputParameter | FlowStageStepExitActionOutputParameter[];
  exitActionType?: InvocableActionType;
  exitConditionLogic?: string;
  exitConditions?: FlowCondition | FlowCondition[];
  inputParameters?: FlowStageStepInputParameter | FlowStageStepInputParameter[];
  label: string;
  outputParameters?: FlowStageStepOutputParameter | FlowStageStepOutputParameter[];
  requiresAsyncProcessing?: boolean;
  runAsUser?: boolean;
  stepSubtype?: FlowElementSubtype;
}

export interface FlowTextTemplate extends FlowElement {
  isViewedAsPlainText?: boolean;
  text: string;
}

export interface FlowVariable extends FlowElement {
  apexClass?: string;
  dataType: FlowDataType;
  isCollection?: boolean;
  isInput?: boolean;
  isOutput?: boolean;
  objectType?: string;
  scale?: number;
  value?: FlowElementReferenceOrValue;
}

export interface FlowWaitEvent extends FlowElement {
  conditionLogic?: string;
  conditions?: FlowCondition | FlowCondition[];
  connector?: FlowConnector;
  eventType?: string;
  inputParameters?: FlowWaitEventInputParameter | FlowWaitEventInputParameter[];
  label: string;
  maxBatchSize?: number;
  offset?: number;
  offsetUnit?: FlowScheduledPathOffsetUnit;
  outputParameters?: FlowWaitEventOutputParameter | FlowWaitEventOutputParameter[];
  resumeDate?: Date;
  resumeDateReference?: string;
  resumeTime?: Date;
}

export interface FlowApexPluginCall extends FlowNode {
  apexClass: string;
  connector?: FlowConnector;
  faultConnector?: FlowConnector;
  inputParameters?: FlowApexPluginCallInputParameter | FlowApexPluginCallInputParameter[];
  outputParameters?: FlowApexPluginCallOutputParameter | FlowApexPluginCallOutputParameter[];
}

export interface FlowAssignment extends FlowNode {
  assignmentItems?: FlowAssignmentItem | FlowAssignmentItem[];
  connector?: FlowConnector;
}

export interface FlowCollectionProcessor extends FlowNode {
  assignNextValueToReference?: string;
  collectionProcessorType: FlowCollectionProcessorType;
  collectionReference: string;
  conditionLogic?: string;
  conditions?: FlowCondition | FlowCondition[];
  connector?: FlowConnector;
  formula?: string;
  limit?: number;
  mapItems?: FlowCollectionMapItem | FlowCollectionMapItem[];
  outputSObjectType?: string;
  sortOptions?: FlowCollectionSortOption | FlowCollectionSortOption[];
}

export interface FlowCustomError extends FlowNode {
  description?: string;
  connector?: FlowConnector;
  customErrorMessages?: FlowCustomErrorMessage | FlowCustomErrorMessage[];
}

export interface FlowDecision extends FlowNode {
  defaultConnector?: FlowConnector;
  defaultConnectorLabel?: string;
  rules?: FlowRule | FlowRule[];
}

export interface FlowLoop extends FlowNode {
  assignNextValueToReference?: string;
  collectionReference: string;
  iterationOrder?: IterationOrder;
  nextValueConnector?: FlowConnector;
  noMoreValuesConnector?: FlowConnector;
}

export interface FlowOrchestratedStage extends FlowNode {
  connector?: FlowConnector;
  exitActionInputParameters?: FlowStageStepExitActionInputParameter | FlowStageStepExitActionInputParameter[];
  exitActionName?: string;
  exitActionOutputParameters?: FlowStageStepExitActionOutputParameter | FlowStageStepExitActionOutputParameter[];
  exitActionType?: InvocableActionType;
  exitConditionLogic?: string;
  exitConditions?: FlowCondition | FlowCondition[];
  faultConnector?: FlowConnector;
  stageSteps?: FlowStageStep | FlowStageStep[];
}

export interface FlowRecordCreate extends FlowNode {
  assignRecordIdToReference?: string;
  connector?: FlowConnector;
  faultConnector?: FlowConnector;
  inputAssignments?: FlowInputFieldAssignment | FlowInputFieldAssignment[];
  inputReference?: string;
  object?: string;
  storeOutputAutomatically?: boolean;
}

export interface FlowRecordDelete extends FlowNode {
  connector?: FlowConnector;
  faultConnector?: FlowConnector;
  filterLogic?: string;
  filters?: FlowRecordFilter | FlowRecordFilter[];
  inputReference?: string;
  object?: string;
}

export interface FlowRecordLookup extends FlowNode {
  assignNullValuesIfNoRecordsFound?: boolean;
  connector?: FlowConnector;
  faultConnector?: FlowConnector;
  filterLogic?: string;
  filters?: FlowRecordFilter | FlowRecordFilter[];
  getFirstRecordOnly?: boolean;
  object: string;
  outputAssignments?: FlowOutputFieldAssignment | FlowOutputFieldAssignment[];
  outputReference?: string;
  queriedFields?: string | string[];
  sortField?: string;
  sortOrder?: SortOrder;
  storeOutputAutomatically?: boolean;
}

export interface FlowRecordRollback extends FlowNode {
  connector?: FlowConnector;
}

export interface FlowRecordUpdate extends FlowNode {
  connector?: FlowConnector;
  faultConnector?: FlowConnector;
  filterLogic?: string;
  filters?: FlowRecordFilter | FlowRecordFilter[];
  inputAssignments?: FlowInputFieldAssignment | FlowInputFieldAssignment[];
  inputReference?: string;
  object?: string;
}

export interface FlowScreen extends FlowNode {
  actions?: FlowScreenAction | FlowScreenAction[];
  allowBack?: boolean;
  allowFinish?: boolean;
  allowPause?: boolean;
  backButtonLabel?: string;
  connector?: FlowConnector;
  fields?: FlowScreenField | FlowScreenField[];
  helpText?: string;
  nextOrFinishButtonLabel?: string;
  pauseButtonLabel?: string;
  pausedText?: string;
  rules?: FlowScreenRule | FlowScreenRule[];
  showFooter?: boolean;
  showHeader?: boolean;
  triggers?: FlowScreenTrigger | FlowScreenTrigger[];
}

export interface FlowStart extends FlowNode {
  connector?: FlowConnector;
  doesRequireRecordChangedToMeetCriteria?: boolean;
  entryType?: FlowEntryType;
  filterFormula?: string;
  filterLogic?: string;
  filters?: FlowRecordFilter | FlowRecordFilter[];
  form?: string;
  landingPage?: string;
  object?: string;
  objectContainer?: string;
  recordTriggerType?: RecordTriggerType;
  schedule?: FlowSchedule;
  scheduledPaths?: FlowScheduledPath | FlowScheduledPath[];
  segment?: string;
  triggerType?: FlowTriggerType;
}

export interface FlowSchedule {
  frequency?: FlowStartFrequency;
  startDate?: Date;
  startTime?: Date;
}

export interface FlowStep extends FlowNode {
  connectors?: FlowConnector | FlowConnector[];
}

export interface FlowSubflow extends FlowNode {
  connector?: FlowConnector;
  flowName: string;
  inputAssignments?: FlowSubflowInputAssignment | FlowSubflowInputAssignment[];
  outputAssignments?: FlowSubflowOutputAssignment | FlowSubflowOutputAssignment[];
  storeOutputAutomatically?: boolean;
}

export interface FlowTransform extends FlowNode {
  apexClass?: string;
  connector?: FlowConnector;
  dataType?: FlowDataType;
  isCollection?: boolean;
  objectType?: string;
  scale?: number;
  transformValues?: FlowTransformValue | FlowTransformValue[];
}

export interface FlowWait extends FlowNode {
  defaultConnector?: FlowConnector;
  defaultConnectorLabel: string;
  faultConnector?: FlowConnector;
  timeZoneId?: string;
  waitEvents?: FlowWaitEvent | FlowWaitEvent[];
}

export interface FlowCategory extends Metadata {
  description?: string;
  flowCategoryItems?: FlowCategoryItems | FlowCategoryItems[];
  masterLabel: string;
}

export interface FlowCategoryItems {
  flow: string;
}

export interface FlowDefinition extends Metadata {
  activeVersionNumber?: number;
  description?: string;
  masterLabel?: string;
}

export interface FlowSettings extends Metadata {
  canDebugFlowAsAnotherUser?: boolean;
  doesEnforceApexCpuTimeLimit?: boolean;
  doesFormulaEnforceDataAccess?: boolean;
  doesFormulaGenerateHtmlOutput?: boolean;
  enableEmailSimpleRespectProfiles?: boolean;
  enableFlowBREncodedFixEnabled?: boolean;
  enableFlowCustomPropertyEditor?: boolean;
  enableFlowDeployAsActiveEnabled?: boolean;
  enableFlowFieldFilterEnabled?: boolean;
  enableFlowFormulasFixEnabled?: boolean;
  enableFlowInterviewSharingEnabled?: boolean;
  enableFlowNullPreviousValueFix?: boolean;
  enableFlowPauseEnabled?: boolean;
  enableFlowReactiveDisplayText?: boolean;
  enableFlowReactiveScreens?: boolean;
  enableFlowUseApexExceptionEmail?: boolean;
  enableFlowViaRestUsesUserCtxt?: boolean;
  enableLightningRuntimeEnabled?: boolean;
  isApexPluginAccessModifierRespected?: boolean;
  isEnhancedFlowListViewVisible?: boolean;
  isFlowBlockAccessToSessionIDEnabled?: boolean;
  isManageFlowRequiredForAutomationCharts?: boolean;
  isSupportRollbackOnErrorForApexInvocableActionsEnabled?: boolean;
  isTimeResumedInSameRunContext?: boolean;
}

export interface FlowTest extends Metadata {
  description?: string;
  flowApiName: string;
  label: string;
  testPoints?: FlowTestPoint | FlowTestPoint[];
}

export interface FlowTestPoint {
  assertions?: FlowTestAssertion | FlowTestAssertion[];
  elementApiName: string;
  parameters?: FlowTestParameter | FlowTestParameter[];
}

export interface FlowTestAssertion {
  conditions?: FlowTestCondition | FlowTestCondition[];
  errorMessage?: string;
}

export interface FlowTestCondition {
  leftValueReference: string;
  operator: FlowComparisonOperator;
  rightValue?: FlowTestReferenceOrValue;
}

export interface FlowTestReferenceOrValue {
  booleanValue?: boolean;
  dateTimeValue?: Date;
  dateValue?: Date;
  numberValue?: number;
  sobjectValue?: string;
  stringValue?: string;
}

export interface FlowTestParameter {
  leftValueReference: string;
  type: FlowTestParameterType;
  value: FlowTestReferenceOrValue;
}

export interface Folder extends Metadata {
  accessType?: FolderAccessTypes;
  folderShares?: FolderShare | FolderShare[];
  name: string;
  publicFolderAccess?: PublicFolderAccess;
  sharedTo?: SharedTo;
}

export interface FolderShare {
  accessLevel: FolderShareAccessLevel;
  sharedTo: string;
  sharedToType: FolderSharedToType;
}

export interface DashboardFolder extends Folder {}

export interface DocumentFolder extends Folder {}

export interface EmailFolder extends Folder {}

export interface EmailTemplateFolder extends Folder {}

export interface ReportFolder extends Folder {}

export interface ForecastingFilter extends Metadata {
  filterLogic?: string;
  forecastingType: string;
  forecastingTypeSource: string;
  isProtected?: boolean;
  masterLabel: string;
}

export interface ForecastingFilterCondition extends Metadata {
  colName?: string;
  fieldName: string;
  forecastingFilter: string;
  forecastingSourceDefinition?: string;
  isProtected?: boolean;
  masterLabel: string;
  operation: FilterOperation;
  sortOrder: number;
  value?: string;
}

export interface ForecastingObjectListSettings extends Metadata {
  forecastingTypeObjectListSettings?: ForecastingTypeObjectListSettings | ForecastingTypeObjectListSettings[];
}

export interface ForecastingTypeObjectListSettings {
  forecastingObjectListLabelMappings?: ForecastingObjectListLabelMapping | ForecastingObjectListLabelMapping[];
  forecastingObjectListSelectedSettings: ForecastingObjectListSelectedSettings;
  forecastingObjectListUnselectedSettings: ForecastingObjectListUnselectedSettings;
  forecastingTypeDeveloperName: string;
}

export interface ForecastingObjectListLabelMapping {
  field: string;
  label: string;
}

export interface ForecastingObjectListSelectedSettings {
  field?: string | string[];
}

export interface ForecastingObjectListUnselectedSettings {
  field?: string | string[];
}

export interface ForecastingSettings extends Metadata {
  defaultToPersonalCurrency?: boolean;
  enableForecasts?: boolean;
  forecastingCategoryMappings?: ForecastingCategoryMapping | ForecastingCategoryMapping[];
  forecastingDisplayedFamilySettings?: ForecastingDisplayedFamilySettings | ForecastingDisplayedFamilySettings[];
  forecastingTypeSettings?: ForecastingTypeSettings | ForecastingTypeSettings[];
  globalAdjustmentsSettings: AdjustmentsSettings;
  globalForecastRangeSettings: ForecastRangeSettings;
  globalQuotasSettings: QuotasSettings;
}

export interface ForecastingCategoryMapping {
  forecastingItemCategoryApiName: string;
  weightedSourceCategories?: WeightedSourceCategory | WeightedSourceCategory[];
}

export interface WeightedSourceCategory {
  sourceCategoryApiName: string;
  weight: number;
}

export interface ForecastingDisplayedFamilySettings {
  productFamily?: string;
}

export interface ForecastingTypeSettings {
  active: boolean;
  displayedCategoryApiNames?: string | string[];
  forecastedCategoryApiNames?: string | string[];
  forecastingDateType: ForecastingDateType;
  hasProductFamily: boolean;
  isAmount: boolean;
  isAvailable: boolean;
  isQuantity: boolean;
  managerAdjustableCategoryApiNames?: string | string[];
  masterLabel: string;
  name: string;
  opportunityListFieldsLabelMappings?: OpportunityListFieldsLabelMapping | OpportunityListFieldsLabelMapping[];
  opportunityListFieldsSelectedSettings: OpportunityListFieldsSelectedSettings;
  opportunityListFieldsUnselectedSettings: OpportunityListFieldsUnselectedSettings;
  opportunitySplitName?: string;
  ownerAdjustableCategoryApiNames?: string | string[];
  territory2ModelName?: string;
}

export interface OpportunityListFieldsLabelMapping {
  field: string;
  label: string;
}

export interface OpportunityListFieldsSelectedSettings {
  field?: string | string[];
}

export interface OpportunityListFieldsUnselectedSettings {
  field?: string | string[];
}

export interface AdjustmentsSettings {
  enableAdjustments: boolean;
  enableOwnerAdjustments: boolean;
}

export interface ForecastRangeSettings {
  beginning: number;
  displaying: number;
  periodType: PeriodTypes;
}

export interface QuotasSettings {
  showQuotas: boolean;
}

export interface ForecastingSourceDefinition extends Metadata {
  categoryField?: string;
  dateField?: string;
  familyField?: string;
  isProtected?: boolean;
  masterLabel: string;
  measureField?: string;
  sourceObject: string;
  territory2Field?: string;
  userField?: string;
}

export interface ForecastingType extends Metadata {
  active: boolean;
  amount: boolean;
  dateType: string;
  developerName: string;
  hasProductFamily: boolean;
  masterLabel: string;
  opportunitySplitType?: string;
  opptyLineItemSplitType?: string;
  quantity: boolean;
  roleType: string;
  territory2Model?: string;
}

export interface ForecastingTypeSource extends Metadata {
  forecastingSourceDefinition: string;
  forecastingType: string;
  isProtected?: boolean;
  masterLabel: string;
  parentSourceDefinition?: string;
  relationField?: string;
  sourceGroup: number;
}

export interface FormulaSettings extends Metadata {
  enableDSTAwareDatevalue?: boolean;
}

export interface FtestFirstTopLevel extends Metadata {
  content: number;
  isProtected?: boolean;
  longUrl?: string;
  longUrlNewSlot?: string;
  masterLabel: string;
}

export interface FtestSecondTopLevel extends Metadata {
  content: number;
  isProtected?: boolean;
  masterLabel: string;
  user?: string;
}

export interface FuelType extends Metadata {
  description?: string;
  isActive?: boolean;
  isProtected?: boolean;
  isStationaryAssetFuel?: boolean;
  isVehicleAssetFuel?: boolean;
  masterLabel: string;
}

export interface FuelTypeSustnUom extends Metadata {
  fuelType: string;
  isProtected?: boolean;
  masterLabel?: string;
  unitOfMeasure: string;
}

export interface FulfillmentStepType extends Metadata {
  developerName: string;
  handler: string;
  isActive: boolean;
  masterLabel: string;
}

export interface FunctionReference extends Metadata {
  access?: string;
  description?: string;
  imageReference?: string;
  label?: string;
  permissionSet?: string;
}

export interface FundraisingConfig extends Metadata {
  donorMatchingMethod?: DonorMatchingMethod;
  failedTransactionCount?: number;
  householdSoftCreditRole?: string;
  installmentExtDayCount?: number;
  isHshldSoftCrAutoCrea?: boolean;
  lapsedUnpaidTrxnCount?: number;
  masterLabel?: string;
  shouldClosePaidRcrCmt?: boolean;
  shouldCreateRcrSchdTrxn?: boolean;
}

export interface GatewayProviderPaymentMethodType extends Metadata {
  comments?: string;
  gtwyProviderPaymentMethodType?: string;
  masterLabel: string;
  paymentGatewayProvider?: string;
  paymentMethodType?: string;
  recordType?: string;
}

export interface GenAiFunction extends Metadata {
  attributes?: GenAiPlannerAttr | GenAiPlannerAttr[];
  description?: string;
  invocationTarget: string;
  invocationTargetType: PlannerFunctionInvocableTargetType;
  isConfirmationRequired?: boolean;
  masterLabel: string;
}

export interface GenAiPlannerAttr {
  allowedValues?: string;
  dataType: PlannerAttrDataType;
  description?: string;
  developerName: string;
  isDisplayable?: boolean;
  isPersIdentInfo?: boolean;
  isRequired?: boolean;
  isUserInput?: boolean;
  mappingType: PlannerAttrMappingType;
  masterLabel: string;
  pattern?: string;
  value?: string;
}

export interface GenAiPlugin extends Metadata {
  description?: string;
  masterLabel: string;
  developerName: string;
  genAiFunctions?: GenAiPluginFunctionDef | GenAiPluginFunctionDef[];
}

export interface GenAiPluginFunctionDef {
  functionName: string;
}

export interface GlobalPicklist extends Metadata {
  description?: string;
  globalPicklistValues?: GlobalPicklistValue | GlobalPicklistValue[];
  masterLabel: string;
  sorted: boolean;
}

export interface GlobalValueSet extends Metadata {
  customValue?: CustomValue | CustomValue[];
  description?: string;
  masterLabel: string;
  sorted: boolean;
}

export interface GlobalValueSetTranslation extends Metadata {
  valueTranslation?: ValueTranslation | ValueTranslation[];
}

export interface ValueTranslation {
  masterLabel: string;
  translation?: string;
}

export interface GoogleAppsSettings extends Metadata {
  enableGmailButtons?: boolean;
  enableGmailButtonsAndLinks?: boolean;
  enableGmailLinks?: boolean;
  enableGoogleDocs?: boolean;
  enableGoogleDocsTab?: boolean;
  enableGoogleTalk?: boolean;
  googleAppsDomain?: string;
  googleAppsDomainLinked?: boolean;
  googleAppsDomainValidated?: boolean;
}

export interface Group extends Metadata {
  doesIncludeBosses?: boolean;
  name: string;
}

export interface HighVelocitySalesSettings extends Metadata {
  enableACAutoSendEmail?: boolean;
  enableACChangeTargetAssignee?: boolean;
  enableACSkipWeekends?: boolean;
  enableBusinessHours?: boolean;
  enableCadenceVariantTestingPref?: boolean;
  enableChgTgtAssigneeUsrPermPref?: boolean;
  enableDispositionCategory?: boolean;
  enableEngagementWaveAnalyticsPref?: boolean;
  enableHighVelocitySales?: boolean;
  enableHighVelocitySalesSetup?: boolean;
  enableInvoiceAttributionPref?: boolean;
  enableLogACallForCTIPref?: boolean;
  enableLogTasksForLinkedInPref?: boolean;
  enableMultipleCadencesPref?: boolean;
  enableOpportunityAttributionPermPref?: boolean;
  enableQuickCadenceAutoSendEmail?: boolean;
  enableTaskLoggingPref?: boolean;
}

export interface HomePageComponent extends Metadata {
  body?: string;
  height?: number;
  links?: string | string[];
  page?: string;
  pageComponentType: PageComponentType;
  showLabel?: boolean;
  showScrollbars?: boolean;
  width?: PageComponentWidth;
}

export interface HomePageLayout extends Metadata {
  narrowComponents?: string | string[];
  wideComponents?: string | string[];
}

export interface IPAddressRange extends Metadata {
  description?: string;
  endIpAddress: string;
  ipAddressFeature: IPAddressFeature;
  ipAddressUsageScope: IPAddressUsageScope;
  isProtected?: boolean;
  masterLabel: string;
  startIpAddress: string;
}

export interface Icon extends Metadata {
  image: string;
  key: string;
  usageType: IconUsageType;
}

export interface IdeasSettings extends Metadata {
  enableChatterProfile?: boolean;
  enableHtmlIdea?: boolean;
  enableIdeaMultipleCategory?: boolean;
  enableIdeaThemes?: boolean;
  enableIdeas?: boolean;
  enableIdeasControllerExtensions?: boolean;
  enableIdeasReputation?: boolean;
  halfLife?: number;
  ideasProfilePage?: string;
}

export interface IdentityProviderSettings extends Metadata {
  certificateName: string;
  enableIdentityProvider: boolean;
}

export interface IdentityVerificationProcDef extends Metadata {
  identityVerificationProcDtls?: IdentityVerificationProcDtl | IdentityVerificationProcDtl[];
  masterLabel: string;
  searchLayoutType: IdentityVerificationSearchLayoutType;
}

export interface IdentityVerificationProcDtl extends Metadata {
  apexClass?: string;
  dataSourceType: IdentityVerificationDataSourceType;
  developerName: string;
  displayRecordFieldName?: string;
  identityVerificationProcFlds?: IdentityVerificationProcFld | IdentityVerificationProcFld[];
  isActive?: boolean;
  isRetryAllowedAfterLimit?: boolean;
  linkedIdVerfProcessDet?: string;
  masterLabel: string;
  objectName?: string;
  optionalVerifiersMinVerfCount?: number;
  retryLimit?: number;
  searchFilter?: string;
  searchRecordUniqueIdField?: string;
  searchResultSortBy?: string;
  searchSequenceNumber: number;
  searchType: IdentityVerificationSearchType;
}

export interface IdentityVerificationProcFld extends Metadata {
  customFieldLabel?: string;
  dataSourceType: IdentityVerificationProcFldDataSourceType;
  developerName: string;
  fieldDataType?: IdentityVerificationProcFldFieldDataType;
  fieldName: string;
  fieldType: IdentityVerificationProcFldFieldType;
  fieldValueFormula?: string;
  isActive?: boolean;
  isManualInput?: boolean;
  masterLabel: string;
  sequenceNumber: number;
}

export interface IframeWhiteListUrlSettings extends Metadata {
  iframeWhiteListUrls?: IframeWhiteListUrl | IframeWhiteListUrl[];
}

export interface IframeWhiteListUrl {
  context: IFrameWhitelistContext;
  url?: string;
}

export interface InboundNetworkConnection extends Metadata {
  connectionType: ExternalConnectionType;
  description: string;
  inboundNetworkConnProperties?: InboundNetworkConnProperty | InboundNetworkConnProperty[];
  isActive: boolean;
  label: string;
  status: ExternalConnectionStatus;
}

export interface InboundNetworkConnProperty {
  propertyName: InboundConnPropertyName;
  propertyValue: string;
}

export interface IncidentMgmtSettings extends Metadata {
  enableAlertBroadcastType?: boolean;
  enableEmailBroadcastType?: boolean;
  enableIncidentMgmt?: boolean;
  enableSiteBannerBroadcastType?: boolean;
  enableSlackBroadcastType?: boolean;
}

export interface IndustriesAutomotiveSettings extends Metadata {
  enableAutomotiveCloud?: boolean;
  enableAutomotiveScheduler?: boolean;
  enableAutomotiveServiceExcellence?: boolean;
}

export interface IndustriesEinsteinFeatureSettings extends Metadata {
  documentReaderConfidenceOrgValue: number;
}

export interface IndustriesManufacturingSettings extends Metadata {
  enableFleetManagement?: boolean;
  enableIndManufacturing?: boolean;
  enableIndustriesMfgAccountForecast?: boolean;
  enableIndustriesMfgAdvForecast?: boolean;
  enableIndustriesMfgIAS?: boolean;
  enableIndustriesMfgProgram?: boolean;
  enableIndustriesMfgTargets?: boolean;
  enablePartnerLeadManagement?: boolean;
  enablePartnerPerformanceManagement?: boolean;
  enablePartnerVisitManagement?: boolean;
  enableRevMgmtForSlsAgr?: boolean;
}

export interface IndustriesSettings extends Metadata {
  allowMultipleProducersToWorkOnSamePolicy?: boolean;
  appointmentDistributionOrgPref?: boolean;
  captureResourceUtilizationOrgPref?: boolean;
  createCustomerPropertyFromLAProperty?: boolean;
  createFSCAssetFromLAAsset?: boolean;
  createFSCAssetFromLAProperty?: boolean;
  createFSCLiabilityFromLAFinancial?: boolean;
  createFSCLiabilityFromLALiability?: boolean;
  createFinancialAccountFromLAAsset?: boolean;
  createFinancialAccountFromLALiability?: boolean;
  createFinancialAccountsFromLAFinancials?: boolean;
  createFinancialAccountsFromLAProperty?: boolean;
  enableAIAccelerator?: boolean;
  enableAWSTextractAnalyzeIDPref?: boolean;
  enableAcademicOperations?: boolean;
  enableAccessToMasterListOfCoverageTypes?: boolean;
  enableAccountScoreEnabled?: boolean;
  enableActionableList?: boolean;
  enableActionableListOrgPref?: boolean;
  enableAdvancedScheduling?: boolean;
  enableAlumniRelations?: boolean;
  enableAnyResourceTypeOrgPref?: boolean;
  enableAppFrmAnywhereOrgPref?: boolean;
  enableAppInviteOrgPref?: boolean;
  enableBehavioralHealthAppPref?: boolean;
  enableBenefitAndGoalSharingPref?: boolean;
  enableBenefitManagementPreference?: boolean;
  enableBlockResourceAvailabilityOrgPref?: boolean;
  enableBusinessMessenger?: boolean;
  enableCalculationUsingParentPolicyOnly?: boolean;
  enableCallReportAdminContextPref?: boolean;
  enableCareGapPrefSetting?: boolean;
  enableCareMgmtSlackAccess?: boolean;
  enableCarePlansPreference?: boolean;
  enableCdpSalesExcellence?: boolean;
  enableChurnPredictionRT?: boolean;
  enableClaimMgmt?: boolean;
  enableClinicalDataModel?: boolean;
  enableCompliantDataSharingForAccount?: boolean;
  enableCompliantDataSharingForBudget?: boolean;
  enableCompliantDataSharingForBudgetSiteUsers?: boolean;
  enableCompliantDataSharingForCustomObjects?: boolean;
  enableCompliantDataSharingForFinancialDeal?: boolean;
  enableCompliantDataSharingForFundingAward?: boolean;
  enableCompliantDataSharingForFundingAwardSiteUsers?: boolean;
  enableCompliantDataSharingForFundingOpportunity?: boolean;
  enableCompliantDataSharingForFundingOpportunitySiteUsers?: boolean;
  enableCompliantDataSharingForIndividualApplication?: boolean;
  enableCompliantDataSharingForIndividualApplicationSiteUsers?: boolean;
  enableCompliantDataSharingForInteraction?: boolean;
  enableCompliantDataSharingForInteractionSummary?: boolean;
  enableCompliantDataSharingForOpportunity?: boolean;
  enableCompliantDataSharingForPreliminaryApplicationRef?: boolean;
  enableCompliantDataSharingForPreliminaryApplicationRefSiteUsers?: boolean;
  enableComprehendMedical?: boolean;
  enableContactCenterAccess?: boolean;
  enableCreateMultiAttendeeEventOrgPref?: boolean;
  enableCrisisCenterAccess?: boolean;
  enableCriteriaBasedSearchAndFilter?: boolean;
  enableCustomFlowsOnCycleCount?: boolean;
  enableCustomFlowsOnExpiryPage?: boolean;
  enableDataCloudEventsOnTimeline?: boolean;
  enableDealManagement?: boolean;
  enableDiscoveryFrameworkMetadata?: boolean;
  enableDiscoveryFrwrkSampleTemplate?: boolean;
  enableDpeProviderSearchSettingsOrgPref?: boolean;
  enableDropInAppointmentsOrgPref?: boolean;
  enableDropInFallbackMechOrgPref?: boolean;
  enableDropInSkillMatchingOrgPref?: boolean;
  enableEducationCloud?: boolean;
  enableEinsteinDocReader?: boolean;
  enableEinsteinVisits?: boolean;
  enableEnhancedQuestionCreation?: boolean;
  enableEpcDeleteAccess?: boolean;
  enableEventManagementOrgPref?: boolean;
  enableEventWriteOrgPref?: boolean;
  enableExistingHealthCloudOrg?: boolean;
  enableFSCInsuranceReport?: boolean;
  enableFSCInsuranceServiceConsole?: boolean;
  enableFinancialAccountMgmt?: boolean;
  enableFinancialDealCallReportCmpPref?: boolean;
  enableFinancialDealCallReportPref?: boolean;
  enableFinancialDealRoleHierarchy?: boolean;
  enableFundraising?: boolean;
  enableGnrcDisclsFrmwrk?: boolean;
  enableGrantmaking?: boolean;
  enableHCReferralScoring?: boolean;
  enableHomeHealth?: boolean;
  enableIESentimentAnalysis?: boolean;
  enableIndustriesAssessment?: boolean;
  enableIndustriesAssessmentGuestOrgPref?: boolean;
  enableIndustriesKYC?: boolean;
  enableIndustriesOnboarding?: boolean;
  enableIndustriesRebates?: boolean;
  enableIndustriesShipAndDebit?: boolean;
  enableIntegratedCareManagementSetting?: boolean;
  enableInteractionCstmSharingPref?: boolean;
  enableInteractionRoleHierarchy?: boolean;
  enableInteractionSummaryPref?: boolean;
  enableInteractionSummaryRoleHierarchy?: boolean;
  enableManyToManyRelationships?: boolean;
  enableMaterialityAssessment?: boolean;
  enableMedRecSetting?: boolean;
  enableMedicalDeviceEnabled?: boolean;
  enableMedicationManagementEnabled?: boolean;
  enableMicrosoftWordAddInEnabled?: boolean;
  enableMortgageRlaTotalsOrgPref?: boolean;
  enableMulesoftFhirR4Apis?: boolean;
  enableMultiResourceOrgPref?: boolean;
  enableMultipleCareProgramEnrolleeOrgPref?: boolean;
  enableMultipleTopicsForShiftsOrgPref?: boolean;
  enableNZCMngEnrgyAttrCr?: boolean;
  enableNZCMngEsgPgm?: boolean;
  enableObjectDetection?: boolean;
  enableOutcomes?: boolean;
  enableOverbookingOrgPref?: boolean;
  enablePatientAppointmentSchedulingOrgPref?: boolean;
  enablePatientServicesOrchestration?: boolean;
  enablePolicyAdministration?: boolean;
  enablePreBookedFallbackMechOrgPref?: boolean;
  enableProviderSearchForGuestUser?: boolean;
  enableProviderSearchSyncOrgPref?: boolean;
  enableRBLUsingCalcService?: boolean;
  enableRecordRollup?: boolean;
  enableReferralScoring?: boolean;
  enableSCAssignFootprint?: boolean;
  enableSCBEIEnabled?: boolean;
  enableSCCarbonAccounting?: boolean;
  enableSCCarbonCreditAlloc?: boolean;
  enableSCCreateFootprint?: boolean;
  enableSCDGF?: boolean;
  enableSCEmssnsForecasting?: boolean;
  enableSCExpansionUseCase?: boolean;
  enableSCExternalEngMgmt?: boolean;
  enableSCGenrateCnsmpRcd?: boolean;
  enableSCSNGManagement?: boolean;
  enableSCScope3HubEnabled?: boolean;
  enableSCSnGAffiliates?: boolean;
  enableSCSplitCnsmpRcd?: boolean;
  enableSCTargetSetting?: boolean;
  enableSCWasteManagement?: boolean;
  enableSCWaterManagement?: boolean;
  enableScoringFrameworkCRMAPref?: boolean;
  enableScoringFrameworkOrgPref?: boolean;
  enableSentimentAnalysis?: boolean;
  enableShareSaWithArOrgPref?: boolean;
  enableSlackForCib?: boolean;
  enableSmartTags?: boolean;
  enableStudentSuccess?: boolean;
  enableSustainabilityCloud?: boolean;
  enableSyncInteractionsPref?: boolean;
  enableTearSheetPref?: boolean;
  enableTextExtract?: boolean;
  enableTimelinePref?: boolean;
  enableTopicOrTemplate?: boolean;
  enableTopicTimeSlot?: boolean;
  enableTurnOffDsclsReprtPbsrName?: boolean;
  enableUMPayerAppAccessOrgPreference?: boolean;
  enableVideoVisitsOrgPref?: boolean;
  enableVisitCalendarSync?: boolean;
  enableVisitInventoryEnabled?: boolean;
  loanApplicantAddressAutoCreation?: boolean;
  loanApplicantAutoCreation?: boolean;
  rlaEditIfAccHasEdit?: boolean;
  transformRBLtoDPE?: boolean;
}

export interface InstalledPackage extends Metadata {
  activateRSS: boolean;
  password?: string;
  securityType?: string;
  versionNumber: string;
}

export interface IntegrationProviderDef extends Metadata {
  active?: boolean;
  apexClass?: string;
  description?: string;
  developerName: string;
  externalServiceOperationName?: string;
  externalServiceRegistration?: string;
  fileBasedApexClass?: string;
  inputDataProcessor?: string;
  integrationProviderAttributes?: IntegrationProviderAttr | IntegrationProviderAttr[];
  javaClassName?: string;
  outputDataProcessor?: string;
  providerLabel: string;
  type: DefinitionType;
}

export interface IntegrationProviderAttr {
  dataType: AttrDataType;
  dateTimeValue?: Date;
  dateValue?: Date;
  description?: string;
  developerName: string;
  doubleValue?: number;
  integerValue?: number;
  label: string;
  percentageValue?: number;
  required: boolean;
  stringValue?: string;
  trueOrFalseValue?: boolean;
}

export interface InternalDataConnector extends Metadata {
  dataConnectionStatus: DataConnectionStatus;
  dataConnectorType: DataConnectorType;
  dataPlatform: string;
  dataSourceTenant: string;
  externalRecordId: string;
  masterLabel: string;
}

export interface InternalOrganization extends Metadata {
  isForDataExport: boolean;
  isForDataImport: boolean;
  masterLabel: string;
}

export interface InventorySettings extends Metadata {
  enableOCIB2CIntegration?: boolean;
  enableOmniChannelInventory?: boolean;
}

export interface InvocableActionSettings extends Metadata {
  isPartialSaveAllowed?: boolean;
}

export interface IoTSettings extends Metadata {
  enableIoT?: boolean;
  enableIoTInsightsPilot?: boolean;
  enableIoTUsageEmail?: boolean;
}

export interface KeywordList extends Metadata {
  description?: string;
  keywords?: Keyword | Keyword[];
  masterLabel: string;
}

export interface Keyword {
  keyword: string;
}

export interface KnowledgeSettings extends Metadata {
  answers?: KnowledgeAnswerSettings;
  cases?: KnowledgeCaseSettings;
  defaultLanguage?: string;
  enableChatterQuestionKBDeflection?: boolean;
  enableCreateEditOnArticlesTab?: boolean;
  enableExternalMediaContent?: boolean;
  enableKbStandardSharing?: boolean;
  enableKnowledge?: boolean;
  enableKnowledgeAgentContribution?: boolean;
  enableKnowledgeAnswersPromotion?: boolean;
  enableKnowledgeArticleTextHighlights?: boolean;
  enableKnowledgeCaseRL?: boolean;
  enableKnowledgeKeywordAutoComplete?: boolean;
  enableKnowledgeTitleAutoComplete?: boolean;
  enableLightningKbAutoLoadRichTextField?: boolean;
  enableLightningKnowledge?: boolean;
  languages?: KnowledgeLanguageSettings;
  showArticleSummariesCustomerPortal?: boolean;
  showArticleSummariesInternalApp?: boolean;
  showArticleSummariesPartnerPortal?: boolean;
  showValidationStatusField?: boolean;
  suggestedArticles?: KnowledgeSuggestedArticlesSettings;
  votingEnabled?: boolean;
}

export interface KnowledgeAnswerSettings {
  assignTo?: string;
  defaultArticleType?: string;
  enableArticleCreation?: boolean;
}

export interface KnowledgeCaseSettings {
  articlePDFCreationProfile?: string;
  articlePublicSharingCommunities?: KnowledgeCommunitiesSettings;
  articlePublicSharingSites?: KnowledgeSitesSettings;
  articlePublicSharingSitesChatterAnswers?: KnowledgeSitesSettings;
  assignTo?: string;
  customizationClass?: string;
  defaultContributionArticleType?: string;
  editor?: KnowledgeCaseEditor;
  enableArticleCreation?: boolean;
  enableArticlePublicSharingSites?: boolean;
  enableCaseDataCategoryMapping?: boolean;
  useProfileForPDFCreation?: boolean;
}

export interface KnowledgeCommunitiesSettings {
  community?: string | string[];
}

export interface KnowledgeSitesSettings {
  site?: string | string[];
}

export interface KnowledgeLanguageSettings {
  language?: KnowledgeLanguage | KnowledgeLanguage[];
}

export interface KnowledgeLanguage {
  active?: boolean;
  defaultAssignee?: string;
  defaultAssigneeType?: KnowledgeLanguageLookupValueType;
  defaultReviewer?: string;
  defaultReviewerType?: KnowledgeLanguageLookupValueType;
  name: string;
}

export interface KnowledgeSuggestedArticlesSettings {
  caseFields?: KnowledgeCaseFieldsSettings;
  useSuggestedArticlesForCase?: boolean;
  workOrderFields?: KnowledgeWorkOrderFieldsSettings;
  workOrderLineItemFields?: KnowledgeWorkOrderLineItemFieldsSettings;
}

export interface KnowledgeCaseFieldsSettings {
  field?: KnowledgeCaseField | KnowledgeCaseField[];
}

export interface KnowledgeCaseField {
  name?: string;
}

export interface KnowledgeWorkOrderFieldsSettings {
  field?: KnowledgeWorkOrderField | KnowledgeWorkOrderField[];
}

export interface KnowledgeWorkOrderField {
  name?: string;
}

export interface KnowledgeWorkOrderLineItemFieldsSettings {
  field?: KnowledgeWorkOrderLineItemField | KnowledgeWorkOrderLineItemField[];
}

export interface KnowledgeWorkOrderLineItemField {
  name?: string;
}

export interface LanguageSettings extends Metadata {
  enableCanadaIcuFormat?: boolean;
  enableDataTranslation?: boolean;
  enableEndUserLanguages?: boolean;
  enableICULocaleDateFormat?: boolean;
  enableLanguageExtensionPackage?: boolean;
  enableLocalNamesForStdObjects?: boolean;
  enableLocaleInsensitiveFiltering?: boolean;
  enablePlatformLanguages?: boolean;
  enableTranslationWorkbench?: boolean;
  useLanguageFallback?: boolean;
}

export interface Layout extends Metadata {
  customButtons?: string | string[];
  customConsoleComponents?: CustomConsoleComponents;
  emailDefault?: boolean;
  excludeButtons?: string | string[];
  feedLayout?: FeedLayout;
  headers?: LayoutHeader | LayoutHeader[];
  layoutSections?: LayoutSection | LayoutSection[];
  miniLayout?: MiniLayout;
  multilineLayoutFields?: string | string[];
  platformActionList?: PlatformActionList;
  quickActionList?: QuickActionList;
  relatedContent?: RelatedContent;
  relatedLists?: RelatedListItem | RelatedListItem[];
  relatedObjects?: string | string[];
  runAssignmentRulesDefault?: boolean;
  showEmailCheckbox?: boolean;
  showHighlightsPanel?: boolean;
  showInteractionLogPanel?: boolean;
  showKnowledgeComponent?: boolean;
  showRunAssignmentRulesCheckbox?: boolean;
  showSolutionSection?: boolean;
  showSubmitAndAttachButton?: boolean;
  summaryLayout?: SummaryLayout;
}

export interface CustomConsoleComponents {
  primaryTabComponents?: PrimaryTabComponents;
  subtabComponents?: SubtabComponents;
}

export interface PrimaryTabComponents {
  containers?: Container | Container[];
}

export interface Container {
  height?: number;
  isContainerAutoSizeEnabled: boolean;
  region: string;
  sidebarComponents?: SidebarComponent | SidebarComponent[];
  style: string;
  unit: string;
  width?: number;
}

export interface SidebarComponent {
  componentType: string;
  createAction?: string;
  enableLinking?: boolean;
  height?: number;
  label?: string;
  lookup?: string;
  page?: string;
  relatedLists?: RelatedList | RelatedList[];
  unit?: string;
  updateAction?: string;
  width?: number;
}

export interface RelatedList {
  hideOnDetail: boolean;
  name: string;
}

export interface SubtabComponents {
  containers?: Container | Container[];
}

export interface FeedLayout {
  autocollapsePublisher?: boolean;
  compactFeed?: boolean;
  feedFilterPosition?: FeedLayoutFilterPosition;
  feedFilters?: FeedLayoutFilter | FeedLayoutFilter[];
  fullWidthFeed?: boolean;
  hideSidebar?: boolean;
  highlightExternalFeedItems?: boolean;
  leftComponents?: FeedLayoutComponent | FeedLayoutComponent[];
  rightComponents?: FeedLayoutComponent | FeedLayoutComponent[];
  useInlineFiltersInConsole?: boolean;
}

export interface FeedLayoutFilter {
  feedFilterName?: string;
  feedFilterType: FeedLayoutFilterType;
  feedItemType?: FeedItemType;
}

export interface FeedLayoutComponent {
  componentType: FeedLayoutComponentType;
  height?: number;
  page?: string;
}

export interface LayoutSection {
  customLabel?: boolean;
  detailHeading?: boolean;
  editHeading?: boolean;
  label?: string;
  layoutColumns?: LayoutColumn | LayoutColumn[];
  style: LayoutSectionStyle;
}

export interface LayoutColumn {
  layoutItems?: LayoutItem | LayoutItem[];
  reserved?: string;
}

export interface LayoutItem {
  analyticsCloudComponent?: AnalyticsCloudComponentLayoutItem;
  behavior?: UiBehavior;
  canvas?: string;
  component?: string;
  customLink?: string;
  emptySpace?: boolean;
  field?: string;
  height?: number;
  page?: string;
  reportChartComponent?: ReportChartComponentLayoutItem;
  scontrol?: string;
  showLabel?: boolean;
  showScrollbars?: boolean;
  width?: string;
}

export interface AnalyticsCloudComponentLayoutItem {
  assetType: string;
  devName: string;
  error?: string;
  filter?: string;
  height?: number;
  hideOnError?: boolean;
  showHeader?: boolean;
  showSharing?: boolean;
  showTitle?: boolean;
  width?: string;
}

export interface ReportChartComponentLayoutItem {
  cacheData?: boolean;
  contextFilterableField?: string;
  error?: string;
  hideOnError?: boolean;
  includeContext?: boolean;
  reportName: string;
  showTitle?: boolean;
  size?: ReportChartComponentSize;
}

export interface MiniLayout {
  fields?: string | string[];
  relatedLists?: RelatedListItem | RelatedListItem[];
}

export interface RelatedListItem {
  customButtons?: string | string[];
  excludeButtons?: string | string[];
  fields?: string | string[];
  quickActions?: string | string[];
  relatedList: string;
  sortField?: string;
  sortOrder?: SortOrder;
}

export interface RelatedContent {
  relatedContentItems?: RelatedContentItem | RelatedContentItem[];
}

export interface RelatedContentItem {
  layoutItem: LayoutItem;
}

export interface SummaryLayout {
  masterLabel: string;
  sizeX: number;
  sizeY?: number;
  sizeZ?: number;
  summaryLayoutItems?: SummaryLayoutItem | SummaryLayoutItem[];
  summaryLayoutStyle: SummaryLayoutStyle;
}

export interface SummaryLayoutItem {
  customLink?: string;
  field?: string;
  posX: number;
  posY?: number;
  posZ?: number;
}

export interface LeadConfigSettings extends Metadata {
  doesEnableLeadConvertDefaultSubjectBlankTaskCreation?: boolean;
  doesHideOpportunityInConvertLeadWindow?: boolean;
  doesPreserveLeadStatus?: boolean;
  doesSelectNoOpportunityOnConvertLead?: boolean;
  doesTrackHistory?: boolean;
  enableConversionsOnMobile?: boolean;
  enableOrgWideMergeAndDelete?: boolean;
  shouldLeadConvertRequireValidation?: boolean;
  shouldSendNotificationEmailWhenLeadOwnerUpdatesViaApexInLEX?: boolean;
}

export interface LeadConvertSettings extends Metadata {
  allowOwnerChange?: boolean;
  objectMapping?: ObjectMapping | ObjectMapping[];
  opportunityCreationOptions?: VisibleOrRequired;
}

export interface Letterhead extends Metadata {
  available: boolean;
  backgroundColor: string;
  bodyColor: string;
  bottomLine: LetterheadLine;
  description?: string;
  footer: LetterheadHeaderFooter;
  header: LetterheadHeaderFooter;
  middleLine: LetterheadLine;
  name: string;
  topLine: LetterheadLine;
}

export interface LetterheadLine {
  color: string;
  height: number;
}

export interface LetterheadHeaderFooter {
  backgroundColor: string;
  height: number;
  horizontalAlignment?: LetterheadHorizontalAlignment;
  logo?: string;
  verticalAlignment?: LetterheadVerticalAlignment;
}

export interface LicenseDefinition extends Metadata {
  aggregationGroup: string;
  description?: string;
  isPublished: boolean;
  label: string;
  licensedCustomPermissions?: LicensedCustomPermissions | LicensedCustomPermissions[];
  licensingAuthority: string;
  licensingAuthorityProvider: string;
  minPlatformVersion: number;
  origin: string;
  revision: number;
  trialLicenseDuration: number;
  trialLicenseQuantity: number;
}

export interface LicensedCustomPermissions {
  customPermission: string;
  licenseDefinition: string;
}

export interface LicensingSettings extends Metadata {
  enableAutoCreateLicenseDefinition?: boolean;
}

export interface LightningBolt extends Metadata {
  category: LightningBoltCategory;
  lightningBoltFeatures?: LightningBoltFeatures | LightningBoltFeatures[];
  lightningBoltImages?: LightningBoltImages | LightningBoltImages[];
  lightningBoltItems?: LightningBoltItems | LightningBoltItems[];
  masterLabel: string;
  publisher: string;
  summary: string;
}

export interface LightningBoltFeatures {
  description?: string;
  order: number;
  title: string;
}

export interface LightningBoltImages {
  image: string;
  order: number;
}

export interface LightningBoltItems {
  name: string;
  type: string;
}

export interface LightningComponentBundle extends Metadata {
  apiVersion?: number;
  capabilities?: Capabilities;
  description?: string;
  isExplicitImport?: boolean;
  isExposed?: boolean;
  lwcResources?: LwcResources;
  masterLabel?: string;
  runtimeNamespace?: string;
  targetConfigs?: string;
  targets?: Targets;
}

export interface Capabilities {
  capability?: string | string[];
}

export interface LwcResources {
  lwcResource?: LwcResource | LwcResource[];
}

export interface LwcResource {
  filePath: string;
  source: string;
}

export interface Targets {
  target?: string | string[];
}

export interface LightningExperienceSettings extends Metadata {
  activeThemeName?: string;
  enableAccessCheckCrucPref?: boolean;
  enableApiUserLtngOutAccessPref?: boolean;
  enableAuraCDNPref?: boolean;
  enableAuraSecStaticResCRUCPref?: boolean;
  enableErrorExperienceEnabled?: boolean;
  enableFeedbackInMobile?: boolean;
  enableGoogleSheetsForSfdcEnabled?: boolean;
  enableHideOpenInQuip?: boolean;
  enableIE11DeprecationMsgHidden?: boolean;
  enableIE11LEXCrucPref?: boolean;
  enableInAppLearning?: boolean;
  enableInAppTooltips?: boolean;
  enableLEXExtensionComponentCustomization?: boolean;
  enableLEXExtensionDarkMode?: boolean;
  enableLEXExtensionInlineEditModifier?: boolean;
  enableLEXExtensionLinkGrabber?: boolean;
  enableLEXExtensionRelatedLists?: boolean;
  enableLEXExtensionRequiredFields?: boolean;
  enableLEXExtensionTrailhead?: boolean;
  enableLEXOnIpadEnabled?: boolean;
  enableLexEndUsersNoSwitching?: boolean;
  enableNavPersonalizationOptOut?: boolean;
  enableNoBackgroundNavigations?: boolean;
  enableQuip?: boolean;
  enableRemoveThemeBrandBanner?: boolean;
  enableS1BannerPref?: boolean;
  enableS1BrowserEnabled?: boolean;
  enableS1DesktopEnabled?: boolean;
  enableS1UiLoggingEnabled?: boolean;
  enableSalesforceNext?: boolean;
  enableSidToken3rdPartyAuraApp?: boolean;
  enableSkypeChatEnabled?: boolean;
  enableSparkAllUsers?: boolean;
  enableSparkConversationEnabled?: boolean;
  enableTryLightningOptOut?: boolean;
  enableUseS1AlohaDesktop?: boolean;
  enableUsersAreLightningOnly?: boolean;
  enableWebExEnabled?: boolean;
  enableWebexAllUsers?: boolean;
  isLEXExtensionComponentCustomizationOff?: boolean;
  isLEXExtensionDarkModeOff?: boolean;
  isLEXExtensionLinkGrabberOff?: boolean;
  isLEXExtensionOff?: boolean;
}

export interface LightningExperienceTheme extends Metadata {
  defaultBrandingSet: string;
  description?: string;
  masterLabel: string;
  shouldOverrideLoadingImage?: boolean;
}

export interface LightningMessageChannel extends Metadata {
  description?: string;
  isExposed?: boolean;
  lightningMessageFields?: LightningMessageField | LightningMessageField[];
  masterLabel: string;
}

export interface LightningMessageField {
  description?: string;
  fieldName: string;
}

export interface LightningOnboardingConfig extends Metadata {
  collaborationGroup?: string;
  customQuestion?: string;
  feedbackFormDaysFrequency?: number;
  isCustom: boolean;
  masterLabel: string;
  promptDelayTime?: number;
  sendFeedbackToSalesforce: boolean;
}

export interface LiveAgentSettings extends Metadata {
  enableChatFindOrCreateEnable?: boolean;
  enableLiveAgent?: boolean;
  enableQuickTextEnabled?: boolean;
}

export interface LiveChatAgentConfig extends Metadata {
  assignments?: AgentConfigAssignments;
  autoGreeting?: string;
  capacity?: number;
  criticalWaitTime?: number;
  customAgentName?: string;
  disableTransferConferenceGreeting?: boolean;
  enableAgentFileTransfer?: boolean;
  enableAgentSneakPeek?: boolean;
  enableAssistanceFlag?: boolean;
  enableAutoAwayOnDecline?: boolean;
  enableAutoAwayOnPushTimeout?: boolean;
  enableChatConferencing?: boolean;
  enableChatMonitoring?: boolean;
  enableChatTransferToAgent?: boolean;
  enableChatTransferToButton?: boolean;
  enableChatTransferToSkill?: boolean;
  enableLogoutSound?: boolean;
  enableNotifications?: boolean;
  enableRequestSound?: boolean;
  enableSneakPeek?: boolean;
  enableVisitorBlocking?: boolean;
  enableWhisperMessage?: boolean;
  label: string;
  supervisorDefaultAgentStatusFilter?: SupervisorAgentStatusFilter;
  supervisorDefaultButtonFilter?: string;
  supervisorDefaultSkillFilter?: string;
  supervisorSkills?: SupervisorAgentConfigSkills;
  transferableButtons?: AgentConfigButtons;
  transferableSkills?: AgentConfigSkills;
}

export interface AgentConfigAssignments {
  profiles?: AgentConfigProfileAssignments;
  users?: AgentConfigUserAssignments;
}

export interface AgentConfigProfileAssignments {
  profile?: string | string[];
}

export interface AgentConfigUserAssignments {
  user?: string | string[];
}

export interface SupervisorAgentConfigSkills {
  skill?: string | string[];
}

export interface AgentConfigButtons {
  button?: string | string[];
}

export interface AgentConfigSkills {
  skill?: string | string[];
}

export interface LiveChatButton extends Metadata {
  animation?: LiveChatButtonPresentation;
  autoGreeting?: string;
  chasitorIdleTimeout?: number;
  chasitorIdleTimeoutWarning?: number;
  chatPage?: string;
  customAgentName?: string;
  deployments?: LiveChatButtonDeployments;
  enableQueue?: boolean;
  inviteEndPosition?: LiveChatButtonInviteEndPosition;
  inviteImage?: string;
  inviteStartPosition?: LiveChatButtonInviteStartPosition;
  isActive?: boolean;
  label: string;
  numberOfReroutingAttempts?: number;
  offlineImage?: string;
  onlineImage?: string;
  optionsCustomRoutingIsEnabled?: boolean;
  optionsHasChasitorIdleTimeout: boolean;
  optionsHasInviteAfterAccept?: boolean;
  optionsHasInviteAfterReject?: boolean;
  optionsHasRerouteDeclinedRequest?: boolean;
  optionsIsAutoAccept?: boolean;
  optionsIsInviteAutoRemove?: boolean;
  overallQueueLength?: number;
  perAgentQueueLength?: number;
  postChatPage?: string;
  postChatUrl?: string;
  preChatFormPage?: string;
  preChatFormUrl?: string;
  pushTimeOut?: number;
  routingType: LiveChatButtonRoutingType;
  site?: string;
  skills?: LiveChatButtonSkills;
  timeToRemoveInvite?: number;
  type: LiveChatButtonType;
  windowLanguage?: Language;
}

export interface LiveChatButtonDeployments {
  deployment?: string | string[];
}

export interface LiveChatButtonSkills {
  skill?: string | string[];
}

export interface LiveChatDeployment extends Metadata {
  brandingImage?: string;
  connectionTimeoutDuration?: number;
  connectionWarningDuration?: number;
  displayQueuePosition?: boolean;
  domainWhiteList?: LiveChatDeploymentDomainWhitelist;
  enablePrechatApi?: boolean;
  enableTranscriptSave?: boolean;
  label: string;
  mobileBrandingImage?: string;
  site?: string;
  windowTitle: string;
}

export interface LiveChatDeploymentDomainWhitelist {
  domain?: string | string[];
}

export interface LiveChatSensitiveDataRule extends Metadata {
  actionType: SensitiveDataActionType;
  description?: string;
  enforceOn: number;
  isEnabled: boolean;
  pattern: string;
  priority: number;
  replacement?: string;
}

export interface LiveMessageSettings extends Metadata {
  enableCheckCEUserPerm?: boolean;
  enableLiveMessage?: boolean;
}

export interface LocationUse extends Metadata {
  isBookable?: boolean;
  isProtected?: boolean;
  locationType: string;
  masterLabel: string;
  use?: string;
}

export interface LoyaltyProgramSetup extends Metadata {
  label?: string;
  programProcesses?: LoyaltyProgramProcess | LoyaltyProgramProcess[];
}

export interface LoyaltyProgramProcess {
  description?: string;
  executionType?: LoyaltyPgmProcExecutionType;
  journalSubType?: string;
  journalType?: string;
  loyaltyTierGroup?: string;
  parameters?: LoyaltyProgramProcessParameter | LoyaltyProgramProcessParameter[];
  processName: string;
  processType: string;
  rules?: LoyaltyProgramProcessRule | LoyaltyProgramProcessRule[];
  status?: LoyaltyPgmProcStatus;
}

export interface LoyaltyProgramProcessParameter {
  condition?: LoyaltyProgramProcessCondition;
  dataType?: LoyaltyPgmProcParmDataType;
  decimalPlaces?: number;
  description?: string;
  isCollection?: boolean;
  isInput?: boolean;
  isOutput?: boolean;
  objectName?: string;
  parameterName: string;
  parameterType?: LoyaltyPgmProcParmType;
  value?: string;
}

export interface LoyaltyProgramProcessCondition {
  conditionCriteria?: string;
  conditionFilterCriteria?:
    | LoyaltyProgramProcessConditionFilterCriteria
    | LoyaltyProgramProcessConditionFilterCriteria[];
  conditionName: string;
  conditionType?: LoyaltyPgmProcRuleType;
}

export interface LoyaltyProgramProcessConditionFilterCriteria {
  operator: LoyaltyPgmProcCondOperator;
  sequence: number;
  sourceFieldName: string;
  value?: string;
  valueType: LoyaltyPgmProcCondType;
}

export interface LoyaltyProgramProcessRule {
  actions?: LoyaltyProgramProcessAction | LoyaltyProgramProcessAction[];
  conditions?: LoyaltyProgramProcessCondition | LoyaltyProgramProcessCondition[];
  description?: string;
  endDate?: Date;
  isProcessEligibilityRule?: boolean;
  previousRule?: string;
  promotion?: string;
  ruleName: string;
  startDate?: Date;
  status?: LoyaltyPgmProcRuleStatus;
  stepMappings?: LoyaltyProgramProcessRuleStepMapping | LoyaltyProgramProcessRuleStepMapping[];
}

export interface LoyaltyProgramProcessAction {
  actionName: string;
  actionParameters?: LoyaltyProgramProcessActionParameter | LoyaltyProgramProcessActionParameter[];
  actionType: LoyaltyPgmProcActionType;
  crudActionType?: LoyaltyPgmProcCrudActType;
  decisionTable?: string;
  decisionTableDatasetLink?: string;
  entityApiName?: string;
  flowDefinition?: string;
  loyaltyProgramProcess?: string;
}

export interface LoyaltyProgramProcessActionParameter {
  operator?: LoyaltyPgmProcActParamOper;
  parameterName: string;
  sequenceNumber?: number;
  value: string;
  valueType?: LoyaltyPgmProcActParamType;
}

export interface LoyaltyProgramProcessRuleStepMapping {
  associatedStep: string;
  parentStep?: string;
  sequence: number;
}

export interface MLDataDefinition extends Metadata {
  developerName: string;
  entityDeveloperName: string;
  excludedFields?: string | string[];
  includedFields?: string | string[];
  joinFields?: MLField | MLField[];
  parentDefinitionDevName: string;
  scoringFilter?: MLFilter;
  segmentFilter?: MLFilter;
  trainingFilter?: MLFilter;
  type: MLDataDefinitionType;
}

export interface MLField {
  entity?: string;
  entityName?: string;
  field?: string;
  fieldName?: string;
  relatedField?: MLField;
  relationType?: MLRelationType;
  type: MLFieldType;
}

export interface MLFilter {
  filterName: string;
  lhFilter?: MLFilter;
  lhPredictionField?: string;
  lhType?: AIValueType;
  lhUnit?: AIFilterUnit;
  lhValue?: string;
  operation: AIFilterOperation;
  rhFilter?: MLFilter;
  rhPredictionField?: string;
  rhType?: AIValueType;
  rhUnit?: AIFilterUnit;
  rhValue?: string;
  sortOrder?: number;
}

export interface MLGenerativeDefinition extends Metadata {
  aiApplicationDeveloperName: string;
  description?: string;
  developerName: string;
  masterLabel?: string;
  status: MLGenerativeDefinitionStatus;
  type: MLGenerativeType;
}

export interface MLPredictionDefinition extends Metadata {
  aiApplicationDeveloperName: string;
  description?: string;
  developerName: string;
  masterLabel?: string;
  negativeExpression?: MLFilter;
  positiveExpression?: MLFilter;
  predictionField?: string;
  priority?: number;
  pushbackField?: string;
  status: MLPredictionDefinitionStatus;
  type: AIPredictionType;
}

export interface MLRecommendationDefinition extends Metadata {
  aiApplicationDeveloperName: string;
  description?: string;
  developerName: string;
  externalId?: string;
  interactionDateTimeField?: string;
  masterLabel: string;
  negativeExpression?: MLFilter;
  positiveExpression?: MLFilter;
  status: MLRecommendationDefinitionStatus;
}

export interface MacroSettings extends Metadata {
  contextualMacroFiltering?: boolean;
  enableAdvancedSearch?: boolean;
  macrosInFolders?: boolean;
}

export interface ManagedContentType extends Metadata {
  description?: string;
  developerName: string;
  managedContentNodeTypes?: ManagedContentNodeType | ManagedContentNodeType[];
  masterLabel: string;
}

export interface ManagedContentNodeType {
  helpText?: string;
  isLocalizable?: boolean;
  isRequired?: boolean;
  nodeLabel: string;
  nodeName: string;
  nodeType: MCNodeType;
  placeholderText?: string;
}

export interface ManagedContentTypeBundle extends Metadata {
  description?: string;
  developerName: string;
  masterLabel: string;
  schemaBody: string;
}

export interface ManagedTopic extends Metadata {
  managedTopicType: string;
  name: string;
  parentName: string;
  position: number;
  topicDescription: string;
}

export interface ManagedTopics extends Metadata {
  managedTopic?: ManagedTopic | ManagedTopic[];
}

export interface MarketAudienceDefinition extends Metadata {
  audienceContactPoints?: AudienceContactPoint | AudienceContactPoint[];
  audiencePackageOwner?: string;
  channels?: string;
  description?: string;
  externalKey?: string;
  isProtected?: boolean;
  lastAudienceExcludedCount?: number;
  lastAudienceMemberCount?: number;
  marketAudienceFields?: MarketAudienceField | MarketAudienceField[];
  masterLabel: string;
  status: MarketAudienceStatus;
}

export interface AudienceContactPoint {
  audienceDefinition: string;
  audienceVersion?: number;
  contactPointType: ContactPointType;
  slotName: string;
}

export interface MarketAudienceField {
  audienceDefinition: string;
  audienceVersion: number;
  fieldDataType: AudienceFieldType;
  fieldDescription?: string;
  fieldName: string;
  slotName: string;
}

export interface MarketSegmentDefinition extends Metadata {
  additionalMetadata?: string;
  excludeCriteria?: string;
  includeCriteria?: string;
  masterLabel: string;
  segmentOn?: string;
  segmentType: MarketSegmentType;
}

export interface MarketingAppExtActivity extends Metadata {
  description?: string;
  endpointUrl?: string;
  isActive?: boolean;
  isProtected?: boolean;
  marketingAppExtension: string;
  masterLabel: string;
}

export interface MarketingAppExtension extends Metadata {
  description?: string;
  isActive?: boolean;
  isProtected?: boolean;
  marketingAppExtActions?: MarketingAppExtAction | MarketingAppExtAction[];
  marketingAppExtActivities?: MarketingAppExtActivity | MarketingAppExtActivity[];
  masterLabel: string;
}

export interface MarketingAppExtAction {
  actionName: string;
  actionParams?: string;
  actionSchema?: string;
  actionSelector: string;
  apiName: string;
  description?: string;
  isActive?: boolean;
  marketingAppExtension: string;
}

export interface MatchingRule extends Metadata {
  booleanFilter?: string;
  description?: string;
  label: string;
  matchingRuleItems?: MatchingRuleItem | MatchingRuleItem[];
  ruleStatus: MatchingRuleStatus;
}

export interface MatchingRuleItem {
  blankValueBehavior?: BlankValueBehavior;
  fieldName: string;
  matchingMethod: MatchingMethod;
}

export interface MatchingRules extends Metadata {
  matchingRules?: MatchingRule | MatchingRule[];
}

export interface MeetingsSettings extends Metadata {
  enableSalesforceMeetings?: boolean;
  enableSalesforceMeetingsSyncCheck?: boolean;
  enableZoomVideoConference?: boolean;
}

export interface MessagingChannel extends Metadata {
  automatedResponses?: MessagingAutoResponse | MessagingAutoResponse[];
  customParameters?: MessagingChannelCustomParameter | MessagingChannelCustomParameter[];
  description?: string;
  masterLabel: string;
  messagingChannelType: MessagingChannelType;
  sessionHandlerFlow?: string;
  sessionHandlerQueue: string;
  sessionHandlerType: MessagingSessionHandlerType;
  standardParameters?: MessagingChannelStandardParameter | MessagingChannelStandardParameter[];
}

export interface MessagingAutoResponse {
  response: string;
  type: MessagingAutoResponseType;
}

export interface MessagingChannelCustomParameter {
  actionParameterMappings?: MessagingChannelActionParameterMapping | MessagingChannelActionParameterMapping[];
  externalParameterName: string;
  masterLabel: string;
  maxLength?: number;
  name: string;
  parameterDataType: FlowDataType;
  parameterValueMappings?: MessagingChannelParameterValueMapping | MessagingChannelParameterValueMapping[];
}

export interface MessagingChannelActionParameterMapping {
  actionParameterName: string;
}

export interface MessagingChannelParameterValueMapping {
  lookupValue: string;
  lookupValueType: MessagingChannelTargetLookupValueType;
  parameterValue: string;
}

export interface MessagingChannelStandardParameter {
  actionParameterMappings?: MessagingChannelActionParameterMapping | MessagingChannelActionParameterMapping[];
  parameterType: MessagingChannelStandardParameterType;
  parameterValueMappings?: MessagingChannelParameterValueMapping | MessagingChannelParameterValueMapping[];
}

export interface MetadataGroup extends Metadata {
  description?: string;
  mappings?: string | string[];
}

export interface MfgProgramTemplate extends Metadata {
  description?: string;
  programTemplateItems?: MfgProgramTemplateItem | MfgProgramTemplateItem[];
  programTemplateName: string;
  status: MfgProgramTemplateStatus;
}

export interface MfgProgramTemplateItem {
  advAccountForecastSet?: string;
  description?: string;
  templateItemName: string;
  transformationDisplayOrder: number;
  transformationType: MfgProgramTransformationType;
}

export interface MfgServiceConsoleSettings extends Metadata {
  enableMfgServiceConsole?: boolean;
}

export interface MigrationAlias extends Metadata {
  alternativeValue?: string;
  description: string;
  productionValue?: string;
}

export interface MilestoneType extends Metadata {
  description?: string;
  recurrenceType?: MilestoneTypeRecurrenceType;
}

export interface MktCalcInsightObjectDef extends Metadata {
  creationType: CalculatedInsightCreationType;
  description?: string;
  expression?: string;
  masterLabel: string;
}

export interface MktDataConnection extends Metadata {
  connectionMethod: MktDataConnectionMethod;
  connectionStatus?: MktDataConnectionStatus;
  connectorName: string;
  credentials?: MktDataConnectionCred | MktDataConnectionCred[];
  externalRecordIdentifier?: string;
  masterLabel: string;
  parameters?: MktDataConnectionParam | MktDataConnectionParam[];
}

export interface MktDataConnectionCred extends Metadata {
  credentialName: string;
  value: string;
}

export interface MktDataConnectionParam extends Metadata {
  paramName: string;
  value: string;
}

export interface MktDataConnectionSrcParam extends Metadata {
  paramName: string;
  referenceObject: string;
  value: string;
}

export interface MktDataTranField extends Metadata {
  creationType: DefinitionCreationType;
  datatype: string;
  dateFormat?: string;
  externalName: string;
  isDataRequired?: boolean;
  length?: number;
  masterLabel: string;
  precision?: number;
  primaryIndexOrder?: number;
  scale?: number;
  sequence: number;
}

export interface MktDataTranObject extends Metadata {
  connector: string;
  creationType: DefinitionCreationType;
  dataSource: string;
  dataSourceObject: string;
  masterLabel: string;
  mktDataTranFields?: MktDataTranField | MktDataTranField[];
  objectCategory: string;
}

export interface MktDatalakeSrcKeyQualifier extends Metadata {
  description?: string;
  masterLabel: string;
}

export interface MlDomain extends Metadata {
  description?: string;
  label: string;
  mlIntents?: MlIntent | MlIntent[];
  mlSlotClasses?: MlSlotClass | MlSlotClass[];
}

export interface MlModelArtifact extends Metadata {
  algorithmType?: MlAIModelAlgorithmType;
  description?: string;
  generativeModelType?: MlGenerativeModelType;
  inputFeatures?: MlModelInput | MlModelInput[];
  label: string;
  modelType: MlModelType;
  outputFeatures?: MlModelOutput | MlModelOutput[];
  parameters?: MlParameterDefinition | MlParameterDefinition[];
  predictionType?: MlModelPredictionType;
  runtimeType?: MlRuntimeType;
  sourceContainer?: string;
  sourceType: MlModelSourceType;
  status: MlModelArtifactStatus;
  trainingMetrics?: string;
  modelCapabilities?: MlGenerativeModelCapability | MlGenerativeModelCapability[];
}

export interface MlModelInput {
  isDisparateImpact?: boolean;
  label: string;
  name: string;
  position?: number;
  isSegmentField?: boolean;
  isSensitive?: boolean;
  type: string;
  values?: string | string[];
}

export interface MlModelOutput {
  label: string;
  name: string;
  type: string;
}

export interface MlParameterDefinition {
  continuousDefault?: number;
  continuousMaximum?: number;
  continuousMinimum?: number;
  description: string;
  discreteDefault?: string;
  discreteValues?: string | string[];
  name: string;
  type: MlParameterType;
  modelCapabilities?: MlGenerativeModelCapability | MlGenerativeModelCapability[];
}

export interface MlModelKit extends Metadata {
  activatedModels?: MlActivatedModel | MlActivatedModel[];
  description?: string;
  label: string;
  objectiveType?: MlObjectiveType;
  outcomeGoal: MlOutcomeGoalType;
  outputFeatures?: MlModelOutput | MlModelOutput[];
  predictionType?: MlModelPredictionType;
  status: MlModelKitStatus;
}

export interface MlActivatedModel {
  model: string;
  label: string;
  name: string;
  parameterOverrides?: MlParameterOverride | MlParameterOverride[];
  position: number;
  status: MlActivatedModelStatus;
  refreshEnabled?: boolean;
  modelCapability?: MlGenerativeModelCapability;
}

export interface MlParameterOverride {
  continuousValue?: number;
  discreteValue?: string;
  parameter: string;
}

export interface MobileApplicationDetail extends Metadata {
  applicationBinaryFile?: string;
  applicationBinaryFileName?: string;
  applicationBundleIdentifier?: string;
  applicationFileLength?: number;
  applicationIconFile?: string;
  applicationIconFileName?: string;
  applicationInstallUrl?: string;
  devicePlatform: DevicePlatformType;
  deviceType?: string;
  minimumOsVersion?: string;
  privateApp?: boolean;
  version: string;
}

export interface MobileSettings extends Metadata {
  dashboardMobile?: DashboardMobileSettings;
  enableImportContactFromDevice?: boolean;
  enableOfflineDraftsEnabled?: boolean;
  enablePopulateNameManuallyInToday?: boolean;
  enableS1EncryptedStoragePref2?: boolean;
  enableS1OfflinePref?: boolean;
}

export interface DashboardMobileSettings {
  enableDashboardIPadApp?: boolean;
}

export interface ModerationRule extends Metadata {
  action: ModerationRuleAction;
  actionLimit?: number;
  active: boolean;
  description?: string;
  entitiesAndFields?: ModeratedEntityField | ModeratedEntityField[];
  masterLabel: string;
  notifyLimit?: number;
  timePeriod?: RateLimitTimePeriod;
  type?: ModerationRuleType;
  userCriteria?: string | string[];
  userMessage?: string;
}

export interface ModeratedEntityField {
  entityName: string;
  fieldName?: string;
  keywordList?: string;
}

export interface Module extends Metadata {
  description?: string;
  label: string;
  moduleDependencies?: ModuleDependencies;
  moduleType: string;
  name: string;
  types?: PackageTypeMembers | PackageTypeMembers[];
  version?: string;
}

export interface ModuleDependencies {
  moduleRef?: ModuleRef | ModuleRef[];
}

export interface PackageTypeMembers {
  members?: string | string[];
  name: string;
}

export interface MyDomainDiscoverableLogin extends Metadata {
  apexHandler: string;
  executeApexHandlerAs?: string;
  usernameLabel?: string;
}

export interface MyDomainSettings extends Metadata {
  canOnlyLoginWithMyDomainUrl?: boolean;
  doesApiLoginRequireOrgDomain?: boolean;
  doesWarnOnForceComRedirect?: boolean;
  doesWarnOnRedirect?: boolean;
  domainPartition?: OrgDomainShard;
  enableEdgeDuringRollout?: boolean;
  enableNativeBrowserForAuthOnAndroid?: boolean;
  enableNativeBrowserForAuthOnIos?: boolean;
  enableShareBrowserSessionAndroidForAuth?: boolean;
  enableShareBrowserSessionIOSForAuth?: boolean;
  instancedUrlRedirectHandling?: OrgDomainRedirectOption;
  logRedirections?: boolean;
  myDomainName?: string;
  myDomainSuffix?: OrgDomainProdSuffix;
  redirectForceComSiteUrls?: boolean;
  redirectPriorMyDomain?: boolean;
  use3rdPartyCookieBlockingCompatibleHostnames?: boolean;
  useEdge?: boolean;
  useEnhancedDomainsInSandbox?: boolean;
  useStabilizedMyDomainHostnames?: boolean;
  useStabilizedSandboxMyDomainHostnames?: boolean;
}

export interface NameSettings extends Metadata {
  enableInformalName?: boolean;
  enableMiddleName?: boolean;
  enableNameSuffix?: boolean;
}

export interface NamedCredential extends Metadata {
  allowMergeFieldsInBody?: boolean;
  allowMergeFieldsInHeader?: boolean;
  authProvider?: string;
  authTokenEndpointUrl?: string;
  awsAccessKey?: string;
  awsAccessSecret?: string;
  awsRegion?: string;
  awsService?: string;
  calloutStatus?: CalloutStatus;
  certificate?: string;
  endpoint?: string;
  generateAuthorizationHeader?: boolean;
  jwtAudience?: string;
  jwtFormulaSubject?: string;
  jwtIssuer?: string;
  jwtSigningCertificate?: string;
  jwtTextSubject?: string;
  jwtValidityPeriodSeconds?: number;
  label: string;
  namedCredentialParameters?: NamedCredentialParameter | NamedCredentialParameter[];
  namedCredentialType?: NamedCredentialType;
  oauthRefreshToken?: string;
  oauthScope?: string;
  oauthToken?: string;
  outboundNetworkConnection?: string;
  password?: string;
  principalType?: ExternalPrincipalType;
  protocol?: AuthenticationProtocol;
  username?: string;
}

export interface NamedCredentialParameter {
  certificate?: string;
  description?: string;
  externalCredential?: string;
  outboundNetworkConnection?: string;
  parameterName: string;
  parameterType: NamedCredentialParamType;
  parameterValue?: string;
  sequenceNumber?: number;
}

export interface NavigationMenu extends Metadata {
  container: string;
  containerType: string;
  label: string;
  navigationMenuItem?: NavigationMenuItem | NavigationMenuItem[];
}

export interface Network extends Metadata {
  allowInternalUserLogin?: boolean;
  allowMembersToFlag?: boolean;
  allowedExtensions?: string;
  branding?: Branding;
  caseCommentEmailTemplate?: string;
  changePasswordTemplate: string;
  chgEmailVerNewTemplate?: string;
  chgEmailVerOldTemplate?: string;
  communityRoles?: CommunityRoles;
  description?: string;
  deviceActEmailTemplate?: string;
  disableReputationRecordConversations?: boolean;
  emailFooterLogo?: string;
  emailFooterText?: string;
  emailSenderAddress: string;
  emailSenderName: string;
  enableApexCDNCaching?: boolean;
  enableCustomVFErrorPageOverrides?: boolean;
  enableDirectMessages?: boolean;
  enableExpFriendlyUrlsAsDefault?: boolean;
  enableExperienceBundleBasedSnaOverrideEnabled?: boolean;
  enableGuestChatter?: boolean;
  enableGuestFileAccess?: boolean;
  enableGuestMemberVisibility?: boolean;
  enableImageOptimizationCDN?: boolean;
  enableInvitation?: boolean;
  enableKnowledgeable?: boolean;
  enableLWRExperienceConnectedApp?: boolean;
  enableMemberVisibility?: boolean;
  enableNicknameDisplay?: boolean;
  enablePrivateMessages?: boolean;
  enableReputation?: boolean;
  enableShowAllNetworkSettings?: boolean;
  enableSiteAsContainer?: boolean;
  enableTalkingAboutStats?: boolean;
  enableTopicAssignmentRules?: boolean;
  enableTopicSuggestions?: boolean;
  enableUpDownVote?: boolean;
  feedChannel?: string;
  forgotPasswordTemplate: string;
  gatherCustomerSentimentData?: boolean;
  headlessForgotPasswordTemplate?: string;
  headlessRegistrationTemplate?: string;
  lockoutTemplate?: string;
  logoutUrl?: string;
  maxFileSizeKb?: number;
  navigationLinkSet?: NavigationLinkSet;
  networkMemberGroups?: NetworkMemberGroup;
  networkPageOverrides?: NetworkPageOverride;
  newSenderAddress?: string;
  picassoSite?: string;
  recommendationAudience?: RecommendationAudience;
  recommendationDefinition?: RecommendationDefinition;
  reputationLevels?: ReputationLevelDefinitions;
  reputationPointsRules?: ReputationPointsRules;
  selfRegMicroBatchSubErrorEmailTemplate?: string;
  selfRegProfile?: string;
  selfRegistration?: boolean;
  sendWelcomeEmail?: boolean;
  site: string;
  siteArchiveStatus?: SitesArchiveStatus;
  status: NetworkStatus;
  tabs: NetworkTabSet;
  urlPathPrefix?: string;
  verificationTemplate?: string;
  welcomeTemplate: string;
}

export interface Branding {
  loginFooterText?: string;
  loginLogo?: string;
  pageFooter?: string;
  pageHeader?: string;
  primaryColor: string;
  primaryComplementColor: string;
  quaternaryColor: string;
  quaternaryComplementColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  tertiaryComplementColor: string;
  zeronaryColor: string;
  zeronaryComplementColor: string;
}

export interface CommunityRoles {
  customerUserRole?: string;
  employeeUserRole?: string;
  partnerUserRole?: string;
}

export interface NetworkMemberGroup {
  permissionSet?: string | string[];
  profile?: string | string[];
}

export interface NetworkPageOverride {
  changePasswordPageOverrideSetting?: NetworkPageOverrideSetting;
  forgotPasswordPageOverrideSetting?: NetworkPageOverrideSetting;
  homePageOverrideSetting?: NetworkPageOverrideSetting;
  loginPageOverrideSetting?: NetworkPageOverrideSetting;
  selfRegProfilePageOverrideSetting?: NetworkPageOverrideSetting;
}

export interface RecommendationAudience {
  recommendationAudienceDetails?: RecommendationAudienceDetail | RecommendationAudienceDetail[];
}

export interface RecommendationAudienceDetail {
  audienceCriteriaType?: AudienceCriteriaType;
  audienceCriteriaValue?: string;
  setupName?: string;
}

export interface RecommendationDefinition {
  recommendationDefinitionDetails?: RecommendationDefinitionDetail | RecommendationDefinitionDetail[];
}

export interface RecommendationDefinitionDetail {
  actionUrl?: string;
  description?: string;
  linkText?: string;
  scheduledRecommendations?: ScheduledRecommendation;
  setupName?: string;
  title?: string;
}

export interface ScheduledRecommendation {
  scheduledRecommendationDetails?: ScheduledRecommendationDetail | ScheduledRecommendationDetail[];
}

export interface ScheduledRecommendationDetail {
  channel?: RecommendationChannel;
  enabled?: boolean;
  rank?: number;
  recommendationAudience?: string;
}

export interface ReputationLevelDefinitions {
  level?: ReputationLevel | ReputationLevel[];
}

export interface ReputationLevel {
  branding?: ReputationBranding;
  label?: string;
  lowerThreshold: number;
}

export interface ReputationBranding {
  smallImage?: string;
}

export interface ReputationPointsRules {
  pointsRule?: ReputationPointsRule | ReputationPointsRule[];
}

export interface ReputationPointsRule {
  eventType: string;
  points: number;
}

export interface NetworkTabSet {
  customTab?: string | string[];
  defaultTab: string;
  standardTab?: string | string[];
}

export interface NotificationTypeConfig extends Metadata {
  notificationTypeSettings?: NotificationTypeSettings | NotificationTypeSettings[];
}

export interface NotificationTypeSettings {
  appSettings?: AppSettings | AppSettings[];
  notificationChannels?: NotificationChannels;
  notificationType: string;
}

export interface AppSettings {
  connectedAppName: string;
  enabled?: boolean;
}

export interface NotificationChannels {
  desktopEnabled?: boolean;
  mobileEnabled?: boolean;
  slackEnabled?: boolean;
}

export interface NotificationsSettings extends Metadata {
  enableActvityReminderBrowserNotifs?: boolean;
  enableMobileAppPushNotifications?: boolean;
  enableNotifications?: boolean;
}

export interface OauthCustomScope extends Metadata {
  assignedTo?: OauthCustomScopeApp | OauthCustomScopeApp[];
  description: string;
  developerName: string;
  isProtected?: boolean;
  isPublic?: boolean;
  masterLabel: string;
}

export interface OauthCustomScopeApp {
  connectedApp: string;
}

export interface OauthOidcSettings extends Metadata {
  blockOAuthUnPwFlow?: boolean;
  blockOAuthUsrAgtFlow?: boolean;
  isPkceRequired?: boolean;
  oAuthCdCrdtFlowEnable?: boolean;
}

export interface ObjectHierarchyRelationship extends Metadata {
  childObjectMapping?: ObjectMapping;
  childObjectMappingId?: string;
  inputObjRecordsGrpFieldName?: string;
  mappingType?: ObjHierarchyMappingType;
  masterLabel?: string;
  outputPntRelationshipFieldName?: string;
  parentObjectMapping: ObjectMapping;
  parentObjectMappingId?: string;
  parentRecord?: string;
  parentRelationshipFieldName?: string;
  sourceReferenceRelaFieldName?: string;
  usageType: MappingUsageType;
}

export interface ObjectLinkingSettings extends Metadata {
  enableObjectLinking?: boolean;
}

export interface ObjectSourceTargetMap extends Metadata {
  creationType?: DefinitionCreationType;
  fieldSourceTargetMaps?: FieldSourceTargetMap | FieldSourceTargetMap[];
  masterLabel: string;
  sequenceNbr?: number;
  sourceObjectName: string;
  targetObjectName: string;
}

export interface FieldSourceTargetMap {
  creationType?: DefinitionCreationType;
  filterApplied?: boolean;
  filterOperationType?: string;
  filterValue?: string;
  isSourceFormula?: boolean;
  sourceField: string;
  sourceFormula?: string;
  targetField: string;
}

export interface OcrSampleDocument extends Metadata {
  applicationType?: OcrApplicationType;
  contentAsset?: string;
  documentHeight?: number;
  documentType: string;
  masterLabel: string;
  ocrSampleDocumentFields?: OcrSampleDocumentField | OcrSampleDocumentField[];
  ocrSampleDocumentPages?: OcrSampleDocumentPage | OcrSampleDocumentPage[];
}

export interface OcrSampleDocumentField {
  cellColumnNumber?: number;
  cellColumnSpanValue?: number;
  cellRowNumber?: number;
  cellRowSpanValue?: number;
  fieldLabelMaxX?: number;
  fieldLabelMaxY?: number;
  fieldLabelMinX?: number;
  fieldLabelMinY?: number;
  fieldValueName?: string;
  isAutoExtractedValue?: boolean;
  keyContent?: string;
  ocrSampleDocument: string;
  ocrSampleDocumentPage?: string;
  ocrSampleDocumentPageItem?: OcrSampleDocumentPageItem;
}

export interface OcrSampleDocumentPageItem {
  hasHeader?: boolean;
  sequenceNumber: number;
  title?: string;
  type: ItemType;
}

export interface OcrSampleDocumentPage {
  ocrSampleDocument: string;
  ocrSampleDocumentPageItems?: OcrSampleDocumentPageItem | OcrSampleDocumentPageItem[];
  pageHeight?: number;
  pageNumber: number;
}

export interface OcrTemplate extends Metadata {
  active?: boolean;
  description?: string;
  documentType: string;
  masterLabel: string;
  ocrTargetObjects?: OcrTargetObject | OcrTargetObject[];
  ocrTemplateSampleDocuments?: OcrTemplateSampleDocument | OcrTemplateSampleDocument[];
  pageCount?: number;
  templateName: string;
}

export interface OcrTargetObject {
  ocrTargetObjFieldMappings?: OcrTargetObjFieldMapping | OcrTargetObjFieldMapping[];
  targetObject: string;
  targetObjectRecordType?: string;
}

export interface OcrTargetObjFieldMapping {
  ocrSampleDocField?: OcrSampleDocumentField;
  targetField: string;
  type: OcrMappingType;
}

export interface OcrTemplateSampleDocument {
  ocrSampleDocument?: string;
}

export interface OmniChannelPricingSettings extends Metadata {
  enableOmniChannelPricing?: boolean;
}

export interface OmniChannelSettings extends Metadata {
  enableOmniAutoLoginPrompt?: boolean;
  enableOmniChannel?: boolean;
  enableOmniSecondaryRoutingPriority?: boolean;
  enableOmniSkillsRouting?: boolean;
}

export interface OmniDataTransform extends Metadata {
  active?: boolean;
  assignmentRulesUsed?: boolean;
  deletedOnSuccess?: boolean;
  description?: string;
  errorIgnored?: boolean;
  expectedInputJson?: string;
  expectedInputOtherData?: string;
  expectedInputXml?: string;
  expectedOutputJson?: string;
  expectedOutputOtherData?: string;
  expectedOutputXml?: string;
  fieldLevelSecurityEnabled?: boolean;
  inputParsingClass?: string;
  inputType?: OmniDataTransformInputType;
  name: string;
  namespace?: string;
  nullInputsIncludedInOutput?: boolean;
  omniDataTransformItem?: OmniDataTransformItem | OmniDataTransformItem[];
  outputParsingClass?: string;
  outputType?: string;
  overrideKey?: string;
  preprocessorClassName?: string;
  previewJsonData?: string;
  previewOtherData?: string;
  previewSourceObjectData?: string;
  previewXmlData?: string;
  processSuperBulk?: boolean;
  requiredPermission?: string;
  responseCacheTtlMinutes?: number;
  responseCacheType?: string;
  rollbackOnError?: boolean;
  sourceObject?: string;
  sourceObjectDefault?: boolean;
  synchronousProcessThreshold?: number;
  targetOutputDocumentIdentifier?: string;
  targetOutputFileName?: string;
  type: string;
  uniqueName?: string;
  versionNumber?: number;
  xmlDeclarationRemoved?: boolean;
  xmlOutputTagsOrder?: string;
}

export interface OmniDataTransformItem {
  defaultValue?: string;
  disabled?: boolean;
  filterDataType?: ODTItemFilterDataType;
  filterGroup?: number;
  filterOperator?: string;
  filterValue?: string;
  formulaConverted?: string;
  formulaExpression?: string;
  formulaResultPath?: string;
  formulaSequence?: number;
  globalKey?: string;
  inputFieldName?: string;
  inputObjectName?: string;
  inputObjectQuerySequence?: number;
  linkedFieldName?: string;
  linkedObjectSequence?: number;
  lookupByFieldName?: string;
  lookupObjectName?: string;
  lookupReturnedFieldName?: string;
  migrationAttribute?: string;
  migrationCategory?: string;
  migrationGroup?: string;
  migrationKey?: string;
  migrationPattern?: string;
  migrationProcess?: string;
  migrationType?: string;
  migrationValue?: string;
  name: string;
  omniDataTransformation?: string;
  omniDataTransformationId?: string;
  outputCreationSequence?: number;
  outputFieldFormat?: string;
  outputFieldName?: string;
  outputObjectName?: string;
  requiredForUpsert?: boolean;
  transformValuesMappings?: string;
  upsertKey?: boolean;
}

export interface OmniIntegrationProcedure extends Metadata {
  customHtmlTemplates?: string;
  customJavaScript?: string;
  description?: string;
  designerCustomizationType?: string;
  elementTypeComponentMapping?: string;
  isActive?: boolean;
  isIntegrationProcedure?: boolean;
  isMetadataCacheDisabled?: boolean;
  isOmniScriptEmbeddable?: boolean;
  isTestProcedure?: boolean;
  isWebCompEnabled?: boolean;
  language: string;
  lastPreviewPage?: string;
  name: string;
  nameSpace?: string;
  omniProcessElements?: OmniProcessElement | OmniProcessElement[];
  omniProcessKey?: string;
  omniProcessType: OmniProcessType;
  overrideKey?: string;
  propertySetConfig?: string;
  requiredPermission?: string;
  responseCacheType?: string;
  subType: string;
  type: string;
  uniqueName: string;
  versionNumber: number;
  webComponentKey?: string;
}

export interface OmniProcessElement {
  childElements?: OmniProcessElement | OmniProcessElement[];
  description?: string;
  designerCustomizationType?: string;
  discoveryFrameworkUsageType?: string;
  embeddedOmniScriptKey?: string;
  isActive?: boolean;
  isOmniScriptEmbeddable?: boolean;
  level?: number;
  name: string;
  omniProcessVersionNumber?: number;
  parentElementName?: string;
  parentElementType?: string;
  propertySetConfig?: string;
  sequenceNumber?: number;
  type?: string;
  uniqueIndex?: string;
}

export interface OmniInteractionAccessConfig extends Metadata {
  configName?: string;
  isAsyncCardCachingEnabled: boolean;
  isCardApexRemoteDisabled: boolean;
  isCardCacheDisabled: boolean;
  isCardDataTfrmDisabled: boolean;
  isCardIntegrationProcDisabled: boolean;
  isCardRestApiDisabled: boolean;
  isCardSoqlDisabled: boolean;
  isCardSoslDisabled: boolean;
  isCardStreamingApiDisabled: boolean;
  isDataTfrmEncrpFieldsDisabled: boolean;
  masterLabel: string;
  setupOwner?: string;
}

export interface OmniInteractionConfig extends Metadata {
  masterLabel: string;
  value: string;
}

export interface OmniScript extends Metadata {
  customHtmlTemplates?: string;
  customJavaScript?: string;
  description?: string;
  designerCustomizationType?: string;
  discoveryFrameworkUsageType?: string;
  elementTypeComponentMapping?: string;
  isActive?: boolean;
  isIntegrationProcedure?: boolean;
  isMetadataCacheDisabled?: boolean;
  isOmniScriptEmbeddable?: boolean;
  isTestProcedure?: boolean;
  isWebCompEnabled?: boolean;
  language: string;
  lastPreviewPage?: string;
  name: string;
  nameSpace?: string;
  omniProcessElements?: OmniProcessElement | OmniProcessElement[];
  omniProcessKey?: string;
  omniProcessType: OmniProcessType;
  overrideKey?: string;
  propertySetConfig?: string;
  requiredPermission?: string;
  responseCacheType?: string;
  subType: string;
  type: string;
  uniqueName: string;
  versionNumber: number;
  webComponentKey?: string;
}

export interface OmniSupervisorConfig extends Metadata {
  isTimelineHidden: boolean;
  masterLabel: string;
  omniSupervisorConfigAction?: OmniSupervisorConfigAction | OmniSupervisorConfigAction[];
  omniSupervisorConfigGroup?: OmniSupervisorConfigGroup | OmniSupervisorConfigGroup[];
  omniSupervisorConfigProfile?: OmniSupervisorConfigProfile | OmniSupervisorConfigProfile[];
  omniSupervisorConfigQueue?: OmniSupervisorConfigQueue | OmniSupervisorConfigQueue[];
  omniSupervisorConfigSkill?: OmniSupervisorConfigSkill | OmniSupervisorConfigSkill[];
  skillVisibility?: OmniSuperSkillVisibilityType;
}

export interface OmniSupervisorConfigAction {
  actionName: OmniSupervisorActionName;
  actionTab: OmniSupervisorActionTab;
  customActionFlow?: string;
  displayOrder: number;
}

export interface OmniSupervisorConfigGroup {
  group: string;
}

export interface OmniSupervisorConfigProfile {
  profile: string;
}

export interface OmniSupervisorConfigQueue {
  queue: string;
}

export interface OmniSupervisorConfigSkill {
  skill: string;
}

export interface OmniUiCard extends Metadata {
  authorName: string;
  clonedFromOmniUiCardKey?: string;
  dataSourceConfig: string;
  description?: string;
  isActive: boolean;
  name: string;
  omniUiCardType: OmniUiCardType;
  overrideKey?: string;
  propertySetConfig: string;
  sampleDataSourceResponse?: string;
  stylingConfiguration?: string;
  versionNumber: string;
}

export interface OpportunityInsightsSettings extends Metadata {
  enableOpportunityInsights?: boolean;
}

export interface OpportunityScoreSettings extends Metadata {
  enableOpportunityScoring?: boolean;
}

export interface OpportunitySettings extends Metadata {
  autoActivateNewReminders?: boolean;
  customizableProductSchedulesEnabled?: boolean;
  doesEnforceStandardOpportunitySaveLogic?: boolean;
  enableExpandedPipelineInspectionSetup?: boolean;
  enableFindSimilarOpportunities?: boolean;
  enableForecastCategoryMetrics?: boolean;
  enableOpportunityFieldHistoryTracking?: boolean;
  enableOpportunityInsightsInMobile?: boolean;
  enableOpportunityTeam?: boolean;
  enablePipelineChangesMetrics?: boolean;
  enablePipelineInspection?: boolean;
  enablePipelineInspectionFlow?: boolean;
  enablePipelineInspectionSingleCategoryRollup?: boolean;
  enableRevenueInsights?: boolean;
  enableServiceCaseInsights?: boolean;
  enableUpdateReminders?: boolean;
  findSimilarOppFilter?: FindSimilarOppFilter;
  oppAmountDealMotionEnabled?: boolean;
  oppCloseDateDealMotionEnabled?: boolean;
  promptToAddProducts?: boolean;
  pushCountEnabled?: boolean;
  simpleOppCreateFromContact?: boolean;
  simpleOppCreateFromEvent?: boolean;
}

export interface FindSimilarOppFilter {
  similarOpportunitiesDisplayColumns?: string | string[];
  similarOpportunitiesMatchFields?: string | string[];
}

export interface OrchestrationContext extends Metadata {
  datasets?: OrchestrationContextDataset | OrchestrationContextDataset[];
  description?: string;
  events?: OrchestrationContextEvent | OrchestrationContextEvent[];
  imageFile: string;
  imageScale: number;
  masterLabel: string;
  runtimeType: string;
  salesforceObject?: string;
  salesforceObjectPrimaryKey?: string;
}

export interface OrchestrationContextDataset {
  datasetType: string;
  orchestrationDataset: string;
}

export interface OrchestrationContextEvent {
  eventType: string;
  orchestrationEvent: string;
  platformEvent: string;
  platformEventPrimaryKey: string;
}

export interface OrderManagementSettings extends Metadata {
  enableB2CHighScaleOrders?: boolean;
  enableB2CIntegration?: boolean;
  enableDuplicateManagement?: boolean;
  enableHighScaleOrders?: boolean;
  enableIndividualOrderItemTaxAdjustments?: boolean;
  enableOMAutomation?: boolean;
  enableOrderManagement?: boolean;
  enablePersonAccountsForShoppers?: boolean;
  initOMAutomation?: boolean;
}

export interface OrderSettings extends Metadata {
  enableEnhancedCommerceOrders?: boolean;
  enableNegativeQuantity?: boolean;
  enableOptionalPricebook?: boolean;
  enableOrderEvents?: boolean;
  enableOrders: boolean;
  enableReductionOrders?: boolean;
  enableZeroQuantity?: boolean;
}

export interface OutboundNetworkConnection extends Metadata {
  connectionType: ExternalConnectionType;
  description?: string;
  isActive: boolean;
  label: string;
  outboundNetworkConnProperties?: OutboundNetworkConnProperty | OutboundNetworkConnProperty[];
  status: ExternalConnectionStatus;
}

export interface OutboundNetworkConnProperty {
  propertyName: OutboundConnPropertyName;
  propertyValue: string;
}

export interface Package extends Metadata {
  apiAccessLevel?: APIAccessLevel;
  description?: string;
  namespacePrefix?: string;
  objectPermissions?: ProfileObjectPermissions | ProfileObjectPermissions[];
  packageType?: string;
  postInstallClass?: string;
  setupWeblink?: string;
  types?: PackageTypeMembers | PackageTypeMembers[];
  uninstallClass?: string;
  version: string;
}

export interface ProfileObjectPermissions {
  allowCreate?: boolean;
  allowDelete?: boolean;
  allowEdit?: boolean;
  allowRead?: boolean;
  customizeSetup?: boolean;
  deleteSetup?: boolean;
  modifyAllRecords?: boolean;
  object: string;
  viewAllRecords?: boolean;
  viewSetup?: boolean;
}

export interface PardotEinsteinSettings extends Metadata {
  enableCampaignInsight?: boolean;
  enableEngagementScore?: boolean;
}

export interface PardotSettings extends Metadata {
  enableAIEinsteinEngageFreq?: boolean;
  enableAIOptimizedSendTime?: boolean;
  enableB2bmaAppEnabled?: boolean;
  enableEngagementHistoryDashboards?: boolean;
  enableEnhancedProspectCustomFieldsSync?: boolean;
  enablePardotAppV1Enabled?: boolean;
  enablePardotEnabled?: boolean;
  enablePardotObjectSync?: boolean;
  enableProspectActivityDataset?: boolean;
}

export interface ParticipantRole extends Metadata {
  defaultAccessLevel: ParticipantRoleAccessLevel;
  isActive?: boolean;
  masterLabel: string;
  parentObject: string;
}

export interface PartyDataModelSettings extends Metadata {
  enableAutoSelectIndividualOnMerge?: boolean;
  enableConsentManagement?: boolean;
  enableIndividualAutoCreate?: boolean;
}

export interface PathAssistant extends Metadata {
  active: boolean;
  entityName: string;
  fieldName: string;
  masterLabel: string;
  pathAssistantSteps?: PathAssistantStep | PathAssistantStep[];
  recordTypeName: string;
}

export interface PathAssistantStep {
  fieldNames?: string | string[];
  info?: string;
  picklistValueName: string;
}

export interface PathAssistantSettings extends Metadata {
  canOverrideAutoPathCollapseWithUserPref?: boolean;
  pathAssistantEnabled?: boolean;
}

export interface PaymentGatewayProvider extends Metadata {
  apexAdapter?: string;
  comments?: string;
  idempotencySupported: IdempotencySupportStatus;
  masterLabel: string;
}

export interface PaymentsSettings extends Metadata {
  enablePayments?: boolean;
}

export interface PermissionSet extends Metadata {
  applicationVisibilities?: PermissionSetApplicationVisibility | PermissionSetApplicationVisibility[];
  classAccesses?: PermissionSetApexClassAccess | PermissionSetApexClassAccess[];
  customMetadataTypeAccesses?: PermissionSetCustomMetadataTypeAccess | PermissionSetCustomMetadataTypeAccess[];
  customPermissions?: PermissionSetCustomPermissions | PermissionSetCustomPermissions[];
  customSettingAccesses?: PermissionSetCustomSettingAccess | PermissionSetCustomSettingAccess[];
  dataspaceScopes?: DataspaceScopeAccess | DataspaceScopeAccess[];
  description?: string;
  externalCredentialPrincipalAccesses?:
    | PermissionSetExternalCredentialPrincipalAccess
    | PermissionSetExternalCredentialPrincipalAccess[];
  externalDataSourceAccesses?: PermissionSetExternalDataSourceAccess | PermissionSetExternalDataSourceAccess[];
  fieldPermissions?: PermissionSetFieldPermissions | PermissionSetFieldPermissions[];
  flowAccesses?: PermissionSetFlowAccess | PermissionSetFlowAccess[];
  hasActivationRequired?: boolean;
  label: string;
  license?: string;
  objectPermissions?: PermissionSetObjectPermissions | PermissionSetObjectPermissions[];
  pageAccesses?: PermissionSetApexPageAccess | PermissionSetApexPageAccess[];
  recordTypeVisibilities?: PermissionSetRecordTypeVisibility | PermissionSetRecordTypeVisibility[];
  tabSettings?: PermissionSetTabSetting | PermissionSetTabSetting[];
  userPermissions?: PermissionSetUserPermission | PermissionSetUserPermission[];
}

export interface PermissionSetApplicationVisibility {
  application: string;
  visible: boolean;
}

export interface PermissionSetApexClassAccess {
  apexClass: string;
  enabled: boolean;
}

export interface PermissionSetCustomMetadataTypeAccess {
  enabled: boolean;
  name: string;
}

export interface PermissionSetCustomPermissions {
  enabled: boolean;
  name: string;
}

export interface PermissionSetCustomSettingAccess {
  enabled: boolean;
  name: string;
}

export interface DataspaceScopeAccess {
  customizeActivationDefinitions?: boolean;
  customizeAllDefinitions?: boolean;
  customizeCalculatedInsightDefinitions?: boolean;
  customizeDataActionDefinitions?: boolean;
  customizeIdentityResolutionDefinitions?: boolean;
  customizeSegmentationDefinitions?: boolean;
  dataspaceScope: string;
  viewActivationDefinitions?: boolean;
  viewCalculatedInsightDefinitions?: boolean;
  viewDataActionDefinitions?: boolean;
  viewIdentityResolutionDefinitions?: boolean;
  viewSegmentationDefinitions?: boolean;
}

export interface PermissionSetExternalCredentialPrincipalAccess {
  enabled: boolean;
  externalCredentialPrincipal: string;
}

export interface PermissionSetExternalDataSourceAccess {
  enabled: boolean;
  externalDataSource: string;
}

export interface PermissionSetFieldPermissions {
  editable: boolean;
  field: string;
  readable?: boolean;
}

export interface PermissionSetFlowAccess {
  enabled: boolean;
  flow: string;
}

export interface PermissionSetObjectPermissions {
  allowCreate: boolean;
  allowDelete: boolean;
  allowEdit: boolean;
  allowRead: boolean;
  customizeSetup?: boolean;
  deleteSetup?: boolean;
  modifyAllRecords: boolean;
  object: string;
  viewAllRecords: boolean;
  viewSetup?: boolean;
}

export interface PermissionSetApexPageAccess {
  apexPage: string;
  enabled: boolean;
}

export interface PermissionSetRecordTypeVisibility {
  recordType: string;
  visible: boolean;
}

export interface PermissionSetTabSetting {
  tab: string;
  visibility: PermissionSetTabVisibility;
}

export interface PermissionSetUserPermission {
  enabled: boolean;
  name: string;
}

export interface MutingPermissionSet extends PermissionSet {
  label: string;
}

export interface PermissionSetGroup extends Metadata {
  description?: string;
  hasActivationRequired?: boolean;
  label: string;
  mutingPermissionSets?: string | string[];
  permissionSets?: string | string[];
  status?: string;
}

export interface PermissionSetLicenseDefinition extends Metadata {
  customPermissions?: PermissionSetLicenseDefinitionCustomPermission | PermissionSetLicenseDefinitionCustomPermission[];
  isSupplementLicense?: boolean;
  label: string;
  licenseExpirationPolicy: LicenseExpirationPolicy;
  userLicenseRestrictions?: string;
}

export interface PermissionSetLicenseDefinitionCustomPermission {
  name: string;
}

export interface PersonAccountOwnerPowerUser extends Metadata {
  developerName: string;
  masterLabel: string;
  portalType: string;
  user: string;
}

export interface PicklistSettings extends Metadata {
  isPicklistApiNameEditDisabled?: boolean;
}

export interface PlatformCachePartition extends Metadata {
  description?: string;
  isDefaultPartition: boolean;
  masterLabel: string;
  platformCachePartitionTypes?: PlatformCachePartitionType | PlatformCachePartitionType[];
}

export interface PlatformCachePartitionType {
  allocatedCapacity: number;
  allocatedPartnerCapacity: number;
  allocatedPurchasedCapacity: number;
  allocatedTrialCapacity: number;
  cacheType: PlatformCacheType;
}

export interface PlatformEncryptionSettings extends Metadata {
  canEncryptManagedPackageFields?: boolean;
  enableDeterministicEncryption?: boolean;
  enableEncryptFieldHistory?: boolean;
  enableEncryptionSearchEnabled?: boolean;
  enableEventBusEncryption?: boolean;
  isMEKForEncryptionRequired?: boolean;
  isUseHighAssuranceKeysRequired?: boolean;
}

export interface PlatformEventChannel extends Metadata {
  channelType: PlatformEventChannelType;
  label: string;
}

export interface PlatformEventChannelMember extends Metadata {
  enrichedFields?: EnrichedField | EnrichedField[];
  eventChannel: string;
  filterExpression?: string;
  selectedEntity: string;
}

export interface EnrichedField {
  name: string;
}

export interface PlatformLicenseDefinition extends Metadata {
  cloudServiceProvider?: string;
  defaultLicenseDuration?: number;
  defaultStatus?: DefaultLicenseStatus;
  description?: string;
  hasDynamicResourceGroupKey?: boolean;
  includedFeatures?: IncludedFeature | IncludedFeature[];
  licenseOwner?: string;
  managementServiceProvider?: string;
  managementTenantId?: string;
  minPlatformVersion?: number;
  name: string;
  settingItems?: SettingItem | SettingItem[];
  settingUsageDefinitions?: SettingUsageDefinition | SettingUsageDefinition[];
}

export interface IncludedFeature {
  name: string;
  settingOverrides?: SettingOverride | SettingOverride[];
}

export interface SettingOverride {
  settingId: string;
  value: string;
}

export interface SettingItem {
  durableId: string;
  editable?: boolean;
  ignoreQuantity?: boolean;
  namespace?: string;
  value: string;
}

export interface SettingUsageDefinition {
  frequencyDefault: Frequency;
  hasRolloverDefault?: boolean;
  isPersistentResource: boolean;
  overageGraceDefault?: number;
  setting: string;
}

export interface Portal extends Metadata {
  active: boolean;
  admin?: string;
  defaultLanguage?: string;
  description?: string;
  emailSenderAddress: string;
  emailSenderName: string;
  enableSelfCloseCase?: boolean;
  footerDocument?: string;
  forgotPassTemplate?: string;
  headerDocument?: string;
  isSelfRegistrationActivated?: boolean;
  loginHeaderDocument?: string;
  logoDocument?: string;
  logoutUrl?: string;
  newCommentTemplate?: string;
  newPassTemplate?: string;
  newUserTemplate?: string;
  ownerNotifyTemplate?: string;
  selfRegNewUserUrl?: string;
  selfRegUserDefaultProfile?: string;
  selfRegUserDefaultRole?: PortalRoles;
  selfRegUserTemplate?: string;
  showActionConfirmation?: boolean;
  stylesheetDocument?: string;
  type: PortalType;
}

export interface PortalsSettings extends Metadata {
  clickjackSSPLoginPage?: boolean;
  redirectPortalLoginToHttps?: boolean;
}

export interface PostTemplate extends Metadata {
  default?: boolean;
  description?: string;
  fields?: string | string[];
  label: string;
}

export interface PredictionBuilderSettings extends Metadata {
  enablePredictionBuilder?: boolean;
  isPredictionBuilderStarted?: boolean;
}

export interface PresenceDeclineReason extends Metadata {
  label: string;
}

export interface PresenceUserConfig extends Metadata {
  assignments?: PresenceConfigAssignments;
  capacity: number;
  declineReasons?: string | string[];
  enableAutoAccept?: boolean;
  enableDecline?: boolean;
  enableDeclineReason?: boolean;
  enableDisconnectSound?: boolean;
  enableRequestSound?: boolean;
  interruptibleCapacity?: number;
  label: string;
  presenceStatusOnDecline?: string;
  presenceStatusOnPushTimeout?: string;
}

export interface PresenceConfigAssignments {
  profiles?: PresenceConfigProfileAssignments;
  users?: PresenceConfigUserAssignments;
}

export interface PresenceConfigProfileAssignments {
  profile?: string | string[];
}

export interface PresenceConfigUserAssignments {
  user?: string | string[];
}

export interface PriceRule extends Metadata {
  conditionLogic: ConditionLogic;
  description?: string;
  effectiveDate?: Date;
  expirationDate?: Date;
  masterLabel: string;
  priceRuleActions?: PriceRuleAction | PriceRuleAction[];
  priceRuleConditions?: PriceRuleCondition | PriceRuleCondition[];
  priceRuleExecutionStages?: PriceRuleExecutionStage | PriceRuleExecutionStage[];
  sequence: number;
  status: RuleStatus;
}

export interface PriceRuleAction {
  conditionVariable?: string;
  priceRuleActionItems?: PriceRuleActionItem | PriceRuleActionItem[];
  sequence: number;
  targetObject?: string;
  type: TypeOfAction;
}

export interface PriceRuleActionItem {
  field: string;
  fieldValue: string;
  fieldValueType: InputValueType;
  sequence: number;
}

export interface PriceRuleCondition {
  accumulateResultCondInput?: string;
  accumulateResultCondInputType?: AccumulateResultCondInputType;
  accumulateResultOperator?: AccumulateResultOperator;
  aggregatedConditionVariable?: string;
  aggregationType?: ConditionAggregationFunction;
  conditionVariable?: string;
  matchType: TargetEntityMatchType;
  priceRuleConditionFilters?: PriceRuleConditionFilter | PriceRuleConditionFilter[];
  scope: ConditionType;
  sequence: number;
  targetObject: string;
}

export interface PriceRuleConditionFilter {
  field: string;
  fieldValue?: string;
  fieldValueType?: ConditionFilterInputValueType;
  operator: ConditionFilterOperator;
  sequence: number;
  variable?: string;
}

export interface PriceRuleExecutionStage {
  stage: ExecutionStageOfPriceRule;
}

export interface PriceSheetDefinition extends Metadata {
  description?: string;
  isProtected?: boolean;
  masterLabel: string;
  prcShtAttrDefinitions?: PrcShtAttrDefinition | PrcShtAttrDefinition[];
  priceSheetEntity: string;
}

export interface PrcShtAttrDefinition {
  columnLabel?: string;
  columnName: string;
  columnType: PriceSheetColumnType;
  isRangeColumn: boolean;
}

export interface PricingRecipe extends Metadata {
  defaultPricingProcedure?: ExpressionSetDefinition;
  defaultPricingProcedureId?: string;
  developerName?: string;
  isActive?: boolean;
  isInternal?: boolean;
  isProtected?: boolean;
  masterLabel: string;
  pricingRecipeTableMapping?: PricingRecipeTableMapping | PricingRecipeTableMapping[];
}

export interface PricingRecipeTableMapping {
  decisionMatrixDefinition?: DecisionMatrixDefinition;
  isInternal?: boolean;
  lookupTable?: DecisionTable;
  pricingComponentType?: string;
  pricingRecipe: string;
}

export interface PrivacySettings extends Metadata {
  authorizationCaptureBrowser?: boolean;
  authorizationCaptureEmail?: boolean;
  authorizationCaptureIp?: boolean;
  authorizationCaptureLocation?: boolean;
  authorizationCustomSharing?: boolean;
  authorizationLockingAndVersioning?: boolean;
  enableConfigurableUserPIIActive?: boolean;
  enableConsentAuditTrail?: boolean;
  enableConsentEventStream?: boolean;
  enableDefaultMetadataValues?: boolean;
  useUmaDefaultConsentRecs?: boolean;
}

export interface ProcessFlowMigration extends Metadata {
  destinationFlowDefinition: string;
  destinationFlowVersion: string;
  developerName: string;
  masterLabel: string;
  migratedCriteriaLabel?: string;
  migratedCriteriaName?: string;
  processVersion: string;
}

export interface ProductAttrDisplayConfig extends Metadata {
  dataType: string;
  displayType: string;
  masterLabel: string;
  status: string;
}

export interface ProductAttributeSet extends Metadata {
  description?: string;
  developerName: string;
  masterLabel: string;
  productAttributeSetItems?: ProductAttributeSetItem | ProductAttributeSetItem[];
}

export interface ProductAttributeSetItem {
  field: string;
  sequence: number;
}

export interface ProductFamilyUsage extends Metadata {
  productFamilyUsageType: ProductFamilyUsageType;
}

export interface ProductSettings extends Metadata {
  enableCascadeActivateToRelatedPrices?: boolean;
  enableMySettings?: boolean;
  enableQuantitySchedule?: boolean;
  enableRevenueSchedule?: boolean;
}

export interface ProductSpecificationRecType extends Metadata {
  isCommercial: boolean;
  masterLabel: string;
  productSpecificationType: string;
  recordType: string;
}

export interface ProductSpecificationType extends Metadata {
  description: string;
  masterLabel: string;
}

export interface Profile extends Metadata {
  applicationVisibilities?: ProfileApplicationVisibility | ProfileApplicationVisibility[];
  categoryGroupVisibilities?: ProfileCategoryGroupVisibility | ProfileCategoryGroupVisibility[];
  classAccesses?: ProfileApexClassAccess | ProfileApexClassAccess[];
  custom?: boolean;
  customMetadataTypeAccesses?: ProfileCustomMetadataTypeAccess | ProfileCustomMetadataTypeAccess[];
  customPermissions?: ProfileCustomPermissions | ProfileCustomPermissions[];
  customSettingAccesses?: ProfileCustomSettingAccess | ProfileCustomSettingAccess[];
  description?: string;
  externalDataSourceAccesses?: ProfileExternalDataSourceAccess | ProfileExternalDataSourceAccess[];
  fieldPermissions?: ProfileFieldLevelSecurity | ProfileFieldLevelSecurity[];
  flowAccesses?: ProfileFlowAccess | ProfileFlowAccess[];
  layoutAssignments?: ProfileLayoutAssignment | ProfileLayoutAssignment[];
  loginFlows?: LoginFlow | LoginFlow[];
  loginHours?: ProfileLoginHours;
  loginIpRanges?: ProfileLoginIpRange | ProfileLoginIpRange[];
  objectPermissions?: ProfileObjectPermissions | ProfileObjectPermissions[];
  pageAccesses?: ProfileApexPageAccess | ProfileApexPageAccess[];
  profileActionOverrides?: ProfileActionOverride | ProfileActionOverride[];
  recordTypeVisibilities?: ProfileRecordTypeVisibility | ProfileRecordTypeVisibility[];
  tabVisibilities?: ProfileTabVisibility | ProfileTabVisibility[];
  userLicense?: string;
  userPermissions?: ProfileUserPermission | ProfileUserPermission[];
}

export interface ProfileApplicationVisibility {
  application: string;
  default: boolean;
  visible: boolean;
}

export interface ProfileCategoryGroupVisibility {
  dataCategories?: string | string[];
  dataCategoryGroup: string;
  visibility: CategoryGroupVisibility;
}

export interface ProfileApexClassAccess {
  apexClass: string;
  enabled: boolean;
}

export interface ProfileCustomMetadataTypeAccess {
  enabled: boolean;
  name: string;
}

export interface ProfileCustomPermissions {
  enabled: boolean;
  name: string;
}

export interface ProfileCustomSettingAccess {
  enabled: boolean;
  name: string;
}

export interface ProfileExternalDataSourceAccess {
  enabled: boolean;
  externalDataSource: string;
}

export interface ProfileFieldLevelSecurity {
  editable: boolean;
  field: string;
  readable?: boolean;
}

export interface ProfileFlowAccess {
  enabled: boolean;
  flow: string;
}

export interface ProfileLayoutAssignment {
  layout: string;
  recordType?: string;
}

export interface LoginFlow {
  flow?: string;
  flowType: LoginFlowType;
  friendlyName: string;
  uiLoginFlowType: UiLoginFlowType;
  useLightningRuntime?: boolean;
  vfFlowPage?: string;
  vfFlowPageTitle?: string;
}

export interface ProfileLoginHours {
  fridayEnd?: string;
  fridayStart?: string;
  mondayEnd?: string;
  mondayStart?: string;
  saturdayEnd?: string;
  saturdayStart?: string;
  sundayEnd?: string;
  sundayStart?: string;
  thursdayEnd?: string;
  thursdayStart?: string;
  tuesdayEnd?: string;
  tuesdayStart?: string;
  wednesdayEnd?: string;
  wednesdayStart?: string;
}

export interface ProfileLoginIpRange {
  description?: string;
  endAddress: string;
  startAddress: string;
}

export interface ProfileApexPageAccess {
  apexPage: string;
  enabled: boolean;
}

export interface ProfileRecordTypeVisibility {
  default: boolean;
  personAccountDefault?: boolean;
  recordType: string;
  visible: boolean;
}

export interface ProfileTabVisibility {
  tab: string;
  visibility: TabVisibility;
}

export interface ProfileUserPermission {
  enabled: boolean;
  name: string;
}

export interface ProfilePasswordPolicy extends Metadata {
  forgotPasswordRedirect?: boolean;
  lockoutInterval: number;
  maxLoginAttempts: number;
  minimumPasswordLength: number;
  minimumPasswordLifetime?: boolean;
  obscure?: boolean;
  passwordComplexity: number;
  passwordExpiration: number;
  passwordHistory: number;
  passwordQuestion: number;
  profile: string;
}

export interface ProfileSessionSetting extends Metadata {
  externalCommunityUserIdentityVerif: boolean;
  forceLogout: boolean;
  profile: string;
  requiredSessionLevel?: SessionSecurityLevel;
  sessionPersistence: boolean;
  sessionTimeout: number;
  sessionTimeoutWarning: boolean;
}

export interface Prompt extends Metadata {
  masterLabel: string;
  promptVersions?: PromptVersion | PromptVersion[];
}

export interface PromptVersion {
  actionButtonLabel?: string;
  actionButtonLink?: string;
  body: string;
  customApplication?: string;
  delayDays?: number;
  description?: string;
  dismissButtonLabel?: string;
  displayPosition?: PromptDisplayPosition;
  displayType: PromptDisplayType;
  elementRelativePosition?: PromptElementRelativePosition;
  endDate?: Date;
  experience?: PromptExperience;
  experienceContext?: string;
  header?: string;
  icon?: string;
  image?: string;
  imageAltText?: string;
  imageLink?: string;
  imageLocation?: PromptImageLocation;
  indexWithIsPublished?: string;
  indexWithoutIsPublished?: string;
  isPublished?: boolean;
  masterLabel: string;
  publishedByUser?: string;
  publishedDate?: Date;
  referenceElementContext?: string;
  shouldDisplayActionButton?: boolean;
  shouldIgnoreGlobalDelay?: boolean;
  startDate?: Date;
  stepNumber?: number;
  targetAppDeveloperName?: string;
  targetAppNamespacePrefix?: string;
  targetPageKey1?: string;
  targetPageKey2?: string;
  targetPageKey3?: string;
  targetPageKey4?: string;
  targetPageType?: string;
  targetRecordType?: string;
  themeColor?: PromptThemeColor;
  themeSaturation?: PromptThemeSaturation;
  timesToDisplay?: number;
  title: string;
  uiFormulaRule?: UiFormulaRule;
  userAccess?: PromptUserAccess;
  userProfileAccess?: PromptUserProfileAccess;
  versionNumber: number;
  videoLink?: string;
}

export interface Queue extends Metadata {
  doesSendEmailToMembers?: boolean;
  email?: string;
  name: string;
  queueMembers?: QueueMembers;
  queueRoutingConfig?: string;
  queueSobject?: QueueSobject | QueueSobject[];
}

export interface QueueMembers {
  publicGroups?: PublicGroups;
  roleAndSubordinates?: RoleAndSubordinates;
  roleAndSubordinatesInternal?: RoleAndSubordinatesInternal;
  roles?: Roles;
  users?: Users;
}

export interface PublicGroups {
  publicGroup?: string | string[];
}

export interface RoleAndSubordinates {
  roleAndSubordinate?: string | string[];
}

export interface RoleAndSubordinatesInternal {
  roleAndSubordinateInternal?: string | string[];
}

export interface Roles {
  role?: string | string[];
}

export interface Users {
  user?: string | string[];
}

export interface QueueSobject {
  sobjectType: string;
}

export interface QueueRoutingConfig extends Metadata {
  capacityPercentage?: number;
  capacityType?: CapacityType;
  capacityWeight?: number;
  dropAdditionalSkillsTimeout?: number;
  isAttributeBased?: boolean;
  label: string;
  pushTimeout?: number;
  queueOverflowAssignee?: string;
  routingModel: RoutingModel;
  routingPriority: number;
  skills?: QueueRoutingConfigSkill | QueueRoutingConfigSkill[];
  userOverflowAssignee?: string;
}

export interface QueueRoutingConfigSkill {
  skill?: string;
}

export interface QuickAction extends Metadata {
  actionSubtype?: ActionSubtype;
  canvas?: string;
  description?: string;
  fieldOverrides?: FieldOverride | FieldOverride[];
  flowDefinition?: string;
  height?: number;
  icon?: string;
  isProtected?: boolean;
  label?: string;
  lightningComponent?: string;
  lightningWebComponent?: string;
  optionsCreateFeedItem: boolean;
  page?: string;
  quickActionLayout?: QuickActionLayout;
  quickActionSendEmailOptions?: QuickActionSendEmailOptions;
  standardLabel?: QuickActionLabel;
  successMessage?: string;
  targetObject?: string;
  targetParentField?: string;
  targetRecordType?: string;
  type: QuickActionType;
  width?: number;
}

export interface FieldOverride {
  field: string;
  formula?: string;
  literalValue?: string;
}

export interface QuickActionLayout {
  layoutSectionStyle: LayoutSectionStyle;
  quickActionLayoutColumns?: QuickActionLayoutColumn | QuickActionLayoutColumn[];
}

export interface QuickActionLayoutColumn {
  quickActionLayoutItems?: QuickActionLayoutItem | QuickActionLayoutItem[];
}

export interface QuickActionLayoutItem {
  emptySpace?: boolean;
  field?: string;
  uiBehavior?: UiBehavior;
}

export interface QuickActionSendEmailOptions {
  defaultEmailTemplateName?: string;
  ignoreDefaultEmailTemplateSubject: boolean;
}

export interface QuickTextSettings extends Metadata {
  hideQuickTextUiInLtng?: boolean;
  lightningQuickTextEnabled?: boolean;
  quickTextsInFolders?: boolean;
}

export interface QuoteSettings extends Metadata {
  enableQuote: boolean;
  enableQuotesWithoutOppEnabled?: boolean;
}

export interface RealTimeEventSettings extends Metadata {
  realTimeEvents?: RealTimeEvent | RealTimeEvent[];
}

export interface RealTimeEvent {
  entityName: string;
  isEnabled: boolean;
}

export interface RecommendationBuilderSettings extends Metadata {
  enableErbEnabledPref?: boolean;
  enableErbStartedPref?: boolean;
}

export interface RecommendationStrategy extends Metadata {
  actionContext?: StrategyAction | StrategyAction[];
  aiLoad?: StrategyNodeAiLoad | StrategyNodeAiLoad[];
  aiSort?: StrategyNodeAiSort | StrategyNodeAiSort[];
  contextRecordType?: string;
  description?: string;
  filter?: StrategyNodeFilter | StrategyNodeFilter[];
  if?: StrategyNodeIf | StrategyNodeIf[];
  invocableAction?: StrategyNodeInvocableAction | StrategyNodeInvocableAction[];
  isTemplate?: boolean;
  label: string;
  map?: StrategyNodeMap | StrategyNodeMap[];
  mutuallyExclusive?: StrategyNodeExclusive | StrategyNodeExclusive[];
  onBehalfOfExpression?: string;
  recommendationLimit?: StrategyNodeRecommendationLimit | StrategyNodeRecommendationLimit[];
  recommendationLoad?: StrategyNodeRecommendationLoad | StrategyNodeRecommendationLoad[];
  sort?: StrategyNodeSort | StrategyNodeSort[];
  union?: StrategyNodeUnion | StrategyNodeUnion[];
}

export interface StrategyAction {
  action: string;
  argument?: StrategyActionArg | StrategyActionArg[];
  description?: string;
  label?: string;
  name: string;
  type: InvocableActionType;
}

export interface StrategyActionArg {
  name: string;
  value: string;
}

export interface StrategyNodeAiLoad extends StrategyNodeUnionBase {
  acceptanceLabel: string;
  actionReference: string;
  descriptionField: string;
  recommendationDefinitionDevName: string;
  rejectionLabel?: string;
  titleField: string;
}

export interface StrategyNodeUnionBase extends StrategyNodeBase {
  limit?: number;
}

export interface StrategyNodeBase {
  childNode?: string | string[];
  description?: string;
  label?: string;
  name: string;
}

export interface StrategyNodeAiSort extends StrategyNodeUnionBase {}

export interface StrategyNodeExclusive extends StrategyNodeUnionBase {}

export interface StrategyNodeFilter extends StrategyNodeUnionBase {
  expression: string;
}

export interface StrategyNodeIf extends StrategyNodeUnionBase {
  childNodeExpression?: IfExpression | IfExpression[];
  onlyFirstMatch?: boolean;
}

export interface IfExpression {
  childName: string;
  expression: string;
}

export interface StrategyNodeInvocableAction extends StrategyNodeUnionBase {
  action: string;
  argument?: StrategyNodeInvocableActionArg | StrategyNodeInvocableActionArg[];
  isGenerator: boolean;
  type: InvocableActionType;
}

export interface StrategyNodeInvocableActionArg {
  name: string;
  value: string;
}

export interface StrategyNodeMap extends StrategyNodeUnionBase {
  mapExpression?: MapExpression | MapExpression[];
}

export interface MapExpression {
  expression: string;
  name: string;
  type?: string;
}

export interface StrategyNodeRecommendationLimit extends StrategyNodeUnionBase {
  filterMode?: StrategyReactionType | StrategyReactionType[];
  lookbackDuration?: number;
  maxRecommendationCount?: number;
}

export interface StrategyNodeRecommendationLoad extends StrategyNodeUnionBase {
  condition?: RecommendationLoadCondition | RecommendationLoadCondition[];
  conditionLogic?: string;
  object: string;
  sortField?: StrategyNodeSortField | StrategyNodeSortField[];
}

export interface RecommendationLoadCondition {
  field: string;
  operator: RecommendationConditionOperator;
  value: RecommendationConditionValue;
}

export interface RecommendationConditionValue {
  type: RecommendationConditionValueType;
  value?: string;
}

export interface StrategyNodeSortField {
  name: string;
  nullsFirst?: boolean;
  order?: SortOrder;
}

export interface StrategyNodeSort extends StrategyNodeUnionBase {
  field?: StrategyNodeSortField | StrategyNodeSortField[];
}

export interface StrategyNodeUnion extends StrategyNodeUnionBase {}

export interface RecordActionDeployment extends Metadata {
  channelConfigurations?: RecordActionDeploymentChannel | RecordActionDeploymentChannel[];
  componentName?: ComponentName;
  deploymentContexts?: RecordActionDeploymentContext | RecordActionDeploymentContext[];
  hasGuidedActions?: boolean;
  hasOmniscripts?: boolean;
  hasRecommendations?: boolean;
  masterLabel: string;
  recommendation?: RecordActionRecommendation;
  selectableItems?: RecordActionSelectableItem | RecordActionSelectableItem[];
}

export interface RecordActionDeploymentChannel {
  channel: ChannelSource;
  channelItems?: RecordActionDefaultItem | RecordActionDefaultItem[];
  isAutopopEnabled?: boolean;
}

export interface RecordActionDefaultItem {
  action: string;
  isMandatory?: boolean;
  isUiRemoveHidden?: boolean;
  pinned: PinnedAction;
  position: number;
  type: RecordActionType;
}

export interface RecordActionDeploymentContext {
  entityName: string;
  recommendationStrategy?: string;
}

export interface RecordActionRecommendation {
  defaultStrategy?: string;
  hasDescription: boolean;
  hasImage: boolean;
  hasRealtimeRecommendations?: boolean;
  hasRejectAction: boolean;
  hasTitle: boolean;
  maxDisplayRecommendations: number;
  shouldLaunchActionOnReject: boolean;
}

export interface RecordActionSelectableItem {
  action: string;
  frequentActionSequenceNbr?: number;
  isFrequentAction?: boolean;
  type: RecordActionType;
}

export interface RecordAggregationDefinition extends Metadata {
  aggregateFromObject: string;
  aggregateToObject: string;
  aggregationType: RecordAggregationDefinitionAggregationType;
  batchProcessingDefinition?: string;
  description?: string;
  displayName: string;
  recordAggregationObject?: RecordAggregationObject | RecordAggregationObject[];
  status: RecordAggregationDefinitionStatus;
}

export interface RecordAggregationObject {
  associatedObject: string;
  developerName?: string;
  filterLogic?: string;
  masterLabel: string;
  recordAggregationJoinCondition?: RecordAggregationJoinCondition | RecordAggregationJoinCondition[];
  recordAggregationObjectFilter?: RecordAggregationObjectFilter | RecordAggregationObjectFilter[];
}

export interface RecordAggregationJoinCondition {
  joinField: string;
  navigationSequenceNumber: number;
  relatedJoinField: string;
  relatedRecordAggregationObject: string;
  type: RecordAggregationJoinConditionType;
}

export interface RecordAggregationObjectFilter {
  associatedObjectField: string;
  operator: RecordAggregationObjectFilterOperator;
  sequenceNumber: number;
  value: string;
}

export interface RecordAlertCategory extends Metadata {
  description?: string;
  masterLabel: string;
  severity?: string;
}

export interface RecordPageSettings extends Metadata {
  enableActivityRelatedList?: boolean;
  enableFullRecordView?: boolean;
}

export interface RedirectWhitelistUrl extends Metadata {
  url: string;
}

export interface ReferencedDashboard extends Metadata {
  application: string;
  description?: string;
  embedUrl: string;
  masterLabel: string;
  templateAssetSourceName?: string;
  visibility: string;
}

export interface RelationshipGraphDefinition extends Metadata {
  isActive: boolean;
  isTemplate: boolean;
  masterLabel: string;
  relationshipGraphDefVersions?: RelationshipGraphDefVersion | RelationshipGraphDefVersion[];
}

export interface RelationshipGraphDefVersion {
  graphDefinition: string;
  graphType: string;
}

export interface RemoteSiteSetting extends Metadata {
  description?: string;
  disableProtocolSecurity: boolean;
  isActive: boolean;
  url: string;
}

export interface Report extends Metadata {
  aggregates?: ReportAggregate | ReportAggregate[];
  block?: Report | Report[];
  blockInfo?: ReportBlockInfo;
  buckets?: ReportBucketField | ReportBucketField[];
  chart?: ReportChart;
  colorRanges?: ReportColorRange | ReportColorRange[];
  columns?: ReportColumn | ReportColumn[];
  crossFilters?: ReportCrossFilter | ReportCrossFilter[];
  currency?: CurrencyIsoCode;
  customDetailFormulas?: ReportCustomDetailFormula | ReportCustomDetailFormula[];
  dataCategoryFilters?: ReportDataCategoryFilter | ReportDataCategoryFilter[];
  description?: string;
  division?: string;
  filter?: ReportFilter;
  folderName?: string;
  format: ReportFormat;
  formattingRules?: ReportFormattingRule | ReportFormattingRule[];
  groupingsAcross?: ReportGrouping | ReportGrouping[];
  groupingsDown?: ReportGrouping | ReportGrouping[];
  historicalSelector?: ReportHistoricalSelector;
  name: string;
  numSubscriptions?: number;
  params?: ReportParam | ReportParam[];
  reportType: string;
  reportTypeApiName?: string;
  roleHierarchyFilter?: string;
  rowLimit?: number;
  scope?: string;
  showCurrentDate?: boolean;
  showDetails?: boolean;
  showGrandTotal?: boolean;
  showSubTotals?: boolean;
  sortColumn?: string;
  sortOrder?: SortOrder;
  territoryHierarchyFilter?: string;
  timeFrameFilter?: ReportTimeFrameFilter;
  userFilter?: string;
}

export interface ReportAggregate {
  acrossGroupingContext?: string;
  calculatedFormula: string;
  datatype: ReportAggregateDatatype;
  description?: string;
  developerName: string;
  downGroupingContext?: string;
  isActive: boolean;
  isCrossBlock?: boolean;
  masterLabel: string;
  reportType?: string;
  scale?: number;
}

export interface ReportBlockInfo {
  aggregateReferences?: ReportAggregateReference | ReportAggregateReference[];
  blockId: string;
  joinTable: string;
}

export interface ReportAggregateReference {
  aggregate: string;
}

export interface ReportBucketField {
  bucketType: ReportBucketFieldType;
  developerName: string;
  masterLabel: string;
  nullTreatment?: ReportFormulaNullTreatment;
  otherBucketLabel?: string;
  sourceColumnName: string;
  useOther?: boolean;
  values?: ReportBucketFieldValue | ReportBucketFieldValue[];
}

export interface ReportBucketFieldValue {
  sourceValues?: ReportBucketFieldSourceValue | ReportBucketFieldSourceValue[];
  value: string;
}

export interface ReportBucketFieldSourceValue {
  from?: string;
  sourceValue?: string;
  to?: string;
}

export interface ReportChart {
  backgroundColor1?: string;
  backgroundColor2?: string;
  backgroundFadeDir?: ChartBackgroundDirection;
  chartSummaries?: ChartSummary | ChartSummary[];
  chartType: ChartType;
  enableHoverLabels?: boolean;
  expandOthers?: boolean;
  groupingColumn?: string;
  legendPosition?: ChartLegendPosition;
  location?: ChartPosition;
  secondaryGroupingColumn?: string;
  showAxisLabels?: boolean;
  showPercentage?: boolean;
  showTotal?: boolean;
  showValues?: boolean;
  size?: ReportChartSize;
  summaryAxisManualRangeEnd?: number;
  summaryAxisManualRangeStart?: number;
  summaryAxisRange?: ChartRangeType;
  textColor?: string;
  textSize?: number;
  title?: string;
  titleColor?: string;
  titleSize?: number;
}

export interface ReportColorRange {
  aggregate?: ReportSummaryType;
  columnName: string;
  highBreakpoint?: number;
  highColor: string;
  lowBreakpoint?: number;
  lowColor: string;
  midColor: string;
}

export interface ReportColumn {
  aggregateTypes?: ReportSummaryType | ReportSummaryType[];
  field: string;
  reverseColors?: boolean;
  showChanges?: boolean;
}

export interface ReportCrossFilter {
  criteriaItems?: ReportFilterItem | ReportFilterItem[];
  operation: ObjectFilterOperator;
  primaryTableColumn: string;
  relatedTable: string;
  relatedTableJoinColumn: string;
}

export interface ReportFilterItem {
  column: string;
  columnToColumn?: boolean;
  isUnlocked?: boolean;
  operator: FilterOperation;
  snapshot?: string;
  value?: string;
}

export interface ReportCustomDetailFormula {
  calculatedFormula: string;
  dataType: string;
  description?: string;
  developerName: string;
  label: string;
  scale: number;
}

export interface ReportDataCategoryFilter {
  dataCategory: string;
  dataCategoryGroup: string;
  operator: DataCategoryFilterOperation;
}

export interface ReportFilter {
  booleanFilter?: string;
  criteriaItems?: ReportFilterItem | ReportFilterItem[];
  language?: Language;
}

export interface ReportFormattingRule {
  aggregate?: ReportSummaryType;
  columnName: string;
  values?: ReportFormattingRuleValue | ReportFormattingRuleValue[];
}

export interface ReportFormattingRuleValue {
  backgroundColor?: string;
  rangeUpperBound?: number;
}

export interface ReportGrouping {
  aggregateType?: ReportAggrType;
  dateGranularity?: UserDateGranularity;
  field: string;
  sortByName?: string;
  sortOrder: SortOrder;
  sortType?: ReportSortType;
}

export interface ReportHistoricalSelector {
  snapshot?: string | string[];
}

export interface ReportParam {
  name: string;
  value: string;
}

export interface ReportTimeFrameFilter {
  dateColumn: string;
  endDate?: Date;
  interval: UserDateInterval;
  startDate?: Date;
}

export interface ReportType extends Metadata {
  autogenerated?: boolean;
  baseObject: string;
  category: ReportTypeCategory;
  deployed: boolean;
  description?: string;
  join?: ObjectRelationship;
  label: string;
  sections?: ReportLayoutSection | ReportLayoutSection[];
}

export interface ObjectRelationship {
  join?: ObjectRelationship;
  outerJoin: boolean;
  relationship: string;
}

export interface ReportLayoutSection {
  columns?: ReportTypeColumn | ReportTypeColumn[];
  masterLabel: string;
}

export interface ReportTypeColumn {
  checkedByDefault: boolean;
  displayNameOverride?: string;
  field: string;
  table: string;
}

export interface RestrictionRule extends Metadata {
  active: boolean;
  dataspaceScope?: string;
  description?: string;
  enforcementType: EnforcementType;
  masterLabel: string;
  recordFilter: string;
  targetEntity: string;
  userCriteria?: string;
  version: number;
}

export interface RetailExecutionSettings extends Metadata {
  enableProductHierarchy?: boolean;
  enableRetailExecution?: boolean;
  enableVisitSharing?: boolean;
}

export interface RoleOrTerritory extends Metadata {
  caseAccessLevel?: string;
  contactAccessLevel?: string;
  description?: string;
  mayForecastManagerShare?: boolean;
  name: string;
  opportunityAccessLevel?: string;
}

export interface Role extends RoleOrTerritory {
  parentRole?: string;
}

export interface Territory extends RoleOrTerritory {
  accountAccessLevel?: string;
  parentTerritory?: string;
}

export interface RuleDefinition extends Metadata {}

export interface RuleLibraryDefinition extends Metadata {}

export interface RulesetDefinition extends Metadata {}

export interface SalesAgreementSettings extends Metadata {
  actualsCalculationMode: ActualsCalculationMode;
  displayGroups?: AdvAcctFrcstDisplayGroup | AdvAcctFrcstDisplayGroup[];
  displayedAgreementTermsMetrics: string;
  isOnlyApprovalProcessUsed: boolean;
  measureDefinitions?: AdvAcctForecastMeasureDef | AdvAcctForecastMeasureDef[];
  objectMapping?: ObjectMapping;
  primaryNotifEmailAddress?: string;
  renewalPeriodDayCount?: number;
  secondaryNotifEmailAddress?: string;
}

export interface SalesWorkQueueSettings extends Metadata {
  featureName: string;
  targetEntity: string;
  targetField: string;
}

export interface SamlSsoConfig extends Metadata {
  attributeName?: string;
  attributeNameIdFormat?: string;
  decryptionCertificate?: string;
  errorUrl?: string;
  executionUserId?: string;
  identityLocation: SamlIdentityLocationType;
  identityMapping: SamlIdentityType;
  issuer: string;
  loginUrl?: string;
  logoutUrl?: string;
  name: string;
  oauthTokenEndpoint?: string;
  redirectBinding?: boolean;
  requestSignatureMethod?: string;
  requestSigningCertId?: string;
  salesforceLoginUrl?: string;
  samlEntityId: string;
  samlJitHandlerId?: string;
  samlVersion: SamlType;
  singleLogoutBinding?: SamlSpSLOBinding;
  singleLogoutUrl?: string;
  useConfigRequestMethod?: boolean;
  useSameDigestAlgoForSigning?: boolean;
  userProvisioning?: boolean;
  validationCert: string;
}

export interface SchemaDefinition extends Metadata {
  description?: string;
  domainType: DomainType;
  schemas?: Schema | Schema[];
}

export interface SchemaSettings extends Metadata {
  enableAdvancedCMTSecurity?: boolean;
  enableAdvancedCSSecurity?: boolean;
  enableListCustomSettingCreation?: boolean;
  enableSOSLOnCustomSettings?: boolean;
}

export interface ScoreCategory extends Metadata {
  categoryName: string;
  description: string;
  developerName: string;
  iconUrl: string;
  masterLabel: string;
  parentCategoryId?: string;
  scoreCategoryCalcInsights?: ScoreCategoryCalcInsight | ScoreCategoryCalcInsight[];
  scoreRangeClassifications?: ScoreRangeClassification | ScoreRangeClassification[];
}

export interface ScoreCategoryCalcInsight {
  insightDateFieldName: string;
  insightName: string;
  insightScoreFieldName: string;
  insightSubjectFieldName: string;
}

export interface ScoreRangeClassification {
  classificationName: string;
  colorHexadecimalCode: string;
  rangeEndValue: number;
  rangeStartValue: number;
}

export interface SearchCriteriaConfiguration extends Metadata {
  actionList?: string;
  aggrCriteriaFieldset?: FieldSet;
  description?: string;
  distanceCriteria?: string;
  isActive?: boolean;
  masterLabel: string;
  resultFieldset?: FieldSet;
  searchCriteriaFieldset?: FieldSet;
  searchableObjDataSyncInfo?: string;
  searchableObject: string;
  sortingCriteriaFieldset?: FieldSet;
}

export interface SearchCustomization extends Metadata {
  isProtected?: boolean;
  masterLabel: string;
}

export interface SearchResultActionConfig extends Metadata {
  actionReference: string;
  actionScope: SearchResultActionScope;
  actionType: SearchResultActionType;
  description?: string;
  masterLabel: string;
}

export interface SearchSettings extends Metadata {
  documentContentSearchEnabled: boolean;
  enableAdvancedSearchInAlohaSidebar?: boolean;
  enableEinsteinSearchAssistantDialog?: boolean;
  enableEinsteinSearchEs4kPilot?: boolean;
  enableEinsteinSearchNLSFilters?: boolean;
  enableEinsteinSearchNaturalLanguage?: boolean;
  enableEinsteinSearchPersonalization?: boolean;
  enableEinsteinSearchQA?: boolean;
  enablePersonalTagging?: boolean;
  enablePublicTagging?: boolean;
  enableQuerySuggestionPigOn?: boolean;
  enableSalesforceGeneratedSynonyms?: boolean;
  enableSearchTermHistory?: boolean;
  enableSetupSearch?: boolean;
  enableSuggestArticlesLinksOnly?: boolean;
  enableUseDefaultSearchEntity?: boolean;
  optimizeSearchForCJKEnabled: boolean;
  recentlyViewedUsersForBlankLookupEnabled: boolean;
  searchSettingsByObject: SearchSettingsByObject;
  sidebarAutoCompleteEnabled: boolean;
  sidebarDropDownListEnabled: boolean;
  sidebarLimitToItemsIOwnCheckboxEnabled: boolean;
  singleSearchResultShortcutEnabled: boolean;
  spellCorrectKnowledgeSearchEnabled: boolean;
}

export interface SearchSettingsByObject {
  searchSettingsByObject?: ObjectSearchSetting | ObjectSearchSetting[];
}

export interface ObjectSearchSetting {
  enhancedLookupEnabled: boolean;
  lookupAutoCompleteEnabled: boolean;
  name: string;
  resultsPerPageCount: number;
}

export interface SearchableObjDataSyncInfo extends Metadata {
  dataSyncActive?: boolean;
  dataSyncJob?: string;
  description?: string;
  lastDataSyncRunDate?: string;
  lookupMappings?: ObjectMapping;
  masterLabel: string;
  picklistMappings?: ObjectMapping | ObjectMapping[];
  scheduleFrequencyInHours?: string;
  searchableObject: string;
}

export interface SecuritySettings extends Metadata {
  canUsersGrantLoginAccess?: boolean;
  enableAdminLoginAsAnyUser?: boolean;
  enableAuditFieldsInactiveOwner?: boolean;
  enableAuraSecureEvalPref?: boolean;
  enableCoepHeader?: boolean;
  enableCoopHeader?: boolean;
  enableCrossOrgRedirects?: boolean;
  enablePermissionsPolicy?: boolean;
  enableRequireHttpsConnection?: boolean;
  networkAccess?: NetworkAccess;
  passwordPolicies?: PasswordPolicies;
  redirectBlockModeEnabled?: boolean;
  sendCspForUncommonClients?: boolean;
  sessionSettings?: SessionSettings;
  singleSignOnSettings?: SingleSignOnSettings;
}

export interface NetworkAccess {
  ipRanges?: IpRange | IpRange[];
}

export interface IpRange {
  description?: string;
  end?: string;
  start?: string;
}

export interface PasswordPolicies {
  apiOnlyUserHomePageURL?: string;
  complexity?: Complexity;
  expiration?: Expiration;
  historyRestriction?: string;
  lockoutInterval?: LockoutInterval;
  maxLoginAttempts?: MaxLoginAttempts;
  minimumPasswordLength?: string;
  minimumPasswordLifetime?: boolean;
  obscureSecretAnswer?: boolean;
  passwordAssistanceMessage?: string;
  passwordAssistanceURL?: string;
  questionRestriction?: QuestionRestriction;
}

export interface SessionSettings {
  allowUserAuthenticationByCertificate?: boolean;
  allowUserCertBasedAuthenticationWithOcspValidation?: boolean;
  canConfirmEmailChangeInLightningCommunities?: boolean;
  canConfirmIdentityBySmsOnly?: boolean;
  disableTimeoutWarning?: boolean;
  enableBuiltInAuthenticator?: boolean;
  enableCSPOnEmail?: boolean;
  enableCSRFOnGet?: boolean;
  enableCSRFOnPost?: boolean;
  enableCacheAndAutocomplete?: boolean;
  enableClickjackNonsetupSFDC?: boolean;
  enableClickjackNonsetupUser?: boolean;
  enableClickjackNonsetupUserHeaderless?: boolean;
  enableClickjackSetup?: boolean;
  enableCoepHeader?: boolean;
  enableContentSniffingProtection?: boolean;
  enableCoopHeader?: boolean;
  enableLightningLogin?: boolean;
  enableLightningLoginOnlyWithUserPerm?: boolean;
  enableMFADirectUILoginOptIn?: boolean;
  enableOauthCorsPolicy?: boolean;
  enablePermissionsPolicy?: boolean;
  enablePostForSessions?: boolean;
  enableSMSIdentity?: boolean;
  enableU2F?: boolean;
  enableUpgradeInsecureRequests?: boolean;
  enableXssProtection?: boolean;
  enforceIpRangesEveryRequest?: boolean;
  enforceUserDeviceRevoked?: boolean;
  forceLogoutOnSessionTimeout?: boolean;
  forceRelogin?: boolean;
  grantCameraAccess?: string;
  grantMicrophoneAccess?: string;
  hasRetainedLoginHints?: boolean;
  hasUserSwitching?: boolean;
  hstsOnForcecomSites?: boolean;
  identityConfirmationOnEmailChange?: boolean;
  identityConfirmationOnTwoFactorRegistrationEnabled?: boolean;
  lockSessionsToDomain?: boolean;
  lockSessionsToIp?: boolean;
  lockerServiceAPIVersion?: string;
  lockerServiceCSP?: boolean;
  lockerServiceNext?: boolean;
  lockerServiceNextControl?: boolean;
  logoutURL?: string;
  redirectBlockModeEnabled?: boolean;
  redirectionWarning?: boolean;
  referrerPolicy?: boolean;
  referrerPolicyDirective?: string;
  requireHttpOnly?: boolean;
  requireHttps?: boolean;
  sendCspForUncommonClients?: boolean;
  sessionTimeout?: SessionTimeout;
  sidToken3rdPartyAuraApp?: boolean;
  skipSFAWhenMFADirectUILogin?: boolean;
  useEAPIRateLimitForConnectAPI?: boolean;
  useLocalStorageForLogoutUrl?: boolean;
}

export interface SingleSignOnSettings {
  enableCaseInsensitiveFederationID?: boolean;
  enableForceDelegatedCallout?: boolean;
  enableMultipleSamlConfigs?: boolean;
  enableSamlJitProvisioning?: boolean;
  enableSamlLogin?: boolean;
  isLoginWithSalesforceCredentialsDisabled?: boolean;
}

export interface ServiceAISetupDefinition extends Metadata {
  appSourceType: ApplicationSourceType;
  name: string;
  setupStatus: ServiceAISetupDefStatus;
  supportedLanguages?: string;
}

export interface ServiceAISetupField extends Metadata {
  entity: string;
  field: string;
  fieldMappingType: ServiceAISetupFieldType;
  fieldPosition: number;
  name: string;
  setupDefinition: string;
}

export interface ServiceChannel extends Metadata {
  acwExtensionDuration?: number;
  afterConvoWorkMaxTime?: number;
  doesMinimizeWidgetOnAccept?: boolean;
  hasAcwExtensionEnabled?: boolean;
  hasAfterConvoWorkTimer?: boolean;
  hasAutoAcceptEnabled?: boolean;
  interactionComponent?: string;
  isInterruptible?: boolean;
  label: string;
  maxExtensions?: string;
  relatedEntityType: string;
  secondaryRoutingPriorityField?: string;
  serviceChannelFieldPriorities?: ServiceChannelFieldPriority | ServiceChannelFieldPriority[];
}

export interface ServiceChannelFieldPriority {
  priority: number;
  value: string;
}

export interface ServiceCloudVoiceSettings extends Metadata {
  enableAmazonQueueManagement?: boolean;
  enableDefaultChannelForSCV?: boolean;
  enableEndUserForSCV?: boolean;
  enableOmniCapacityForSCV?: boolean;
  enablePTQueueManagement?: boolean;
  enableSCVBYOT?: boolean;
  enableSCVExternalTelephony?: boolean;
  enableServiceCloudVoice?: boolean;
  enableVoiceInGovCloudOptIn?: boolean;
}

export interface ServicePresenceStatus extends Metadata {
  channels?: ServiceChannelStatus;
  label: string;
}

export interface ServiceChannelStatus {
  channel?: string | string[];
}

export interface ServiceProcess extends Metadata {
  description?: string;
  processLabel: string;
  serviceProcessAttributes?: ServiceProcessAttribute | ServiceProcessAttribute[];
  serviceProcessDependencies?: ServiceProcessDependency | ServiceProcessDependency[];
  serviceProcessItemGroups?: ServiceProcessItemGroup | ServiceProcessItemGroup[];
  shortDescription?: string;
  usageType: SvcCatalogItemUsageType;
}

export interface ServiceProcessAttribute {
  attributeType?: SvcCtlgItemAttrAttributeType;
  baseObjectApiName?: string;
  dataType?: SvcCatalogItemAttrDataType;
  description?: string;
  developerName: string;
  fieldIdentifier?: string;
  groupApiName: string;
  inputVariableValue?: string;
  isAttrValueDerivAtRuntime?: boolean;
  isRequired?: boolean;
  label: string;
  parentAttribute?: string;
  referenceObjectApiName?: string;
  sortOrder?: number;
}

export interface ServiceProcessDependency {
  dependencyReference: string;
  type: SvcCatalogItemDependencyType;
}

export interface ServiceProcessItemGroup {
  apiName: string;
  groupName: string;
  sortOrder: number;
}

export interface ServiceSetupAssistantSettings extends Metadata {
  enableServiceSetupAssistant?: boolean;
}

export interface SharingBaseRule extends Metadata {
  accessLevel: string;
  accountSettings?: AccountSharingRuleSettings;
  description?: string;
  label: string;
  sharedTo: SharedTo;
}

export interface AccountSharingRuleSettings {
  caseAccessLevel: string;
  contactAccessLevel: string;
  opportunityAccessLevel: string;
}

export interface SharingCriteriaRule extends SharingBaseRule {
  booleanFilter?: string;
  criteriaItems?: FilterItem | FilterItem[];
  includeRecordsOwnedByAll: boolean;
}

export interface SharingGuestRule extends SharingBaseRule {
  booleanFilter?: string;
  criteriaItems?: FilterItem | FilterItem[];
  includeHVUOwnedRecords: boolean;
}

export interface SharingOwnerRule extends SharingBaseRule {
  sharedFrom: SharedTo;
}

export interface SharingTerritoryRule extends SharingOwnerRule {}

export interface SharingRules extends Metadata {
  sharingCriteriaRules?: SharingCriteriaRule | SharingCriteriaRule[];
  sharingGuestRules?: SharingGuestRule | SharingGuestRule[];
  sharingOwnerRules?: SharingOwnerRule | SharingOwnerRule[];
  sharingTerritoryRules?: SharingTerritoryRule | SharingTerritoryRule[];
}

export interface SharingSet extends Metadata {
  accessMappings?: AccessMapping | AccessMapping[];
  description?: string;
  name: string;
  profiles?: string | string[];
}

export interface AccessMapping {
  accessLevel: string;
  object: string;
  objectField: string;
  userField: string;
}

export interface SharingSettings extends Metadata {
  deferGroupMembership?: boolean;
  deferSharingRules?: boolean;
  enableAccountRoleOptimization?: boolean;
  enableAssetSharing?: boolean;
  enableCommunityUserVisibility?: boolean;
  enableExternalSharingModel?: boolean;
  enableManagerGroups?: boolean;
  enableManualUserRecordSharing?: boolean;
  enablePartnerSuperUserAccess?: boolean;
  enablePortalUserCaseSharing?: boolean;
  enablePortalUserVisibility?: boolean;
  enableRemoveTMGroupMembership?: boolean;
  enableRestrictAccessLookupRecords?: boolean;
  enableSecureGuestAccess?: boolean;
  enableShareObjectReportTypes?: boolean;
  enableStandardReportVisibility?: boolean;
  enableTerritoryForecastManager?: boolean;
}

export interface SiteSettings extends Metadata {
  enableEnhancedSitesAndContentPlatform?: boolean;
  enableProxyLoginICHeader?: boolean;
  enableSitesRecordReassignOrgPref?: boolean;
  enableTopicsInSites?: boolean;
}

export interface Skill extends Metadata {
  assignments?: SkillAssignments;
  description?: string;
  label: string;
  skillType?: string;
}

export interface SkillAssignments {
  profiles?: SkillProfileAssignments;
  users?: SkillUserAssignments;
}

export interface SkillProfileAssignments {
  profile?: string | string[];
}

export interface SkillUserAssignments {
  user?: string | string[];
}

export interface SkillType extends Metadata {
  masterLabel: string;
}

export interface SlackRecordLayout extends Metadata {
  isProtected?: boolean;
  masterLabel: string;
  sobjectType: string;
  viewMode: SlackRecordLayoutViewMode;
}

export interface SocialCustomerServiceSettings extends Metadata {
  caseSubjectOption: CaseSubjectOption;
  enableAllFBResponseAccounts?: boolean;
  enableInboundProcessingConcurrency?: boolean;
  enableSocialApprovals?: boolean;
  enableSocialCaseAssignmentRules?: boolean;
  enableSocialCustomerService?: boolean;
  enableSocialPersonaHistoryTracking?: boolean;
  enableSocialPostHistoryTracking?: boolean;
  enableSocialReceiveParentPost?: boolean;
}

export interface SocialProfileSettings extends Metadata {
  enableSocialProfiles?: boolean;
  isFacebookSocialProfilesDisabled?: boolean;
  isLinkedInSocialProfilesDisabled?: boolean;
  isTwitterSocialProfilesDisabled?: boolean;
  isYouTubeSocialProfilesDisabled?: boolean;
}

export interface StandardValueSet extends Metadata {
  groupingStringEnum?: string;
  sorted: boolean;
  standardValue?: StandardValue | StandardValue[];
}

export interface StandardValueSetTranslation extends Metadata {
  valueTranslation?: ValueTranslation | ValueTranslation[];
}

export interface StnryAssetEnvSrcCnfg extends Metadata {
  recordType: string;
  stationaryAssetType: StationaryAssetType;
}

export interface StreamingAppDataConnector extends Metadata {
  appIdentifier: string;
  dataConnectorType: DataConnectorType;
  isProtected?: boolean;
  masterLabel: string;
  streamingAppDataConnectorType: StreamingAppDataConnectorType;
}

export interface SubscriptionManagementSettings extends Metadata {
  enableConvertNegativeInvoiceLinesToCreditMemoAndApply?: boolean;
  enablePaymentScheduleAutomation?: boolean;
  enableRefundAutomation?: boolean;
  enableRevSubMgmtBlngOptOut?: boolean;
  enableSubscriptionManagement?: boolean;
}

export interface SurveySettings extends Metadata {
  enableIndustriesCxmEnabled?: boolean;
  enableSurvey?: boolean;
  enableSurveyOwnerCanManageResponse?: boolean;
}

export interface SustainabilityUom extends Metadata {
  description?: string;
  isProductUom?: boolean;
  isProtected?: boolean;
  isStationaryAssetUom?: boolean;
  isVehicleAssetUom?: boolean;
  masterLabel: string;
  unitType: UnitType;
}

export interface SustnUomConversion extends Metadata {
  conversionFactor: number;
  fuelType?: string;
  isProtected?: boolean;
  masterLabel?: string;
  sourceUom: string;
  targetUom: string;
  uomsKey?: string;
}

export interface SvcCatalogCategory extends Metadata {
  image?: string;
  isActive?: boolean;
  isProtected?: boolean;
  masterLabel: string;
  parentCategory?: string;
  sortOrder?: number;
}

export interface SvcCatalogFulfillmentFlow extends Metadata {
  description: string;
  flow: string;
  icon?: string;
  isProtected?: boolean;
  items?: SvcCatalogFulfillFlowItem | SvcCatalogFulfillFlowItem[];
  masterLabel: string;
}

export interface SvcCatalogFulfillFlowItem {
  catalogInputVariable: string;
  displayType?: PropertyDisplayType;
  fieldDefinition?: string;
  fieldLookupDomain?: string;
  isAdditionalQuestionsInputVariable?: boolean;
  isRequired?: boolean;
  lookupDomainFieldType?: string;
  masterLabel: string;
  objectLookupDomain?: string;
}

export interface SvcCatalogItemDef extends Metadata {
  apiVersion?: number;
  categories?: SvcCatalogCategoryItem | SvcCatalogCategoryItem[];
  dataCategories?: SvcCatalogItemDefDataCategorySelection | SvcCatalogItemDefDataCategorySelection[];
  description?: string;
  fulfillmentFlow?: string;
  image?: string;
  inputs?: SvcCatalogItemAttribute | SvcCatalogItemAttribute[];
  internalNotes?: string;
  isFeatured?: boolean;
  isProtected?: boolean;
  masterLabel: string;
  sharedTo?: SharedTo;
  status: PublishStatusType;
}

export interface SvcCatalogCategoryItem {
  isPrimaryCategory?: boolean;
  sortOrder?: number;
  svcCatalogCategory: string;
}

export interface SvcCatalogItemDefDataCategorySelection {
  category: string;
  categoryGroup: string;
}

export interface SvcCatalogItemAttribute {
  field?: string;
  inputType: SvcCatalogItemAttrDataType;
  inputVariable?: string;
  isRequired: boolean;
  label: string;
  maxValue?: number;
  minValue?: number;
  name: string;
  object?: string;
  options?: SvcCatalogItemAttrDetail | SvcCatalogItemAttrDetail[];
  type: SvcCatalogItemAttrType;
  value?: string;
}

export interface SvcCatalogItemAttrDetail {
  isDefault: boolean;
  label: string;
  value: string;
}

export interface SynonymDictionary extends Metadata {
  groups?: SynonymGroup | SynonymGroup[];
  isProtected?: boolean;
  label: string;
}

export interface SystemNotificationSettings extends Metadata {
  disableDowntimeNotifications?: boolean;
  disableMaintenanceNotifications?: boolean;
}

export interface Territory2 extends Metadata {
  accountAccessLevel?: string;
  caseAccessLevel?: string;
  contactAccessLevel?: string;
  customFields?: FieldValue | FieldValue[];
  description?: string;
  name: string;
  objectAccessLevels?: Territory2AccessLevel | Territory2AccessLevel[];
  opportunityAccessLevel?: string;
  parentTerritory?: string;
  ruleAssociations?: Territory2RuleAssociation | Territory2RuleAssociation[];
  territory2Type: string;
}

export interface FieldValue {
  name: string;
  value?: any;
}

export interface Territory2AccessLevel {
  accessLevel: string;
  objectType: string;
}

export interface Territory2RuleAssociation {
  inherited: boolean;
  ruleName: string;
}

export interface Territory2Model extends Metadata {
  customFields?: FieldValue | FieldValue[];
  description?: string;
  name: string;
}

export interface Territory2Rule extends Metadata {
  active: boolean;
  booleanFilter?: string;
  name: string;
  objectType: string;
  ruleItems?: Territory2RuleItem | Territory2RuleItem[];
}

export interface Territory2RuleItem {
  field: string;
  operation: FilterOperation;
  value?: string;
}

export interface Territory2Settings extends Metadata {
  defaultAccountAccessLevel?: string;
  defaultCaseAccessLevel?: string;
  defaultContactAccessLevel?: string;
  defaultOpportunityAccessLevel?: string;
  enableTerritoryManagement2?: boolean;
  opportunityFilterSettings?: Territory2SettingsOpportunityFilter;
  showTM2EnabledBanner?: boolean;
  supportedObjects?: Territory2SupportedObject | Territory2SupportedObject[];
  t2ForecastAccessLevel?: string;
  tm2BypassRealignAccInsert?: boolean;
  tm2EnableUserAssignmentLog?: boolean;
}

export interface Territory2SettingsOpportunityFilter {
  apexClassName?: string;
  enableFilter: boolean;
  runOnCreate: boolean;
}

export interface Territory2SupportedObject {
  defaultAccessLevel: string;
  objectType: string;
  state: string;
}

export interface Territory2Type extends Metadata {
  description?: string;
  name: string;
  priority: number;
}

export interface TimeSheetTemplate extends Metadata {
  active: boolean;
  description?: string;
  frequency: TimeSheetFrequency;
  masterLabel: string;
  startDate: Date;
  timeSheetTemplateAssignments?: TimeSheetTemplateAssignment | TimeSheetTemplateAssignment[];
  workWeekEndDay: DaysOfWeek;
  workWeekStartDay: DaysOfWeek;
}

export interface TimeSheetTemplateAssignment {
  assignedTo?: string;
}

export interface TimelineObjectDefinition extends Metadata {
  baseObject: string;
  definition: string;
  isActive?: boolean;
  masterLabel: string;
}

export interface TopicsForObjects extends Metadata {
  enableTopics: boolean;
  entityApiName: string;
}

export interface TrailheadSettings extends Metadata {
  enableConfettiEffect?: boolean;
  enableMyTrailheadPref?: boolean;
  enableTrailheadInLexTerms?: boolean;
}

export interface TransactionSecurityPolicy extends Metadata {
  action: TransactionSecurityAction;
  active: boolean;
  apexClass?: string;
  blockMessage?: string;
  customEmailContent?: string;
  description?: string;
  developerName?: string;
  eventName?: TransactionSecurityEventName;
  eventType?: MonitoredEvents;
  executionUser?: string;
  flow?: string;
  masterLabel?: string;
  resourceName?: string;
  type?: TxnSecurityPolicyType;
}

export interface TransactionSecurityAction {
  block: boolean;
  endSession: boolean;
  freezeUser: boolean;
  notifications?: TransactionSecurityNotification | TransactionSecurityNotification[];
  twoFactorAuthentication: boolean;
}

export interface TransactionSecurityNotification {
  inApp: boolean;
  sendEmail: boolean;
  user: string;
}

export interface Translations extends Metadata {
  botBlocks?: BotBlockTranslation | BotBlockTranslation[];
  botTemplates?: BotTemplateTranslation | BotTemplateTranslation[];
  bots?: BotTranslation | BotTranslation[];
  customApplications?: CustomApplicationTranslation | CustomApplicationTranslation[];
  customLabels?: CustomLabelTranslation | CustomLabelTranslation[];
  customPageWebLinks?: CustomPageWebLinkTranslation | CustomPageWebLinkTranslation[];
  customTabs?: CustomTabTranslation | CustomTabTranslation[];
  desFieldTemplateMessages?: ExplainabilityMsgTemplateFieldTranslation | ExplainabilityMsgTemplateFieldTranslation[];
  flowDefinitions?: FlowDefinitionTranslation | FlowDefinitionTranslation[];
  identityVerificationCustomFieldLabels?: IdentityVerificationFieldTranslation | IdentityVerificationFieldTranslation[];
  pipelineInspMetricConfigs?: PipelineInspMetricConfigTranslation | PipelineInspMetricConfigTranslation[];
  prompts?: PromptTranslation | PromptTranslation[];
  quickActions?: GlobalQuickActionTranslation | GlobalQuickActionTranslation[];
  reportTypes?: ReportTypeTranslation | ReportTypeTranslation[];
  scontrols?: ScontrolTranslation | ScontrolTranslation[];
}

export interface BotBlockTranslation {
  botBlockVersions?: BotBlockVersionTranslation | BotBlockVersionTranslation[];
  fullName: string;
}

export interface BotBlockVersionTranslation {
  botDialogs?: BotDialogTranslation | BotDialogTranslation[];
  fullName: string;
}

export interface BotDialogTranslation {
  botSteps?: BotStepTranslation | BotStepTranslation[];
  developerName: string;
  label?: string;
}

export interface BotStepTranslation {
  botMessages?: BotMessageTranslation | BotMessageTranslation[];
  botSteps?: BotStepTranslation | BotStepTranslation[];
  botVariableOperation?: BotVariableOperationTranslation;
  stepIdentifier: string;
  type: BotStepType;
}

export interface BotMessageTranslation {
  message?: string;
  messageIdentifier: string;
}

export interface BotVariableOperationTranslation {
  botMessages?: BotMessageTranslation | BotMessageTranslation[];
  botQuickReplyOptions?: BotQuickReplyOptionTranslation | BotQuickReplyOptionTranslation[];
  quickReplyOptionTemplate?: string;
  retryMessages?: BotMessageTranslation | BotMessageTranslation[];
  successMessages?: BotMessageTranslation | BotMessageTranslation[];
  type: BotVariableOperationType;
  variableOperationIdentifier: string;
}

export interface BotQuickReplyOptionTranslation {
  literalValue?: string;
  quickReplyOptionIdentifier: string;
}

export interface BotTemplateTranslation {
  botDialogs?: BotDialogTranslation | BotDialogTranslation[];
  fullName: string;
}

export interface BotTranslation {
  botVersions?: BotVersionTranslation | BotVersionTranslation[];
  fullName: string;
}

export interface BotVersionTranslation {
  botDialogs?: BotDialogTranslation | BotDialogTranslation[];
  fullName: string;
}

export interface CustomApplicationTranslation {
  description: string;
  label: string;
  name: string;
}

export interface CustomLabelTranslation {
  label: string;
  name: string;
}

export interface CustomPageWebLinkTranslation {
  label: string;
  name: string;
}

export interface CustomTabTranslation {
  label: string;
  name: string;
}

export interface ExplainabilityMsgTemplateFieldTranslation {
  description?: string;
  label?: string;
  name: string;
  templateMessage?: string;
}

export interface FlowDefinitionTranslation {
  flows?: FlowTranslation | FlowTranslation[];
  fullName: string;
  label?: string;
}

export interface FlowTranslation {
  choices?: FlowChoiceTranslation | FlowChoiceTranslation[];
  customErrorMessages?: FlowCustomErrorMessageTranslation | FlowCustomErrorMessageTranslation[];
  fullName?: string;
  label?: string;
  screens?: FlowScreenTranslation | FlowScreenTranslation[];
  stages?: FlowStageTranslation | FlowStageTranslation[];
  textTemplates?: FlowTextTemplateTranslation | FlowTextTemplateTranslation[];
}

export interface FlowChoiceTranslation {
  choiceText?: string;
  name: string;
  userInput?: FlowChoiceUserInputTranslation;
}

export interface FlowChoiceUserInputTranslation {
  promptText?: string;
  validationRule?: FlowInputValidationRuleTranslation;
}

export interface FlowInputValidationRuleTranslation {
  errorMessage?: string;
}

export interface FlowCustomErrorMessageTranslation {
  developerName: string;
  errorMessage?: string;
  field?: string;
}

export interface FlowScreenTranslation {
  backButtonLabel?: string;
  fields?: FlowScreenFieldTranslation | FlowScreenFieldTranslation[];
  helpText?: string;
  name: string;
  nextOrFinishButtonLabel?: string;
  pauseButtonLabel?: string;
  pausedText?: string;
}

export interface FlowScreenFieldTranslation {
  fieldText?: string;
  helpText?: string;
  inputParameters?: FlowInputParameterTranslation | FlowInputParameterTranslation[];
  name: string;
  validationRule?: FlowInputValidationRuleTranslation;
}

export interface FlowInputParameterTranslation {
  name: string;
  value: FlowFerovTranslation;
}

export interface FlowFerovTranslation {
  complexValues?: FlowComplexLiteralTranslation | FlowComplexLiteralTranslation[];
  stringValue?: string;
}

export interface FlowComplexLiteralTranslation {
  customAspectKey?: string;
  value?: string;
}

export interface FlowStageTranslation {
  label?: string;
  name: string;
}

export interface FlowTextTemplateTranslation {
  name: string;
  text?: string;
}

export interface IdentityVerificationFieldTranslation {
  customFieldLabel?: string;
  description?: string;
  label?: string;
  name: string;
}

export interface PipelineInspMetricConfigTranslation {
  label: string;
  name: string;
}

export interface PromptTranslation {
  description?: string;
  label?: string;
  name: string;
  promptVersions?: PromptVersionTranslation | PromptVersionTranslation[];
}

export interface PromptVersionTranslation {
  actionButtonLabel?: string;
  actionButtonLink?: string;
  body?: string;
  description?: string;
  dismissButtonLabel?: string;
  header?: string;
  imageAltText?: string;
  imageLink?: string;
  label?: string;
  name: string;
  stepNumber?: number;
  title?: string;
  videoLink?: string;
}

export interface GlobalQuickActionTranslation {
  aspect?: string;
  label: string;
  name: string;
}

export interface ReportTypeTranslation {
  description?: string;
  label?: string;
  name: string;
  sections?: ReportTypeSectionTranslation | ReportTypeSectionTranslation[];
}

export interface ReportTypeSectionTranslation {
  columns?: ReportTypeColumnTranslation | ReportTypeColumnTranslation[];
  label?: string;
  name: string;
}

export interface ReportTypeColumnTranslation {
  label: string;
  name: string;
}

export interface ScontrolTranslation {
  label: string;
  name: string;
}

export interface TrialOrgSettings extends Metadata {
  enableSampleDataDeleted?: boolean;
}

export interface UIObjectRelationConfig extends Metadata {
  UIObjectRelationFieldConfigs?: UIObjectRelationFieldConfig | UIObjectRelationFieldConfig[];
  contextObject: string;
  contextObjectRecordType?: string;
  directRelationshipField?: string;
  indirectObjectContextField?: string;
  indirectObjectRelatedField?: string;
  indirectRelationshipObject?: string;
  isActive?: boolean;
  masterLabel: string;
  relatedObject: string;
  relatedObjectRecordType?: string;
  relationshipType: ObjectRelationshipType;
}

export interface UIObjectRelationFieldConfig {
  displayLabel: string;
  queryText: string;
  rowOrder: number;
}

export interface UserAccessPolicy extends Metadata {
  booleanFilter: string;
  description?: string;
  isProtected?: boolean;
  masterLabel: string;
  status: UserAccessPolicyStatus;
  triggerType?: UserAccessPolicyTriggerType;
  userAccessPolicyActions?: UserAccessPolicyAction | UserAccessPolicyAction[];
  userAccessPolicyFilters?: UserAccessPolicyFilter | UserAccessPolicyFilter[];
}

export interface UserAccessPolicyAction {
  action: UserAccessPolicyActionType;
  target: string;
  type: UserAccessPolicyActionTargetType;
}

export interface UserAccessPolicyFilter {
  columnName?: string;
  operation: UserAccessPolicyFilterOperation;
  sortOrder: number;
  target: string;
  type: UserAccessPolicyFilterTargetType;
  value?: string;
}

export interface UserCriteria extends Metadata {
  creationAgeInSeconds?: number;
  description?: string;
  lastChatterActivityAgeInSeconds?: number;
  masterLabel: string;
  profiles?: string | string[];
  userTypes?: NetworkUserType | NetworkUserType[];
}

export interface UserEngagementSettings extends Metadata {
  canGovCloudUseAdoptionApps?: boolean;
  doesScheduledSwitcherRunDaily?: boolean;
  enableCustomHelpGlobalSection?: boolean;
  enableHelpMenuShowFeedback?: boolean;
  enableHelpMenuShowHelp?: boolean;
  enableHelpMenuShowNewUser?: boolean;
  enableHelpMenuShowSearch?: boolean;
  enableHelpMenuShowSfdcContent?: boolean;
  enableHelpMenuShowShortcut?: boolean;
  enableHelpMenuShowSupport?: boolean;
  enableHelpMenuShowTrailhead?: boolean;
  enableIBILOptOutDashboards?: boolean;
  enableIBILOptOutEvents?: boolean;
  enableIBILOptOutReports?: boolean;
  enableIBILOptOutTasks?: boolean;
  enableLexToClassicFeedbackEnable?: boolean;
  enableOrchestrationInSandbox?: boolean;
  enableOrgUserAssistEnabled?: boolean;
  enableScheduledSwitcher?: boolean;
  enableSfdcProductFeedbackSurvey?: boolean;
  enableShowSalesforceUserAssist?: boolean;
  isAutoTransitionDelayed?: boolean;
  isCrucNotificationDisabled?: boolean;
  isCustomProfileAutoTransitionDelayed?: boolean;
  isLEXWelcomeMatDisabled?: boolean;
  isMeetTheAssistantDisabledInClassic?: boolean;
  isMeetTheAssistantDisabledInLightning?: boolean;
  isSmartNudgesDisabled?: boolean;
  optimizerAppEnabled?: boolean;
}

export interface UserInterfaceSettings extends Metadata {
  alternateAlohaListView?: boolean;
  dynamicMruActionsOff?: boolean;
  enableAsyncRelatedLists?: boolean;
  enableClickjackUserPageHeaderless?: boolean;
  enableCollapsibleSections?: boolean;
  enableCollapsibleSideBar?: boolean;
  enableCustomObjectTruncate?: boolean;
  enableCustomeSideBarOnAllPages?: boolean;
  enableDeleteFieldHistory?: boolean;
  enableExternalObjectAsyncRelatedLists?: boolean;
  enableHoverDetails?: boolean;
  enableInlineEdit?: boolean;
  enableLightningVerticalNav?: boolean;
  enableNewPageLayoutEditor?: boolean;
  enablePersonalCanvas?: boolean;
  enablePrintableListViews?: boolean;
  enableProfileCustomTabsets?: boolean;
  enableQuickCreate?: boolean;
  enableRelatedListHovers?: boolean;
  enableTabOrganizer?: boolean;
}

export interface UserLicenseDefinition extends Metadata {
  cloudServiceProvider?: string;
  defaultLicenseDuration?: number;
  defaultStatus?: DefaultLicenseStatus;
  description?: string;
  hasDynamicResourceGroupKey?: boolean;
  includedFeatures?: IncludedFeature | IncludedFeature[];
  isPermissionSetLicense?: boolean;
  licenseKey?: string;
  licenseOwner?: string;
  licensingAuthority?: string;
  managementServiceProvider?: string;
  managementTenantId?: string;
  minPlatformVersion?: number;
  name: string;
  settingItems?: SettingItem | SettingItem[];
  settingUsageDefinitions?: SettingUsageDefinition | SettingUsageDefinition[];
  standardPermissionSets?: StandardPermissionSet | StandardPermissionSet[];
}

export interface StandardPermissionSet {
  developerName: string;
  isSessionBased?: boolean;
  namespace?: string;
  profileKey?: string;
  requiredAccessCheck?: string;
  settingValues?: SettingValue | SettingValue[];
}

export interface SettingValue {
  durableId: string;
  value: string;
}

export interface UserManagementSettings extends Metadata {
  enableCanAnswerContainUsername?: boolean;
  enableConcealPersonalInfo?: boolean;
  enableContactlessExternalIdentityUsers?: boolean;
  enableEnhancedConcealPersonalInfo?: boolean;
  enableEnhancedPermsetMgmt?: boolean;
  enableEnhancedProfileMgmt?: boolean;
  enableNewProfileUI?: boolean;
  enableProfileFiltering?: boolean;
  enableRestrictEmailDomains?: boolean;
  enableScrambleUserData?: boolean;
  enableUserSelfDeactivate?: boolean;
  permsetsInFieldCreation?: boolean;
  psaExpirationUIEnabled?: boolean;
  restrictedProfileCloning?: boolean;
  userAccessPoliciesEnabled?: boolean;
}

export interface UserProfileSearchScope extends Metadata {
  entityApiNames?: string | string[];
  profile?: string;
}

export interface UserProvisioningConfig extends Metadata {
  approvalRequired?: string;
  connectedApp: string;
  enabled?: boolean;
  enabledOperations?: string;
  flow?: string;
  masterLabel: string;
  namedCredential?: string;
  notes?: string;
  onUpdateAttributes?: string;
  reconFilter?: string;
  userAccountMapping?: string;
}

export interface VehicleAssetEmssnSrcCnfg extends Metadata {
  recordType: string;
  vehicleAssetType: VehicleAssetType;
}

export interface VisualizationPlugin extends Metadata {
  description?: string;
  developerName: string;
  icon: string;
  masterLabel: string;
  visualizationResources?: VisualizationResource | VisualizationResource[];
  visualizationTypes?: VisualizationType | VisualizationType[];
}

export interface VisualizationResource {
  description?: string;
  file: string;
  rank?: number;
  type: VisualizationResourceType;
}

export interface VisualizationType {
  description?: string;
  developerName: string;
  icon: string;
  masterLabel: string;
  scriptBootstrapMethod?: string;
}

export interface VoiceSettings extends Metadata {
  enableCallDisposition?: boolean;
  enableConsentReminder?: boolean;
  enableDefaultRecording?: boolean;
  enableVoiceCallList?: boolean;
  enableVoiceCallRecording?: boolean;
  enableVoiceCoaching?: boolean;
  enableVoiceConferencing?: boolean;
  enableVoiceLocalPresence?: boolean;
  enableVoiceMail?: boolean;
  enableVoiceMailDrop?: boolean;
}

export interface WarrantyLifecycleMgmtSettings extends Metadata {
  enableWarrantyLCMgmt?: boolean;
}

export interface WaveAnalyticAssetCollection extends Metadata {
  collectionType: string;
  color: string;
  description?: string;
  folder?: string;
  items?: WaveAnalyticAssetCollectionItem | WaveAnalyticAssetCollectionItem[];
  label: string;
  masterLabel: string;
  shares?: FolderShare | FolderShare[];
}

export interface WaveAnalyticAssetCollectionItem {
  asset?: string;
  assetType?: string;
  sortOrder?: number;
}

export interface WaveApplication extends Metadata {
  assetIcon?: string;
  description?: string;
  folder: string;
  masterLabel: string;
  shares?: FolderShare | FolderShare[];
  templateOrigin?: string;
  templateVersion?: string;
}

export interface WaveDataset extends Metadata {
  application: string;
  description?: string;
  masterLabel: string;
  templateAssetSourceName?: string;
  type?: string;
}

export interface WaveTemplateBundle extends Metadata {
  assetIcon?: string;
  assetVersion?: number;
  description?: string;
  label: string;
  templateType: string;
}

export interface WaveTemplateDetailsMetadata extends Metadata {}

export interface WaveTemplateExternalDataMetadata extends Metadata {
  edgemartLabel: string;
  format: string;
  label: string;
  simulatedRowCount?: number;
}

export interface WaveTemplateLensDashboardMetadata extends Metadata {}

export interface WaveXmd extends Metadata {
  application?: string;
  dataset: string;
  datasetConnector?: string;
  datasetFullyQualifiedName?: string;
  dates?: WaveXmdDate | WaveXmdDate[];
  dimensions?: WaveXmdDimension | WaveXmdDimension[];
  measures?: WaveXmdMeasure | WaveXmdMeasure[];
  organizations?: WaveXmdOrganization | WaveXmdOrganization[];
  origin?: string;
  type?: string;
  waveVisualization?: string;
}

export interface WaveXmdDate {
  alias: string;
  compact?: boolean;
  dateFieldDay?: string;
  dateFieldEpochDay?: string;
  dateFieldEpochSecond?: string;
  dateFieldFiscalMonth?: string;
  dateFieldFiscalQuarter?: string;
  dateFieldFiscalWeek?: string;
  dateFieldFiscalYear?: string;
  dateFieldFullYear?: string;
  dateFieldHour?: string;
  dateFieldMinute?: string;
  dateFieldMonth?: string;
  dateFieldQuarter?: string;
  dateFieldSecond?: string;
  dateFieldWeek?: string;
  dateFieldYear?: string;
  description?: string;
  firstDayOfWeek: number;
  fiscalMonthOffset: number;
  isYearEndFiscalYear?: boolean;
  label?: string;
  showInExplorer?: boolean;
  sortIndex: number;
  type: string;
}

export interface WaveXmdDimension {
  conditionalFormatting?: WaveXmdFormattingProperty | WaveXmdFormattingProperty[];
  customActions?: WaveXmdDimensionCustomAction | WaveXmdDimensionCustomAction[];
  customActionsEnabled?: boolean;
  dateFormat?: string;
  defaultAction?: string;
  description?: string;
  field: string;
  fullyQualifiedName?: string;
  imageTemplate?: string;
  isDerived: boolean;
  isMultiValue?: boolean;
  label?: string;
  linkTemplate?: string;
  linkTemplateEnabled?: boolean;
  linkTooltip?: string;
  members?: WaveXmdDimensionMember | WaveXmdDimensionMember[];
  origin?: string;
  recordDisplayFields?: WaveXmdRecordDisplayLookup | WaveXmdRecordDisplayLookup[];
  recordIdField?: string;
  recordOrganizationIdField?: string;
  salesforceActions?: WaveXmdDimensionSalesforceAction | WaveXmdDimensionSalesforceAction[];
  salesforceActionsEnabled?: boolean;
  showDetailsDefaultFieldIndex?: number;
  showInExplorer?: boolean;
  sortIndex: number;
}

export interface WaveXmdFormattingProperty {
  formattingBins?: WaveXmdFormattingBin | WaveXmdFormattingBin[];
  formattingPredicates?: WaveXmdFormattingPredicate | WaveXmdFormattingPredicate[];
  property: string;
  referenceField: string;
  sortIndex: number;
  type: string;
}

export interface WaveXmdFormattingBin {
  bin: string;
  formatValue: string;
  label: string;
  sortIndex: number;
}

export interface WaveXmdFormattingPredicate {
  formatValue: string;
  operator: string;
  sortIndex: number;
  value: string;
}

export interface WaveXmdDimensionCustomAction {
  customActionName: string;
  enabled: boolean;
  icon?: string;
  method?: string;
  sortIndex: number;
  target?: string;
  tooltip?: string;
  url?: string;
}

export interface WaveXmdDimensionMember {
  color?: string;
  label?: string;
  member: string;
  sortIndex: number;
}

export interface WaveXmdRecordDisplayLookup {
  recordDisplayField: string;
  sortIndex: number;
}

export interface WaveXmdDimensionSalesforceAction {
  enabled: boolean;
  salesforceActionName: string;
  sortIndex: number;
}

export interface WaveXmdMeasure {
  conditionalFormatting?: WaveXmdFormattingProperty | WaveXmdFormattingProperty[];
  currencies?: WaveXmdMeasure | WaveXmdMeasure[];
  currencyCode?: string;
  dateFormat?: string;
  description?: string;
  field: string;
  formatCustomFormat?: string;
  formatDecimalDigits?: number;
  formatDecimalSeparator?: string;
  formatIsNegativeParens?: boolean;
  formatPrefix?: string;
  formatSuffix?: string;
  formatThousandsSeparator?: string;
  formatUnit?: string;
  formatUnitMultiplier?: number;
  fullyQualifiedName?: string;
  isDerived: boolean;
  isMultiCurrency?: boolean;
  label?: string;
  origin?: string;
  showDetailsDefaultFieldIndex?: number;
  showInExplorer?: boolean;
  sortIndex: number;
}

export interface WaveXmdOrganization {
  instanceUrl: string;
  label: string;
  organizationIdentifier: string;
  sortIndex: number;
}

export interface WebStoreBundle extends Metadata {
  autoFacetingEnabled?: boolean;
  cartToOrderAutoCustomFieldMapping?: boolean;
  commerceEinsteinActivitiesTracked?: boolean;
  commerceEinsteinDeployed?: boolean;
  country?: CountryIsoCode;
  defaultCurrency?: string;
  defaultLanguage?: string;
  defaultTaxLocaleType: TaxLocaleType;
  description?: string;
  guestBrowsingEnabled?: boolean;
  guestCartTimeToLive?: number;
  label: string;
  orderLifeCycleType?: OrderLifeCycleType;
  pricingStrategy: PricingStrategy;
  productGrouping?: ProductGrouping;
  skipAdditionalEntitlementCheckForSearch?: boolean;
  skuDetectionEnabled?: boolean;
  storeName?: string;
  supportedCurrencies?: string;
  supportedLanguages?: string;
  supportedShipToCountries?: string;
  type: WebStoreType;
}

export interface WebStoreTemplate extends Metadata {
  autoFacetingEnabled?: boolean;
  cartAsyncProcessingEnabled?: boolean;
  cartCalculateEnabled?: boolean;
  cartToOrderAutoCustomFieldMapping?: boolean;
  checkoutTimeToLive?: number;
  checkoutValidAfterDate?: Date;
  commerceEinsteinActivitiesTracked?: boolean;
  commerceEinsteinDeployed?: boolean;
  country?: CountryIsoCode;
  defaultCurrency?: string;
  defaultLanguage: string;
  defaultTaxLocaleType: TaxLocaleType;
  description?: string;
  duplicateCartItemsEnabled?: boolean;
  guestBrowsingEnabled?: boolean;
  guestCartEnabled: boolean;
  guestCartTimeToLive?: number;
  guestCheckoutEnabled: boolean;
  masterLabel: string;
  maxValuesPerFacet?: number;
  orderActivationStatus?: string;
  orderLifeCycleType?: OrderLifeCycleType;
  paginationSize?: number;
  pricingStrategy: PricingStrategy;
  productGrouping?: ProductGrouping;
  skipAdditionalEntitlementCheckForSearch?: boolean;
  skuDetectionEnabled?: boolean;
  supportedCurrencies?: string;
  supportedLanguages: string;
  supportedShipToCountries?: string;
  type: WebStoreType;
}

export interface WebToXSettings extends Metadata {
  shouldHideRecordInfoInEmail?: boolean;
  webToCaseSpamFilter?: boolean;
  webToLeadSpamFilter?: boolean;
}

export interface WindowsPushApplicationSetup extends Metadata {
  packageSecurityIdentifier: string;
  secretKey: string;
}

export interface WorkDotComSettings extends Metadata {
  enableCoachingManagerGroupAccess?: boolean;
  enableGoalManagerGroupAccess?: boolean;
  enableProfileSkills?: boolean;
  enableProfileSkillsAddFeedPost?: boolean;
  enableProfileSkillsAutoSuggest?: boolean;
  enableProfileSkillsUsePlatform?: boolean;
  enableWorkBadgeDefRestrictPref?: boolean;
  enableWorkCalibration?: boolean;
  enableWorkCanvasPref?: boolean;
  enableWorkCertification?: boolean;
  enableWorkCertificationNotification?: boolean;
  enableWorkRewardsPref?: boolean;
  enableWorkThanksPref?: boolean;
  enableWorkUseObjectivesForGoals?: boolean;
}

export interface WorkSkillRouting extends Metadata {
  isActive: boolean;
  masterLabel: string;
  relatedEntity: string;
  workSkillRoutingAttributes?: WorkSkillRoutingAttribute | WorkSkillRoutingAttribute[];
}

export interface WorkSkillRoutingAttribute {
  field: string;
  isAdditionalSkill?: boolean;
  skill: string;
  skillLevel?: number;
  skillPriority?: number;
  value?: string;
}

export interface Workflow extends Metadata {
  alerts?: WorkflowAlert | WorkflowAlert[];
  fieldUpdates?: WorkflowFieldUpdate | WorkflowFieldUpdate[];
  flowActions?: WorkflowFlowAction | WorkflowFlowAction[];
  knowledgePublishes?: WorkflowKnowledgePublish | WorkflowKnowledgePublish[];
  outboundMessages?: WorkflowOutboundMessage | WorkflowOutboundMessage[];
  rules?: WorkflowRule | WorkflowRule[];
  send?: WorkflowSend | WorkflowSend[];
  tasks?: WorkflowTask | WorkflowTask[];
}

export interface WorkflowAlert extends WorkflowAction {
  ccEmails?: string | string[];
  description: string;
  protected: boolean;
  recipients?: WorkflowEmailRecipient | WorkflowEmailRecipient[];
  senderAddress?: string;
  senderType?: ActionEmailSenderType;
  template: string;
}

export interface WorkflowAction extends Metadata {}

export interface WorkflowFieldUpdate extends WorkflowAction {
  description?: string;
  field: string;
  formula?: string;
  literalValue?: string;
  lookupValue?: string;
  lookupValueType?: LookupValueType;
  name: string;
  notifyAssignee: boolean;
  operation: FieldUpdateOperation;
  protected: boolean;
  reevaluateOnChange?: boolean;
  targetObject?: string;
}

export interface WorkflowFlowAction extends WorkflowAction {
  description?: string;
  flow: string;
  flowInputs?: WorkflowFlowActionParameter | WorkflowFlowActionParameter[];
  label: string;
  language?: string;
  protected: boolean;
}

export interface WorkflowFlowActionParameter {
  name: string;
  value?: string;
}

export interface WorkflowKnowledgePublish extends WorkflowAction {
  action: KnowledgeWorkflowAction;
  description?: string;
  label: string;
  language?: string;
  protected: boolean;
}

export interface WorkflowOutboundMessage extends WorkflowAction {
  apiVersion: number;
  description?: string;
  endpointUrl: string;
  fields?: string | string[];
  includeSessionId: boolean;
  integrationUser: string;
  name: string;
  protected: boolean;
  useDeadLetterQueue?: boolean;
}

export interface WorkflowSend extends WorkflowAction {
  action: SendAction;
  description?: string;
  label: string;
  language?: string;
  protected: boolean;
}

export interface WorkflowTask extends WorkflowAction {
  assignedTo?: string;
  assignedToType: ActionTaskAssignedToTypes;
  description?: string;
  dueDateOffset: number;
  notifyAssignee: boolean;
  offsetFromField?: string;
  priority: string;
  protected: boolean;
  status: string;
  subject: string;
}

export interface WorkflowEmailRecipient {
  field?: string;
  recipient?: string;
  type: ActionEmailRecipientTypes;
}

export interface WorkflowRule extends Metadata {
  actions?: WorkflowActionReference | WorkflowActionReference[];
  active: boolean;
  booleanFilter?: string;
  criteriaItems?: FilterItem | FilterItem[];
  description?: string;
  failedMigrationToolVersion?: string;
  formula?: string;
  triggerType: WorkflowTriggerTypes;
  workflowTimeTriggers?: WorkflowTimeTrigger | WorkflowTimeTrigger[];
}

export interface WorkflowTimeTrigger {
  actions?: WorkflowActionReference | WorkflowActionReference[];
  offsetFromField?: string;
  timeLength?: string;
  workflowTimeTriggerUnit: WorkflowTimeUnits;
}

export interface SaveResult {
  errors?: Error | Error[];
  fullName: string;
  success: boolean;
}

export interface Error {
  extendedErrorDetails?: ExtendedErrorDetails | ExtendedErrorDetails[];
  fields?: string | string[];
  message: string;
  statusCode: StatusCode;
}

export interface ExtendedErrorDetails {
  extendedErrorCode: ExtendedErrorCode;
}

export interface DeleteResult {
  errors?: Error | Error[];
  fullName: string;
  success: boolean;
}

export interface DeployOptions {
  allowMissingFiles: boolean;
  autoUpdatePackage: boolean;
  checkOnly: boolean;
  ignoreWarnings: boolean;
  performRetrieve: boolean;
  purgeOnDelete: boolean;
  rollbackOnError: boolean;
  runTests?: string | string[];
  singlePackage: boolean;
  testLevel: TestLevel;
}

export interface DescribeMetadataResult {
  metadataObjects?: DescribeMetadataObject | DescribeMetadataObject[];
  organizationNamespace: string;
  partialSaveAllowed: boolean;
  testRequired: boolean;
}

export interface DescribeMetadataObject {
  childXmlNames?: string | string[];
  directoryName: string;
  inFolder: boolean;
  metaFile: boolean;
  suffix?: string;
  xmlName: string;
}

export interface DescribeValueTypeResult {
  apiCreatable: boolean;
  apiDeletable: boolean;
  apiReadable: boolean;
  apiUpdatable: boolean;
  parentField?: ValueTypeField;
  valueTypeFields?: ValueTypeField | ValueTypeField[];
}

export interface ValueTypeField {
  fields?: ValueTypeField | ValueTypeField[];
  foreignKeyDomain?: string | string[];
  isForeignKey: boolean;
  isNameField: boolean;
  minOccurs: number;
  name: string;
  picklistValues?: PicklistEntry | PicklistEntry[];
  soapType: string;
  valueRequired: boolean;
}

export interface PicklistEntry {
  active: boolean;
  defaultValue: boolean;
  label: string;
  validFor?: string;
  value: string;
}

export interface ListMetadataQuery {
  folder?: string;
  type: string;
}

export interface ReadResult {
  records?: Metadata | Metadata[];
}

export interface RetrieveRequest {
  apiVersion: number;
  packageNames?: string | string[];
  singlePackage: boolean;
  specificFiles?: string | string[];
  unpackaged?: Package;
}

export interface UpdateMetadata {
  currentName: string;
  metadata: Metadata;
}

export interface UpsertResult {
  created: boolean;
  errors?: Error | Error[];
  fullName: string;
  success: boolean;
}

export interface LogInfo {
  category: LogCategory;
  level: LogCategoryLevel;
}

export interface AllOrNoneHeader {
  allOrNone: boolean;
}

export interface CallOptions {
  client: string;
  perfOption: PerfOption;
  uiRequestId: string;
}

export interface DebuggingHeader {
  categories?: LogInfo | LogInfo[];
  debugLevel: LogType;
}

export interface DebuggingInfo {
  debugLog: string;
}

export interface SessionHeader {
  sessionId: string;
}

export interface cancelDeploy {
  String: ID;
}

export interface cancelDeployResponse {
  result: CancelDeployResult;
}

export interface checkDeployStatus {
  asyncProcessId: ID;
  includeDetails: boolean;
}

export interface checkDeployStatusResponse {
  result: DeployResult;
}

export interface checkRetrieveStatus {
  asyncProcessId: ID;
  includeZip: boolean;
}

export interface checkRetrieveStatusResponse {
  result: RetrieveResult;
}

export interface checkStatus {
  asyncProcessId?: ID | ID[];
}

export interface checkStatusResponse {
  result?: AsyncResult | AsyncResult[];
}

export interface create {
  metadata?: Metadata | Metadata[];
}

export interface createResponse {
  result?: AsyncResult | AsyncResult[];
}

export interface createMetadata {
  metadata?: Metadata | Metadata[];
}

export interface createMetadataResponse {
  result?: SaveResult | SaveResult[];
}

export interface delete_ {
  metadata?: Metadata | Metadata[];
}

export interface deleteResponse {
  result?: AsyncResult | AsyncResult[];
}

export interface deleteMetadata {
  type: string;
  fullNames?: string | string[];
}

export interface deleteMetadataResponse {
  result?: DeleteResult | DeleteResult[];
}

export interface deploy {
  ZipFile: string;
  DeployOptions: DeployOptions;
}

export interface deployResponse {
  result: AsyncResult;
}

export interface deployRecentValidation {
  validationId: ID;
}

export interface deployRecentValidationResponse {
  result: string;
}

export interface describeMetadata {
  asOfVersion: number;
}

export interface describeMetadataResponse {
  result: DescribeMetadataResult;
}

export interface describeValueType {
  type: string;
}

export interface describeValueTypeResponse {
  result: DescribeValueTypeResult;
}

export interface listMetadata {
  queries?: ListMetadataQuery | ListMetadataQuery[];
  asOfVersion: number;
}

export interface listMetadataResponse {
  result?: FileProperties | FileProperties[];
}

export interface readMetadata {
  type: string;
  fullNames?: string | string[];
}

export interface readMetadataResponse {
  result: ReadResult;
}

export interface renameMetadata {
  type: string;
  oldFullName: string;
  newFullName: string;
}

export interface renameMetadataResponse {
  result: SaveResult;
}

export interface retrieve {
  retrieveRequest: RetrieveRequest;
}

export interface retrieveResponse {
  result: AsyncResult;
}

export interface update {
  UpdateMetadata?: UpdateMetadata | UpdateMetadata[];
}

export interface updateResponse {
  result?: AsyncResult | AsyncResult[];
}

export interface updateMetadata {
  metadata?: Metadata | Metadata[];
}

export interface updateMetadataResponse {
  result?: SaveResult | SaveResult[];
}

export interface upsertMetadata {
  metadata?: Metadata | Metadata[];
}

export interface upsertMetadataResponse {
  result?: UpsertResult | UpsertResult[];
}

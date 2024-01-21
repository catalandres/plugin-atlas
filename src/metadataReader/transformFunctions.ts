import * as Metadata from '../metadata/metadata.js';

export function transformCustomObject(object: Record<string, unknown>): void {
  const suffix: string | undefined = (object.name as string)?.match('__([A-Za-z0-9]+$)')?.at(0);
  // https://salesforce.stackexchange.com/questions/101844/what-are-the-object-and-field-name-suffixes-that-salesforce-uses-such-as-c-an#101845
  switch (suffix) {
    case '__c':
      break;
    case '__mdt':
      break;
    case '__e':
      break;
    default:
      break;
  }
}

export function transformCustomTab(tab: Record<string, unknown>): void {
  if (tab.customObject) {
    tab.objectName = tab.name;
  }
}

export function transformFlow(flow: Record<string, unknown>): void {
  if (flow.start) {
    const flowStart = flow.start as Metadata.FlowStart;
    flow.objectName = flowStart.object ?? '';
    flow.triggerType = flowStart.triggerType ?? '';
    flow.recordTriggerType = flowStart.recordTriggerType ?? '';
  }
}

export function transformRole(role: Record<string, unknown>): void {
  role.label = role.name;
  role.name = role.fullName;
}

import * as Metadata from '../metadata/metadata.js';

export function transformCustomTab(tab: Record<string, unknown>): void {
  if (tab.customObject) {
    tab.objectName = tab.name;
  }
}

export function transformFlow(flow: Record<string, unknown>): void {
  if (flow.start) {
    flow.objectName = (flow.start as Metadata.FlowStart).object ?? '';
    flow.triggerType = (flow.start as Metadata.FlowStart).triggerType ?? '';
    flow.recordTriggerType = (flow.start as Metadata.FlowStart).recordTriggerType ?? '';
  }
}

export function transformRole(role: Record<string, unknown>): void {
  role.label = role.name;
  role.name = role.fullName;
}

import { FlowStart } from '../../types/metadata.js';

export function transformFlow(flow: Record<string, unknown>): void {
  if (flow.start) {
    flow.objectName = (flow.start as FlowStart).object ?? '';
    flow.triggerType = (flow.start as FlowStart).triggerType ?? '';
    flow.recordTriggerType = (flow.start as FlowStart).recordTriggerType ?? '';
  }
}

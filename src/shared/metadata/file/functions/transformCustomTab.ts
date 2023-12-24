import { CustomTab } from '../../types/metadata.js';
import { Extended } from '../index.js';

export function transformCustomTab(tab: Extended<CustomTab>): void {
  if (tab.customObject) {
    tab.objectName = tab.name;
  }
}

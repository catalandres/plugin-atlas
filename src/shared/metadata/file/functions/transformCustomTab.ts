import * as Metadata from '../../types/metadata.js';
import * as MetadataFile from '../index.js';

export function transformCustomTab(tab: MetadataFile.Extended<Metadata.CustomTab>): void {
  if (tab.customObject) {
    tab.objectName = tab.name;
  }
}

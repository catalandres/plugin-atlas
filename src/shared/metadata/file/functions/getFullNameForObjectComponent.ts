import * as MetadataFile from '../index.js';

export function getFullNameForObjectComponent(fullPath: string): string {
  const objectName = MetadataFile.getNameOfSecondToLastFolderLevel(fullPath);
  const componentName = MetadataFile.getBasenameWithoutExtension(fullPath);
  return objectName + '.' + componentName;
}

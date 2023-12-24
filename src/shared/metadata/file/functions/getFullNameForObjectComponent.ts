import { getBasenameWithoutExtension, getNameOfSecondToLastFolderLevel } from '../index.js';

export function getFullNameForObjectComponent(fullPath: string): string {
  const objectName = getNameOfSecondToLastFolderLevel(fullPath);
  const componentName = getBasenameWithoutExtension(fullPath);
  return objectName + '.' + componentName;
}

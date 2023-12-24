import * as path from 'node:path';

export function getNameOfSecondToLastFolderLevel(fullPath: string): string {
  return fullPath.split(path.sep).reverse()[2];
}

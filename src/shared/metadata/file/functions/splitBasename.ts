import { getBasenameWithoutExtension } from '../index.js';

export function getFirstHalfOfBasenameSplitByPeriod(fullPath: string): string {
  const basename = getBasenameWithoutExtension(fullPath);
  return basename.split('.')[0];
}

export function getSecondHalfOfBasenameSplitByPeriod(fullPath: string): string {
  const basename = getBasenameWithoutExtension(fullPath);
  return basename.split('.')[1];
}

export function getFirstHalfOfBasenameSplitByDash(fullPath: string): string {
  const basename = getBasenameWithoutExtension(fullPath);
  return basename.split('-')[0];
}

export function getSecondHalfOfBasenameSplitByDash(fullPath: string): string {
  const basename = getBasenameWithoutExtension(fullPath);
  return basename.split('-')[1];
}

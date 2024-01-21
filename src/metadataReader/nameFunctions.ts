import * as path from 'node:path';
import { getMetadataExtension } from '../util.js';

export function concatenateObjectNameAndName(record: Record<string, unknown>): string {
  return (record.objectName as string) + '.' + (record.name as string);
}

export function getBasenameWithoutExtension(record: Record<string, unknown>): string {
  const extension = getMetadataExtension(record.fileName as string);
  return path.basename(record.fileName as string).replace(extension, '');
}

export function getFullNameValue(record: Record<string, unknown>): string {
  return (record.fullName as string) || '';
}

export function getNameOfSecondToLastFolderLevel(record: Record<string, unknown>): string {
  return (record.fileName as string).split(path.sep).reverse()[2];
}

export function getFirstHalfOfBasenameSplitByPeriod(record: Record<string, unknown>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split('.')[0];
}

export function getSecondHalfOfBasenameSplitByPeriod(record: Record<string, unknown>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split('.')[1];
}

export function getFirstHalfOfBasenameSplitByDash(record: Record<string, unknown>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split('-')[0];
}

export function getSecondHalfOfBasenameSplitByDash(record: Record<string, unknown>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split('-')[1];
}

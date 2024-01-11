import * as path from 'node:path';
import { Metadata } from '../metadata/metadata.js';
import { getMetadataExtension } from '../util.js';
import { Extended } from './metadataTypes.js';

export function concatenateObjectNameAndName(record: Extended<Metadata>): string {
  return record.objectName + '.' + record.name;
}

export function getBasenameWithoutExtension(record: Extended<Metadata>): string {
  const extension = getMetadataExtension(record.fileName);
  return path.basename(record.fileName).replace(extension, '');
}

export function getFullNameValue(record: Extended<Metadata>): string {
  return record.fullName || '';
}

export function getNameOfSecondToLastFolderLevel(record: Extended<Metadata>): string {
  return record.fileName.split(path.sep).reverse()[2];
}

export function getFirstHalfOfBasenameSplitByPeriod(record: Extended<Metadata>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split('.')[0];
}

export function getSecondHalfOfBasenameSplitByPeriod(record: Extended<Metadata>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split('.')[1];
}

export function getFirstHalfOfBasenameSplitByDash(record: Extended<Metadata>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split('-')[0];
}

export function getSecondHalfOfBasenameSplitByDash(record: Extended<Metadata>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split('-')[1];
}

import { Metadata } from '../../types/metadata.js';
import { Extended, getBasenameWithoutExtension } from '../index.js';

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

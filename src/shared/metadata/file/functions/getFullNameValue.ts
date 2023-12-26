import { Extended } from '../index.js';
import { Metadata } from '../../types/metadata.js';

export function getFullNameValue(record: Extended<Metadata>): string {
  return record.fullName || '';
}

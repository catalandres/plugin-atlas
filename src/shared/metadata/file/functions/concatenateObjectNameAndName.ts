import { Metadata } from '../../types/metadata.js';
import { Extended } from '../index.js';

export function concatenateObjectNameAndName(record: Extended<Metadata>): string {
  return record.objectName + '.' + record.name;
}

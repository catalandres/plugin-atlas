import * as path from 'node:path';
import { Extended, getExtension } from '../index.js';
import { Metadata } from '../../types/metadata.js';

export function getBasenameWithoutExtension(record: Extended<Metadata>): string {
  const extension = getExtension(record.fileName);
  return path.basename(record.fileName).replace(extension, '');
}

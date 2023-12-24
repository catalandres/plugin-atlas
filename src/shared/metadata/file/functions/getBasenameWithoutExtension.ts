import * as path from 'node:path';
import * as MetadataFile from '../index.js';

export function getBasenameWithoutExtension(fullPath: string): string {
  const extension = MetadataFile.getExtension(fullPath);
  return path.basename(fullPath).replace(extension, '');
}

import * as path from 'node:path';
import { getExtension } from '../index.js';

export function getBasenameWithoutExtension(fullPath: string): string {
  const extension = getExtension(fullPath);
  return path.basename(fullPath).replace(extension, '');
}

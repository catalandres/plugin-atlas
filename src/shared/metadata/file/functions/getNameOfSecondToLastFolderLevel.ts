import * as path from 'node:path';
import { Extended } from '../index.js';
import { Metadata } from '../../types/metadata.js';

export function getNameOfSecondToLastFolderLevel(record: Extended<Metadata>): string {
  return record.fileName.split(path.sep).reverse()[2];
}

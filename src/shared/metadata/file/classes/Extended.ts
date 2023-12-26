import { ExtendedMetadata } from './ExtendedMetadata.js';

export type Extended<T> = T &
  ExtendedMetadata &
  Record<string, unknown> & {
    name: string;
    objectName: string;
    fullName: string;
    fileName: string;
  };

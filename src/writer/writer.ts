import { mkdirSync, lstatSync } from 'node:fs';
import { Album } from '../metadataReader/metadataTypes.js';

export abstract class Writer {
  protected album: Album;
  protected type: WriterType;

  protected constructor(album: Album, type: WriterType) {
    this.album = album;
    this.type = type;
  }

  public static something(): string {
    return 'something';
  }

  public static isFolder(path: string): boolean {
    return lstatSync(path).isDirectory();
  }

  public static createFolderStructure(folder: string): void {
    mkdirSync(folder, { recursive: true });
  }
}

export enum WriterType {
  XLSX = 'XLSX',
  CSV = 'CSV',
}

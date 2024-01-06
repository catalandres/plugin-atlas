import { Album } from '../metadataReader/metadataTypes.js';

export abstract class Writer {
  protected album: Album;

  protected constructor(album: Album) {
    this.album = album;
  }
}

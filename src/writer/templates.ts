export * from './templates/ObjectDocument.js';
import { Metadata } from '../metadata/metadata.js';
import { Extended, MetadataType } from '../metadataReader/metadataTypes.js';

export class Document<T extends Metadata> {
  public metadataType: MetadataType<T>;
  public renderPath: (thisRecord: Extended<T>) => string;
  public renderContent: (thisRecord: Extended<T>) => string;

  public constructor(
    metadataType: MetadataType<T>,
    renderPath: (thisRecord: Extended<T>) => string,
    renderContent: (thisRecord: Extended<T>) => string
  ) {
    this.metadataType = metadataType;
    this.renderPath = renderPath;
    this.renderContent = renderContent;
  }
}

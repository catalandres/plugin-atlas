import { SfProject } from '@salesforce/core';
import { SfCommand } from '@salesforce/sf-plugins-core';
import { getAllProjectFiles } from './util.js';
import { MetadataReader } from './metadataReader/metadataReader.js';
import { Writer } from './writer/writer.js';

export abstract class AtlasCommand<T> extends SfCommand<T> {
  protected projectPath: string = SfProject.getInstance().getPath();
  protected allProjectFiles: string[] = [];
  protected reader: MetadataReader = {} as MetadataReader;
  protected writer: Writer = {} as Writer;

  protected async initialize(): Promise<void> {
    this.allProjectFiles = await getAllProjectFiles(this.projectPath);
    this.reader = new MetadataReader(this.allProjectFiles);
  }
}

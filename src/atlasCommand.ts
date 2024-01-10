import { mkdirSync } from 'node:fs';
import * as path from 'node:path';
import { SfProject } from '@salesforce/core';
import { SfCommand } from '@salesforce/sf-plugins-core';
import { getAllProjectFiles } from './util.js';
import { MetadataReader } from './metadataReader/metadataReader.js';
import { WriterType } from './writer/writer.js';
import { TableWriter } from './writer/tableWriter/tableWriter.js';

export abstract class AtlasCommand<T> extends SfCommand<T> {
  protected projectPath: string = SfProject.getInstance().getPath();
  protected allProjectFiles: string[] = [];
  protected reader: MetadataReader = {} as MetadataReader;
  protected tableWriter: TableWriter = {} as TableWriter;
  protected writerType: WriterType = '' as WriterType;
  protected targetPath: string = '';
  protected pathTransform: (path: string | undefined) => string = {} as (path: string | undefined) => string;

  protected createFolderStructure(): void {
    let targetFolder = this.targetPath;

    if (this.writerType === WriterType.XLSX) {
      targetFolder = path.dirname(this.targetPath);
    }

    if (targetFolder) {
      mkdirSync(targetFolder, { recursive: true });
    }
  }

  protected async initialize(): Promise<void> {
    this.allProjectFiles = await getAllProjectFiles(this.projectPath);
    this.reader = new MetadataReader(this.allProjectFiles);
    this.tableWriter = new TableWriter(this.reader.album, this.writerType);

    if (this.targetPath === this.pathTransform(undefined)) {
      this.targetPath = this.pathTransform(this.projectPath);
    }
    this.createFolderStructure();
  }
}

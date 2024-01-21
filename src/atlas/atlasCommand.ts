import { mkdirSync, rmSync } from 'node:fs';
import * as path from 'node:path';
import { SfProject } from '@salesforce/core';
import { SfCommand } from '@salesforce/sf-plugins-core';
import { MetadataReader } from '../metadataReader/metadataReader.js';
import { WriterType } from '../writer/writer.js';
import { Writer } from '../writer/writer.js';
import { getAllProjectFiles } from '../util.js';

export type AtlasOptions = {
  target: 'file' | 'folder';
  folder: string[];
  overwrite: boolean;
  extension?: string;
};

export abstract class AtlasCommand<T> extends SfCommand<T> {
  protected projectPath: string = SfProject.getInstance().getPath();
  protected allProjectFiles: string[] = [];
  protected reader: MetadataReader = {} as MetadataReader;
  protected writer: Writer = {} as Writer;
  protected writerType: WriterType = '' as WriterType;
  protected targetPath: string = '';
  protected options: AtlasOptions = {} as AtlasOptions;

  protected async initialize(): Promise<void> {
    this.allProjectFiles = await getAllProjectFiles(this.projectPath);
    this.reader = new MetadataReader(this.allProjectFiles);
    this.writer = new Writer(this.reader.album, this.writerType);

    if (this.targetPath === getDefaultPath(this.options, undefined)) {
      this.targetPath = getDefaultPath(this.options, this.projectPath);
    }

    if (this.options.overwrite) {
      rmSync(this.targetPath, { recursive: true, force: true });
    }

    switch (this.options.target) {
      case 'file':
        mkdirSync(path.dirname(this.targetPath), { recursive: true });
        break;
      case 'folder':
        mkdirSync(this.targetPath, { recursive: true });
        break;
    }
  }
}

export function getDefaultPath(options: AtlasOptions, projectPath: string | undefined = undefined): string {
  let differentiator: string = options.overwrite ? '' : 'YYYYMMDD-HHMMSS';
  const defaultPath: string[] = [];

  if (projectPath === undefined) {
    projectPath = 'PROJECT_FOLDER';
  } else if (!options.overwrite) {
    differentiator = getNowIsoString();
  }

  defaultPath.push(projectPath);
  defaultPath.push(options.folder.join(path.sep));

  switch (options.target) {
    case 'file':
      defaultPath.push('atlas' + differentiator + '.xlsx');
      break;
    case 'folder':
      if (!options.overwrite) {
        defaultPath.push(differentiator);
      }
      defaultPath.push('');
      break;
  }

  return defaultPath.join(path.sep);
}

export function generateDefaultFilename(folderName: string, projectPath: string | undefined = undefined): string {
  let isoDateString: string = 'YYYYMMDD-HHMMSS';

  if (projectPath === undefined) {
    projectPath = 'PROJECT_FOLDER';
  } else {
    isoDateString = getNowIsoString();
  }

  return [projectPath, 'atlas', folderName, 'atlas-' + isoDateString + '.xlsx'].join(path.sep);
}

export function generateDefaultDirname(folderName: string, projectPath: string | undefined = undefined): string {
  let isoDateString: string = 'YYYYMMDD-HHMMSS';

  if (projectPath === undefined) {
    projectPath = 'PROJECT_FOLDER';
  } else {
    isoDateString = getNowIsoString();
  }

  return [projectPath, 'atlas', folderName, isoDateString, ''].join(path.sep);
}

function getNowIsoString(): string {
  return new Date().toISOString().split('.')[0].replaceAll('-', '').replaceAll(':', '').replace('T', '-');
}

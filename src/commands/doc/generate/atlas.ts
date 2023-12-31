import { dirname } from 'node:path';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { SfCommand } from '@salesforce/sf-plugins-core';
import { SfProject, Messages, NamedPackageDir } from '@salesforce/core';
import { XlsxWriter } from '../../../shared/xlsx/XlsxWriter.js';

import { Atlas } from '../../../shared/metadata/Atlas.js';

// eslint-disable-next-line sf-plugin/esm-message-import
Messages.importMessagesDirectory(dirname(fileURLToPath(import.meta.url)));
const messages = Messages.loadMessages('plugin-atlas', 'doc.generate.atlas');

export type DocGenerateAtlasResult = {
  path: string;
};

export default class DocGenerateAtlas extends SfCommand<DocGenerateAtlasResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  // public static readonly flags = {
  //   name: Flags.string({
  //     summary: messages.getMessage('flags.name.summary'),
  //     description: messages.getMessage('flags.name.description'),
  //     char: 'n',
  //     required: false,
  //   }),
  // };

  // TODO - add flags and remove this exception
  // eslint-disable-next-line class-methods-use-this
  public async run(): Promise<DocGenerateAtlasResult> {
    // const { flags } = await this.parse(DocGenerateAtlas);
    const projectPath = SfProject.getInstance().getPath();
    const allProjectFiles = await getAllProjectFiles(projectPath);
    const atlas = new Atlas(allProjectFiles);
    const xlsxWriter = new XlsxWriter(atlas.album, projectPath);
    const xlsxFilename = await xlsxWriter.writeXlsx();

    // TODO - move this text to the messages file
    this.info('Output written to ' + xlsxFilename);

    return {
      path: xlsxFilename,
    };
  }
}

async function getAllProjectFiles(projectPath: string): Promise<string[]> {
  const metadata: string[] = [];
  const packageDirectories: NamedPackageDir[] = SfProject.getInstance(projectPath).getUniquePackageDirectories();
  for await (const thisPackageDirectory of packageDirectories) {
    const items = await readdir(thisPackageDirectory.fullPath, { recursive: true });
    metadata.push(...items.map((item) => thisPackageDirectory.fullPath + item));
  }
  return metadata;
}

import { dirname } from 'node:path';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { SfProject, Messages, NamedPackageDir } from '@salesforce/core';
import { ExcelWriter } from '../../../shared/xlsx/ExcelWriter.js';

import { Atlas } from '../../../shared/metadata/Atlas.js';

Messages.importMessagesDirectory(dirname(fileURLToPath(import.meta.url)));
const messages = Messages.loadMessages('plugin-documentation-atlas', 'doc.generate.atlas');

export type DocGenerateAtlasResult = {
  path: string;
};

export default class DocGenerateAtlas extends SfCommand<DocGenerateAtlasResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static readonly flags = {
    name: Flags.string({
      summary: messages.getMessage('flags.name.summary'),
      description: messages.getMessage('flags.name.description'),
      char: 'n',
      required: false,
    }),
  };

  // TODO - add flags and remove this exception
  // eslint-disable-next-line class-methods-use-this
  public async run(): Promise<DocGenerateAtlasResult> {
    // const { flags } = await this.parse(DocGenerateAtlas);
    const projectPath = SfProject.getInstance().getPath();
    const allProjectFiles = await getAllProjectFiles(projectPath);
    const atlas = new Atlas(allProjectFiles);
    const xlWriter = new ExcelWriter(atlas.album, projectPath);
    const xlsxFilename = await xlWriter.writeXlsx();

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

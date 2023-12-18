import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { SfProject, Messages } from '@salesforce/core';

import { Atlas } from '../../../shared/Atlas.js';

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

  public async run(): Promise<DocGenerateAtlasResult> {
    // const { flags } = await this.parse(DocGenerateAtlas);
    this.spinner.start('Generating documentation atlas');
    const atlas = new Atlas(SfProject.getInstance().getPath());
    await atlas.initialize(this.spinner);
    const xlsxFilename = await atlas.writeXlsx();
    this.spinner.stop('Written atlas file: ' + xlsxFilename);

    return {
      path: xlsxFilename,
    };
  }
}

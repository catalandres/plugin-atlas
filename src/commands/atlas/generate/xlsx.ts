import { Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';
import { TableWriter } from '../../../writer/tableWriter/tableWriter.js';
import { generateDefaultXlsxFilename } from '../../../util.js';
import { AtlasCommand } from '../../../atlasCommand.js';

Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('plugin-atlas', 'atlas.generate.xlsx');

export type AtlasGenerateXlsxResult = {
  path: string;
};

export default class AtlasGenerateXlsx extends AtlasCommand<AtlasGenerateXlsxResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static readonly flags = {
    'output-file': Flags.file({
      summary: messages.getMessage('flags.output-file.summary'),
      description: messages.getMessage('flags.output-file.description'),
      default: generateDefaultXlsxFilename(),
      aliases: ['file'],
      char: 'f',
    }),
  };

  public async run(): Promise<AtlasGenerateXlsxResult> {
    const { flags } = await this.parse(AtlasGenerateXlsx);

    let fileName: string = flags['output-file'];

    if (fileName === generateDefaultXlsxFilename()) {
      fileName = generateDefaultXlsxFilename(this.projectPath);
    }

    await this.initialize();

    this.writer = new TableWriter(this.reader.album);
    await (this.writer as TableWriter).writeXlsx(fileName);

    // TODO - move this text to the messages file
    this.log('Output written to ' + fileName);

    return {
      path: fileName,
    };
  }
}

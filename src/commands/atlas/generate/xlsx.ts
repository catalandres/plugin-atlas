import { Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';
import { WriterType } from '../../../writer/writer.js';
import { AtlasCommand, getDefaultPath } from '../../../atlas/atlasCommand.js';
import { XLSX_DEFAULTS } from '../../../atlas/defaults/xlsx.js';

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
      default: getDefaultPath(XLSX_DEFAULTS),
      aliases: ['file'],
      char: 'f',
    }),
  };

  protected writerType = WriterType.XLSX;
  protected options = XLSX_DEFAULTS;

  public async run(): Promise<AtlasGenerateXlsxResult> {
    const { flags } = await this.parse(AtlasGenerateXlsx);

    this.targetPath = flags['output-file'];

    await this.initialize();
    await this.writer.write(this.targetPath);

    // TODO - move this text to the messages file
    this.log('Output written to ' + this.targetPath);

    return {
      path: this.targetPath,
    };
  }
}

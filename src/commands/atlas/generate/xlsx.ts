import { Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';
import { generateDefaultXlsxFilename } from '../../../util.js';
import { AtlasCommand } from '../../../atlasCommand.js';
import { WriterType } from '../../../writer/writer.js';

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

  protected writerType = WriterType.XLSX;

  public async run(): Promise<AtlasGenerateXlsxResult> {
    const { flags } = await this.parse(AtlasGenerateXlsx);

    this.targetPath = flags['output-file'];
    this.pathTransform = generateDefaultXlsxFilename;

    await this.initialize();
    await this.tableWriter.write(this.targetPath);

    // TODO - move this text to the messages file
    this.log('Output written to ' + this.targetPath);

    return {
      path: this.targetPath,
    };
  }
}

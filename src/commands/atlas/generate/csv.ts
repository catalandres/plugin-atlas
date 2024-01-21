import { Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';
import { WriterType } from '../../../writer/writer.js';
import { AtlasCommand, getDefaultPath } from '../../../atlas/atlasCommand.js';
import { CSV_DEFAULTS } from '../../../atlas/defaults/csv.js';

Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('plugin-atlas', 'atlas.generate.csv');

export type AtlasGenerateCsvResult = {
  path: string;
};

export default class AtlasGenerateCsv extends AtlasCommand<AtlasGenerateCsvResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static readonly flags = {
    'output-dir': Flags.directory({
      summary: messages.getMessage('flags.output-dir.summary'),
      description: messages.getMessage('flags.output-dir.description'),
      default: getDefaultPath(CSV_DEFAULTS),
      aliases: ['dir'],
      char: 'd',
    }),
  };

  protected writerType = WriterType.CSV;
  protected options = CSV_DEFAULTS;

  public async run(): Promise<AtlasGenerateCsvResult> {
    const { flags } = await this.parse(AtlasGenerateCsv);

    this.targetPath = flags['output-dir'];

    await this.initialize();
    await this.writer.write(this.targetPath);

    // TODO - move this text to the messages file
    this.log('Output written to ' + this.targetPath);

    return {
      path: this.targetPath,
    };
  }
}

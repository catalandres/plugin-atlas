import { Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';
import { WriterType } from '../../../writer/writer.js';
import { AtlasCommand, getDefaultPath } from '../../../atlas/atlasCommand.js';
import { MD_DEFAULTS } from '../../../atlas/defaults/md.js';

Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('plugin-atlas', 'atlas.generate.md');

export type AtlasGenerateMdResult = {
  path: string;
};

export default class AtlasGenerateMd extends AtlasCommand<AtlasGenerateMdResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static readonly flags = {
    'output-dir': Flags.directory({
      summary: messages.getMessage('flags.output-dir.summary'),
      description: messages.getMessage('flags.output-dir.description'),
      default: getDefaultPath(MD_DEFAULTS),
      aliases: ['dir'],
      char: 'd',
    }),
  };

  protected writerType = WriterType.MD;
  protected options = MD_DEFAULTS;

  public async run(): Promise<AtlasGenerateMdResult> {
    const { flags } = await this.parse(AtlasGenerateMd);

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

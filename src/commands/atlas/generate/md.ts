import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';

Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('plugin-atlas', 'atlas.generate.md');

export type AtlasGenerateMdResult = {
  path: string;
};

export default class AtlasGenerateMd extends SfCommand<AtlasGenerateMdResult> {
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

  public async run(): Promise<AtlasGenerateMdResult> {
    const { flags } = await this.parse(AtlasGenerateMd);

    const name = flags.name ?? 'world';
    this.log(`hello ${name} from /Users/andres/Projects/proj-plugins/plugin-atlas/src/commands/atlas/generate/md.ts`);
    return {
      path: '/Users/andres/Projects/proj-plugins/plugin-atlas/src/commands/atlas/generate/md.ts',
    };
  }
}

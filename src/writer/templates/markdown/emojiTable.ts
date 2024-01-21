import { KeyValueTable, KeyValueTableDefinition } from './keyValueTable.js';

export class EmojiTable extends KeyValueTable {
  private translation: Map<unknown, string>;

  public constructor(definition: KeyValueTableDefinition, translation: Map<unknown, string>) {
    super(definition);
    this.translation = translation;
  }

  public override render(): string {
    let output: string = '';

    if (this.allDataIsUndefined()) {
      return '';
    }

    if (this.title !== '') {
      output += `\n## ${this.title}\n`;
    }

    output += '\n| |\n| :-- |\n';

    for (const thisRow of this.data) {
      let key: string = thisRow.key;
      if (thisRow.anchor !== undefined && this.url !== undefined) {
        key = `[${key}](${this.url}#${thisRow.anchor})`;
      }
      if (this.translation.has(thisRow.value)) {
        output += `| ${this.translation.get(thisRow.value)} ${key} |\n`;
      }
    }

    return output;
  }
}

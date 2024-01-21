type KeyValueTableRow = {
  key: string;
  value: string | boolean | undefined;
  anchor?: string;
};

export type KeyValueTableDefinition = {
  title: string;
  data: KeyValueTableRow[];
  url?: string;
};

export class KeyValueTable {
  protected title: string;
  protected data: KeyValueTableRow[];
  protected url?: string;

  public constructor(definition: KeyValueTableDefinition) {
    this.title = definition.title;
    this.data = definition.data;
    this.url = definition.url;
  }

  public render(): string {
    let output: string = '';

    if (this.allDataIsUndefined()) {
      return '';
    }

    if (this.title !== '') {
      output += `\n## ${this.title}\n`;
    }

    output += '\n| | |\n| :-- | :-- |\n';

    for (const thisRow of this.data) {
      let key: string = thisRow.key;
      if (thisRow.anchor !== undefined && this.url !== undefined) {
        key = `[${key}](${this.url}#${thisRow.anchor})`;
      }
      switch (thisRow.value) {
        case true:
          output += `| **${key}** | 🟢 |\n`;
          break;
        case false:
          output += `| **${key}** | 🔴 |\n`;
          break;
        case undefined:
          break;
        default:
          output += `| **${key}** | ${thisRow.value} |\n`;
          break;
      }
    }

    return output;
  }

  protected allDataIsUndefined(): boolean {
    return this.data.reduce((currentState: boolean, newItem) => currentState && newItem.value === undefined, true);
  }
}

import { Definition } from '../../metadata/file/classes/Definition.js';

interface TableColumn {
  readonly label: string;
  readonly field: string;
}

export interface Table {
  readonly name: string;
  readonly definition: Definition;
  readonly columns: TableColumn[];
}

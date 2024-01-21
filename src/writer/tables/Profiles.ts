import * as Metadata from '../../metadata/metadata.js';
import { Table } from '../tables.js';
import { PROFILE } from '../../metadataReader/metadataTypes.js';

export const PROFILES: Table<Metadata.Profile> = {
  name: 'Profiles',
  metadataType: PROFILE,
  columns: [{ title: 'Name', id: 'name' }],
};

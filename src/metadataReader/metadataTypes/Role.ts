import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension, transformRole } from '../metadataTypes.js';

export const ROLE: MetadataType<Metadata.Role> = {
  name: 'Role',
  list: 'roles',
  extension: '.role-meta.xml',
  metadataType: {} as Metadata.Role,
  setFullName: getBasenameWithoutExtension,
  transform: transformRole,
};

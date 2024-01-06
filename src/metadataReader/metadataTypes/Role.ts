import { Role } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension, transformRole } from '../metadataTypes.js';

export const ROLE: MetadataType = {
  name: 'Role',
  list: 'roles',
  extension: '.role-meta.xml',
  metadataType: {} as Role,
  setFullName: getBasenameWithoutExtension,
  transform: transformRole,
};

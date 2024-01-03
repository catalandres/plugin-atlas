import { Role } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension, transformRole } from '../index.js';

export const ROLE: Definition = {
  name: 'Role',
  list: 'roles',
  extension: '.role-meta.xml',
  metadataType: {} as Role,
  setFullName: getBasenameWithoutExtension,
  transform: transformRole,
};

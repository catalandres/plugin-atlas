import { Role } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const ROLE: Definition = {
  name: 'Role',
  list: 'roles',
  extension: '.role-meta.xml',
  metadataType: {} as Role,
  setName: getBasenameWithoutExtension,
};

import { PermissionSetGroup } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const PERMISSION_SET_GROUP: Definition = {
  name: 'PermissionSetGroup',
  list: 'permissionSetGroups',
  extension: '.permissionsetgroup-meta.xml',
  metadataType: {} as PermissionSetGroup,
  setName: getBasenameWithoutExtension,
};

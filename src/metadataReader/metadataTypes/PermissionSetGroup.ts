import { PermissionSetGroup } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const PERMISSION_SET_GROUP: MetadataType = {
  name: 'PermissionSetGroup',
  list: 'permissionSetGroups',
  extension: '.permissionsetgroup-meta.xml',
  metadataType: {} as PermissionSetGroup,
  setName: getBasenameWithoutExtension,
};

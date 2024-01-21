import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const PERMISSION_SET_GROUP: MetadataType<Metadata.PermissionSetGroup> = {
  name: 'PermissionSetGroup',
  list: 'permissionSetGroups',
  extension: '.permissionsetgroup-meta.xml',
  metadataType: {} as Metadata.PermissionSetGroup,
  setName: getBasenameWithoutExtension,
};

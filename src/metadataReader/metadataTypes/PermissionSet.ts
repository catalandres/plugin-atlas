import { PermissionSet } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const PERMISSION_SET: MetadataType = {
  name: 'PermissionSet',
  list: 'permissionSets',
  extension: '.permissionset-meta.xml',
  metadataType: {} as PermissionSet,
  setName: getBasenameWithoutExtension,
};

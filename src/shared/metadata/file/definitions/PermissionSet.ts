import { PermissionSet } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const PERMISSION_SET: Definition = {
  name: 'PermissionSet',
  list: 'permissionSets',
  extension: '.permissionset-meta.xml',
  metadataType: {} as PermissionSet,
  setName: getBasenameWithoutExtension,
};

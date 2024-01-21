import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const PERMISSION_SET: MetadataType<Metadata.PermissionSet> = {
  name: 'PermissionSet',
  list: 'permissionSets',
  extension: '.permissionset-meta.xml',
  metadataType: {} as Metadata.PermissionSet,
  setName: getBasenameWithoutExtension,
};

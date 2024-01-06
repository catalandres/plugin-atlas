import { UserAccessPolicy } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const USER_ACCESS_POLICY: MetadataType = {
  name: 'UserAccessPolicy',
  list: 'userAccessPolicies',
  extension: '.useraccesspolicy-meta.xml',
  metadataType: {} as UserAccessPolicy,
  setName: getBasenameWithoutExtension,
};

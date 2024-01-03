import { UserAccessPolicy } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const USER_ACCESS_POLICY: Definition = {
  name: 'UserAccessPolicy',
  list: 'userAccessPolicies',
  extension: '.useraccesspolicy-meta.xml',
  metadataType: {} as UserAccessPolicy,
  setName: getBasenameWithoutExtension,
};

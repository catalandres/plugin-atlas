import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const USER_ACCESS_POLICY: MetadataType<Metadata.UserAccessPolicy> = {
  name: 'UserAccessPolicy',
  list: 'userAccessPolicies',
  extension: '.useraccesspolicy-meta.xml',
  metadataType: {} as Metadata.UserAccessPolicy,
  setName: getBasenameWithoutExtension,
};

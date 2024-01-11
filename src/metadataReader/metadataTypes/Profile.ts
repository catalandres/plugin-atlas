import { Profile } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const PROFILE: MetadataType = {
  name: 'Profile',
  list: 'profiles',
  extension: '.profile-meta.xml',
  metadataType: {} as Profile,
  setName: getBasenameWithoutExtension,
};

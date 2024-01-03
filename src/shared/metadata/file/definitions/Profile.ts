import { Profile } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const PROFILE: Definition = {
  name: 'Profile',
  list: 'profiles',
  extension: '.profile-meta.xml',
  metadataType: {} as Profile,
  setName: getBasenameWithoutExtension,
};

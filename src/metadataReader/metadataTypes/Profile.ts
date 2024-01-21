import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const PROFILE: MetadataType<Metadata.Profile> = {
  name: 'Profile',
  list: 'profiles',
  extension: '.profile-meta.xml',
  metadataType: {} as Metadata.Profile,
  setName: getBasenameWithoutExtension,
};

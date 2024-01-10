import { ApexPage } from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const APEX_PAGE: MetadataType = {
  name: 'ApexPage',
  list: 'apexPages',
  extension: '.page-meta.xml',
  metadataType: {} as ApexPage,
  setName: getBasenameWithoutExtension,
};

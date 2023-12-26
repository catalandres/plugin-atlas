import { ApexPage } from '../../types/metadata.js';
import { Definition, getBasenameWithoutExtension } from '../index.js';

export const APEX_PAGE: Definition = {
  name: 'ApexPage',
  list: 'apexPages',
  extension: '.page-meta.xml',
  metadataType: {} as ApexPage,
  setName: getBasenameWithoutExtension,
};

import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension } from '../metadataTypes.js';

export const APEX_PAGE: MetadataType<Metadata.ApexPage> = {
  name: 'ApexPage',
  list: 'apexPages',
  extension: '.page-meta.xml',
  metadataType: {} as Metadata.ApexPage,
  setName: getBasenameWithoutExtension,
};

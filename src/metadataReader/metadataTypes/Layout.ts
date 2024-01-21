import * as Metadata from '../../metadata/metadata.js';
import {
  MetadataType,
  getBasenameWithoutExtension,
  getFirstHalfOfBasenameSplitByDash,
  getSecondHalfOfBasenameSplitByDash,
} from '../metadataTypes.js';

export const LAYOUT: MetadataType<Metadata.Layout> = {
  name: 'Layout',
  list: 'layouts',
  extension: '.layout-meta.xml',
  metadataType: {} as Metadata.Layout,
  setName: getSecondHalfOfBasenameSplitByDash,
  setObjectname: getFirstHalfOfBasenameSplitByDash,
  setFullName: getBasenameWithoutExtension,
};

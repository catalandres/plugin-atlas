import * as Metadata from '../../metadata/metadata.js';
import { MetadataType, getBasenameWithoutExtension, transformCustomObject } from '../metadataTypes.js';

export const CUSTOM_OBJECT: MetadataType<Metadata.CustomObject> = {
  name: 'CustomObject',
  list: 'objects',
  extension: '.object-meta.xml',
  documentationUrl: 'https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_customobject.htm',
  metadataType: {} as Metadata.CustomObject,
  setName: getBasenameWithoutExtension,
  transform: transformCustomObject,
};

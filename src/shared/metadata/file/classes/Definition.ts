import { Metadata } from '../../types/metadata.js';
import { Extended } from '../index.js';

export interface Definition {
  readonly name: string;
  readonly list: string;
  readonly extension?: string;
  readonly metadataType: Metadata;
  readonly container?: boolean;
  readonly setName?: (record: Extended<Metadata>) => string;
  readonly setObjectname?: (record: Extended<Metadata>) => string;
  readonly setFullName?: (record: Extended<Metadata>) => string;
  readonly setLabel?: (record: Extended<Metadata>) => string;
  readonly transform?: (record: Record<string, unknown>) => void;
  readonly process?: Array<(record: Extended<Metadata>) => Array<Extended<Metadata>>>;
  readonly children?: Record<string, Definition>;
}

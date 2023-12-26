import { Metadata } from '../../types/metadata.js';
import { Extended } from '../index.js';

export type Album = Record<string, Array<Extended<Metadata>>>;

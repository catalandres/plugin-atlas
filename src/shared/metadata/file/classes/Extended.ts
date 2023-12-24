export type Extended<T> = T & {
  [key: string]: unknown;
  name: string;
  objectName: string;
  fullName: string;
  fileName: string;
};

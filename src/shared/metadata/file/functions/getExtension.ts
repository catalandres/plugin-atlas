export function getExtension(thisFile: string): string {
  let extension: string = '';
  if (thisFile.endsWith('-meta.xml')) {
    const metadataName = thisFile.replace('-meta.xml', '').split('.').pop() ?? '';
    if (metadataName !== '') {
      extension = '.' + metadataName + '-meta.xml';
    }
  }
  return extension;
}

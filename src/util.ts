import * as path from 'node:path';
import { readdir } from 'node:fs/promises';
import { NamedPackageDir, SfProject } from '@salesforce/core';

export function array<Type>(input: Type | Type[] | undefined): Type[] {
  if (input === undefined) {
    return [];
  } else {
    return Array.isArray(input) ? input : [input];
  }
}

export function getMetadataExtension(thisFile: string): string {
  let extension: string = '';
  if (thisFile.endsWith('-meta.xml')) {
    const metadataName = thisFile.replace('-meta.xml', '').split('.').pop() ?? '';
    if (metadataName !== '') {
      extension = '.' + metadataName + '-meta.xml';
    }
  }
  return extension;
}

export async function getAllProjectFiles(projectPath: string): Promise<string[]> {
  const metadata: string[] = [];
  const packageDirectories: NamedPackageDir[] = SfProject.getInstance(projectPath).getUniquePackageDirectories();
  for await (const thisPackageDirectory of packageDirectories) {
    const items = await readdir(thisPackageDirectory.fullPath, { recursive: true });
    metadata.push(...items.map((item) => thisPackageDirectory.fullPath + item));
  }
  return metadata;
}

export function generateDefaultXlsxFilename(projectPath: string | undefined = undefined): string {
  let isoDateString: string = 'YYYYMMDD-HHMMSS';

  if (projectPath === undefined) {
    projectPath = 'PROJECT_FOLDER';
  } else {
    isoDateString = getNowIsoString();
  }

  return [projectPath, 'atlas', 'xlsx', 'atlas-' + isoDateString + '.xlsx'].join(path.sep);
}

function getNowIsoString(): string {
  return new Date().toISOString().split('.')[0].replaceAll('-', '').replaceAll(':', '').replace('T', '-');
}

export function transformCustomTab(tab: Record<string, unknown>): void {
  if (tab.customObject) {
    tab.objectName = tab.name;
  }
}

export function transformRole(role: Record<string, unknown>): void {
  role.label = role.name;
  role.name = role.fullName;
}

export function arraynge<Type>(input: Type | Type[] | undefined): Type[] {
  if (input === undefined) {
    return [];
  }

  return Array.isArray(input) ? input : [input];
}

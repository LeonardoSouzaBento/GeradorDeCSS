export function normalizeDecimalInput(value: string): string {
  if (value.includes(',')) {
    return value.replace(',', '.');
  }
  return value;
}

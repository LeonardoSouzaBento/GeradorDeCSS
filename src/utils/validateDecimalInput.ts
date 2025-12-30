export function validateDecimalInput(value: string): boolean {
  return /^\d*[.,]?\d*$/.test(value);
}

export function isHexColor(value: string): boolean {
  const hexRegex = /^#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
  return hexRegex.test(value.trim());
}

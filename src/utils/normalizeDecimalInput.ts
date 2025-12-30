export function normalizeDecimalInput(value: string): string {
  // Substitui todas as vírgulas por pontos e remove qualquer caractere que não seja número ou ponto
  return value.replace(/,/g, '.').replace(/[^0-9.]/g, '');
}

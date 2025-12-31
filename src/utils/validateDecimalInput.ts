export function validateDecimalInput(value: string): boolean {
  return /^\d*[.,]?\d*$/.test(value);
}

/* 
^ → início da string

\d* → zero ou mais dígitos (0–9)

[.,]? → zero ou um ponto ou vírgula

\d* → zero ou mais dígitos

$ → fim da string
*/
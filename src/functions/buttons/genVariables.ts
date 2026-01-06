const buttonVariables = ['--text-sm-button:', '--text-button:', '--text-lg-button:'];

const colorVariables = [
  '--color-primary-50:',
  '--color-primary-100:',
  '--color-primary-200:',
  '--color-primary-300:',
  '--color-primary-400:',
  '--color-primary-500:',
  '--color-primary-600: ',
  '--color-primary-700:',
  '--color-primary-800:',
  '--color-primary-900:',
  '--color-primary-950:',
  '--color-primary-1000:',
];

export function genVariables(relativeSizes: string[], pallet: string[], baseColor: string): string {
  const buttons = buttonVariables
    .map((item, index) => {
      return `${item} ${relativeSizes[index]}em;\n`;
    })
    .join('');
  const colors = colorVariables
    .map((item, index) => {
      const comment = pallet[index] === baseColor ? '/*Sua cor*/' : '';
      return item + pallet[index] + comment + ';\n';
    })
    .join('');
  return `${buttons}\n${colors}`;
}

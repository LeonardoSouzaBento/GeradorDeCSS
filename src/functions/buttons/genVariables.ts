const buttonVariables = ['--text-sm-button:', '--text-button:', '--text-lg-button:'];

const primarySteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000];

export function genVariables(
  relativeSizes: string[],
  pallet: string[],
  baseColor: string,
  colorNickname: string = 'primary',
): string {
  const currentNickname = colorNickname === 'primary' ? '--color-primary-' : '--color-secondary-';
  const buttons = buttonVariables
    .map((item, index) => `${item} ${relativeSizes[index]}em;\n`)
    .join('');

  const colors = pallet
    .map((color, index) => {
      const step = primarySteps[index];
      const comment = color === baseColor.toUpperCase() ? ' /*Sua cor*/' : '';
      return `${currentNickname}${step}: ${color}${comment};\n`;
    })
    .join('');

  return `${buttons}\n${colors}`;
}

import { iconXs } from '@/css/lucideIcons';
import { ClampValue } from '@/data/typography/types';
import { Button } from '@/ui';
import { Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const buttonConfigs = [
  {
    text: 'Pequeno',
    sizeKey: '.small-button',
    styles: 'h-8 py-0 font-medium',
  },
  {
    text: 'Botão Normal',
    sizeKey: 'button',
    styles: 'h-10 font-semibold',
  },
  {
    text: 'Call to Action',
    sizeKey: '.large-button',
    styles: 'h-12 font-bold',
  },
];

const css = {
  wrapper: `flex gap-3`,
  button: `bg-secondary text-secondary-foreground px-5 pr-3.5 box-content
  rounded-full max-w-max text-muted-foreground font-semibold [font-family:var(--font-target)]`,
};

const ButtonsSection = ({ clampValues }: { clampValues: ClampValue }) => {
  return (
    <div>
      <div className={css.wrapper} style={{ fontFamily: 'var(--font-target)' }}>
        {buttonConfigs.map((config) => (
          <button
            className={`flex items-center ${config.styles} ${css.button}`}
            key={config.sizeKey}
            style={{
              fontSize: clampValues[config.sizeKey],
              height: clampValues[config.sizeKey],
              paddingTop: '0.7em',
              paddingBottom: '0.7em',
              paddingLeft: '0.81em',
              paddingRight: '0.68em',
            }}>
            {config.text}{' '}
            <p
              className={`ml-2 mb-1 scale-150`}
              style={{
                fontSize: clampValues[config.sizeKey],
              }}>
              ☺
            </p>
          </button>
        ))}
      </div>
      <Button variant="link" size="sm" className="mt-5 pt-5 w-full flex justify-end gap-[0.4em] border-t rounded-none">
        <Link2 {...iconXs} />
        <Link to="/button-page" className="normal-case">
          Estilizar botões
        </Link>
      </Button>
    </div>
  );
};

export default ButtonsSection;

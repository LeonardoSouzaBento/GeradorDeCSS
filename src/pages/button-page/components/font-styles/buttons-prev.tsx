import { buttonSizes } from '@/data/buttons/variables';
import { WrapperButtons } from '@/ui/wrapper-buttons';

type ButtonPrevProps = {
  currentWeight: number;
  initialFontSize: number;
  scaleFontSize: number[];
  styles: string;
};

const buttonCss = 'px-[2ex] py-[1ex] ring-2 ring-border rounded-md';

const ButtonPrev = ({ currentWeight, initialFontSize, scaleFontSize, styles }: ButtonPrevProps) => {
  return (
    <div className={styles}>
      <h6 className="mb-[1ex]">Prévia</h6>
      <WrapperButtons>
        {Object.entries(buttonSizes).map(([name, _], index) => {
          const fontSize = scaleFontSize[index] * initialFontSize;
          return (
            <button
              key={name}
              style={{ fontWeight: currentWeight, fontSize: fontSize }}
              className={buttonCss}>
              {name}
            </button>
          );
        })}
      </WrapperButtons>
    </div>
  );
};

export default ButtonPrev;

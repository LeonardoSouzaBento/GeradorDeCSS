import { buttonSizes } from '@/data/buttons/variables';
import { WrapperForm } from '@/ui';
import { WrapperButtons } from '@/ui/wrapper-buttons';

type ButtonPrevProps = {
  currentWeight: number;
  initialFontSize: number;
  relativeSizeScale: string[];
};

const buttonCss = 'px-[2ex] py-[1ex] ring-2 ring-border rounded-md';

const ButtonPrev = ({ currentWeight, initialFontSize, relativeSizeScale }: ButtonPrevProps) => {
  return (
    <WrapperForm>
      <h6 className="mb-[1ex]">Prévia</h6>
      <WrapperButtons>
        {Object.entries(buttonSizes).map(([name, _], index) => {
          const numericValue = Number(relativeSizeScale[index].replace(',', '.'));
          const fontSize = numericValue * initialFontSize;
          return (
            <button
              key={name}
              style={{ fontWeight: currentWeight, fontSize: `${fontSize}px` }}
              className={buttonCss}>
              {name}
            </button>
          );
        })}
      </WrapperButtons>
    </WrapperForm>
  );
};

export default ButtonPrev;

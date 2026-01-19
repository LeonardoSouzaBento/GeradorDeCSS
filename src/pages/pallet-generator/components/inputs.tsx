import { StateSetter } from '@/data/typography/types';
import { Input, Label, WrapperInput } from '@/ui';
import { isHexColor } from '@/utils/isHexColor';

interface InputsProps {
  inputValue: string;
  setInputValue: StateSetter<string>;
  setBaseColor: StateSetter<string>;
  saturation: number;
  setSaturation: StateSetter<number>;
  lightness: number;
  setLightness: StateSetter<number>;
}

const Inputs = ({
  inputValue,
  setInputValue,
  setBaseColor,
  saturation,
  setSaturation,
  lightness,
  setLightness,
}: InputsProps) => {
  return (
    <>
      <WrapperInput className="">
        <Label>Cor base</Label>
        <div className="grid grid-cols-1 md-sm:grid-cols-[0.65fr_0.35fr] gap-2">
          <Input
            type="text"
            placeholder="#1F4780"
            value={inputValue}
            onChange={(e) => {
              const value = e.target.value;
              setInputValue(value);
              if (isHexColor(value)) {
                setBaseColor(value);
              }
            }}
          />
          <Input
            type="color"
            value={inputValue}
            onChange={(e) => {
              const value = e.target.value;
              setInputValue(value);
              setBaseColor(value);
            }}
          />
        </div>
      </WrapperInput>
      <div
        className={`flex flex-col gap-4
               sm:flex-row sm:items-center [&>div>div]:border
               [&>div>div]:rounded-md [&>div>div]:px-2`}>
        <WrapperInput>
          <Label>Saturação</Label>
          <div>
            <Input
              type="range"
              min={0}
              max={7}
              value={saturation}
              onChange={(e) => setSaturation(Number(e.target.value))}
            />
          </div>
        </WrapperInput>
        <WrapperInput>
          <Label>Luminosidade</Label>
          <div>
            <Input
              type="range"
              min={0}
              max={10}
              value={lightness}
              onChange={(e) => setLightness(Number(e.target.value))}
            />
          </div>
        </WrapperInput>
      </div>
    </>
  );
};

export default Inputs;

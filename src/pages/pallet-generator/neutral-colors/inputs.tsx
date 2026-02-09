import { StateSetter } from '@/data/typography/types';
import { H6Title, HeaderH6, Icon, Input, InputWrapper, Label } from '@/ui';
import { isHexColor } from '@/utils/isHexColor';
import { Settings2 } from 'lucide-react';

interface InputsProps {
  inputValue: string;
  setInputValue: StateSetter<string>;
  setBaseColor: StateSetter<string>;
  saturation: number;
  setSaturation: StateSetter<number>;
  lightness: number;
  setLightness: StateSetter<number>;
}

const rangePreferences = [
  {
    name: 'saturação',
    min: 0,
    max: 7,
  },
  {
    name: 'luminosidade',
    min: 0,
    max: 10,
  },
];

export const Inputs = ({
  inputValue,
  setInputValue,
  setBaseColor,
  saturation,
  setSaturation,
  lightness,
  setLightness,
}: InputsProps) => {
  return (
    <div className="pb-5 border-b">
      <HeaderH6 mb={1.5}>
        <H6Title>
          <Icon Icon={Settings2} />
          <h6>Preferências</h6>
        </H6Title>
      </HeaderH6>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-[0.4fr_0.6fr]">
        <InputWrapper className="">
          <Label>Cor base</Label>
          <div className="grid grid-cols-1 md-sm:grid-cols-[0.65fr_0.35fr] gap-3">
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
              className="py-1 px-1.5"
            />
          </div>
        </InputWrapper>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {rangePreferences.map((preference) => (
            <InputWrapper key={preference.name}>
              <Label className="capitalize">{preference.name}</Label>
              <div className="h-10 rounded-xs px-2 bg-input border border-input-border">
                <Input
                  className="px-0 accent-primary-600"
                  type="range"
                  min={preference.min}
                  max={preference.max}
                  value={preference.name === 'saturação' ? saturation : lightness}
                  onChange={(e) =>
                    preference.name === 'saturação'
                      ? setSaturation(Number(e.target.value))
                      : setLightness(Number(e.target.value))
                  }
                />
              </div>
            </InputWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

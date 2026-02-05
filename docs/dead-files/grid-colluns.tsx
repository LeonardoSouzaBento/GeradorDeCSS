import { Button, Card, Icon, Input, Label, WrapperButtons, WrapperInput } from '../../src/ui';
import { validateDecimalInput } from '../../src/utils';
import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

/* valores */
const scrennWidths = [375, 480, 768, 1024, 1440];
const collunsOptions = [4, 6, 8, 12, 16];
const gapOptions = [12, 16, 24, 32];
/* preconfigurações */
const defaultGaps: Record<Device, number> = { mobile: 16, tablet: 16, desktop: 24 };
const defaultCollunsQuantity: Record<Device, number> = { mobile: 4, tablet: 8, desktop: 12 };
const screenWidths: Record<Device, number[]> = {
  mobile: [375, 480],
  tablet: [768, 1024],
  desktop: [1440],
};

type MarginOption = Record<Device, number[] | string[]>;

const marginsOptions: MarginOption = {
  mobile: [12, 16],
  tablet: [24, 28],
  desktop: ['auto'],
};

type Device = 'mobile' | 'tablet' | 'desktop';

type PreConfigOptions = {
  device: Device;
  gap: number;
  collunsQuantity: number;
  screenWidth: number[];
  margins: number[] | string[];
};
const preConfigOptions: PreConfigOptions[] = [
  {
    device: 'mobile',
    gap: defaultGaps.mobile,
    collunsQuantity: defaultCollunsQuantity.mobile,
    screenWidth: screenWidths.mobile,
    margins: marginsOptions.mobile,
  },
  {
    device: 'tablet',
    gap: defaultGaps.tablet,
    collunsQuantity: defaultCollunsQuantity.tablet,
    screenWidth: screenWidths.tablet,
    margins: marginsOptions.tablet,
  },
  {
    device: 'desktop',
    gap: defaultGaps.desktop,
    collunsQuantity: defaultCollunsQuantity.desktop,
    screenWidth: screenWidths.desktop,
    margins: ['auto'],
  },
];

const css = {
  configWrapper: `border-b pt-3.5 py-4`,
};

const Test = () => {
  const [gap, setGap] = useState<number>(defaultGaps.mobile);
  const [collunsQuantity, setCollunsQuantity] = useState<number>(defaultCollunsQuantity.mobile);
  const [screenWidth, setScreenWidth] = useState<number>(screenWidths.mobile[0]);
  const [margin, setMargin] = useState<number | string>(marginsOptions.mobile[0]);
  const [selectedDevice, setSelectedDevice] = useState<Device>('mobile');
  const [seeConfigs, setSeeConfigs] = useState<boolean>(true);
  /* inputs */
  const [gapInput, setGapInput] = useState<string>(defaultGaps.mobile.toString());
  const [collunsInput, setCollunsInput] = useState<string>('8');

  const handlePreConfig = (option: PreConfigOptions) => {
    setGap(option.gap);
    setCollunsQuantity(option.collunsQuantity);
    setGapInput(option.gap.toString());
    setCollunsInput(option.collunsQuantity.toString());
    setScreenWidth(option.screenWidth[0]);
    setSelectedDevice(option.device);
    setMargin(option.margins[0]);
  };

  function handleChangeGap(value: string) {
    const normalizedValue = value.replace(',', '.');
    if (!validateDecimalInput(normalizedValue)) return;
    setGapInput(normalizedValue);

    const numberValue = parseInt(normalizedValue);
    setGap(numberValue);
  }

  function handleChangeCollunsQuantity(value: string) {
    const normalizedValue = value.replace(',', '.');
    if (!validateDecimalInput(normalizedValue)) return;
    setCollunsInput(normalizedValue);

    const numberValue = parseInt(normalizedValue);
    setCollunsQuantity(numberValue);
  }

  return (
    <div className="fixed min-w-screen min-h-full">
      {seeConfigs ? (
        <Card className="size-max flex flex-col bg-card absolute bottom-4 right-4 pt-[1ex] z-6">
          <Button
            variant="secondary"
            size="icon"
            closeButton
            className="absolute top-3 right-3"
            onClick={() => setSeeConfigs(false)}>
            <Icon Icon={X} size="md" />
          </Button>
          <div className="w-lg flex flex-col">
            {/* preconfigurações */}
            <div className={css.configWrapper}>
              <WrapperInput>
                <Label htmlFor="">Preconfigurações</Label>
                <WrapperButtons gap={2}>
                  {preConfigOptions.map((option, index) => (
                    <Button
                      key={option.device}
                      variant="ghost"
                      data-option
                      isSelected={selectedDevice === option.device}
                      size="sm"
                      onClick={() => {
                        handlePreConfig(option as PreConfigOptions);
                        setSelectedDevice(option.device);
                      }}>
                      {option.device}
                    </Button>
                  ))}
                </WrapperButtons>
              </WrapperInput>
            </div>
            {/* largura da tela */}
            <div>
              <WrapperInput className={css.configWrapper}>
                <Label>Largura da tela</Label>
                <WrapperButtons gap={2}>
                  {scrennWidths.map((width) => (
                    <Button
                      key={width}
                      variant="ghost"
                      data-option
                      size="sm"
                      isSelected={width === screenWidth}
                      onClick={() => setScreenWidth(width)}>
                      {width}px
                    </Button>
                  ))}
                </WrapperButtons>
              </WrapperInput>
            </div>
            {/* colunas e gap */}
            <div className={`${css.configWrapper} grid grid-cols-[5fr_4fr] gap-3`}>
              <WrapperInput>
                <Label htmlFor="">Quantidade de colunas</Label>
                <Input
                  type="text"
                  value={collunsInput}
                  onChange={(e) => handleChangeCollunsQuantity(e.target.value)}
                />
                <WrapperButtons gap={2}>
                  {collunsOptions.map((option) => (
                    <Button
                      key={option}
                      variant="ghost"
                      data-option
                      size="sm"
                      isSelected={option === collunsQuantity}
                      onClick={() => setCollunsQuantity(option)}>
                      {option}
                    </Button>
                  ))}
                </WrapperButtons>
              </WrapperInput>
              <WrapperInput>
                <Label htmlFor="">Gap</Label>
                <Input
                  type="text"
                  value={gapInput}
                  onChange={(e) => handleChangeGap(e.target.value)}
                />
                <WrapperButtons gap={2}>
                  {gapOptions.map((option) => (
                    <Button
                      key={option}
                      variant="ghost"
                      data-option
                      size="sm"
                      isSelected={option === gap}
                      onClick={() => setGap(option)}>
                      {option}
                    </Button>
                  ))}
                </WrapperButtons>
              </WrapperInput>
            </div>
            {/* margens laterais */}
            <div className={`${css.configWrapper} pb-0 border-b-0`}>
              <WrapperInput>
                <Label htmlFor="">Margens laterais</Label>
                <WrapperButtons gap={2}>
                  {marginsOptions[selectedDevice].map((option: number | string) => (
                    <Button
                      key={option}
                      variant="ghost"
                      data-option
                      size="sm"
                      isSelected={option === margin}
                      onClick={() => setMargin(option)}>
                      {option}
                    </Button>
                  ))}
                </WrapperButtons>
              </WrapperInput>
            </div>
          </div>
        </Card>
      ) : (
        <Button
          variant="ghost"
          className="absolute bottom-4 right-4 shadow-md z-10"
          onClick={() => setSeeConfigs(true)}>
          Configurações <Icon Icon={ChevronDown} />
        </Button>
      )}
      <Preview
        screenWidth={screenWidth}
        margin={margin}
        gap={gap}
        collunsQuantity={collunsQuantity}
      />
    </div>
  );
};

export default Test;

interface PreviewProps {
  screenWidth: number;
  margin: number | string;
  gap: number;
  collunsQuantity: number;
}

const Preview = ({ screenWidth, margin, gap, collunsQuantity }: PreviewProps) => {
  const marginValue = typeof margin === 'number' ? `${margin}px` : null;

  return (
    <div
      className={`h-full absolute bottom-0 right-1/2 mx-auto flex z-2
          outline outline-blue-700 box-border translate-x-1/2`}
      style={{
        width: `${screenWidth}px`,
        paddingInline: marginValue || 'auto',
        gap: `${gap}px`,
      }}>
      {Array.from({ length: collunsQuantity }).map((_, index) => (
        <div key={index} className="h-full w-full flex-auto bg-blue-500/12" />
      ))}
    </div>
  );
};

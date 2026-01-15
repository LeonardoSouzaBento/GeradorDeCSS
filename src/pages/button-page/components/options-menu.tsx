import {
  colorConfigs,
  fontConfigs,
  NavOptions,
  OptionButtonData,
  sizeConfigs,
} from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import { Button, Icon, WrapperButtons } from '@/ui';
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger } from '@/ui/select';
import { Menu } from 'lucide-react';

interface OptionGroup {
  label: string;
  options: OptionButtonData[];
}

const data: OptionGroup[] = [
  { label: 'Tamanho e outline', options: sizeConfigs },
  { label: 'Cor', options: colorConfigs },
  { label: 'Fonte', options: fontConfigs },
];

interface OptionsMenuProps {
  setNavOption: StateSetter<NavOptions>;
  navOption: NavOptions;
  cardRef: React.RefObject<HTMLDivElement>;
  openSelect: boolean;
  setOpenSelect: StateSetter<boolean>;
}

export default function OptionsMenu({
  setNavOption,
  navOption,
  cardRef,
  openSelect,
  setOpenSelect,
}: OptionsMenuProps) {
  function handleClick() {
    if (!cardRef.current) return;
    cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpenSelect(!openSelect);
  }

  return (
    <Select
      open={openSelect}
      onOpenChange={() => {
        setOpenSelect(!openSelect);
      }}>
      <div
        className="w-full flex justify-end md:hidden rounded-md border mb-4"
        onClick={handleClick}>
        <SelectTrigger
          data-show-icon="false"
          className={`w-max h-max
           border-none`}>
          <Button asChild variant="transparent">
            <div onClick={handleClick}>
              Propriedades
              <Icon Icon={Menu} />
            </div>
          </Button>
        </SelectTrigger>
      </div>
      <SelectContent className="w-max">
        {data.map(({ label, options }) => (
          <SelectGroup key={label}>
            <SelectLabel>{label}</SelectLabel>
            <WrapperButtons className="gap-[0.25ex]">
              {options.map((option) => (
                <Button
                  key={option.name}
                  variant="link"
                  isSelected={option.name === navOption}
                  onClick={() => {
                    setNavOption(option.name);
                    setOpenSelect(false);
                  }}
                  className="w-full justify-start px-[1.4ex] gap-[1ex]">
                  <Icon Icon={option.icon} />
                  {option.name}
                </Button>
              ))}
            </WrapperButtons>
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}

import { iconXs } from '@/css/lucideIcons';
import { colorConfigs, fontConfigs, NavOptions, sizeConfigs } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import { Button } from '@/ui';
import { LucideIcon } from 'lucide-react';

const Nav = ({
  navOption,
  setNavOption,
}: {
  navOption: NavOptions;
  setNavOption: StateSetter<NavOptions>;
}) => {
  return (
    <nav
      className={`hidden md:flex min-w-max flex-col space-y-[1ex]
      border rounded-lg p-2 pt-[0.75em] box-content [&>div]:space-y-[0.8ex] 
      [&>div>div]:flex [&>div>div]:flex-col [&>div>div]:items-start [&>div>div]:gap-[1ex]
      [&>div>p]:text-muted-foreground [&>div>p]:font-medium [&>div>p]:pl-[0.68em]`}>
      <div>
        <p>Tamanho e outline</p>
        <div>
          {sizeConfigs.map((option) => (
            <DataOption
              Icon={option.icon}
              key={option.name}
              value={option.name}
              navOption={navOption}
              setNavOption={setNavOption}
            />
          ))}
        </div>
      </div>
      <div>
        <p>Cor</p>
        <div>
          {colorConfigs.map((option) => (
            <DataOption
              Icon={option.icon}
              key={option.name}
              value={option.name}
              navOption={navOption}
              setNavOption={setNavOption}
            />
          ))}
        </div>
      </div>
      <div>
        <p>Fonte</p>
        <div>
          {fontConfigs.map((option) => (
            <DataOption
              Icon={option.icon}
              key={option.name}
              value={option.name}
              navOption={navOption}
              setNavOption={setNavOption}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

interface OptionButtonProps {
  value: NavOptions;
  navOption: NavOptions;
  setNavOption: StateSetter<NavOptions>;
  Icon: LucideIcon;
}

const DataOption = ({ value, navOption, setNavOption, Icon }: OptionButtonProps) => {
  return (
    <Button
      size="sm"
      variant="link"
      isSelected={value === navOption}
      onClick={() => setNavOption(value)}
      className="w-full justify-start px-[1.4ex] gap-[1ex]">
      <Icon {...iconXs} />
      {value}
    </Button>
  );
};

import { iconXs } from '@/css/lucideIcons';
import { colorConfigs, fontConfigs, NavOptions, sizeConfigs } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import { Button } from '@/ui';
import { LucideIcon, Palette } from 'lucide-react';

const css = {
  wrapper: `hidden md:flex w-max flex-col space-y-[1ex]
  border rounded-lg p-5 pt-3 box-content xl:min-w-max`,
  wrapperGroup: `space-y-[0.8ex]`,
  wrapperButtons: `flex flex-col items-start gap-[1ex]`,
  title: `text-muted-foreground font-medium`,
};

const Nav = ({
  navOption,
  setNavOption,
}: {
  navOption: NavOptions;
  setNavOption: StateSetter<NavOptions>;
}) => {
  return (
    <nav className={css.wrapper}>
      <div className={css.wrapperGroup}>
        <p className={css.title}>Tamanho e outline</p>
        <div className={css.wrapperButtons}>
          {sizeConfigs.map((option) => (
            <OptionButton
              Icon={option.icon}
              key={option.name}
              value={option.name}
              navOption={navOption}
              setNavOption={setNavOption}
            />
          ))}
        </div>
      </div>
      <div className={css.wrapperGroup}>
        <p className={css.title}>Cor</p>
        <div className={css.wrapperButtons}>
          {colorConfigs.map((option) => (
            <OptionButton
              Icon={option.icon}
              key={option.name}
              value={option.name}
              navOption={navOption}
              setNavOption={setNavOption}
            />
          ))}
        </div>
      </div>
      <div className={css.wrapperGroup}>
        <p className={css.title}>Fonte</p>
        <div className={css.wrapperButtons}>
          {fontConfigs.map((option) => (
            <OptionButton
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

const OptionButton = ({ value, navOption, setNavOption, Icon }: OptionButtonProps) => {
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

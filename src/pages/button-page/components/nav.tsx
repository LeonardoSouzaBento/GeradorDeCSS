import { fontConfigs, NavOptions, sizeAndStyleConfigs } from '@/data/buttons/variables';
import { StateSetter } from '@/data/typography/types';
import { Button } from '@/ui';

const css = {
  wrapper: `hidden md:flex w-auto max-w-max flex-col space-y-[1ex]
  border rounded-lg p-5 pt-3 box-content`,
  wrapperGroup: `space-y-[0.5ex]`,
  wrapperButtons: `flex flex-col items-start gap-2`,
  title: `text-muted-foreground`,
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
        <h6 className={css.title}>Tamanho e outline</h6>
        <div className={css.wrapperButtons}>
          {sizeAndStyleConfigs.map((option) => (
            <OptionButton
              key={option}
              value={option}
              navOption={navOption}
              setNavOption={setNavOption}
            />
          ))}
        </div>
      </div>
      <div className={css.wrapperGroup}>
        <h6 className={css.title}>Cor</h6>
        <div className={css.wrapperButtons}>
          <OptionButton value="Cor" navOption={navOption} setNavOption={setNavOption} />
        </div>
      </div>
      <div className={css.wrapperGroup}>
        <h6 className={css.title}>Fonte</h6>
        <div className={css.wrapperButtons}>
          {fontConfigs.map((option) => (
            <OptionButton
              key={option}
              value={option}
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
}

const OptionButton = ({ value, navOption, setNavOption }: OptionButtonProps) => {
  return (
    <Button
      size="sm"
      variant="link"
      isSelected={value === navOption}
      onClick={() => setNavOption(value)}
      className="w-full justify-start small-button px-[1ex]">
      {value}
    </Button>
  );
};

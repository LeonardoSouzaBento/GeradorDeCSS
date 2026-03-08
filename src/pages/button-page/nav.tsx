import { configOptions, NavOptions } from "@/data/buttons/variables";
import { StateSetter } from "@/data/typography/types";
import { Button, Icon } from "@/ui";
import { LucideIcon } from "lucide-react";

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
      border-r rounded-xs pr-4 box-content`}
    >
      {configOptions.map((section) => (
        <div key={section.name} className="space-y-1">
          <p className="text-muted-foreground font-medium">{section.name}</p>
          <div className="flex flex-col items-start gap-[1ex]">
            {section.options.map((option) => (
              <DataOption
                IconComp={option.icon}
                key={option.name}
                value={option.name as NavOptions}
                navOption={navOption}
                setNavOption={setNavOption}
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Nav;

interface OptionButtonProps {
  value: NavOptions;
  navOption: NavOptions;
  setNavOption: StateSetter<NavOptions>;
  IconComp: LucideIcon;
}

const DataOption = ({
  value,
  navOption,
  setNavOption,
  IconComp,
}: OptionButtonProps) => {
  return (
    <Button
      size="sm"
      variant="link"
      selected={value === navOption}
      onClick={() => setNavOption(value)}
      className="w-full justify-start px-[1.4ex] gap-[1ex]"
    >
      <Icon Icon={IconComp} size="md" className="mb-0.75" strokeWidth="medium" />
      {value}
    </Button>
  );
};

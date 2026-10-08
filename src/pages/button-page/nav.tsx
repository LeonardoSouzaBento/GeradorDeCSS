import { configOptions, NavOptions } from "@/data/buttons/variables";
import { StateSetter } from "@/data/typography/types";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const allOptions = configOptions.flatMap((section) => section.options);

const Nav = ({
  navOption,
  setNavOption,
}: {
  navOption: NavOptions;
  setNavOption: StateSetter<NavOptions>;
}) => {
  return (
    <nav className="w-full min-w-0 max-w-full flex items-center gap-1 overflow-x-auto pb-2.5 border-b border-border/50">
      {allOptions.map((option) => (
        <DataOption
          IconComp={option.icon}
          key={option.name}
          value={option.name as NavOptions}
          navOption={navOption}
          setNavOption={setNavOption}
        />
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
  const isActive = value === navOption;

  return (
    <button
      type="button"
      onClick={() => setNavOption(value)}
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full small-text transition-colors whitespace-nowrap shrink-0 cursor-pointer",
        isActive
          ? "bg-secondary text-secondary-foreground font-medium"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
      )}
    >
      <IconComp strokeWidth={2} className="size-5 shrink-0" />
      <span>{value}</span>
    </button>
  );
};

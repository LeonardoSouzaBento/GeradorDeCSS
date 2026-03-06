import { configOptions, NavOptions } from "@/data/buttons/variables";
import { StateSetter } from "@/data/typography/types";
import { Button, ButtonsWrapper, Icon } from "@/ui";
import { Settings } from "lucide-react";

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
    cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpenSelect(!openSelect);
  }

  return (
    <div className="relative w-full md:hidden">
      <Button
        className="absolute -top-9 -right-2 rounded-sm"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          setOpenSelect(!openSelect);
        }}
      >
        <Icon
          Icon={Settings}
          strokeWidth={"thin"}
          size="2xl"
          className="mb-px ml-px"
        />
      </Button>

      {openSelect && (
        <>
          <div className="w-64 flex flex-col absolute top-2 -right-2 z-20 
          bg-background border border-border/75 rounded-sm shadow-lg p-2">
            {configOptions.map(({ name, options }) => (
              <div key={name}>
                <p className="font-medium text-muted-foreground p-1">{name}</p>
                <ButtonsWrapper className="gap-[0.25ex]">
                  {options.map((option) => (
                    <Button
                      key={option.name}
                      variant="link"
                      selected={option.name === navOption}
                      onClick={() => {
                        setNavOption(option.name as NavOptions);
                        setOpenSelect(false);
                      }}
                      className="w-full justify-start px-[1.4ex] gap-[1ex]"
                    >
                      <Icon Icon={option.icon} />
                      {option.name}
                    </Button>
                  ))}
                </ButtonsWrapper>
              </div>
            ))}
          </div>
          <div className="fixed bottom-0 left-0 bg-black/3 backdrop-blur-[2px] h-dvh w-full z-10" />
        </>
      )}
    </div>
  );
}

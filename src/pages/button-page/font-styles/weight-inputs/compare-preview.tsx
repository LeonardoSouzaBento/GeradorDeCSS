import { StateSetter } from "@/data/typography/types";
import {
  Button,
  ButtonsWrapper,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Icon,
} from "@/ui";
import { Maximize2, Minimize2, Package } from "lucide-react";

export const ComparePreview = ({
  currentWeight,
  strokeWidth,
  iconSizes,
  color,
  expandIcon,
  setExpandIcon,
}: {
  currentWeight: number;
  strokeWidth: number;
  iconSizes: string[];
  color: string;
  expandIcon: boolean;
  setExpandIcon: StateSetter<boolean>;
}) => {
  return (
    <div className="border mt-4">
      <ButtonsWrapper
        className={`rounded-xs px-[0.5ex] 
          py-[0.25ex] justify-between`}
      >
        {!expandIcon ? (
          <div className="flex gap-[0.5ex]">
            {iconSizes.slice(0, 5).map((size, index) => (
              <div
                key={size}
                className={`flex gap-3 items-center
                  py-[0.5ex] px-[1ex] rounded-xs relative`}
                style={{
                  color: color,
                  border: `${index === 2 ? `1.2px solid var(--color-input)` : "none"}`,
                }}
              >
                <Package size={size} strokeWidth={strokeWidth} className="scale-135" />
                {index === 2 && (
                  <p className="absolute left-1 -top-1 text-lg scale-135">*</p>
                )}
                <p style={{ fontSize: size, fontWeight: currentWeight }} className="scale-135">Aa</p>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`flex gap-[0.6ex] items-center
                  py-[0.5ex] px-[1ex] rounded-xs relative text-[calc(var(--text-h1-hero)*2)]`}
            style={{
              color: color,
            }}
          >
            <Package color={color} strokeWidth={strokeWidth} size={"0.97em"} />
            <p style={{ fontWeight: currentWeight }}>Aa</p>
          </div>
        )}
        <Tooltip delayDuration={450}>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon-sm"
              className="text-primary"
              onClick={() => {
                setExpandIcon(!expandIcon);
              }}
            >
              <Icon size="md" Icon={expandIcon ? Minimize2 : Maximize2} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {expandIcon
                ? "Diminuir previsualização"
                : "Aumentar previsualização"}
            </p>
          </TooltipContent>
        </Tooltip>
      </ButtonsWrapper>
    </div>
  );
};

import { StateSetter } from "@/data/typography/types";
import {
  ButtonsWrapper
} from "@/ui";
import { Package } from "lucide-react";

export const ComparePreview = ({
  currentWeight,
  strokeWidth,
  color,
}: {
  currentWeight: number;
  strokeWidth: number;
  color: string;
}) => {
  return (
    <div className="mt-4">
      <ButtonsWrapper
        className={`rounded-xs border justify-between max-w-max lg:max-w-none p-2 px-4`}
      >
        <div
          className={`flex gap-[0.6ex] items-center
            rounded-xs relative text-[calc(var(--text-h1-hero)*2)] min-w-44`}
          style={{
            color: color,
          }}
        >
          <Package color={color} strokeWidth={strokeWidth} size={"0.97em"} />
          <p style={{ fontWeight: currentWeight }}>Aa</p>
        </div>
      </ButtonsWrapper>
    </div>
  );
};

import { ButtonsWrapper, H6Title, HeaderH6, Icon, Input } from "@/ui";
import { Package, Weight } from "lucide-react";

export const ValueInput = ({
  scrollToBottom,
  strokeWidth,
  setStrokeWidth,
  currentWeight,
  color,
}: {
  scrollToBottom: () => void;
  strokeWidth: number;
  setStrokeWidth: (value: number) => void;
  currentWeight: number;
  color: string;
}) => {
  return (
    <div>
      <LocalInput
        scrollToBottom={scrollToBottom}
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
      />
      <ComparePreview
        currentWeight={currentWeight}
        strokeWidth={strokeWidth}
        color={color}
      />
    </div>
  );
};

const LocalInput = ({
  scrollToBottom,
  strokeWidth,
  setStrokeWidth,
}: {
  scrollToBottom: () => void;
  strokeWidth: number;
  setStrokeWidth: (value: number) => void;
}) => {
  return (
    <>
      <HeaderH6 mb={0.5}>
        <H6Title>
          <Icon Icon={Weight} className="mb-1" />
          <h6>Peso do ícone</h6>
        </H6Title>
      </HeaderH6>
      <Input
        className="max-w-44"
        type="number"
        min={1.5}
        max={5}
        step={0.15}
        value={strokeWidth}
        onClick={scrollToBottom}
        onChange={(e) => {
          setStrokeWidth(Number(e.target.value));
        }}
      />
    </>
  );
};

const ComparePreview = ({
  currentWeight,
  strokeWidth,
  color,
}: {
  currentWeight: number;
  strokeWidth: number;
  color: string;
}) => {
  return (
    <div className="mt-4 border-t">
      <ButtonsWrapper
        className={`rounded-xs justify-between max-w-max lg:max-w-none`}
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

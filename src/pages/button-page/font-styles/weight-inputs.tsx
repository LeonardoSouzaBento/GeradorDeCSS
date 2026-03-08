import { useButtonPageContext } from "@/contexts";
import {
  Button,
  ButtonsWrapper,
  FormWrapper,
  H6Title,
  HeaderH6,
  Icon,
} from "@/ui/index";
import { Weight } from "lucide-react";
import { useState } from "react";
import { IconWeightStepInput, ValueInput } from "./weight-inputs/index";

const weights = [500, 600, 700];

const WeightInputs = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const {
    currentWeight,
    setCurrentWeight,
    strokeWidth,
    setStrokeWidth,
    color,
  } = useButtonPageContext();
  const [iconWeightScale, setIconWeightScale] = useState<number[]>([]);

  function scrollToBottom() {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <div className={`w-full space-y-3 pb-px`}>
      <FormWrapper className={`w-full`}>
        <HeaderH6 mb={0.75}>
          <H6Title>
            <Icon Icon={Weight} />
            <h6>Peso da fonte</h6>
          </H6Title>
        </HeaderH6>
        <ButtonsWrapper>
          {weights.map((weight) => (
            <Button
              key={weight}
              variant="ghost"
              data-option
              selected={currentWeight === weight}
              onClick={() => {
                setCurrentWeight(weight);
              }}
            >
              {weight}
            </Button>
          ))}
        </ButtonsWrapper>
      </FormWrapper>

      <FormWrapper
        className={`w-full relative grid grid-cols-1 pre-lg:grid-cols-[max-content_1fr] gap-5 items-start`}
      >
        <ValueInput
          scrollToBottom={scrollToBottom}
          strokeWidth={strokeWidth}
          setStrokeWidth={setStrokeWidth}
          currentWeight={currentWeight}
          color={color}
        />
        <IconWeightStepInput
          iconWeightScale={iconWeightScale}
          strokeWidth={strokeWidth}
          color={color}
          setIconWeightScale={setIconWeightScale}
        />
      </FormWrapper>
    </div>
  );
};

export default WeightInputs;

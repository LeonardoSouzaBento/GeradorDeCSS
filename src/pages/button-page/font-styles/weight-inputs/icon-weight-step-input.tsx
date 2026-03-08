import { useButtonPageContext } from "@/contexts/index";
import { lucideIconWeights } from "@/data/buttons/variables";
import { StateSetter } from "@/data/typography/types";
import {
  Button,
  ButtonsWrapper,
  H6Title,
  HeaderH6,
  Icon,
  Input,
  InputWrapper
} from "@/ui";
import { Weight } from "lucide-react";
import { useEffect } from "react";

const spetsOptions = [0.1, 0.15, 0.2, 0.25, 0.3];

function genIconWeightScale(step: number, normalValue: number): number[] {
  const normalIndex = lucideIconWeights.indexOf("normal");

  return lucideIconWeights.map((_, index) => {
    const value = normalValue + (index - normalIndex) * step;
    return Number(value.toFixed(2));
  });
}

export const IconWeightStepInput = ({
  setIconWeightScale,
}: {
  setIconWeightScale: StateSetter<number[]>;
}) => {
  const { lucideIconWeightStep, setLucideIconWeightStep, strokeWidth } =
    useButtonPageContext();

  useEffect(() => {
    setIconWeightScale(genIconWeightScale(lucideIconWeightStep, strokeWidth));
  }, [lucideIconWeightStep, strokeWidth]);

  return (
    <div>
      <HeaderH6 mb={0.5}>
        <H6Title>
          <Icon Icon={Weight} /> <h6>Passo de peso</h6>
        </H6Title>
      </HeaderH6>
      <div className="grid grid-cols-1 items-end gap-4 mb-4">
        <InputWrapper>
          <Input
            id="weight-step"
            type="number"
            step="0.15"
            value={lucideIconWeightStep}
            onChange={(e) => setLucideIconWeightStep(Number(e.target.value))}
          />
        </InputWrapper>
        <ButtonsWrapper>
          {spetsOptions.map((step) => (
            <Button
              onClick={() => setLucideIconWeightStep(step)}
              data-option={step}
              variant="ghost"
              size="sm"
              selected={step === lucideIconWeightStep}
            >
              {step}
            </Button>
          ))}
        </ButtonsWrapper>
      </div>
    </div>
  );
};

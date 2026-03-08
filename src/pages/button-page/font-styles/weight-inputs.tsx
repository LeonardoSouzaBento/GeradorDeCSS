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
import { InputAlert } from "../padding-generator/input-alert";
import {
  ComparePreview,
  IconWeightScaleInput,
  InputValue,
  IconWeightScalePreview,
} from "./weight-inputs/index";

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
    iconSizes,
    color,
  } = useButtonPageContext();
  const [expandIcon, setExpandIcon] = useState<boolean>(true);
  const [showAlert, setShowAlert] = useState<boolean>(false);
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

      <FormWrapper className={`w-full relative`}>
        <InputValue
          scrollToBottom={scrollToBottom}
          setStrokeWidth={setStrokeWidth}
          setShowAlert={setShowAlert}
        />
        <ComparePreview
          currentWeight={currentWeight}
          strokeWidth={strokeWidth}
          iconSizes={iconSizes}
          color={color}
          expandIcon={expandIcon}
          setExpandIcon={setExpandIcon}
        />
        <IconWeightScaleInput setIconWeightScale={setIconWeightScale} />
        <IconWeightScalePreview
          iconWeightScale={iconWeightScale}
          color={color}
        />
        <InputAlert
          message="Valor inválido! Escolha um valor entre 1.5 e 5."
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      </FormWrapper>
    </div>
  );
};

export default WeightInputs;
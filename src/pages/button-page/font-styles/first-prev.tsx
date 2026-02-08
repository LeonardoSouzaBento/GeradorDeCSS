import { FormWrapper } from '@/ui';

type FirstPrevProps = {
  children: React.ReactNode;
};

const FirstPrev = ({ children }: FirstPrevProps) => {
  return (
    <FormWrapper>
      <h6 className="mb-[1ex]">Prévia</h6>
      <div className="flex flex-col gap-3">{children}</div>
    </FormWrapper>
  );
};

export default FirstPrev;

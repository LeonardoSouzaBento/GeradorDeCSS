import { WrapperForm } from '@/ui';

type FirstPrevProps = {
  children: React.ReactNode;
};

const FirstPrev = ({ children }: FirstPrevProps) => {
  return (
    <WrapperForm>
      <h6 className="mb-[1ex]">Prévia</h6>
      <div className="flex flex-col gap-3">{children}</div>
    </WrapperForm>
  );
};

export default FirstPrev;

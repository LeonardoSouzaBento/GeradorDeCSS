import { CardContent, H6Title, HeaderH6, WrapperForm } from '@/ui';

const CssReturn = ({ neutralColors }: { neutralColors: any }) => {
  return (
    <WrapperForm>
      <HeaderH6 mb={0.75}>
        <H6Title>
          <h6>Saída</h6>
        </H6Title>
      </HeaderH6>
      <CardContent>
        <pre>{neutralColors}</pre>
      </CardContent>
    </WrapperForm>
  );
};

export default CssReturn;

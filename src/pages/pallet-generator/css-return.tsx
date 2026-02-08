import { CardContent, H6Title, HeaderH6, FormWrapper } from '@/ui';

export const CssReturn = ({ neutralColors }: { neutralColors: string }) => {
  return (
    <FormWrapper>
      <HeaderH6 mb={0.75}>
        <H6Title>
          <h6>Saída</h6>
        </H6Title>
      </HeaderH6>
      <CardContent>
        <pre>{neutralColors}</pre>
      </CardContent>
    </FormWrapper>
  );
};

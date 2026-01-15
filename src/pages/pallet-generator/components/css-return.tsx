import { Card, CardContent, CardHeader, CardTitle } from '@/ui';

const CssReturn = ({ neutralColors }: { neutralColors: any }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-primary'>Saída</CardTitle>
      </CardHeader>
      <CardContent>
        <pre>{neutralColors}</pre>
      </CardContent>
    </Card>
  );
};

export default CssReturn;

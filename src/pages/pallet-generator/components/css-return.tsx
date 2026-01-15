import { Card, CardContent, CardHeader, CardTitle } from '@/ui';

const CssReturn = ({ neutralColors }: { neutralColors: any }) => {
  return (
    <Card>
      <CardHeader className='border-none mb-[0.25ex]'>
        <CardTitle className='text-primary'>Saída</CardTitle>
      </CardHeader>
      <CardContent>
        <pre>{neutralColors}</pre>
      </CardContent>
    </Card>
  );
};

export default CssReturn;

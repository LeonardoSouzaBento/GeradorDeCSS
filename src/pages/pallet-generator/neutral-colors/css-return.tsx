import { CopyButton } from '@/components/common';
import { CardContent, H6Title, HeaderH6, Icon } from '@/ui';
import { NotepadText } from 'lucide-react';

export const CssReturn = ({ neutralColors }: { neutralColors: string }) => {
  return (
    <div>
      <HeaderH6 mb={0.75}>
        <H6Title>
          <Icon Icon={NotepadText} className='mb-1' />
          <h6>Saída</h6>
        </H6Title>
      </HeaderH6>
      <CardContent className='space-y-4'>
        <pre>{neutralColors}</pre>
        <CopyButton toCopy={neutralColors} />
      </CardContent>
    </div>
  );
};

import { iconMd, iconXs } from '@/css/lucideIcons';
import { Button } from '@/ui/index';
import { ArrowUpToLine, Menu } from 'lucide-react';

interface Props {
  removeHeader: boolean;
  setRemoveHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

const RemoveHeaderButton = ({ removeHeader, setRemoveHeader }: Props) => {
  return (
    <Button
      variant="transparent"
      size="icon"
      closeButton
      className="absolute top-2 right-2 z-6 md:hidden xl:flex bg-card border text-primary"
      onClick={() => setRemoveHeader(!removeHeader)}>
      <ArrowUpToLine {...iconXs} className="hidden xl:flex" />
      <Menu {...iconMd} className="md:hidden" />
    </Button>
  );
};

export default RemoveHeaderButton;

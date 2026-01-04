import { StateSetter } from '@/data/typography/types';
import { Button, Icon } from '@/ui/index';
import { Minimize2 } from 'lucide-react';
import React from 'react';

const ModalButtonsPage = ({
  children,
  setOpenModal,
}: {
  children: React.ReactNode;
  setOpenModal: StateSetter<boolean>;
}) => {
  return (
    <div className="size-full absolute top-0 left-0 z-4 rounded-lg bg-card">
      <Button
        variant="transparent"
        size="icon"
        className="absolute top-1 right-1"
        onClick={() => setOpenModal(false)}>
        <Icon size="xl" Icon={Minimize2} />
      </Button>{' '}
      {children}
    </div>
  );
};

export default ModalButtonsPage;

import { Button } from '@/ui/button';
import { componentExamples } from '@/pages/typography/prev';

const Nav = ({
  selectedComponent,
  setSelectedComponent,
}: {
  selectedComponent: string;
  setSelectedComponent: (value: string) => void;
}) => {
  return (
    <nav className={`flex flex-wrap gap-3`}>
      {componentExamples.map((item) => {
        const selected = selectedComponent === item;
        return (
          <Button
            variant="ghost"
            size="sm"
            data-option
            selected={selected}
            key={item}
            className={`capitalize`}
            onClick={() => setSelectedComponent(item)}>
            {item}
          </Button>
        );
      })}
    </nav>
  );
};

export default Nav;

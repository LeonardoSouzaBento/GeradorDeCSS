import Header from '@/components/header';
import { iconLg, iconSm } from '@/css/lucideIcons.ts';
import { Button } from '@/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { CaseSensitive, MousePointerClick, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ButtonsPreview from './components/buttons-preview.tsx';
import TypographyPreview from './components/typography-preview';

const Home = () => {
  return (
    <div className={`pb-8 min-h-screen bg-transparent`}>
      <Header
        title="CSS Generator"
        description="Gerador de estilos para começar seu projeto"
        icon={<Sparkles strokeWidth={2.2} size={'1.6rem'} />}
      />
      <div className={`main-wrapper space-y-[1cap]`}>
        <Card>
          <CardHeader>
            <CardTitle>Ferramentas</CardTitle>
            <CardDescription>Escolha uma ferramenta</CardDescription>
          </CardHeader>
          <CardContent>
            <div className={`flex gap-3`}>
              <Button>
                <NavLink to="/typography">Gerador de escala tipográfica</NavLink>
                <CaseSensitive {...iconLg} />
              </Button>
              <Button variant="outline">
                <NavLink to="/buttons">Gerador de estilos para botões</NavLink>
                <MousePointerClick {...iconSm} />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card noHeader className={`grid grid-cols-1 xl:grid-cols-2 gap-3`}>
          <TypographyPreview />
          <ButtonsPreview />
        </Card>
      </div>
    </div>
  );
};

export default Home;

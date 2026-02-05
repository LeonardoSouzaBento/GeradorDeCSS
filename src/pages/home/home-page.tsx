import { CustomNavLink } from '@/components';
import Header from '@/components/header';
import { Icon, WrapperButtons } from '@/ui';
import { Button, ButtonVariants } from '@/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { CaseSensitive, MousePointerClick, Palette, Sparkles } from 'lucide-react';
import ButtonStyleTester from './components/button-style-tester';
import { ButtonsPreview, TypographyPreview } from './components/index';

const pages = [
  {
    path: '/typography',
    name: 'Gerador de escala tipográfica',
    icon: CaseSensitive,
    variant: 'default',
  },
  {
    path: '/buttons',
    name: 'Gerador de estilos para botões',
    icon: MousePointerClick,
    variant: 'outline',
  },
  {
    path: '/palette-generator',
    name: 'Gerador de paleta de cor',
    icon: Palette,
    variant: 'ghost',
    className: 'shadow-sm',
  },
];

const Home = ({ resizingCounter }: { resizingCounter?: number }) => {
  return (
    <div className={`pb-8 min-h-screen bg-transparent`}>
      <Header
        resizingCounter={resizingCounter}
        title="Gerador de CSS"
        className={`flex-col pre-sm:flex-row items-center gap-2 text-center
          pre-sm:text-left main-wrapper sm:w-[calc(100%-3rem)] sm:px-0`}
        description="Gerador de estilos para começar seu projeto"
        icon={<Icon Icon={Sparkles} size={'1.6rem'} strokeValue={"2.2"} fill="var(--color-primary-600)" />}
      />
      <div className={`main-wrapper space-y-6`}>
        <Card>
          <CardHeader>
            <CardTitle>
              <h2>Ferramentas do site</h2>
            </CardTitle>
            <CardDescription>Escolha uma ferramenta</CardDescription>
          </CardHeader>
          <CardContent>
            <WrapperButtons className="gap-4">
              {pages.map((page) => (
                <Button
                  key={page.path}
                  variant={page.variant as ButtonVariants['variant']}
                  className={`${page.className || ''} max-[430px]:h-10 max-[720px]:w-full`}>
                  <CustomNavLink link={page.path} />
                  {page.name}
                  <Icon Icon={page.icon} />
                </Button>
              ))}
            </WrapperButtons>
            <CardContent
              className={`mt-4 grid grid-cols-1 xl:grid-cols-2 gap-4 
              [&>div]:p-3 [&>div]:pt-2 [&>div>p:first-child]:text-muted-foreground
              [&>div>p:first-child]:mb-[0.75ex] [&>div>p:first-child]:capitalize`}>
              <TypographyPreview />
              <ButtonsPreview />
            </CardContent>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <h3>Componentes para testar</h3>
            </CardTitle>
            <CardDescription>Teste os estilos gerados com estes componentes</CardDescription>
          </CardHeader>
          <CardContent className="max-w-max space-y-4">
            <ButtonStyleTester />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;

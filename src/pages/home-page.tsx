import { CustomNavLink, DecorativeBackGround } from '@/components';
import Header from '@/components/header';
import { Icon, ButtonsWrapper, Separator } from '@/ui';
import { Button, ButtonVariants } from '@/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { CaseSensitive, MousePointerClick, Palette, Sparkles } from 'lucide-react';
import ButtonStyleTester from './home/button-style-tester';
import { ButtonsPreview, TypographyPreview } from './home/index';

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
    <div className={`pb-8 min-h-screen bg-transparent relative`}>
      <DecorativeBackGround />
      <Header
        resizingCounter={resizingCounter}
        title="Gerador de CSS"
        className={`flex-col pre-sm:flex-row items-center gap-3 text-center
          pre-sm:text-left main-wrapper sm:w-[calc(100%-3rem)] sm:px-0`}
        description="Gerador de estilos para começar seu projeto"
        icon={<Icon Icon={Sparkles} size={'h2'} strokeWidth='thin' />}
      />
      <div className={`main-wrapper space-y-6`}>
        <Card>
          <CardHeader className="border-none mb-2">
            <CardTitle>
              <h2 className='text-primary'>Ferramentas do site</h2>
            </CardTitle>
            <CardDescription>Escolha uma ferramenta para começar</CardDescription>
          </CardHeader>
          <CardContent>
            <ButtonsWrapper>
              {pages.map((page, index) => {
                const size = { 0: "2xl", 1: "lg", 2: "md" }[index];
                return (
                  <Button
                    key={page.path}
                    variant={page.variant as ButtonVariants['variant']}
                    className={`${page.className || ''} h-10 max-[430px]:h-10 max-[720px]:w-full`}>
                    <CustomNavLink link={page.path} />
                    <Icon Icon={page.icon} size={size} />
                    {page.name}
                  </Button>
                );
              })}
            </ButtonsWrapper>
            <CardContent
              className={`mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_max-content_1fr] xl:gap-5 border-t pt-3
              [&>div>p:first-child]:text-muted-foreground
              [&>div>p:first-child]:mb-[0.75ex] [&>div>p:first-child]:capitalize`}>
              <TypographyPreview />
              <Separator orientation='vertical' className='max-xl:hidden' />
              <Separator className='xl:hidden' />
              <ButtonsPreview />
            </CardContent>
          </CardContent>
        </Card>

        <Card className='border-none'>
          <CardHeader>
            <CardTitle>
              <h3 className='text-primary'>Componentes para testar</h3>
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

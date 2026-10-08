import {
  CustomNavLink,
  DecorativeBackGround,
  Header,
} from "@/components/common/index";
import { Button, Icon } from "@/ui";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  CaseSensitive,
  MousePointerClick,
  Sparkles,
} from "lucide-react";
import ButtonStyleTester from "./home/button-style-tester";
import { ButtonsDemo, TypographyDemo } from "./home/index";

const Home = ({ resizingCounter }: { resizingCounter?: number }) => {
  return (
    <div className="pb-10 min-h-screen bg-transparent relative">
      <DecorativeBackGround />
      <Header
        resizingCounter={resizingCounter}
        title="Gerador de CSS"
        description="Utilitários de tipografia, botões e cores"
        icon={<Icon Icon={Sparkles} size="md" strokeWidth="medium" />}
      />
      <div className="main-wrapper space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">
          <Card className="min-w-0 justify-between">
            <div>
              <CardHeader>
                <CardTitle>
                  <h3>Gere uma escala tipográfica</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="min-w-0">
                <TypographyDemo />
              </CardContent>
            </div>
            <div className="pt-4">
              <Button className="w-full relative">
                <CustomNavLink link="/typography" />
                <Icon Icon={CaseSensitive} size="md" strokeWidth="medium" />
                Gerar escala tipográfica
              </Button>
            </div>
          </Card>

          <Card className="min-w-0 justify-between">
            <div>
              <CardHeader>
                <CardTitle>
                  <h3>Gere estilos para botões</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="min-w-0">
                <ButtonsDemo />
              </CardContent>
            </div>
            <div className="pt-4">
              <Button className="w-full relative">
                <CustomNavLink link="/buttons" />
                <Icon Icon={MousePointerClick} size="md" strokeWidth="medium" />
                Gerar estilos para botões
              </Button>
            </div>
          </Card>
        </div>

        <Card className="bg-white/50 border border-border/80 [&_.bg-card]:bg-transparent [&_[role=alert]]:bg-transparent pb-4 sm:pb-5">
          <CardHeader>
            <CardTitle className="justify-center text-center">
              <h5>Baixe este componente react para previsualizar estilos de estados</h5>
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full min-w-0 space-y-4">
            <ButtonStyleTester title={false} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;

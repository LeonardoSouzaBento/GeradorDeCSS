## Acesse:

https://css-scale-generator.netlify.app/

## Para que serve? O que faz?

CSS Generator gera hierarquias de tamanhos de fonte e estilos de botões de forma profissional para você. Clique no botão copiar para pegar o CSS com tamanhos responsivos e tenha uma interface muito mais elegante com tags seguindo uma hierarquia de tamanho padronizada e gere estilos para botões de forma fácil e rápida. É o que você precisa para iniciar um grande projeto.

## Complexidade do projeto

Embora seja basicamente retornar strings, o processo envolve muitas funções e cálculos. Entre as funções, temos: uma função para remover a quantidade de zeros desnecessários e arredondar para 6 casas decimais os números sem zeros a mais; uma para gerar uma tabela de clamps válidos para cada tag e aplicar no componente prévia; uma função para formatar a saída em CSS e uma para formatar a saída em Tailwind.

Além disso, para avisar mudanças no layout, temos um hook useRemObserver que pega o valor em px do font-size do HTML para descobrir a medida rem e manter a responsividade; e um hook useResizeWatcher para avisar resize de tela para aplicar tamanhos corretos nas divs.

## Importância do projeto

Tendo como fim a escalabilidade, sabemos que criar interfaces a partir de uma base padronizada de estilos é muito importante, principalmente nesse tempo de constante uso de Inteligência Artificial para codificação. É um conhecimento simples, porém não intuitivo, que orienta o trabalho de IAs, nos dá o poder de conferir se ela está aplicando um padrão de estilos conveniente e o saber personalizar sem perder a consistência entre componentes ou entre telas. Para alcançar um design belo e funcional dessa forma, aplicar uma escala tipográfica responsiva e ter um conjunto padronizado de estilos para botões é essencial.

Esse projeto mostra uma parte importante do meu conhecimento, especialmente em UI design, mas também em React, TypeScript, Tailwind CSS e uso de componentes reutilizáveis como os de shadcn/ui.

## Exemplo de Saída (hierarquia tipográfica)-

```css
@theme {
  --text-xs: 0.922275em;
  --text-sm: 0.984067em;
  --text-base: 1.05em;
  --text-lg: 1.12035em;
  --text-h6: 1.12035em;
  --text-h5: 1.195413em;
  --text-h4: 1.275506em;
  --text-h3: 1.360965em;
  --text-h2: 1.45215em;
  --text-h1: 1.549444em;
  --text-big-h1: 1.653256em;
  --text-button: 1.05em;
  --text-sm-button: 0.945em;
  --text-lg-button: 1.155em;
}

@layer components {
  body {
    @apply text-[1.05rem] sm:text-[1.0625rem] md:text-[1.065rem] 
    lg:text-[1.07rem] xl:text-[1.075rem] 2xl:text-[1.0800rem];
  }

  .smaller-text {
    @apply text-xs;
  }
  .small-text,
  label {
    @apply text-sm;
  }
  .normal-text {
    @apply text-base;
  }
  .large-text {
    @apply text-lg;
  }

  h6 {
    @apply text-h6;
  }
  h5 {
    @apply text-h5;
  }
  h4 {
    @apply text-h4;
  }
  h3 {
    @apply text-h3;
  }
  h2 {
    @apply text-h2;
  }
  h1 {
    @apply text-h1;
  }
  .big-h1 {
    @apply text-big-h1;
  }

  button {
    @apply text-button;
  }
  .small-button {
    @apply text-sm-button;
  }
  .large-button {
    @apply text-lg-button;
  }
}
```

## Como fazemos a escadala de fontes?

Aplicamos uma escala modular escolhida pelo usuário, como `1.067`, por exemplo. Nesse caso, queremos que a tag h6 seja 1.067 vezes maior que a tag p, h5 seja 1.067 vezes maior que h6, h4 seja 1.067 vezes maior que h5, e assim por diante até h1, ou seja, as tags seguem a regra `base x scala x scala ...` conforme o nível em que estão, portanto, cada tag tem um fator de potência. P é `base x scala ^ 0`, h6 é `base x scala ^ 1`, h5 é `base x scala ^ 2`, e assim por diante.

## Como escalamos a fonte para o body?

Usamos uma regra de três simples para decidir o quanto cada breakpoint vai receber da diferença de tamanho entre os valores mínimo e máximo recebidos. O breakpoint 1280px, tela de desktop, recebe 100% da diferença de tamanho. Se você decidiu como altura mínima e altura máxima de fonte, os valores 17 e 20. 1280px têm 3px de diferença, 3px a mais que o valor mínimo, 100% da diferença de tamanho entre mínimo e máximo, portanto, usando regra de três simples, 1536px, o próximo breakpoint, tem 120% dessa diferença, 1.2 \* 3 = 3.6px a mais que o valor mínimo. Naturalmente, a diferença de tamanho entre os breakpoints será pequena se a diferença de tamanho entre mínimo e máximo for pequena. No entanto, tudo fica proporcional aplicando os seguintes fatores de porcentagem: sm: 0.5, md: 0.6, lg: 0.8, xl: 1.0, 2xl: 1.2.

## Exemplo de Saída (estilizador de botões)-

Geramos muitos artefatos: variáveis de cores e de tamanhos, estilos de botões, um componente de icone para lucide react e outro para spans do Material Symbols da Google.

```css
--text-sm-button: 0.937em;
--text-button: 0.968em;
--text-lg-button: 1em;

--color-primary-50: #f2f3f7;
--color-primary-100: #e4e6ef;
--color-primary-200: #cacedf;
--color-primary-300: #b0b7cf;
--color-primary-400: #96a0c0;
--color-primary-500: #7c89b0;
--color-primary-600: #6274a1;
--color-primary-700: #465f92;
--color-primary-800: #1f4780 /*Sua cor*/;
--color-primary-900: #002d62;
--color-primary-950: #001e50;
--color-primary-1000: #000d3e;
```

```js
/*Estilos*/
default:
'bg-primary hover:bg-primary/90 text-primary-50 disabled:bg-neutral-300 disabled:text-neutral-500/80',

outline:
'border-2 border-primary text-primary bg-transparent hover:bg-primary-50/50 disabled:bg-neutral-100 disabled:border-neutral-300 disabled:text-neutral-500/75',

ghost:
'hover:bg-primary-50 border text-primary bg-transparent disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none',

secondary:
'bg-primary-100 text-primary hover:bg-primary-200 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none',...};

/*Tamanhos*/
size:{
sm:
 'px-[0.9em] py-[0.62713rem] text-sm-button',

default:
 'px-[0.9em] py-[0.73580rem] text-button',

lg:
 'px-[0.9em] py-[0.84375rem] text-lg-button',

outline-sm:
 'px-[0.79542em] py-[0.55611rem] text-sm-button',

outline-default:
 'px-[0.80093em] py-[0.65447rem] text-button',

outline-lg:
 'px-[0.80588em] py-[0.75284rem] text-lg-button',

icon-sm: size-8,
icon: size-8.5,
icon-md: size-9,
icon-button: size-10,
}
```

```js
import { LucideIcon } from 'lucide-react';

interface IconProps {
  size?: string;
  Icon: LucideIcon;
  className?: string;
  strokeValue: string | number;
}

const iconSizes = {
xs: "0.937em",
sm: "0.968em",
md: "1em",
lg: "1.033em",
h6: "1.067em",
h5: "1.138em",
h4: "1.215em",
h3: "1.296em",
xl: "1.067em",
2xl: "1.138em",
3xl: "1.215em",
4xl: "1.296em",
};

const weights = {
thin: 2.2,
light: 2.4,
};

export const Icon = ({ size, LucideIcon, className, strokeValue }: IconProps) => {
return (
<LucideIcon size={iconSizes[size] || size || "1em"} strokeWidth={weights[strokeValue] || strokeValue || 2.6} className={className || ""} />
);};

/*Exemplo de uso
<LucideIcon size="sm" Icon={Play} />
Passe para a prop size uma string key de iconSizes ou qualquer valor de altura CSS válido, 12px por exemplo

Passe para a prop strokeValue uma string key de weights ou qualquer valor de peso numérico válido*/
```

```js
const iconSizes = {
xs: "0.937em",
sm: "0.968em",
md: "1em",
lg: "1.033em",
h6: "1.067em",
h5: "1.138em",
h4: "1.215em",
h3: "1.296em",
xl: "1.067em",
2xl: "1.138em",
3xl: "1.215em",
4xl: "1.296em",
};

interface IconProps {
  icon: string;
  size?: string;
  fill?: number;
  weight?: number;
  margin?: string;
  className?: string;
}

export const MuiIcon = ({
  icon,
  size,
  fill = 0,
  weight = 600,
  margin = '0',
  className,
}: IconProps) => {
return (
  <span
    className={className || 'material-symbols-rounded'}
    style={{
      margin: margin,
      fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}`,
      fontSize: iconSizes[size] || size || '1em',
    }}>
    {icon}
  </span>
);
};
```

## Composição do projeto

### Core

- **[React](https://react.dev/)** `18.3.1` - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** `5.8.3` - Superset tipado de JavaScript
- **[Vite](https://vitejs.dev/)** `5.4.19` - Build tool e dev server ultrarrápido

### UI Components e estilos

- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis construídos com Radix UI
- **[Tailwind CSS](https://tailwindcss.com/)** `4.1.17` - Framework CSS utilitário
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[Sonner](https://sonner.emilkowal.ski/)** - Notificações toast elegantes

## Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

## Autor

**Leonardo Souza Bento**

- GitHub: [@LeonardoSouzaBento](https://github.com/LeonardoSouzaBento)

<div align="center">
**Desenvolvido usando React, TypeScript e Tailwind CSS**
</div>

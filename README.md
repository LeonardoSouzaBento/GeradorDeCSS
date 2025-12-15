## Acesse:

https://typographic-scale-generator.netlify.app/

## Para que serve? O que faz?

Typographic Scale Generator cria tamanhos de fonte responsivos de forma profissional para que voce.
Copie para área de transferência o CSS com tamanhos responsivos e tenha tags seguindo uma hierarquia de tamanho padronizada.
Usamos um conjunnto especifico de dados para usar nas funcçõe.

## Complexidade do projeto

Embora seja basicamente retornar strings, o processo envolve muitas funções e cálculos. Entre as funções, temos: uma função para remover a quantidade de zeros desnecessários e arredondar para 6 casas decimais os números sem zeros a mais; uma função para gerar uma tabela de clamps com base nos valores recebidos para aplicar responsividade ao componente prévio; funções para formatar a saída em CSS e formatar a saída em Tailwind.

Além disso, para avisar mudanças no layout, temos um hook useRemObserver que pega o valor em px do font-size do HTML para descobrir a medida rem e manter a responsividade; e um hook useResizeWatcher para avisar resize de tela para aplicar tamanhos corretos nas divs.

## Inportancia do projeto

Tendo como fim a escalabilidade, sabemos que criar interfaces a partir de uma base padronizada de estilos é muito importante, principalmente nesse tempo de constante uso de Inteligência Artificial para codificação. É um conhecimento simples, porém não intuitivo, que orienta o trabalho de IAs, nos dá o poder de conferir se ela está aplicando um padrão de estilos conveniente e o saber personalizar sem perder a consistência entre componentes ou entre telas. Para alcançar um design belo e funcional dessa forma, aplicar uma escala tipográfica responsiva é essencial.

Esse projeto mostra uma parte importante do meu conhecimento, especialmente em UI design, mas também em React, TypeScript, Tailwind CSS e uso de componentes reutilizáveis como os de shadcn/ui.

## Exemplo de Saída -

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
    @apply text-[1.05rem] sm:text-[1.0625rem] md:text-[1.065rem] lg:text-[1.07rem] xl:text-[1.075rem] 2xl:text-[1.0800rem];
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

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

## 👨‍💻 Autor

**Leonardo Souza Bento**

- GitHub: [@LeonardoSouzaBento](https://github.com/LeonardoSouzaBento)

<div align="center">

**Desenvolvido usando React, TypeScript e Tailwind CSS**

</div>
````

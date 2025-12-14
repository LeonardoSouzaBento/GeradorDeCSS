export const questions = [
  {
    question: `Porque não usar um clamp no body?`,
    answer: `Estamos usando clamps em todas as tags do componente de prévia, no entanto, clamps exigem o fornecimento de um valor absoluto dentro da função calc interna. Precisariamos de algo como 'clamp(1rem, calc(15px + 0.0651vw), 2rem)', fornecendo um valor em pixels para o calc. Aplicar valores fixos para fontes é ruim para a acessibilidade e considerado uma má prática.`,
  },
  {
    question: `Porque definir o mesmo tamanho de fonte até 640px?`,
    answer: `Primeiro, porque isso garante que a fonte fique bem legível em telefones pequenos. Depois, porque hoje em dia quase todos os smartphones modernos têm uma largura de tela maior que 375px. Além disso, assim precisamos de menos media queries — um detalhe com alguma importância.`,
  },
  {
    question: `Porque "rem" e "em" são as melhores medidas?`,
    answer: `Por conta da necessidade de acessibilidade para grupos específicos (pessoas com baixa visão e idosos). Além disso, existe a facilidade de que se o fonte-size do elemento raiz (a tag html) for alterado, todos os outros elementos (títulos, margens, padding, etc.) se ajustarão automaticamente e de forma proporcional ao novo tamanho base definido, considerando que o tailwind define tudo utilizando rem por padrão (rem significa "em relação ao tamanho da raiz", que por padrão é 16px).`,
  },
  {
    question: `Porque esse site é util?`,
    answer: `Ao gerar para você estilos padronizados para a maioria das tags e pegar a lista de demais estilos recomendados clicando em "ver mais estilos recomendados", você garante que seu projeto tenha uma base completa de estilização de tipografia, melhorando muito o design de interface da sua aplicação e a experiência do usuário e aumentando o valor do seu produto.`,
  },
  {
    question: `Como trabalhamos a escalada (para leigos)?`,
    answer: `As tags herdam os tamanhos de fonte do body. Aplicando a medida "em" ("em" é em relação ao tamanho de fonte do elemento pai), dizemos o quanto elas devem ser menores ou maiores que o font-size do body.`,
  },
];


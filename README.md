# Our Love Soundtrack

Quero que você crie um site de página única (SPA), em React + Tailwind, que simula o app do Spotify (visual mobile-first, tipo um card de "música tocando"), como uma homenagem animada de aniversário de namoro. O tom é romântico, elegante e emocional, mas com a estética exata do Spotify (fundo escuro, vermelho vinho/bordô como cor de destaque no lugar do verde, tipografia bold, cantos arredondados, sombra suave). O site deve ser MUITO animado — transições suaves em tudo, sem nada aparecendo "seco".

Stack e comportamento geral

React + Tailwind CSS, componentizado.

Usar Framer Motion para todas as animações (fade, slide, scale, spring).

Layout mobile-first, centralizado, como se fosse a tela de um celular (max-width tipo 420px, cantos arredondados, sombra, como um "card" flutuando no centro da tela em telas grandes).

Scroll suave entre as seções (scroll snap por seção, uma seção por "página").

Paleta: vermelho vinho/bordô (#7a0c1e a #b30021), preto/cinza escuro (#121212, #1a1a1a), branco e um rosa claro como cor secundária de destaque em textos.

Fonte estilo Spotify: bold, moderna, tipo "Circular" — usar algo como "Inter" ou "Poppins" com pesos 700/800 nos títulos.

Seção 1 — Tela do "Player" (topo, primeira coisa que a pessoa vê)

Réplica de uma tela de player do Spotify tocando a música:

Barra superior com seta para baixo (ícone de "minimizar"), texto centralizado "Você, o fim do dia solitário" (nome de uma playlist/rádio fictícia), e um ícone de "..." (três pontinhos) à direita.

Uma foto grande do casal ocupando o topo (arredondada nas bordas), com efeito de leve zoom/parallax ao rolar a página (a imagem deve dar uma leve "respirada" — scale de 1 para 1.03 em loop lento).

Abaixo da foto: nome da música "Lonely Day (Official Video)" cortado à esquerda como no Spotify real (parece continuar fora da tela), nome do artista "System Of A Down" embaixo, e um ícone de coração/check vermelho preenchido à direita (like ativo), com uma animação de "pulso" sutil no ícone.

Barra de progresso da música: começa em 0:00 e vai animando sozinha até -2:52 (fazer ela andar de verdade com JS, tipo um progresso real, dando a sensação de que a música está tocando).

Controles do player: ícone de shuffle, voltar faixa, play/pause (botão branco grande e circular no centro, com o triângulo de play em vermelho vinho), avançar faixa, repeat — todos funcionais visualmente (ao clicar em play, o ícone troca para pause com animação e a barra de progresso começa a andar).

Um pequeno indicador "Sobre o casal" aparecendo colado na parte de baixo da tela, sugerindo que dá pra arrastar/rolar pra ver mais (com uma seta ou animação de "puxe para cima" sutil, tipo bounce infinito).

Seção 2 — "Sobre o casal"

Ao rolar (ou "puxar" a tela pra cima), aparece um card escuro sobreposto:

Título "Sobre o casal" no topo.

Uma foto do casal (selfie), com cantos arredondados.

Nome do casal em destaque: "Petryk e Izabella".

Subtítulo: "Juntos desde 2024".

Uma grade de 6 contadores estilo "cards" (2 linhas de 3), com número grande em branco e legenda pequena embaixo em cinza: Anos, Meses, Dias, Horas, Minutos, Segundos.

IMPORTANTE: os contadores de Horas, Minutos e Segundos devem ser um contador em tempo real de verdade, calculado em JavaScript a partir da data de início do namoro (deixar uma constante fácil de editar tipo const dataInicio = new Date("2024-08-25") — pode usar uma data placeholder, vou ajustar depois), atualizando a cada segundo com uma animação de "flip"/troca de número suave (tipo odômetro).

Anos, Meses e Dias calculados corretamente a partir da data também, e recalculando dinamicamente (não fixo).

Ao entrar na tela, os cards de números devem subir com fade + stagger (um depois do outro, efeito cascata).

Seção 3 — "Mensagem especial" (card com reveal)

Card vermelho vinho com cantos arredondados.

Título pequeno "Mensagem especial".

Um texto de abertura, em branco/rosa claro, tipo teaser (uma ou duas frases emocionantes, mas NÃO a mensagem toda).

Um botão em pílula branca "Mostrar Mensagem".

Ao clicar no botão, ele deve fazer uma transição animada (crossfade + slide) para a tela de letra completa (seção 4), como se estivesse "abrindo a letra da música" — igual ao Spotify quando você toca no ícone de letras.

Seção 4 — Tela de "letras" (a carta de verdade)

Réplica da tela de letras sincronizadas do Spotify tocando a mesma música:

Barra superior escura com seta de voltar à esquerda, no centro o nome da música "Lonely Day" + artista "System Of A Down" (texto pequeno embaixo), e um ícone de bandeira/report à direita.

Fundo vermelho vinho.

O "texto da carta" (a mensagem de aniversário) aparece formatado como se fossem linhas de letra de música: linhas em branco bold que vão ficando destacadas (linha atual mais brilhante/branca, linhas já "passadas" ficam com opacidade menor tipo rosa claro/acinzentado, como letra sincronizada tocando).

Fazer esse efeito de "karaokê": a cada poucos segundos a linha ativa muda automaticamente (auto-scroll + destaque), simulando a letra acompanhando a música, mesmo sem áudio real tocando de verdade.

Deixar o texto da carta em uma variável fácil de editar (array de strings, uma por "linha/parágrafo"), com o conteúdo de exemplo:

"Dois anos. Parece pouco tempo pra tudo que você já significa pra mim."

"Aprendi que 'lar' não é um lugar, é um sentimento — e esse sentimento tem o seu sorriso, sua paciência, seu jeito de estar comigo em qualquer dia, bom ou ruim."

(deixar mais 2-3 parágrafos de placeholder tipo "[continue a carta aqui]" pra eu completar depois)

Barra de progresso da música embaixo, indo de 0:00 até -2:52, andando em loop lento.

Botão de play/pause centralizado embaixo, igual ao da primeira tela.

Scrollbar lateral fininha à direita (decorativa, como no Spotify), com efeito de deslizar sozinha acompanhando a letra ativa.

Seção 5 — Retrospectiva (fotos do casal)

Depois da carta, uma seção nova, ainda dentro do mesmo estilo visual (fundo escuro/preto, com detalhes vermelho vinho):

Título grande "Nossa retrospectiva" ou "2 anos em fotos".

Um carrossel/galeria estilo "timeline" vertical ou grid, com cada foto dentro de um card arredondado com sombra, e uma legenda pequena embaixo (data ou frase curta) — deixar espaço para eu trocar por fotos reais depois (usar por enquanto imagens placeholder com proporção de foto de celular, tipo 4:5 ou 1:1).

Animação: cada foto deve entrar com fade + slide up conforme a pessoa rola a tela (scroll reveal / intersection observer), como se as memórias fossem "aparecendo" aos poucos.

Se possível, alternar o alinhamento das fotos (uma à esquerda, outra à direita) tipo timeline de linha do tempo, com uma linha vertical vermelho vinho ligando os pontos, com bolinhas nos marcos.

No final da retrospectiva, uma mensagem de fechamento centralizada, tipo "Que venham muitos mais 🍷🎶" com efeito de partículas/confetes sutis em vermelho e branco caindo de leve (loop leve, discreto, sem exagero).

Extras de animação (aplicar no site todo)

Transições de página/seção sempre suaves (nunca corte seco).

Hover states nos botões (leve scale/brightness).

Loading inicial: uma tela de splash rápida com o logo/coração pulsando antes de abrir o player, tipo 1-1.5s, com fade out.

Responsivo: funcionar bem tanto no celular quanto no desktop (no desktop, o "card" central fica com bordas visíveis simulando um app mobile, com um fundo desfocado/gradiente atrás).

Estruture o código em componentes separados (PlayerScreen, AboutCouple, SpecialMessageCard, LyricsScreen, RetrospectiveSection) para eu conseguir editar fácil depois, e deixe bem comentado onde estão as variáveis que eu preciso trocar (data de início do namoro, nome dos dois, texto da carta, fotos da retrospectiva).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://anniversary-tune.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d0b31dbf-1efc-455b-afdf-bd307371a334).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

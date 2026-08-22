/* =========================================================================
 * ARQUIVO DE CONFIGURAÇÃO — EDITE AQUI
 * =======================================================================*/

import couple1 from "@/assets/couple-1.jpg";
import couple5 from "@/assets/couple-5.jpg";
import couple6 from "@/assets/couple-6.jpg";
import coupleAu from "@/assets/couple-au.jpg";
import coupleSobre from "@/assets/couple-sobre.jpg";
import coupleTismo from "@/assets/couple-tismo.jpg";

/** Data de início do namoro (ano, mês, dia) */
export const dataInicio = new Date("2024-08-25T00:00:00");

/** Nomes */
export const nomeCasal = "Petryk e Izabella";
export const desdeTexto = "Juntos desde 2024";

/** Playlist / música fictícia */
export const playlistNome = "Você, o fim do dia solitário";
export const musicaNome = "Lonely Day (Official Video)";
export const musicaNomeCurto = "Lonely Day";
export const artista = "System Of A Down";
/** Duração da faixa em segundos (2:52) */
export const duracaoSegundos = 172;
/** Arquivo de áudio (fica em /public/audio) — toca sozinho quando a página abre */
export const musicaSrc = "/audio/lonely-day.mp3";

/** Fotos principais */
export const fotoPlayer = couple1;
export const fotoSobre = coupleSobre;

/** Teaser da mensagem especial */
export const mensagemTeaser =
  "Dois anos. Parece pouco tempo pra tudo que você já significa pra mim.";

/** CARTA — uma string por linha/parágrafo (efeito karaokê) */
export const cartaLinhas = [
  "Dois anos. Parece pouco tempo pra tudo que você já significa pra mim.",
  "Aprendi que \u201Clar\u201D não é um lugar, é um sentimento — e esse sentimento tem o seu sorriso, sua paciência, seu jeito de estar comigo em qualquer dia, bom ou ruim.",
  "Você transforma coisa simples em memória boa: um fim de semana de filme no sofá, uma partida boba de Minecraft, qualquer dia comum vira dia especial só por você estar nele.",
  "Eu te admiro mais do que você imagina — pela sua inteligência, pela facilidade que você tem de aprender e enfrentar tudo, e principalmente por ser exatamente do jeito que você é, sem pedir desculpas por isso.",
  "Obrigado por esses dois anos. Que venham muitos outros — cheios de filme, sofá, risada e você.",
  "Eu te amo. ❤️",
];

/** Retrospectiva — troque por fotos reais depois */
export const retrospectiva = [
  { src: couple1, legenda: "Agosto de 2024 — o começo de tudo" },
  { src: couple6, legenda: "Nosso primeiro ano novo juntos" },
  { src: coupleAu, legenda: "Você é o Au" },
  { src: coupleTismo, legenda: "Do meu Tismo" },
  { src: couple5, legenda: "Hoje, dois anos depois — e ainda de mãos dadas" },
];

export const mensagemFinal = "Que venham muitos mais 🍷🎶";
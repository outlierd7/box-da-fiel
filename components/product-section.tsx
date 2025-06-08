"use client"
import { useState } from "react"
import { ProductCard } from "./product-card"
import { ProductDetailModal } from "./product-detail-modal"

export interface BoxPossibleItem {
  id: string
  name: string
  imageUrl: string
  value: string
  odd: string
}

export interface ProductData {
  name: string
  price: string
  imageSrc: string
  checkoutLink: string
  description: string
  possibleItems: BoxPossibleItem[]
}

export const productsData: ProductData[] = [
  {
    name: "Fiel Drink's",
    price: "19,90",
    imageSrc: "https://images.boxdasorte.com/Upload/3/Caixa/1744676388283_2.png",
    checkoutLink: "https://pay.boxtimao.store/zj6aGnA8NNkZwlK",
    description:
      "A caixa perfeita para o esquenta do jogo ou para celebrar as vitórias do Timão com estilo. Brinde com o Corinthians!",
    possibleItems: [
      {
        id: "drinks-item1",
        name: "Foto no gramado da Arena",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732668358990_PRODUTOS-2---FOTO.png",
        value: "Impagável",
        odd: "0.15%",
      },
      {
        id: "drinks-item2",
        name: "Royal Salute",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1732745323137_1693450267200_25.png",
        value: "R$ 1.200,00",
        odd: "0.14%",
      },
      {
        id: "drinks-item3",
        name: "Camarote Brahma",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745457371076_Prancheta 4.png",
        value: "R$ 800,00",
        odd: "0.21%",
      },
      {
        id: "drinks-item4",
        name: "Champagne Veuve Clicquot",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1732745236271_1693452215736_31.png",
        value: "R$ 699,00",
        odd: "0.24%",
      },
      {
        id: "drinks-item5",
        name: "Licor 43",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1732745181986_1693453328391_35.png",
        value: "R$ 169,90",
        odd: "0.99%",
      },
      {
        id: "drinks-item6",
        name: "Balde Metal Decorado Fiel Drink's",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732654735453_10.png",
        value: "R$ 119,00",
        odd: "1.41%",
      },
      {
        id: "drinks-item7",
        name: "Red Label 1L",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1749159590429_redlabel.png",
        value: "R$ 109,90",
        odd: "1.53%",
      },
      {
        id: "drinks-item8",
        name: "Vodka Absolut 750ml",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1732745612992_1706722678154_2fe6d496bfc25459b8989831a4cb3296.png",
        value: "R$ 89,90",
        odd: "1.86%",
      },
      {
        id: "drinks-item9",
        name: "Abridor de Vinho Elétrico",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745453059684_Prancheta 11.png",
        value: "R$ 79,90",
        odd: "2.1%",
      },
      {
        id: "drinks-item10",
        name: "Red Label 500ml",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745446048687_Prancheta 14.png",
        value: "R$ 69,90",
        odd: "2.4%",
      },
      {
        id: "drinks-item11",
        name: "Black Label 50ml + Copo",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1734915085974_8.png",
        value: "R$ 30,00",
        odd: "4.49%",
      },
      {
        id: "drinks-item12",
        name: "Amarula 50ml + Copo",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1734914635626_7.png",
        value: "R$ 30,00",
        odd: "4.49%",
      },
      {
        id: "drinks-item13",
        name: "Copo Vidro 300ml",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1749158523101_copovidro_300ml.png",
        value: "R$ 29,90",
        odd: "4.49%",
      },
      {
        id: "drinks-item14",
        name: "Jagermeister 20ml + Copo",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1734913369594_1.png",
        value: "R$ 28,00",
        odd: "4.88%",
      },
      {
        id: "drinks-item15",
        name: "Red Label 50ml + Copo",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1734915118063_12.png",
        value: "R$ 27,90",
        odd: "4.49%",
      },
      {
        id: "drinks-item16",
        name: "Copo Colecionável Yuri Alberto",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655315021_03 (3).png",
        value: "R$ 25,00",
        odd: "6.71%",
      },
      {
        id: "drinks-item17",
        name: "Copo Colecionável Memphis Depay",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655333448_04 (2).png",
        value: "R$ 25,00",
        odd: "6.71%",
      },
      {
        id: "drinks-item18",
        name: "Copo Colecionável Hugo Souza",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655371430_07 (3).png",
        value: "R$ 25,00",
        odd: "6.71%",
      },
      {
        id: "drinks-item19",
        name: "Copo Colecionável R. Garro",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655359464_06 (3).png",
        value: "R$ 25,00",
        odd: "6.71%",
      },
      {
        id: "drinks-item20",
        name: "Copo Colecionável A. Romero",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655348582_05 (1).png",
        value: "R$ 25,00",
        odd: "6.71%",
      },
      {
        id: "drinks-item21",
        name: "Copo Plástico Corinthians 600ml",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745457349800_Prancheta 2.png",
        value: "R$ 25,00",
        odd: "6.71%",
      },
      {
        id: "drinks-item22",
        name: "Copo Plástico Corinthians 500ml",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745457360664_Prancheta 3.png",
        value: "R$ 25,00",
        odd: "6.71%",
      },
      {
        id: "drinks-item23",
        name: "Copo Munich 200ml",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1749158223291_copomunich_cfc200ml.png",
        value: "R$ 25,00",
        odd: "6.01%",
      },
      {
        id: "drinks-item24",
        name: "Copo Dose Individual Metal Corinthians",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745457335622_Prancheta 1.png",
        value: "R$ 25,00",
        odd: "6.65%",
      },
      {
        id: "drinks-item25",
        name: "Copo Americano 190ml",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1749158411988_copo 190ml.png",
        value: "R$ 6,31",
        odd: "6.5%",
      },
    ],
  },
  {
    name: "Bando de Loucos",
    price: "79,00",
    imageSrc: "https://images.boxdasorte.com/Upload/3/Caixa/1744676367871_1.png",
    checkoutLink: "https://pay.boxtimao.store/VroegN1XllYGKwj",
    description:
      "Mostre sua paixão pelo Coringão com itens essenciais para todo torcedor. Vista o manto e apoie o time!",
    possibleItems: [
      {
        id: "loucos-item1",
        name: "Chute no Campo",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745450430825_PRODUTOS--CHUTE-AO-GOL.png",
        value: "Impagável",
        odd: "1%",
      },
      {
        id: "loucos-item2",
        name: "CAMISA HUGO AUTOGRAFADA",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1747313188459_2 300.png",
        value: "Impagável",
        odd: "0.1%",
      },
      {
        id: "loucos-item3",
        name: "Televisão 55 Polegadas",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1732741168031_tv 55.png",
        value: "R$ 2.900,00",
        odd: "1.4%",
      },
      {
        id: "loucos-item4",
        name: "Caixa de Som JBL PartyBox 110",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1733175706117_jbl-grande.png",
        value: "R$ 2.600,00",
        odd: "1.5%",
      },
      {
        id: "loucos-item5",
        name: "Camiseta Oficial Corinthians 24/25 Performance",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1733175765005_c1.png",
        value: "R$ 349,90",
        odd: "1.5%",
      },
      {
        id: "loucos-item6",
        name: "Power Bank 10000mah",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745448104747_Prancheta 3.png",
        value: "R$ 149,90",
        odd: "5.7%",
      },
      {
        id: "loucos-item7",
        name: "Regata Corinthians Fitness em Helanca Com Recorte Frontal",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1736544383639_Prancheta 1 copiar 44.png",
        value: "R$ 149,90",
        odd: "5.7%",
      },
      {
        id: "loucos-item8",
        name: "Faca Premium Corinthians",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745455735449_Prancheta 1.png",
        value: "R$ 139,90",
        odd: "3%",
      },
      {
        id: "loucos-item9",
        name: "Garrafa Corinthians Alumínio 500ml",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745456129679_2.png",
        value: "R$ 129,90",
        odd: "8.7%",
      },
      {
        id: "loucos-item10",
        name: "CAIXA DE SOM 8W",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745448582791_Prancheta 6.png",
        value: "R$ 119,90",
        odd: "5.7%",
      },
      {
        id: "loucos-item11",
        name: "Camiseta Corinthians Manga Curta Estampada 1910",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1736543785539_Prancheta 1 copiar 27.png",
        value: "R$ 119,00",
        odd: "6.7%",
      },
      {
        id: "loucos-item12",
        name: "Carteira Corinthians 1910",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745455742760_Prancheta 2.png",
        value: "R$ 99,99",
        odd: "6.4%",
      },
      {
        id: "loucos-item13",
        name: "Testeira Corinthians Memphis Depay Versão Jogador Oficial Preta",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732657691968_02 (3).png",
        value: "R$ 99,99",
        odd: "6.7%",
      },
      {
        id: "loucos-item14",
        name: "Testeira Corinthians Memphis Depay Versão Jogador Oficial Branca",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732657671684_01 (7).png",
        value: "R$ 99,99",
        odd: "6.7%",
      },
      {
        id: "loucos-item15",
        name: "Regata Corinthians Fitness Recortes Nas Laterais",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1736544172823_Prancheta 1 copiar 38.png",
        value: "R$ 99,99",
        odd: "6.7%",
      },
      {
        id: "loucos-item16",
        name: "Fone BT M19",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745448450653_Prancheta 1.png",
        value: "R$ 99,90",
        odd: "6.7%",
      },
      {
        id: "loucos-item17",
        name: "Caixa de Som BT Prova D'Água",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745448495769_Prancheta 2.png",
        value: "R$ 79,90",
        odd: "6.7%",
      },
      {
        id: "loucos-item18",
        name: "Mini Bola Corinthians",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1744748452759_Prancheta 5.png",
        value: "R$ 79,90",
        odd: "10%",
      },
    ],
  },
  {
    name: "Fiel Torcedora",
    price: "119,90",
    imageSrc: "https://images.boxdasorte.com/Upload/3/Caixa/1744676443205_4.png",
    checkoutLink: "https://pay.boxtimao.store/rn4RgQvNOqn3wBV",
    description:
      "Itens pensados especialmente para as Corinthianas que amam o Timão com todo o coração. Estilo e paixão em cada detalhe.",
    possibleItems: [
      {
        id: "torcedora-item1",
        name: "Chute no Campo",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745450776164_PRODUTOS--CHUTE-AO-GOL.png",
        value: "Impagável",
        odd: "0.4%",
      },
      {
        id: "torcedora-item2",
        name: "Caixa de Som JBL PartyBox 110",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1733175706117_jbl-grande.png",
        value: "R$ 2.600,00",
        odd: "0.5%",
      },
      {
        id: "torcedora-item3",
        name: "Televisão 55 Polegadas",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1732741168031_tv 55.png",
        value: "R$ 2.900,00",
        odd: "0.5%",
      },
      {
        id: "torcedora-item4",
        name: "Camiseta Oficial Corinthians 24/25 Torcedora",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1733175817432_c2.png",
        value: "R$ 349,90",
        odd: "0.5%",
      },
      {
        id: "torcedora-item5",
        name: "Camisa Polo Retrô Corinthians Kalunga Feminina",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732670708257_2.png",
        value: "R$ 239,90",
        odd: "5.6%",
      },
      {
        id: "torcedora-item6",
        name: "Camiseta Corinthians Listras",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745524725043_camisa.png",
        value: "R$ 199,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item7",
        name: "Fone Pure Bass",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745449664421_Prancheta 4.png",
        value: "R$ 179,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item8",
        name: "Calça Legging Corinthians Fitness Feminina Basic",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655957772_01.png",
        value: "R$ 169,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item9",
        name: "Camiseta Corinthians Feminina Cropped Listras",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1736546069115_Prancheta 1 copiar 75.png",
        value: "R$ 179,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item10",
        name: "Power Bank 10000mah",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745448048566_Prancheta 3.png",
        value: "R$ 149,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item11",
        name: "Short Treino Corinthians Recorte Lateral",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732657173886_09 (3).png",
        value: "R$ 149,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item12",
        name: "Top Corinthians Fitness Detalhes em Tecido",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732657318212_07 (6).png",
        value: "R$ 149,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item13",
        name: "Top Corinthians Feminino Com Bojo Alça Dupla Branco",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732656362562_07 (2).png",
        value: "R$ 129,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item14",
        name: "Top Corinthians Feminino Com Bojo Frente Única",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732656921417_04.png",
        value: "R$ 129,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item15",
        name: "Camiseta Corinthians Malha Fina Branco",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732655783739_09 (4).png",
        value: "R$ 129,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item16",
        name: "Garrafa Corinthians Alumínio 500ml",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745456299719_2.png",
        value: "R$ 129,90",
        odd: "7.7%",
      },
      {
        id: "torcedora-item17",
        name: "Camiseta Corinthians Respeita as Mina",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1744724643406_Prancheta 18.png",
        value: "R$ 129,90",
        odd: "7.7%",
      },
    ],
  },
  {
    name: "Fiel Sortudo",
    price: "149,90",
    imageSrc: "https://images.boxdasorte.com/Upload/3/Caixa/1744676417443_3.png",
    checkoutLink: "https://pay.boxtimao.store/bz5KZbVlkr4Z7dL",
    description:
      "Uma seleção premium de produtos para os torcedores mais sortudos e exigentes. Itens de alto valor e exclusividade garantida.",
    possibleItems: [
      {
        id: "sortudo-item1",
        name: "Camisa Oficial Autografada",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732667991574_camisa.png",
        value: "Impagável",
        odd: "0.05%",
      },
      {
        id: "sortudo-item2",
        name: "Voo de Helicóptero na Arena",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732667625838_PRODUTOS---HELICOP.png",
        value: "Impagável",
        odd: "0.05%",
      },
      {
        id: "sortudo-item3",
        name: "Acesso Livre a Camarote em Todos os Jogos de 2025",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732667645562_PRODUTOS--SORTUDO.png",
        value: "Impagável",
        odd: "0.05%",
      },
      {
        id: "sortudo-item4",
        name: "CAMISA HUGO AUTOGRAFADA",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1747313061935_1 300.png",
        value: "Impagável",
        odd: "0.1%",
      },
      {
        id: "sortudo-item5",
        name: "PlayStation 5",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1732741214007_ps5.png",
        value: "R$ 3.990,00",
        odd: "1.5%",
      },
      {
        id: "sortudo-item6",
        name: "Caixa de Som JBL PartyBox 110",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1733175706117_jbl-grande.png",
        value: "R$ 2.600,00",
        odd: "1.5%",
      },
      {
        id: "sortudo-item7",
        name: "JAQUETA CORINTHIANS",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745517608671_teste.png",
        value: "R$ 499,90",
        odd: "2%",
      },
      {
        id: "sortudo-item8",
        name: "CAIXA DE SOM MUSIC RGB 20W",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745518643444_Prancheta 7.png",
        value: "R$ 349,90",
        odd: "2%",
      },
      {
        id: "sortudo-item9",
        name: "CAIXA BIG SOUND RGB",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745518601221_Prancheta 10.png",
        value: "R$ 299,90",
        odd: "8.3%",
      },
      {
        id: "sortudo-item10",
        name: "Mochila Corinthians Casual",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1736546512814_Prancheta 1 copiar 90.png",
        value: "R$ 299,99",
        odd: "3.05%",
      },
      {
        id: "sortudo-item11",
        name: "Relógio Smartwatch W69 Ultra",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745518498564_Prancheta 12.png",
        value: "R$ 289,90",
        odd: "3.3%",
      },
      {
        id: "sortudo-item12",
        name: "Camiseta Corinthians Polo Símbolo Preto",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745517035487_polo.png",
        value: "R$ 269,90",
        odd: "3.3%",
      },
      {
        id: "sortudo-item13",
        name: "Camiseta Corinthians Retro 1977",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1744724972592_Prancheta 12.png",
        value: "R$ 249,90",
        odd: "5%",
      },
      {
        id: "sortudo-item14",
        name: "Camiseta Masculina Retrô Corinthians Democracia 1982",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1732656043252_05.png",
        value: "R$ 229,90",
        odd: "4.5%",
      },
      {
        id: "sortudo-item15",
        name: "Camiseta Corinthians Helanca Branco e Preto",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1744725111840_Prancheta 27.png",
        value: "R$ 199,90",
        odd: "3%",
      },
      {
        id: "sortudo-item16",
        name: "CAIXA DE SOM C/ 2MIC",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745518444558_Prancheta 5.png",
        value: "R$ 199,90",
        odd: "7.9%",
      },
      {
        id: "sortudo-item17",
        name: "Caixa de Som Retrô",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1745518553617_Prancheta 9.png",
        value: "R$ 199,90",
        odd: "9%",
      },
      {
        id: "sortudo-item18",
        name: "Camiseta Corinthians Gola de Retilínea e Estampa",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1736543844910_Prancheta 1 copiar 28.png",
        value: "R$ 199,90",
        odd: "5.9%",
      },
      {
        id: "sortudo-item19",
        name: "Camiseta Corinthians Listra Horizontal Gola V",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1744723342628_Prancheta 19.png",
        value: "R$ 199,90",
        odd: "7.7%",
      },
      {
        id: "sortudo-item20",
        name: "Camiseta Corinthians Com Brasão Frente Bordado",
        imageUrl: "https://images.boxdasorte.com/Upload/3/Produto/1744724753853_Prancheta 30.png",
        value: "R$ 199,90",
        odd: "7.7%",
      },
      {
        id: "sortudo-item21",
        name: "Carteira Corinthians 1982 Caramelo",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745559702814_3.png",
        value: "R$ 199,90",
        odd: "6.7%",
      },
      {
        id: "sortudo-item22",
        name: "Carteira Corinthians 1982 Preto",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745559716237_2.png",
        value: "R$ 199,90",
        odd: "8.7%",
      },
      {
        id: "sortudo-item23",
        name: "Carteira Corinthians 2012 Preto",
        imageUrl: "https://images.boxdasorte.com/Upload/3/CaixaItem/1745559730456_1.png",
        value: "R$ 199,90",
        odd: "8.7%",
      },
    ],
  },
]

interface ProductSectionProps {
  // No props needed currently
}

export function ProductSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)

  const handleOpenModal = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section id="produtos" className="py-10 sm:py-16 bg-brand-backgroundLight">
      <div className="container mx-auto">
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-text uppercase tracking-wider">ESCOLHA SUA CAIXA</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {productsData.map((product) => (
            <ProductCard key={product.name} product={product} onDetailsClick={() => handleOpenModal(product)} />
          ))}
        </div>
      </div>
      <ProductDetailModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </section>
  )
}

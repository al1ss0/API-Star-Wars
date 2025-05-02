// src/services/image.js

export const characters = [
  {
    name: "Luke Skywalker",
    image: "https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg",
    starships: [
      {
        name: "X-wing",
        image: "https://lumiere-a.akamaihd.net/v1/images/databank_xwingstarfighter_01_169_c00598f0.jpeg",
      },
      {
        name: "Imperial shuttle",
        image: "https://lumiere-a.akamaihd.net/v1/images/databank_imperialshuttle_01_169_e365bb70.jpeg",
      },
    ],
  },
  {
    name: "Darth Vader",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Darth_Vader.jpg/800px-Darth_Vader.jpg",
    starships: [
      {
        name: "TIE Advanced x1",
        image: "https://lumiere-a.akamaihd.net/v1/images/tie-advanced-x1-main_6e32e8ff.jpeg",
      },
    ],
  },
  {
    name: "Han Solo",
    image: "https://lumiere-a.akamaihd.net/v1/images/han-solo-main_11ac7f4a.jpeg",
    starships: [
      {
        name: "Millennium Falcon",
        image: "https://lumiere-a.akamaihd.net/v1/images/databank_millenniumfalcon_01_169_0e328131.jpeg",
      },
    ],
  },
  {
    name: "Leia Organa",
    image: "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_f0906f23.jpeg",
    starships: [],
  },
];

// Mapeamento de imagens por nome do filme
export const movies = {
  "A New Hope": "https://upload.wikimedia.org/wikipedia/pt/3/32/Star_Wars_1977.jpg",
  "The Empire Strikes Back": "https://upload.wikimedia.org/wikipedia/pt/3/3c/The_Empire_Strikes_Back.jpg",
  "Return of the Jedi": "https://upload.wikimedia.org/wikipedia/pt/b/b2/ReturnOfTheJediPoster1983.jpg",
  "The Phantom Menace": "https://upload.wikimedia.org/wikipedia/pt/f/f9/Star_Wars_Episode_I_The_Phantom_Menace.jpg",
  "Attack of the Clones": "https://upload.wikimedia.org/wikipedia/pt/0/02/Attack_of_the_Clones_poster.jpg",
  "Revenge of the Sith": "https://upload.wikimedia.org/wikipedia/pt/2/21/Star_Wars_Episode_III_Revenge_of_the_Sith.jpg",
};

// Mapeamento de imagens por nome da nave
export const starships = {
  "X-wing": "https://lumiere-a.akamaihd.net/v1/images/databank_xwingstarfighter_01_169_c00598f0.jpeg",
  "Imperial shuttle": "https://lumiere-a.akamaihd.net/v1/images/databank_imperialshuttle_01_169_e365bb70.jpeg",
  "TIE Advanced x1": "https://lumiere-a.akamaihd.net/v1/images/tie-advanced-x1-main_6e32e8ff.jpeg",
  "Millennium Falcon": "https://lumiere-a.akamaihd.net/v1/images/databank_millenniumfalcon_01_169_0e328131.jpeg",
};

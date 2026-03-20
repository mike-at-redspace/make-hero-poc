import type { CarouselItem } from "../types/carousel.types";

/**
 * Static carousel feed for the POC. Criminal Minds is not in the Originals carousel feed;
 * remaining rows are merged from Paramount+ carousel pagination (offset 1, 21, 41, 61;
 * limit 20; total 80). Thumbs use w2560-q80 (upgraded from API w370). Poster/logo query
 * strings stripped. Typed as {@link CarouselItem}; `castNames` may be `null` per API rows.
 */
export const CAROUSEL_DATA: CarouselItem[] = [
  {
    id: "criminal-minds",
    showTitle: "Criminal Minds",
    about:
      "Their job is to catch criminals. Their specialty is to think like them. The FBI's elite Behavioral Analysis Unit profiles the nation's most dangerous serial killers.",
    brandName: "",
    genre: "CRIME",
    numSeasons: 18,
    castNames:
      "<span>Joe Mantegna</span><span>, A.J. Cook</span><span>, Kirsten Vangsness</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/51/35/37/show_asset_41688fd8-7550-4fd3-b0c9-869ce40c6b10.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/51/35/56/show_asset_4506b65a-fe06-4797-8228-1e3abd56c129.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/51/34/79/show_asset_b7acc6a5-8642-44ae-9820-da1dbff422db.png?format=webp",
    rating: "TV-14",
    seasonCounts: "18 SEASONS",
    premiereDate: "2005",
    button: {
      label: "Watch Now",
      url: "https://www.paramountplus.com/shows/criminal_minds/",
    },
  },

  {
    id: "tulsa-king",
    showTitle: "Tulsa King",
    about:
      'New York mafia capo Dwight "The General" Manfredi establishes a criminal empire in Tulsa, Oklahoma.',
    genre: "COMEDY",
    numSeasons: 3,
    castNames:
      "<span>Sylvester Stallone</span><span>, Jay Will</span><span>, Martin Starr</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/83/92/74/show_asset_9de50247-c9b4-4e49-bbc2-3632dfec1492.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2026/03/16/074e2f06-8cb5-47ff-b79c-3fd85c636353.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/83/92/46/show_asset_303116fa-9f3c-4362-bb64-26f235a82e54.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "3 SEASONS",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/tulsa-king/",
    },
  },

  {
    id: "seal-team",
    showTitle: "SEAL Team",
    about:
      "The most elite unit of Navy SEALs balances dangerous, high-stakes missions with challenges in their personal lives.",
    brandName: "CBS",
    genre: "DRAMA",
    numSeasons: 7,
    castNames:
      "<span>David Boreanaz</span><span>, Neil Brown Jr.</span><span>, AJ Buckley</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/35/74/51/show_asset_77cc0d42-423b-4ee8-a358-e4815fa3bfb6.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/35/76/87/show_asset_c5338cdb-00ef-4a7b-b1ef-994f2c58c90c.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/35/76/64/25/55/53/show_asset_929cb773-cc04-4c72-b8ef-47eaa9965806.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "7 SEASONS",
    premiereDate: "2017",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/seal-team/",
    },
  },

  {
    id: "school-spirits",
    showTitle: "School Spirits",
    about:
      "When Maddie finds herself trapped in afterlife limbo at her high school, she decides to investigate her own mysterious disappearance.",
    genre: "DRAMA",
    numSeasons: 3,
    castNames:
      "<span>Peyton List</span><span>, Kiara Pichardo</span><span>, Kristian Ventura</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2026/01/08/00d5842b-0864-4d29-89b0-7cae2a8b670a.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2026/01/08/0d013e18-149c-409b-88c3-f2bdce39725f.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/14/95/89/show_asset_a667198a-d26f-47f7-850c-ce995739a29d_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "3 SEASONS",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/school-spirits/",
    },
  },

  {
    id: "mayor-of-kingstown",
    showTitle: "Mayor of Kingstown",
    about:
      "The McLusky family is a powerful force in Kingstown, Michigan, where the business of incarceration is the only thriving industry.",
    genre: "CRIME",
    numSeasons: 4,
    castNames:
      "<span>Jeremy Renner</span><span>, Dianne Wiest</span><span>, Hugh Dillon</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/02/13/20/show_asset_817d84dd-a433-4312-bf34-bbad07f8311d.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/02/13/48/show_asset_dcb0cfaf-5751-47e7-a3db-e1a5f67a86ef.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/02/12/88/show_asset_ff3f3d05-7f2c-4d9b-b5c5-9e78771a323c.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "4 SEASONS",
    premiereDate: "2021",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/mayor-of-kingstown/",
    },
  },

  {
    id: "lioness",
    showTitle: "Lioness",
    about:
      "Agents Joe, Kaitlyn and Cruz embark on a dangerous undercover mission to stop the next September 11.",
    genre: "DRAMA",
    numSeasons: 2,
    castNames:
      "<span>Zoe Salda\u00f1a</span><span>, Michael Kelly</span><span>, Morgan Freeman</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/29/04/96/show_asset_e1b4ed64-9f6a-4ad6-8a1e-518dca09f6b6.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/29/05/19/show_asset_a17d22a8-12f4-4467-8500-dac0b7b35f9f.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/27/29/84/show_asset_42fcde65-310b-41f5-95b6-136504cb68d4.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "2 SEASONS",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/lioness/",
    },
  },

  {
    id: "star-trek-starfleet-academy",
    showTitle: "Star Trek: Starfleet Academy",
    about:
      "New cadets arrive at Starfleet Academy, where college life collides with high-stakes missions to shape the next generation of leaders.",
    genre: "SCI-FI & FANTASY",
    numSeasons: 1,
    castNames:
      "<span>Holly Hunter</span><span>, Sandro Rosta</span><span>, Karim Dian\u00e9</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2025/12/17/aea7e24d-3e00-4db4-82f8-f90fcc3afd2b.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2025/12/17/cfba5632-8faf-4355-8aec-bb44fa073f20.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/pplcrn/2025/12/17/593cca37-340c-4656-99bb-890668b81ced.png?format=webp",
    rating: "TV-14",
    seasonCounts: "1 SEASON",
    premiereDate: "2026",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/star-trek-starfleet-academy/",
    },
  },

  {
    id: "1923",
    showTitle: "1923",
    about:
      "This Yellowstone origin story introduces a generation of the Dutton family as they explore the early 20th century in the Mountain West.",
    genre: "DRAMA",
    numSeasons: 2,
    castNames:
      "<span>Brandon Sklenar</span><span>, Harrison Ford</span><span>, Helen Mirren</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/24/45/49/show_asset_9be1bcbf-1cd6-4c38-ab08-1aade2a4388e.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/24/45/83/show_asset_970e5cea-a22c-4ecf-be89-72ddf5caa48f.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/77/63/21/show_asset_923e55e2-86bd-4428-ad8c-6aa232b6d317.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "2 SEASONS",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/1923/",
    },
  },

  {
    id: "ink-master",
    showTitle: "Ink Master",
    about:
      "15 tattoo artists from around the world compete for hometown pride and a chance to win $250k and the title of Ink Master.",
    genre: "REALITY",
    numSeasons: 17,
    castNames:
      "<span>DJ Tambe</span><span>, Joel Madden</span><span>, Nikko Hurtado</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/34/13/32/show_asset_1592a989-4d34-43dd-8be9-8f888b661416.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/34/13/57/show_asset_0de8130a-805d-4eba-badd-55a23f03a112.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/34/13/05/show_asset_dec6976c-0837-4501-b169-caec7749ba02.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "17 SEASONS",
    premiereDate: "2012",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/ink-master/",
    },
  },

  {
    id: "1883",
    showTitle: "1883",
    about:
      "The Yellowstone origin story follows the Dutton family as they embark on a journey through the Great Plains to seek a better future.",
    genre: "DRAMA",
    numSeasons: 1,
    castNames:
      "<span>Faith Hill</span><span>, Isabel May</span><span>, LaMonica Garrett</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2025/11/25/712e0a81-6a81-4d64-adf2-546c705b6165.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2025/11/25/051ac5c9-70a1-426b-a89a-0e3594daad44.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/98/57/62/show_asset_ca8c5942-c26e-435a-98bd-10b1929dc2f7_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2021",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/1883/",
    },
  },

  {
    id: "star-trek-discovery",
    showTitle: "Star Trek: Discovery",
    about:
      "The series follows the voyages of Starfleet on their missions to discover new worlds and new lifeforms.",
    genre: "SCI-FI & FANTASY",
    numSeasons: 5,
    castNames:
      "<span>Sonequa Martin-Green</span><span>, Doug Jones</span><span>, Anthony Rapp</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/44/25/53/show_asset_facb8ac6-7ce2-48af-ac14-b33e59dd122d.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/44/25/84/show_asset_61a5f98f-7962-4beb-94cd-b4e536ff3c19.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/06/92/38/show_asset_6e2a3085-9588-40ad-88aa-e64041e9e945.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "5 SEASONS",
    premiereDate: "2017",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/star-trek-discovery/",
    },
  },

  {
    id: "star-trek-strange-new-worlds",
    showTitle: "Star Trek: Strange New Worlds",
    about:
      "Captain Pike, Spock, Number One and the USS Enterprise crew venture into the unknown a decade before Captain Kirk's legendary mission.",
    genre: "SCI-FI & FANTASY",
    numSeasons: 3,
    castNames:
      "<span>Anson Mount</span><span>, Rebecca Romijn</span><span>, Ethan Peck</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/31/26/78/show_asset_35a71966-f725-4e82-9eb8-c19497e38e08.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/31/27/04/show_asset_54142070-6d60-4eb3-9656-e5c79ca0f275.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/32/06/97/show_asset_bf966d6e-76b9-4227-b963-add9a2e9cb9e.png?format=webp",
    rating: "TV-14",
    seasonCounts: "3 SEASONS",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/star-trek-strange-new-worlds/",
    },
  },

  {
    id: "star-trek-lower-decks",
    showTitle: "Star Trek: Lower Decks",
    about:
      "Behind every great captain, is a crew keeping the ship from falling to pieces. These are the hilarious stories of the U.S.S. Cerritos.",
    genre: "SCI-FI & FANTASY",
    numSeasons: 5,
    castNames:
      "<span>Tawny Newsome</span><span>, Jack Quaid</span><span>, No\u00ebl Wells</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/31/44/06/show_asset_e2289023-56a1-4459-9342-eb89e6947d03.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/31/44/32/show_asset_339813d2-b74a-40db-a79f-3b59ffbb595b.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/02/29/17/show_asset_1d5fbc17-74bc-440e-8ca6-56227ac42957_0.png?format=webp",
    rating: "TV-14",
    seasonCounts: "5 SEASONS",
    premiereDate: "2020",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/star-trek-lower-decks/",
    },
  },

  {
    id: "fbi-true",
    showTitle: "FBI TRUE",
    about:
      "FBI True goes behind-the-scenes with real agents telling true stories of their most dangerous and infamous cases.",
    genre: "TRUE CRIME",
    numSeasons: 7,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/15/20/10/show_asset_b4da29d0-d5ca-4c14-82c7-9c3c733632b7.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/15/20/45/show_asset_26810b4e-6ede-4c7c-8b1f-faca3a2faa3e.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/15/19/80/show_asset_3f20c487-279b-4ad1-882d-4c7022217e53.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "7 SEASONS",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/fbi-true/",
    },
  },

  {
    id: "rupaul-s-drag-race-all-stars",
    showTitle: "RuPaul's Drag Race All Stars",
    about:
      "The series features past contestants from RuPaul's Drag Race competing to be immortalized in the Drag Race Hall of Fame and a cash prize.",
    brandName: "MTV",
    genre: "REALITY",
    numSeasons: 10,
    castNames: "<span>RuPaul</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/46/47/39/show_asset_045aa0c6-8690-4dc6-946a-8376c716f01e.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/46/47/48/show_asset_0aaa47b4-8103-46a1-ac74-5163e42131f8.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/46/46/99/show_asset_b16595bf-1dc6-42d1-bcc7-2cf7bcd2ccb8.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "10 SEASONS",
    premiereDate: "2012",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/rupauls-drag-race-all-stars/",
    },
  },

  {
    id: "joe-pickett",
    showTitle: "Joe Pickett",
    about:
      "Follow the new game warden of Saddlestring, a town as beautiful and charming as it is corrupt and dangerous.",
    genre: "DRAMA",
    numSeasons: 2,
    castNames:
      "<span>Julianna Guill</span><span>, Kamryn Pliva</span><span>, Michael Dorman</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/61/23/75/show_asset_9f5e75c8-70ba-4a78-a62f-5864b0058eab.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/61/23/85/show_asset_73b3f23d-3aa4-4465-b017-156cfb00518e.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/98/38/33/show_asset_59c9e3bf-7664-4eb0-9069-e2c2a76d4d3b_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "2 SEASONS",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/joe-pickett/",
    },
  },

  {
    id: "star-trek-picard",
    showTitle: "Star Trek: Picard",
    about:
      "Starring Sir Patrick Stewart, the series follows Jean-Luc Picard into the next chapter of his life.",
    genre: "SCI-FI & FANTASY",
    numSeasons: 3,
    castNames:
      "<span>Alison Pill</span><span>, Brent Spiner</span><span>, Isa Briones</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/49/30/63/show_asset_dcfa0bf3-4b48-4e36-acce-ed4c541cf2fd.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/49/31/39/show_asset_b2d51c9c-b90a-47d0-ac3a-3fe8e07370d2.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/49/30/36/show_asset_f472f9ed-bca8-4050-9ebc-943df702fd80_0.png?format=webp",
    rating: "TV-14",
    seasonCounts: "3 SEASONS",
    premiereDate: "2020",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/star-trek-picard/",
    },
  },

  {
    id: "ncis-tony-ziva",
    showTitle: "NCIS: Tony & Ziva",
    about:
      "The former agents go on the run from a dangerous conspiracy as they learn to co-parent and stay alive.",
    genre: "DRAMA",
    numSeasons: 1,
    castNames: "<span>Cote de Pablo</span><span>, Michael Weatherly</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/87/11/31/show_asset_350ed2a3-66fc-44db-b77a-d2b75b439b68.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/87/11/53/show_asset_b7357eaa-9b56-44f2-8016-6eb6eda402cd.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/87/11/01/show_asset_682e3f80-e9af-44d4-8c60-4eb86232c503.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2025",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/ncis-tony-and-ziva/",
    },
  },

  {
    id: "evil",
    showTitle: "Evil",
    about:
      "A psychologist joins a priest-in-training and a contractor as they investigate unexplained mysteries.",
    genre: "DRAMA",
    numSeasons: 4,
    castNames:
      "<span>Katja Herbers</span><span>, Mike Colter</span><span>, Aasif Mandvi</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/24/78/10/show_asset_a774f128-618a-47b9-ad6e-43b4b54b17a3.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/24/78/35/show_asset_e34b2b32-8690-4252-be2b-882c4652c8b7.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/35/77/25/80/56/84/show_asset_d1bf690a-3f7b-4348-a361-b984f00afdbd.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "4 SEASONS",
    premiereDate: "2019",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/evil/",
    },
  },

  {
    id: "skymed",
    showTitle: "SkyMed",
    about:
      "Follow the intense personal lives of young nurses and pilots flying air ambulances in remote northern Canada.",
    genre: "DRAMA",
    numSeasons: 3,
    castNames:
      "<span>Natasha Calis</span><span>, Ace \u201cAason\u201d Nadjiwon</span><span>, Morgan Holmstrom</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/31/50/07/show_asset_b8e4bc34-fabd-47af-a8cd-2aa71eb4f3cb.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/31/50/32/show_asset_c1426496-5381-483f-b927-61493fded73a.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/25/31/54/show_asset_72b54d96-022a-479a-bae8-2954ed9ace88.png?format=webp",
    rating: "TV-14",
    seasonCounts: "3 SEASONS",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/skymed/",
    },
  },

  {
    id: "handsome-devil-charming-killer",
    showTitle: "Handsome Devil: Charming Killer",
    about:
      "A killer\u2019s charm turns viral obsession, revealing the dark allure of fame, desire, and denial.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2026/01/15/c20e1b96-cfa0-4fa4-bec0-24ba5de56583.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2026/01/15/ab728075-ea8f-4991-96af-fe9f5f8acbb3.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/pplcrn/2026/01/15/e70f9075-1685-402e-b16e-10d2bc9ad362.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/handsome-devil-charming-killer/",
    },
  },

  {
    id: "the-good-fight",
    showTitle: "The Good Fight",
    about:
      "In this spinoff of The Good Wife, attorney and women's rights champion Diane Lockhart joins one of Chicago's preeminent law firms.",
    brandName: "CBS",
    genre: "DRAMA",
    numSeasons: 6,
    castNames:
      "<span>Christine Baranski</span><span>, Audra McDonald</span><span>, Nyambi Nyambi</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/44/31/17/show_asset_368d3fa6-0c88-4303-affa-26271a8da5f2.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/44/31/47/show_asset_ca19fccc-a079-47f6-b16c-a1ab0bc0fbc8.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/49/14/87/show_asset_35e5b9f7-0cb8-4549-b01c-a03c72d73f3c_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "6 SEASONS",
    premiereDate: "2017",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/the-good-fight/",
    },
  },

  {
    id: "never-seen-again",
    showTitle: "Never Seen Again",
    about:
      "What happens when people suddenly and mysteriously go missing? Dive into these puzzling cases.",
    genre: "TRUE CRIME",
    numSeasons: 5,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/90/35/29/show_asset_f9492479-ef1b-46bf-aed3-a3ac82613d50.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/90/36/00/show_asset_e042fa7d-91c0-4509-8410-f2ff1cd76f3d.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/90/34/98/show_asset_9392901c-3c28-4e5f-9940-237e9b0b7724_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "5 SEASONS",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/never-seen-again/",
    },
  },

  {
    id: "pd-true",
    showTitle: "PD True",
    about:
      "This series takes viewers inside moments of crisis from some of the biggest cases of our time, told by the officers who worked them.",
    genre: "TRUE CRIME",
    numSeasons: 2,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/81/74/74/show_asset_eee95a23-7c65-4ec1-b28a-446402959ffa.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/81/75/05/show_asset_756a0a43-9bda-4c14-9b56-6b94ae6740e9.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/97/55/20/show_asset_9eb5bf9e-a883-4def-ad7d-34185d511201.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "2 SEASONS",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/pd-true/",
    },
  },

  {
    id: "why-women-kill",
    showTitle: "Why Women Kill",
    about:
      "This dark comedy follows the lives of women in different eras -- each grappling with betrayal and infidelity.",
    genre: "DRAMA",
    numSeasons: 2,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/96/05/51/show_asset_5a075dd2-c7b7-4258-9651-b2cae790dd8f.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/96/28/44/show_asset_ff2ddee1-46d5-496c-a2ba-4d3e8bb9d036.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/53/72/12/show_asset_cf9dca12-d69b-4682-893b-454e15b336da_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "2 SEASONS",
    premiereDate: "2019",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/why-women-kill/",
    },
  },

  {
    id: "murder-360",
    showTitle: "Murder 360",
    about:
      "Every angle. Every detail. Murder 360 uncovers the full anatomy of murder.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/74/78/46/show_asset_22b08b59-e5e5-40df-bd4b-130c88f4a933.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/74/78/66/show_asset_f67c3a29-6ff3-4e38-960a-ab00d9c4c597.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/74/78/19/show_asset_95339e41-1c97-400d-b9fc-4ebb3372663e.png?format=webp",
    rating: "TV-14",
    seasonCounts: "1 SEASON",
    premiereDate: "2025",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/murder-360/",
    },
  },

  {
    id: "mike-judge-s-beavis-and-butt-head",
    showTitle: "Mike Judge's Beavis and Butt-Head",
    about: "Beavis and Butt-Head are back and stupider than ever.",
    brandName: "Comedy Central",
    genre: "COMEDY",
    numSeasons: 2,
    castNames:
      "<span>Chris Diamantopoulos</span><span>, Kosha Patel</span><span>, Mike Judge</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/49/46/04/show_asset_f15cc6e7-50d8-4e5b-8e88-ddce4f55e916.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/75/43/77/show_asset_dc2ad4df-c9f5-4780-8107-bf7a1830775c.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/75/43/05/show_asset_b6622eaa-cb3f-437b-80bc-792fd8a430c9_0.png?format=webp",
    rating: "TV-14",
    seasonCounts: "2 SEASONS",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/mike-judges-beavis-and-butt-head/",
    },
  },

  {
    id: "the-stand",
    showTitle: "The Stand",
    about:
      "Stephen King's apocalyptic vision of a world ravaged by plague and caught in a battle between good and evil comes to life.",
    genre: "DRAMA",
    numSeasons: 1,
    castNames:
      "<span>Whoopi Goldberg</span><span>, Alexander Skarsg\u00e5rd</span><span>, James Marsden</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/82/18/40/show_asset_432e7bfc-66e5-410f-9216-1203d3d020e1.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/82/18/71/show_asset_846b1e28-9ccd-4b1d-8100-8fadc255da83.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/26/53/57/show_asset_aa5c5bd3-6f2e-4894-9d13-55cb46fe2056_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2020",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/the-stand/",
    },
  },

  {
    id: "lawmen-bass-reeves",
    showTitle: "Lawmen: Bass Reeves",
    about:
      "Follow Bass Reeves' rise from enslavement to law enforcement as one of the first Black U.S. Deputy Marshals west of the Mississippi.",
    genre: "DRAMA",
    numSeasons: 1,
    castNames:
      "<span>Barry Pepper</span><span>, David Oyelowo</span><span>, Demi Singleton</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/44/45/05/show_asset_cb548204-d74a-4c52-b42e-f8b4ce6d9f14.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/44/45/35/show_asset_59b74657-a7f5-42a3-bb23-419ec1c84be8.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/94/93/60/show_asset_f628fdd9-77f5-4c8d-98b4-7be5478bbc30_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/lawmen-bass-reeves/",
    },
  },

  {
    id: "happy-face",
    showTitle: "Happy Face",
    about:
      "Inspired by a true story, the series follows Melissa Reed, the daughter of the Happy Face Killer.",
    genre: "DRAMA",
    numSeasons: 1,
    castNames:
      "<span>Annaleigh Ashford</span><span>, Dennis Quaid</span><span>, James Wolk</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2025/11/25/36acd97e-2d01-4aa2-beef-30b49a0a509e.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2025/11/25/813e168a-ff73-4de6-958c-346f54feee00.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/51/54/10/show_asset_d0d51e04-fcc0-4a1b-8159-5ba12ac415d8.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2025",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/happy-face/",
    },
  },

  {
    id: "halo",
    showTitle: "Halo",
    about:
      "With the galaxy on the brink of destruction, Master Chief John-117 leads his team of Spartans against the alien threat known as the Covenant.",
    genre: "SCI-FI & FANTASY",
    numSeasons: 2,
    castNames:
      "<span>Natasha Culzac</span><span>, Olive Gray</span><span>, Pablo Schreiber</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/28/81/36/show_asset_f1b3bbdd-4701-4c98-a35c-66730850cbcf.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/28/81/70/show_asset_d339ac6e-f808-4102-a4d9-813f6d0f5187.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/35/83/59/show_asset_5c6ff4dd-f31a-4d36-a56a-98905db43b2e.png?format=webp",
    rating: "TV-14",
    seasonCounts: "2 SEASONS",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/halo/",
    },
  },

  {
    id: "frasier",
    showTitle: "Frasier",
    about:
      "Frasier has re-entered the building! The psychologist is back in Boston with new challenges to face and an old dream or two to finally fulfill.",
    genre: "COMEDY",
    numSeasons: 2,
    castNames:
      "<span>Kelsey Grammer</span><span>, Jack Cutmore-Scott</span><span>, Nicholas Lyndhurst</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/44/39/70/show_asset_140c2296-e314-4d56-898f-b548b939df79.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/44/40/00/show_asset_38a1bd0c-d696-4572-86ee-e65b411c8097.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/35/86/13/08/09/28/show_asset_03d812fb-97e7-4d6b-b461-b8d8350e85cd.png?format=webp",
    rating: "TV-14",
    seasonCounts: "2 SEASONS",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/frasier-2023/",
    },
  },

  {
    id: "the-agency",
    showTitle: "The Agency",
    about: "Covert CIA agent Martian is ordered to return to London Station.",
    genre: "DRAMA",
    numSeasons: 1,
    castNames:
      "<span>Michael Fassbender</span><span>, Jeffrey Wright</span><span>, Jodie Turner-Smith</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2026/03/09/cdc4230b-f9af-420a-81f5-74fb720de8ec.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2026/03/09/54bfc472-f77a-4ce8-8abf-84705ee4791b.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/pplcrn/2026/03/09/45c94b2b-35ca-4d07-8812-8cbfdeea646f.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/the-agency/",
    },
  },

  {
    id: "wild-boys-strangers-in-town",
    showTitle: "Wild Boys: Strangers in Town",
    about:
      "Two mysterious brothers emerge from the woods, igniting a small-town obsession and national mystery.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2026/02/10/8251e549-ff53-45a7-b8d4-be4156309cf4.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2026/02/10/440ff1c9-2820-445b-9e61-a84b6f290db7.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/pplcrn/2026/02/10/f5afccb3-fb60-4bb6-8b4c-e8859974cb12.png?format=webp",
    rating: "TV-14",
    seasonCounts: "1 SEASON",
    premiereDate: "2026",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/wild-boys-strangers-in-town/",
    },
  },

  {
    id: "the-challenge-all-stars",
    showTitle: "The Challenge: All Stars",
    about:
      "Some of the fiercest reality titans from the franchise return for a shot at the ultimate competition.",
    brandName: "MTV",
    genre: "REALITY",
    numSeasons: 5,
    castNames: "<span>T.J. Lavin</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/62/68/95/show_asset_0d4ea8fe-4f55-484e-a49f-234a69b314b9.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/62/69/17/show_asset_51a6302d-97e3-4df8-97a5-2ed7c7e9424a.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/62/68/68/show_asset_5e5b40e3-3024-4ae6-a392-55dae5605ea2.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "5 SEASONS",
    premiereDate: "2021",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/the-challenge-all-stars/",
    },
  },

  {
    id: "are-you-the-one-",
    showTitle: "Are You The One?",
    about:
      'In the most ambitious dating experiment ever, 22 singles undergo an extensive matchmaking process to find their "perfect match."',
    brandName: "MTV",
    genre: "REALITY",
    numSeasons: 7,
    castNames:
      "<span>Kamie Crawford</span><span>, Ryan Devlin</span><span>, Terrence Jenkins</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/90/35/39/show_asset_99cd7fc5-247e-4797-99bb-504e2c6d6507.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/90/36/03/show_asset_2dde8eb5-5305-46e5-b3c4-0cb8b1a11c10.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/90/53/90/show_asset_5e5e3839-be85-4f10-a77c-1ead808cb7da_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "7 SEASONS",
    premiereDate: "2014",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/are-you-the-one/",
    },
  },

  {
    id: "ctrl-alt-desire",
    showTitle: "CTRL+ALT+DESIRE",
    about:
      "With intimate access to convicted killer Grant Amato, the series unravels a gripping story of obsession, loneliness and family turmoil.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/08/53/15/show_asset_d233ea8d-8750-4467-b099-d4593f5b87f3.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/08/53/60/show_asset_278ebec0-56f2-4b7f-8e4d-a4d56e271e8a.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/08/61/33/crad_us_s01_ott_console_logo_1260x396.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/ctrl-alt-desire/",
    },
  },

  {
    id: "chopper-cops",
    showTitle: "Chopper Cops",
    about:
      "It's just north of Disney World, but to the Marion County Sheriff's Department, the 1,600 square miles they patrol is no fantasy.",
    genre: "TRUE CRIME",
    numSeasons: 2,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/11/50/85/show_asset_211a26f5-3713-4800-bb2d-985e85f42f2c.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/11/51/15/show_asset_9e359d30-5e41-4182-8ea7-efa9d0c0f52d.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/64/83/34/show_asset_bbdbe434-a6da-454f-ab89-b7472c30ec0b.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "2 SEASONS",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/chopper-cops/",
    },
  },

  {
    id: "can-you-keep-a-secret-",
    showTitle: "Can You Keep a Secret?",
    about:
      "Dawn French stars as a granny who fakes her husband\u2019s death for insurance money, until her family learns the real danger is her.",
    genre: "COMEDY",
    numSeasons: 1,
    castNames:
      "<span>Dawn French</span><span>, Mark Heap</span><span>, Craig Roberts</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2026/02/04/e850ad7d-214b-4d0d-a47a-602d368039e3.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2026/02/04/f9e4591b-4d30-4cc4-be74-0798af426950.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/pplcrn/2026/02/04/507dab89-483b-4441-bb69-b27dd17c5e75.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2026",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/can-you-keep-a-secret/",
    },
  },

  {
    id: "don-t-date-brandon",
    showTitle: "Don\u2019t Date Brandon",
    about:
      "Two ex-wives start a podcast to warn other women about the man they both married.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/98/39/41/show_asset_7b3befe9-0d6d-46de-8777-74a815464e3b.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/98/39/60/show_asset_1a0fb057-eecb-4401-8b80-04e081633fd1.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/98/39/16/show_asset_df9c2c88-323f-455c-a7aa-bc4db6aa8a08.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2025",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/dont-date-brandon/",
    },
  },

  {
    id: "the-family-stallone",
    showTitle: "The Family Stallone",
    about:
      "Actor Sylvester Stallone, his wife Jennifer Flavin and their daughters give cameras access to their daily lives.",
    brandName: "MTV",
    genre: "REALITY",
    numSeasons: 2,
    castNames: "<span>Sylvester Stallone</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2025/11/25/b315eb1c-4e20-4952-b312-bb08ed07aa05.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2025/11/25/9616ede3-fed1-4ec6-98e6-3a4202ae9fc7.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/35/85/92/tfs_us_s02_ott_console_logo_1260x396.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "2 SEASONS",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/the-family-stallone/",
    },
  },

  {
    id: "burden-of-guilt",
    showTitle: "Burden of Guilt",
    about:
      "A woman blamed for her baby brother's unexplained death discovers it may have been murder.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/75/65/25/show_asset_30cada70-4fa1-4463-8898-7ff0e78e8dc3.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/75/65/58/show_asset_5104092a-5b49-450e-b7fb-6b0b00e90bff.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/75/64/90/show_asset_8a249da1-7a2e-4979-a166-456a4b9e4fbe.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2025",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/burden-of-guilt/",
    },
  },

  {
    id: "colin-from-accounts",
    showTitle: "Colin From Accounts",
    about:
      "In this modern-day romantic love story, two singles are brought together by a car accident and an injured dog.",
    genre: "COMEDY",
    numSeasons: 2,
    castNames:
      "<span>Patrick Brammall</span><span>, Harriet Dyer</span><span>, Zak</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/24/60/92/show_asset_8614a046-a7d5-4ac1-8d1c-2f621fade099.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/24/61/27/show_asset_69e71928-26b9-4aac-964f-edfcae625bac.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/35/86/33/08/09/57/show_asset_8bd4f19b-f1e6-4a15-b002-171570a8b632.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "2 SEASONS",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/colin-from-accounts/",
    },
  },

  {
    id: "rupaul-s-drag-race-global-all-stars",
    showTitle: "RuPaul\u2019s Drag Race Global All Stars",
    about:
      "RuPaul invites 12 of the world's greatest Drag Race queens to compete in challenges, but only will take the crown.",
    brandName: "MTV",
    genre: "REALITY",
    numSeasons: 1,
    castNames: "<span>RuPaul</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/67/76/75/show_asset_95a352cd-2004-4fff-ba98-6bec81b4eea5.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/67/76/83/show_asset_3880da2c-4d2a-4204-9bae-4748e838e1a3.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/27/76/32/07/96/12/show_asset_1b3e59f0-1283-4540-9cb7-c5e569a0cbe0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/rupauls-drag-race-global-all-stars/",
    },
  },

  {
    id: "rabbit-hole",
    showTitle: "Rabbit Hole",
    about:
      "Nothing is what it seems when John Weir, master of corporate espionage, finds himself at the center of a shadowy conspiracy.",
    genre: "DRAMA",
    numSeasons: 1,
    castNames:
      "<span>Charles Dance</span><span>, Enid Graham</span><span>, Kiefer Sutherland</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/30/57/04/show_asset_ddfd4336-dc01-475e-bd7c-32aac9073940.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/30/57/37/show_asset_3ee69cbc-cada-4dd7-9ca6-03b6b737d1cf.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/00/40/59/show_asset_567b2cbf-c876-4f85-95b0-20ef2b8ccb3c_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/rabbit-hole/",
    },
  },

  {
    id: "behind-the-music",
    showTitle: "Behind the Music",
    about:
      "This music documentary series explores artists' compelling stories of success, tragedy and triumph.",
    brandName: "MTV",
    genre: "DOCUMENTARY",
    numSeasons: 2,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/67/65/21/show_asset_021f8884-8d98-43b9-a251-ef67b94c4550.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/67/65/32/show_asset_f3ab1ce1-3cef-4647-9c3e-cef4cac8927e.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/78/23/90/show_asset_8f5370b1-a138-490e-93bc-ce79a630c128_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "2 SEASONS",
    premiereDate: "2021",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/behind-the-music/",
    },
  },

  {
    id: "the-offer",
    showTitle: "The Offer",
    about:
      'The epic story follows Oscar\u00ae-winning producer Albert S. Ruddy\'s extraordinary experiences of making "The Godfather."',
    genre: "DRAMA",
    numSeasons: 1,
    castNames:
      "<span>Burn Gorman</span><span>, Colin Hanks</span><span>, Dan Fogler</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/56/70/32/show_asset_a888960e-123a-4616-a30e-66662193d22f.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/56/70/59/show_asset_0c650550-2317-4971-9166-bf4b8ce79958.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/64/98/57/show_asset_882f5663-b42f-4451-b8c6-a981684d7ec1_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/the-offer/",
    },
  },

  {
    id: "11-minutes",
    showTitle: "11 Minutes",
    about:
      "Watch emotional firsthand accounts of survival from the 2017 mass shooting at the Route 91 Harvest Festival in Las Vegas.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/71/14/07/show_asset_dbb073d3-7f7f-446a-b92a-4f7570baad08.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/71/14/71/show_asset_0e7bf9a2-e6dc-4767-8a84-537cf23c40e1.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/71/13/82/show_asset_9892cf12-a911-4cbc-a4f0-29ad20907c54_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/11-minutes/",
    },
  },

  {
    id: "the-challenge-world-championship",
    showTitle: "The Challenge: World Championship",
    about:
      "The competition reality series goes global as MVPs and Challenge Legends battle for the title of World Champion.",
    brandName: "MTV",
    genre: "REALITY",
    numSeasons: 1,
    castNames: "<span>T.J. Lavin</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/28/51/71/show_asset_a64b73ae-c5fa-4ae8-b48c-a793a165f96b.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/28/52/37/show_asset_3fe60193-3f46-45a2-8737-6136715c394f.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/28/83/74/show_asset_151f3a57-32cc-4009-8c99-1224d845d6da_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/the-challenge-world-championship/",
    },
  },

  {
    id: "pillowcase-murders",
    showTitle: "Pillowcase Murders",
    about:
      "When dozens of women die unexpectedly in senior living communities, no one suspects a diabolical sociopath is behind it all.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/75/91/29/show_asset_1a11c161-7e2c-4394-b1d8-ffa4b142c270.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/75/91/76/show_asset_f06d4438-316e-44bd-b899-8aada7fcf5cc.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/98/10/22/show_asset_e7fff1c7-1fd6-4ea4-b95e-1f6491747c40.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/pillowcase-murders/",
    },
  },

  {
    id: "thirst-trap-the-fame-the-fantasy-the-fallout-",
    showTitle: "Thirst Trap: The Fame. The Fantasy. The Fallout.",
    about:
      "A viral video. A digital obsession. Thirst Trap traces the rise\u2014and fallout\u2014of a TikTok heartthrob.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/23/64/74/show_asset_e3039a98-6783-45dc-a0cb-d4ddc3aa25a9.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/23/64/98/show_asset_98e40b99-cc4c-4d46-a67d-77732685543c.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/23/64/36/show_asset_2bc037b2-ce8d-471d-ac9b-834eba204ee5.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2025",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/thirst-trap-the-fame-the-fantasy-the-fallout/",
    },
  },

  {
    id: "my-nightmare-stalker-the-eva-larue-story",
    showTitle: "My Nightmare Stalker: The Eva LaRue Story",
    about:
      "CSI: Miami star Eva LaRue and her daughter face a decade of stalking in a haunting tale of survival.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2025/11/04/944f1c96-8363-4667-90ac-d95a61669aff.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2025/11/04/e2422853-820e-438d-a912-dbdbcc623149.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/pplcrn/2025/11/04/f3919660-8414-4204-8f6a-9637cc53f66d.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2025",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/my-nightmare-stalker-the-eva-larue-story/",
    },
  },

  {
    id: "rupaul-s-drag-race-all-stars-untucked",
    showTitle: "RuPaul's Drag Race All Stars: UNTUCKED",
    about:
      "It's your backstage pass to the competition where your favorite Queens battle for their spot in the Drag Race Hall of Fame -- all in the name of charity.",
    brandName: "MTV",
    genre: "REALITY",
    numSeasons: 6,
    castNames: "<span>RuPaul</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/88/08/36/show_asset_cb19fdf2-4759-4511-a567-0f6bc357702e.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/88/08/64/show_asset_e29cbb19-bae6-47d7-99ee-1949711ded24.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/88/08/07/show_asset_5395d296-5c1b-483c-bff5-076e27278bd4.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "6 SEASONS",
    premiereDate: "2012",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/rupauls-drag-race-all-stars-untucked/",
    },
  },

  {
    id: "willie-nelson-family",
    showTitle: "Willie Nelson & Family",
    about:
      "The series explores the personal and professional life of Willie Nelson, one of the world\u2019s most beloved musicians.",
    brandName: "MTV",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/94/75/08/show_asset_3e865758-44d6-4d91-9196-e52d3f3d625f.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/94/75/73/show_asset_1715a507-b06c-4573-8f5c-a77967040f78.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/41/13/49/wnf_us_s01_ott_console_logo_1260x396.png?format=webp",
    rating: "TV-PG",
    seasonCounts: "1 SEASON",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/willie-nelson-and-family/",
    },
  },

  {
    id: "ark-the-animated-series",
    showTitle: "ARK: The Animated Series",
    about:
      "A 21st-century paleontologist finds herself resurrected on a mysterious primeval island inhabited by prehistoric beasts.",
    genre: "SCI-FI & FANTASY",
    numSeasons: 1,
    castNames:
      "<span>Michelle Yeoh</span><span>, Gerard Butler</span><span>, Madeleine Madden</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/43/89/24/show_asset_f6ecc853-6db9-4c56-9433-1b766147a37a.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/26/81/83/show_asset_2244120d-ca6f-4a3f-8367-b306563a6cad.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/06/94/36/show_asset_e7e756f9-e227-4bb5-aac4-a2acad56eabe.png?format=webp",
    rating: "TV-14",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/ark-the-animated-series/",
    },
  },

  {
    id: "mtv-s-family-legacy",
    showTitle: "MTV's Family Legacy",
    about:
      "The music series looks back on the most celebrated moments of legendary artists through the eyes of their kids.",
    brandName: "MTV",
    genre: "DOCUMENTARY",
    numSeasons: 2,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/25/01/69/show_asset_29bbffac-f637-4080-930d-09b628042e57.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/25/01/80/show_asset_919096f2-0a0c-4ede-b086-a8423350e0be.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/25/01/33/show_asset_61842a06-b652-4b68-9993-1eafb89e5281.png?format=webp",
    rating: "TV-14",
    seasonCounts: "2 SEASONS",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/family-legacy/",
    },
  },

  {
    id: "star-trek-short-treks",
    showTitle: "Star Trek: Short Treks",
    about:
      "These quick and engaging stories offer fans a deeper dive into all their favorite iterations, themes and characters of the expanded Star Trek Universe.",
    genre: "SCI-FI & FANTASY",
    numSeasons: 0,
    castNames:
      "<span>Anson Mount</span><span>, Rebecca Romijn</span><span>, Ethan Peck</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/31/41/10/show_asset_22d2ddf9-2da7-4ccb-94e8-0803c560962d.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/31/41/35/show_asset_33a5aff2-a1f9-4e85-98c9-1c4d54c50284.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/35/66/83/show_asset_fabab0c1-65c7-4cd8-8970-e4985b8d6c2f.png?format=webp",
    rating: "TV-14",
    seasonCounts: "",
    premiereDate: "2018",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/star-trek-short-treks/",
    },
  },

  {
    id: "the-carters",
    showTitle: "The Carters",
    about:
      "A family ravaged by fame faces struggles with mental illness, addiction and untimely death.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/54/81/14/show_asset_37ee4aa8-895b-4270-b13e-233ab93eb745.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/54/81/22/show_asset_539afc11-e1ba-4da0-bf84-f4cd68739431.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/54/80/79/show_asset_5d6bc29a-5642-4ab7-9ada-76c39aa21f19.png?format=webp",
    rating: "TV-14",
    seasonCounts: "1 SEASON",
    premiereDate: "2025",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/the-carters/",
    },
  },

  {
    id: "-cybersleuths-the-idaho-murders",
    showTitle: "#CyberSleuths: The Idaho Murders",
    about:
      "TikTok crime sleuths sift through clues and explore leads as they investigate the gruesome Idaho Murders. Will they help or hurt the case?",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/57/92/63/show_asset_8bbfb760-fa97-44f6-867b-989a9c13d332.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/57/92/96/show_asset_737fcbf3-6630-4048-bf9f-2adcd1b86a55.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/57/92/28/show_asset_76b61587-6c54-43a1-a201-003a354295d1.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/cybersleuths-the-idaho-murders/",
    },
  },

  {
    id: "painkiller-the-tylenol-murders",
    showTitle: "Painkiller: The Tylenol Murders",
    about:
      "The Tylenol murders remain among the nation's most notorious unsolved crimes.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/34/99/17/show_asset_fbe8b2da-369a-4fb9-884d-bf7be19f9b21.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/34/99/92/show_asset_bc0f6398-5ae4-48f9-83d8-59834ff90316.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/34/98/80/show_asset_894ced11-91ab-4b0e-a63b-becf7077d2a0_0.png?format=webp",
    rating: "TV-14",
    seasonCounts: "1 SEASON",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/painkiller-the-tylenol-murders/",
    },
  },

  {
    id: "mafia-spies",
    showTitle: "Mafia Spies",
    about:
      "This docuseries reveals a very real conspircacy between the CIA and the American Mafia to assassinate Fidel Castro.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/39/99/60/show_asset_42f64de8-739f-4a15-978b-2ec1c0875a4d.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/39/99/84/show_asset_dcce55fc-d1c0-424a-9401-1cda4e2278f2.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/32/19/74/32/19/75/show_asset_100ccc9c-9231-4759-b145-0b6f37e61af6.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/mafia-spies/",
    },
  },

  {
    id: "72-seconds-in-rittenhouse-square",
    showTitle: "72 Seconds in Rittenhouse Square",
    about:
      "Nothing would ever be the same after a fatal encounter between a young rapper and a rising real estate developer.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/45/62/12/show_asset_6d65dc3d-4b1a-4550-bbf7-76c30888e82c.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/45/63/02/show_asset_6aedc602-68be-4533-9bd6-074488b1fec9.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/45/61/83/show_asset_2d2d0872-f89f-4b2b-bbc9-f51c3bf5cca5_0.png?format=webp",
    rating: "TV-PG",
    seasonCounts: "1 SEASON",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/72-seconds-in-rittenhouse-square/",
    },
  },

  {
    id: "sin-city-gigolo",
    showTitle: "Sin City Gigolo",
    about:
      "A former cast member of the reality series Gigolos is arrested in connection with the death of a client, shocking friends and fans alike.",
    genre: "TRUE CRIME",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/00/09/69/show_asset_1969ca69-94a5-4c3f-958f-ef4c0bffbe5d.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/00/09/96/show_asset_da7bae05-65f3-46f9-8cc7-a54ba5493835.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/00/09/41/show_asset_53a84d99-edb2-429d-9225-4a91e79e782e.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2025",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/sin-city-gigolo/",
    },
  },

  {
    id: "strange-angel",
    showTitle: "Strange Angel",
    about:
      "Follow the story of American rocket engineer Jack Parsons' career, devotion to a new religion and entry into a sex cult.",
    genre: "DRAMA",
    numSeasons: 2,
    castNames: "<span>Jack Reynor</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/82/17/65/show_asset_a35a4f9c-f56b-4060-99ec-75465711c107.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/82/16/26/show_asset_66cc86d3-21ef-4639-9cee-77cfd24cda3c.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/05/34/70/show_asset_b96dbcda-d4ab-45e0-93c1-4f06aabd2133_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "2 SEASONS",
    premiereDate: "2018",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/strange-angel/",
    },
  },

  {
    id: "born-in-synanon",
    showTitle: "Born in Synanon",
    about:
      "The series follows the rise and fall of the infamous cult through the eyes of a courageous mother, her daughter and their community.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/73/21/55/show_asset_d68e19b1-27fd-4dcf-a13c-d71f3c8add3a.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/73/22/33/show_asset_62a31697-075a-4ff0-b0ad-2096d0bc43b3.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/73/21/19/show_asset_ccbe758a-25d5-461b-b14c-bfd23cc0dd98_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/born-in-synanon/",
    },
  },

  {
    id: "lolla-the-story-of-lollapalooza",
    showTitle: "LOLLA: The Story of Lollapalooza",
    about:
      "This docuseries explores the music festival that started a revolution and its impact on some of today's most iconic artists.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/02/71/74/show_asset_6a6a80a1-f71a-465d-9d95-308da50c7eb0.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/02/72/21/show_asset_ab918e24-ad1c-4c28-b233-de705ed0929c.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/98/09/15/show_asset_438971c2-8e46-419e-b31b-f8515f71ff19.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/lolla-the-story-of-lollapalooza/",
    },
  },

  {
    id: "crush",
    showTitle: "Crush",
    about:
      "Hear from survivors of the tragic 2022 crowd crush in South Korea that claimed more than 150 lives.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/57/10/80/show_asset_6f0c9b39-60dc-4200-999f-0b7e0bc466a3.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/57/11/78/show_asset_0e538782-356e-4772-9abc-365494880bfc.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/57/10/30/show_asset_1ed2245d-dae5-4170-a380-adab6dce649d_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/crush/",
    },
  },

  {
    id: "texas-6",
    showTitle: "Texas 6",
    about:
      "The docuseries follows a high school football team as they attempt to win the 6-Man Football State Championship for a third year in a row.",
    genre: "DOCUMENTARY",
    numSeasons: 2,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/17/06/73/show_asset_575dce07-ecdb-40c9-b16e-8ff38f4cecf4.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/17/07/52/show_asset_bed353e6-52f6-4fb9-81e9-f19c5b17c369.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/17/06/33/show_asset_da6a4620-7275-4ed1-b9d9-3a52c09adf70_0.png?format=webp",
    rating: "TV-14",
    seasonCounts: "2 SEASONS",
    premiereDate: "2020",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/texas-6/",
    },
  },

  {
    id: "pyramid-game",
    showTitle: "Pyramid Game",
    about:
      "High school is a dangerous game of survival for new student Seong Su-ji.",
    genre: "THRILLER",
    numSeasons: 1,
    castNames:
      "<span>Kim Ji-yeon</span><span>, Jang Da-ah</span><span>, Kang Na-eon</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/67/61/54/show_asset_3b752d83-96f3-4a1f-a96b-6e8e9b44a77b.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/67/61/62/show_asset_3d15f869-696b-41b0-9437-b30aba8f6d84.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/64/81/50/show_asset_579b252f-a2f9-42b8-ae44-96039c5deb0d.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/pyramid-game/",
    },
  },

  {
    id: "one-dollar",
    showTitle: "One Dollar",
    about:
      "A one-dollar bill changes hands and connects a group involved in a shocking multiple murder.",
    genre: "DRAMA",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/82/28/27/show_asset_f1c09a21-ea76-4739-825d-c94c7217c610.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/82/28/53/show_asset_27f24300-edc9-41c2-bb6d-e0177c83e89e.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/05/82/05/show_asset_1f3b21b8-c1b8-414e-b6c0-6e53f49bc04e_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2018",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/one-dollar/",
    },
  },

  {
    id: "dreaming-of-a-freaking-fairy-tale",
    showTitle: "Dreaming of a Freaking Fairy Tale",
    about: "Shin Jae-rim dreams of becoming a modern-day Cinderella.",
    genre: "COMEDY",
    numSeasons: 1,
    castNames:
      "<span>Pyo Ye-jin</span><span>, Lee Jun-young</span><span>, Kim Hyun-jin</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/56/88/16/show_asset_3888e1f0-84f9-4459-9095-1d0fe4ce4a41.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/56/88/49/show_asset_d4e56cb1-649a-4b7f-bf6e-cb8ebf130c9d.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/64/88/29/show_asset_2c916e71-2c6c-46c7-a075-04731629d7f9.png?format=webp",
    rating: "TV-14",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/dreaming-of-a-freaking-fairy-tale/",
    },
  },

  {
    id: "football-must-go-on",
    showTitle: "Football Must Go On",
    about:
      "Ukrainian soccer club Shakhtar Donetsk prevailed on the pitch despite the horrors of war at home. Follow their extraordinary journey.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/05/15/69/show_asset_d806ef95-f106-4d77-a040-e5da19892db6.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/05/16/12/show_asset_99431621-1f38-4c4d-8ab7-bb09b423712d.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/05/15/43/show_asset_666557cb-6f4d-4c12-925e-e2ed0459f6dc_0.png?format=webp",
    rating: "TV-14",
    seasonCounts: "1 SEASON",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/football-must-go-on/",
    },
  },

  {
    id: "sexy-beast",
    showTitle: "Sexy Beast",
    about:
      "A high-stakes job is set to change the lives of rising thieves Gal and Don.",
    genre: "DRAMA",
    numSeasons: 1,
    castNames:
      "<span>James McArdle</span><span>, Emun Elliott</span><span>, Sarah Greene</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/pplcrn/2025/12/02/80ec2c44-678c-40e3-805f-d4a3978811de.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/pplcrn/2025/12/02/7f287bc3-a8b3-4b79-9253-668a11baa7b5.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/24/60/68/sxbt_us_s01_ott_console_logo_1260x396.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/sexy-beast/",
    },
  },

  {
    id: "how-music-got-free",
    showTitle: "How Music Got Free",
    about:
      "The series explores the untold story of internet pirates who nearly destroyed the music industry.",
    brandName: "MTV",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/18/33/31/show_asset_bc2fa52e-2923-4214-a813-b54a31c4eaf4.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/18/33/64/show_asset_6baecfb2-ec14-4793-8c70-42fc108e4c64.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/64/82/23/show_asset_2087c71c-c167-4d0c-9c6a-8bc7830a80d1.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/how-music-got-free/",
    },
  },

  {
    id: "a-bloody-lucky-day",
    showTitle: "A Bloody Lucky Day",
    about:
      "A taxi driver agrees to drive a mysterious, dangerous man to a remote city.",
    genre: "ACTION & ADVENTURE",
    numSeasons: 1,
    castNames:
      "<span>Lee Sung-min</span><span>, Yoo Yeon-seok</span><span>, Lee Jeong-eun</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/84/08/20/show_asset_a78c9e3a-cc3d-4683-ae8d-48f24f02bc0b.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/84/08/99/show_asset_cd6adeb0-94b1-414f-80f3-ed2f47308b63.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/06/98/02/show_asset_b3aea08d-516a-4b11-8781-e3dd53bbc72c.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/a-bloody-lucky-day/",
    },
  },

  {
    id: "the-billion-dollar-goal",
    showTitle: "The Billion Dollar Goal",
    about:
      "The series traces the evolution of soccer in the U.S., from its beginnings to 1989, when one goal ended a 40-year World Cup drought.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/81/92/57/show_asset_b4a557bb-067b-4692-a21b-88f28e10a244.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/81/93/44/show_asset_e3acc3d9-beed-42e0-bf83-5593f6e9a002.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/81/92/16/show_asset_6f93981b-03c0-429b-acaf-58537812c634_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2023",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/the-billion-dollar-goal/",
    },
  },

  {
    id: "yonder",
    showTitle: "Yonder",
    about:
      "Jaehyun receives an invitation from his late wife to Yonder, a place built from her memories",
    genre: "DRAMA",
    numSeasons: 1,
    castNames:
      "<span>Shin Ha-kyun</span><span>, Han Ji-min</span><span>, Lee Jeong-eun</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/02/82/64/show_asset_c67a5041-fe56-463d-880e-0b959f7133ec.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/02/83/30/show_asset_cf6feaa1-8fbd-4faf-baeb-e38c89f0a807.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/02/82/34/show_asset_25a0a24e-4869-4e80-8a33-c280c670810c_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/yonder/",
    },
  },

  {
    id: "the-changemakers",
    showTitle: "The Changemakers",
    about:
      "This eight-part series illuminates amazing stories from across the globe, where communities work together for a better future.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/82/61/88/show_asset_c3b77f2c-c1ed-47af-87ae-dbb1c2e7a8af.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/82/62/69/show_asset_8058a581-804f-4930-8d08-eb6c9b176e38.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/82/66/66/cgmk_us_s01_ott_console_logo_1260x396.png?format=webp",
    rating: "TV-14",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/the-changemakers/",
    },
  },

  {
    id: "as1one-the-israeli-palestinian-pop-music-journey",
    showTitle: "As1One: The Israeli-Palestinian Pop Music Journey",
    about:
      "as1one, the world's first Israeli Jewish and Palestinian Arab pop group, moves to LA on Oct. 6, 2023, to record their debut music.",
    genre: "DOCUMENTARY",
    numSeasons: 1,
    castNames: null,
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/53/69/56/show_asset_cccdf390-9e3f-48ec-9582-ca4e11400ab5.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/53/70/23/show_asset_709e9101-a1bf-46e3-9e32-0d4bad37aeec.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/53/69/40/show_asset_1c4f1345-8611-426d-a3f2-845beb139219.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2024",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/as1one-the-israeli-palestinian-pop-music-journey/",
    },
  },

  {
    id: "bargain",
    showTitle: "Bargain",
    about:
      "Men are lured to a remote hotel, only to be caught in an organ trafficking ring. After a catastrophic earthquake, the survivors fight to escape.",
    genre: "THRILLER",
    numSeasons: 1,
    castNames:
      "<span>Darrel J Delfin</span><span>, Lee Zoo Young</span><span>, Jeon Jong-seo</span>",
    thumb:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w2560-q80/show_asset/53/27/53/show_asset_020ea3fa-91d6-4269-b99b-b6a20fad9902.jpg?format=webp",
    poster:
      "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w600-q80/show_asset/53/28/63/show_asset_3e6a136b-da8f-4d10-be54-f762e2e27bf2.jpg?format=webp",
    logo: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w520-q80/show_asset/53/27/12/show_asset_c8bb9a61-3cf8-4372-be00-c2d49bb0c024_0.png?format=webp",
    rating: "TV-MA",
    seasonCounts: "1 SEASON",
    premiereDate: "2022",
    button: {
      label: "Get Started",
      url: "https://www.paramountplus.com/shows/bargain/",
    },
  },
];

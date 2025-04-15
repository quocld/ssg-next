const PREFIX_ICON = '/assets/icons' as const
const PREFIX_IMAGE = '/assets/img' as const
const PREFIX_IMAGE_CARD = '/assets/img/game-cards' as const
const PREFIX_ICON_PARTNER = '/assets/icons/partners' as const

export const PATH_IMAGE = {
  HERO_SECTION_BG: `${PREFIX_IMAGE}/hero-section-bg.svg`,
  FAIRY: `${PREFIX_IMAGE}/fairy.svg`,
  MAP: `${PREFIX_IMAGE}/map.svg`,
  WITCH: `${PREFIX_IMAGE}/witch.svg`,
  FOOTER_BG: `${PREFIX_IMAGE}/footer-bg.svg`
} as const

export const PATH_IMAGE_CARD = {
  ABORIGINES: `${PREFIX_IMAGE_CARD}/aborigines.svg`,
  BLUE_FIRE: `${PREFIX_IMAGE_CARD}/blue-fire.svg`,
  CINDERELLA: `${PREFIX_IMAGE_CARD}/cinderella.svg`,
  E_SPACE: `${PREFIX_IMAGE_CARD}/e-space.svg`,
  EGYPT_GAME: `${PREFIX_IMAGE_CARD}/egypt-game.svg`,
  KINGLAND: `${PREFIX_IMAGE_CARD}/kingland.svg`,
  G_DRAGON: `${PREFIX_IMAGE_CARD}/g-dragon.svg`,
  MAGIC_TREE: `${PREFIX_IMAGE_CARD}/magic-tree.svg`,
  PIRATES: `${PREFIX_IMAGE_CARD}/pirates.svg`,
  ROCKY: `${PREFIX_IMAGE_CARD}/rocky.svg`,
  THE_LAST_GAME: `${PREFIX_IMAGE_CARD}/the-last-game.svg`,
  WITCH_PARTY: `${PREFIX_IMAGE_CARD}/witch-party.svg`
} as const

export const PATH_ICON = {
  LOGO: `${PREFIX_ICON}/logo.svg`,
  FLAG_VN: `${PREFIX_ICON}/flag/vn.svg`,
  FLAG_EN: `${PREFIX_ICON}/flag/en.svg`,
  MENU: `${PREFIX_ICON}/menu.svg`,
  ANCHOR: `${PREFIX_ICON}/anchor.svg`,
  ARROW: `${PREFIX_ICON}/arrow.svg`,
  CLOSE: `${PREFIX_ICON}/close.svg`
} as const

export const PATH_ICON_PARTNERS = {
  '2K': `${PREFIX_ICON_PARTNER}/2k.svg`,
  BOOK_PRO: `${PREFIX_ICON_PARTNER}/book-pro.svg`,
  DISNEY: `${PREFIX_ICON_PARTNER}/disney.svg`,
  EA_GAME: `${PREFIX_ICON_PARTNER}/ea-game.svg`,
  GAME: `${PREFIX_ICON_PARTNER}/game.svg`,
  POWER_UP: `${PREFIX_ICON_PARTNER}/power-up.svg`,
  SEGA: `${PREFIX_ICON_PARTNER}/sega.svg`
} as const

export const PATH_PAGE = {
  HOME: '/',
  GAMES: '/game',
  ABOUT: '/about',
  PARTNERS: '/partners',
  CONTACT: '/contact'
} as const

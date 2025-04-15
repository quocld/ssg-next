import { PATH_ICON_PARTNERS, PATH_IMAGE_CARD, PATH_PAGE } from './path'

export const LIST_GAME: {
  name: string
  image: string
}[] = [
  {
    name: 'E-Space',
    image: PATH_IMAGE_CARD.E_SPACE
  },
  {
    name: 'Kingland',
    image: PATH_IMAGE_CARD.KINGLAND
  },
  {
    name: 'The Last Game',
    image: PATH_IMAGE_CARD.THE_LAST_GAME
  },
  {
    name: 'G-Dragon',
    image: PATH_IMAGE_CARD.G_DRAGON
  },
  {
    name: 'Pirates',
    image: PATH_IMAGE_CARD.PIRATES
  },
  {
    name: 'Witch Party',
    image: PATH_IMAGE_CARD.WITCH_PARTY
  },
  {
    name: 'Rocky',
    image: PATH_IMAGE_CARD.ROCKY
  },
  {
    name: 'Blue Fire',
    image: PATH_IMAGE_CARD.BLUE_FIRE
  },
  {
    name: 'Magic tree',
    image: PATH_IMAGE_CARD.MAGIC_TREE
  },

  {
    name: 'Aborigines',
    image: PATH_IMAGE_CARD.ABORIGINES
  },
  {
    name: 'Cinderella',
    image: PATH_IMAGE_CARD.CINDERELLA
  },
  {
    name: 'Egypt Game',
    image: PATH_IMAGE_CARD.EGYPT_GAME
  }
] as const

export const LIST_PARTNER = [
  { image: PATH_ICON_PARTNERS.POWER_UP, link: PATH_PAGE.HOME },
  { image: PATH_ICON_PARTNERS.DISNEY, link: PATH_PAGE.HOME },
  { image: PATH_ICON_PARTNERS.BOOK_PRO, link: PATH_PAGE.HOME },
  { image: PATH_ICON_PARTNERS.SEGA, link: PATH_PAGE.HOME },
  { image: PATH_ICON_PARTNERS['2K'], link: PATH_PAGE.HOME },
  { image: PATH_ICON_PARTNERS.EA_GAME, link: PATH_PAGE.HOME },
  { image: PATH_ICON_PARTNERS.GAME, link: PATH_PAGE.HOME }
] as const

export const LIST_LOCALE = [{ locale: 'en' }, { locale: 'vi' }]

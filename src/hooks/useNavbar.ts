import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { PATH_PAGE } from '@/constants'

export const useNavbar = () => {
  const t = useTranslations('header')

  const navLinks = useMemo(() => {
    return [
      { title: t('about'), href: PATH_PAGE.ABOUT },
      { title: t('games'), href: PATH_PAGE.GAMES },
      { title: t('partners'), href: PATH_PAGE.PARTNERS },
      { title: t('contact'), href: PATH_PAGE.CONTACT }
    ]
  }, [t])

  return { navLinks }
}

'use client'

import { useEffect, useState } from 'react'

export const useAnchor = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    if (isScrolled) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight + 10, behavior: 'smooth' })
    }
  }

  return { isScrolled, handleClick }
}

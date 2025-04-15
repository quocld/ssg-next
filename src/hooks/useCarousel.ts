'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { LIST_PARTNER } from '@/constants'

const MAX_VISIBLE_ITEMS = 5
const MIN_VISIBLE_ITEMS = 3

export const useCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const totalItems = useMemo(() => LIST_PARTNER.length, [])
  const visibleItems = useMemo(
    () => (isLargeScreen ? MAX_VISIBLE_ITEMS : MIN_VISIBLE_ITEMS),
    [isLargeScreen]
  )
  const itemsAroundOffset = useMemo(
    () =>
      totalItems - visibleItems < 0
        ? Math.abs(totalItems - visibleItems)
        : Math.ceil(visibleItems / 2) - 1,
    [visibleItems, totalItems]
  )

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024)
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const changeImageIndex = useCallback(
    (step: number) => {
      if (isAnimating) return

      setIsAnimating(true)
      setCurrentIndex((prev) => (prev + step + totalItems) % totalItems)

      setTimeout(() => setIsAnimating(false), 500)
    },
    [totalItems, isAnimating]
  )

  const getTranslateX = useCallback(
    (offset: number) => {
      for (let i = 1; i <= itemsAroundOffset; i++) {
        if (offset === i) return `${i * 100}%`
        if (offset === totalItems - i) return `-${i * 100}%`
      }
      return '0%'
    },
    [itemsAroundOffset, totalItems]
  )

  const getOpacity = useCallback(
    (offset: number) =>
      offset < visibleItems / 2 || offset > totalItems - visibleItems / 2
        ? 1
        : 0,
    [visibleItems, totalItems]
  )

  const calculatorStyleImage = useCallback(
    (index: number) => {
      const offset = (index - currentIndex + totalItems) % totalItems
      return {
        translateX: getTranslateX(offset),
        opacity: getOpacity(offset)
      }
    },
    [currentIndex, totalItems, getTranslateX, getOpacity]
  )

  return {
    changeImageIndex,
    calculatorStyleImage,
    isShowArrow: totalItems > visibleItems,
    isAnimating
  }
}

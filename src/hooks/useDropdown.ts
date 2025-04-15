'use client'

import { useEffect, useRef, useState } from 'react'

export function useDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<'left' | 'right'>('right')

  function toggleDropdown() {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const updatePosition = () => {
      if (contentRef.current) {
        const rect = contentRef.current!.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        if (rect.right > viewportWidth) {
          setPosition('right')
        } else if (rect.left < 0) {
          setPosition('left')
        }
      }
    }

    if (isOpen) {
      updatePosition()
      window.addEventListener('resize', updatePosition)
    }

    return () => {
      window.removeEventListener('resize', updatePosition)
    }
  }, [isOpen])

  return { isOpen, toggleDropdown, position, contentRef, dropdownRef }
}

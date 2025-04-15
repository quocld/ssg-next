'use client'

import { ReactNode } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

import { useDropdown } from '@/hooks'
import classNames from 'classnames'
interface DropdownProps {
  children: ReactNode
  button: ReactNode
  className?: string
}

export default function Dropdown({
  children,
  button,
  className
}: DropdownProps) {
  const { isOpen, toggleDropdown, dropdownRef, position, contentRef } =
    useDropdown()

  return (
    <div className='relative z-[1000]' ref={dropdownRef}>
      <button
        className={`flex cursor-pointer items-center gap-[0.25rem] ${className}`}
        onClick={toggleDropdown}
      >
        <div className='flex items-center justify-center w-[40px] h-[40px]'>
          {button}
        </div>
        <div className='flex items-center justify-center w-[24px] h-[24px]'>
          <TiArrowSortedDown
            className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}
            size={18}
          />
        </div>
      </button>

      {/* Dropdown content */}
      <div
        ref={contentRef}
        className={classNames(
          'absolute mt-2 max-w-[calc(100vw-20px)] min-w-[10rem] shadow-lg transition-all duration-300',
          {
            'scale-100 opacity-100': isOpen,
            'pointer-events-none scale-95 opacity-0': !isOpen,
            'right-0': position === 'right',
            'left-0': position === 'left'
          }
        )}
      >
        {children}
      </div>
    </div>
  )
}

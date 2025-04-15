'use client'

import classNames from 'classnames'
import Image from 'next/image'

import { PATH_ICON } from '@/constants'
import { useAnchor } from '@/hooks'

export default function Anchor() {
  const { isScrolled, handleClick } = useAnchor()

  return (
    <div
      className='fixed right-[30px] bottom-[20px] z-[999] cursor-pointer'
      onClick={handleClick}
    >
      <Image
        src={PATH_ICON.ANCHOR}
        width={80}
        height={80}
        alt='anchor'
        className={classNames(
          'origin-center transition-transform duration-300 ease-in-out',
          { 'rotate-180': isScrolled }
        )}
        title='Anchor'
      />
    </div>
  )
}

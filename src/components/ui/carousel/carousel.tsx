'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { LIST_PARTNER, PATH_ICON } from '@/constants'
import { useCarousel } from '@/hooks'

export default function Carousel() {
  const { changeImageIndex, calculatorStyleImage, isShowArrow, isAnimating } =
    useCarousel()

  return (
    <div className='max-w-8xl relative mx-auto mt-0 w-full overflow-hidden lg:mt-[15px]'>
      <div className='relative flex h-[100px] items-center justify-center lg:gap-[40px]'>
        {LIST_PARTNER.map((partner, index) => {
          const styleImage = calculatorStyleImage(index)
          return (
            <Link
              className={
                'absolute scale-[70%] cursor-pointer transition-transform duration-500 ease-in-out lg:scale-100'
              }
              href={partner.link}
              style={{
                transform: `translateX(${styleImage.translateX})`,
                opacity: styleImage.opacity
              }}
              key={index}
              title={partner.link}
            >
              <Image
                src={partner.image}
                alt={`Partner ${index + 1}`}
                width={260}
                height={100}
                loading={index < 3 ? 'eager' : 'lazy'}
                quality={80}
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 15vw"
                title={`Partner ${index + 1}`}
              />
            </Link>
          )
        })}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => changeImageIndex(-1)}
        disabled={isAnimating}
        aria-disabled={isAnimating}
        className={classNames(
          'absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer lg:left-[10%]',
          {
            hidden: !isShowArrow,
            '!cursor-not-allowed opacity-50': isAnimating
          }
        )}
      >
        <Image
          src={PATH_ICON.ARROW}
          alt='Left arrow'
          width={40}
          height={40}
          priority
          quality={90}
          title='Left arrow'
        />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => changeImageIndex(1)}
        disabled={isAnimating}
        aria-disabled={isAnimating}
        className={classNames(
          'absolute top-1/2 right-0 z-10 -translate-y-1/2 rotate-180 cursor-pointer lg:right-[10%]',
          {
            hidden: !isShowArrow,
            '!cursor-not-allowed opacity-50': isAnimating
          }
        )}
      >
        <Image
          src={PATH_ICON.ARROW}
          alt='Right arrow'
          width={40}
          height={40}
          priority
          quality={90}
          title='Right arrow'
        />
      </button>
    </div>
  )
}

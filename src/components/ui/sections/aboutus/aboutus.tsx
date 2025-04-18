import { CalendarTick, PenTool2, People } from 'iconsax-react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { PATH_IMAGE, PATH_PAGE } from '@/constants'

import { AboutUsItem, IAboutUsItem } from './aboutus-item'
import { IParameterItem, ParameterItem } from './parameter-item'
import Link from 'next/link'

export default async function AboutUs() {
  const t = await getTranslations('aboutus')

  const ABOUTUS_ITEM: IAboutUsItem[] = [
    {
      title: t('items.title1'),
      desc: t('items.desc1'),
      icon: CalendarTick
    },
    {
      title: t('items.title2'),
      desc: t('items.desc2'),
      icon: PenTool2
    },
    {
      title: t('items.title3'),
      desc: t('items.desc3'),
      icon: People
    }
  ]

  const PARAMETER_ITEMS: IParameterItem[] = [
    {
      number: 600,
      title: t('users'),
      numerical_abbreviations: t('user_numerical')
    },
    {
      number: 135,
      title: t('games')
    }
  ]

  return (
    <>
      <div className='grid grid-cols-1 gap-10 px-0 pt-12 text-black md:pt-20 lg:grid-cols-2 lg:px-[5rem] xl:px-[10rem] xl:pt-[8rem] 2xl:px-[23.75rem]'>
        <div className='flex flex-col gap-10 px-4 lg:gap-20 lg:px-0'>
          {/* Title + Desc */}
          <div className='flex flex-col gap-4 lg:gap-10'>
            <Link href={PATH_PAGE.ABOUT}>
              <h2 className='text-[2.5rem] leading-[3.125rem] font-black tracking-[0.0375rem] lg:text-[3.75rem] lg:leading-[3.75rem] lg:tracking-[0.225rem]'>
                {t('title')}
              </h2>
            </Link>
            <p className='text-[0.875rem] leading-[140%] text-[#757575]'>
              {t('desc')}
            </p>
          </div>
          {/* Parameter item */}
          <div className='flex flex-row gap-x-14 gap-y-10 lg:flex-col'>
            {PARAMETER_ITEMS.map((item, index) => (
              <ParameterItem key={index} {...item} />
            ))}
          </div>
        </div>
        {/* aboutus item */}
        <div className='flex flex-col items-start justify-center gap-10 bg-[#EEE] px-4 py-10 lg:items-center lg:px-[4.6875rem] lg:py-0'>
          {ABOUTUS_ITEM.map((item, index) => (
            <AboutUsItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className='mt-[0.9375rem] flex flex-col items-center justify-center lg:mt-[4.25rem]'>
        <Image
          className='moving-element z-10 -mb-24 scale-75 md:-mb-28 lg:-mb-32 lg:scale-100'
          alt='Witch'
          src={PATH_IMAGE.WITCH}
          width={533}
          height={437}
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          title='Witch'
        />
        <Image
          className='z-0'
          alt='World map'
          src={PATH_IMAGE.MAP}
          width={1160}
          height={428}
          priority
          quality={90}
          sizes="100vw"
          title='World map'
        />
      </div>
    </>
  )
}

import {
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined
} from '@ant-design/icons'
import { Location, Mobile } from 'iconsax-react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

import { TextField } from '@/components'
import { PATH_ICON, PATH_IMAGE, PATH_PAGE } from '@/constants'

const LIST_ICON_FOOTER = [
  {
    icon: <TwitterOutlined />,
    link: 'https://twitter.com/'
  },
  {
    icon: <FacebookFilled />,
    link: 'https://www.facebook.com/'
  },
  {
    icon: <LinkedinFilled />,
    link: 'https://www.linkedin.com/'
  }
]

export default async function Footer() {
  const t = await getTranslations('footer')
  return (
    <>
      <footer
        style={{
          backgroundImage: `url(${PATH_IMAGE.FOOTER_BG})`
        }}
        className='flex flex-col items-center justify-center gap-[4.5625rem] bg-cover bg-[left_calc(50%)_top_calc(100%)] bg-no-repeat px-4 py-10 text-white lg:flex-row lg:items-start lg:px-[14.375rem] lg:pt-[6.5rem] lg:pb-[6.25rem] xl:gap-[6.25rem] 2xl:gap-[27.25rem]'
      >
        <div className='flex flex-col gap-10'>
          {/* Logo */}
          <Link href={PATH_PAGE.HOME} title='Logo'>
            <Image
              src={PATH_ICON.LOGO}
              width={163.23}
              height={96}
              alt='Logo'
              title='Logo'
            />
          </Link>
          {/* Link */}
          <div className='flex flex-row gap-6'>
            {LIST_ICON_FOOTER.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className='h-[2.5rem] w-[2.5rem] text-[2.5rem]'
                title={item.link}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className='mb-5 flex flex-col gap-16 lg:mb-0 lg:flex-row lg:gap-10'>
          <div className='flex flex-col gap-5 lg:gap-10'>
            {/* address title */}
            <p className='text-[1.5rem] leading-[1.875rem] font-bold'>
              {t('title1')}
            </p>
            {/* location */}
            <div className='flex flex-row gap-2'>
              <Location
                variant='Bold'
                size={40}
                className='flex-shrink-0'
                color='white'
              />
              <div className='flex flex-col gap-3'>
                <Link
                  href={
                    'https://www.google.com/maps/place/Dragon+Bridge/@16.0698121,108.2327373,15z/data=!4m6!3m5!1s0x31421996588a512f:0x493b652aa06b12e!8m2!3d16.0612215!4d108.2296818!16s%2Fm%2F0b73rjx?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D'
                  }
                  className='text-[0.875rem] leading-[1.225rem] font-normal'
                >
                  {t('address1')}
                </Link>
                <Link
                  href={
                    'https://www.google.com/maps/place/Da+Nang+Museum+of+Cham+Sculpture/@16.0698121,108.2327373,15z/data=!4m6!3m5!1s0x314219cdb3006a2d:0x62ca993f60c3a12c!8m2!3d16.0603007!4d108.2232677!16s%2Fm%2F02pvbjt?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D'
                  }
                  className='text-[0.875rem] leading-[1.225rem] font-normal'
                >
                  {t('address2')}
                </Link>
              </div>
            </div>
            {/* Phone */}
            <div className='flex flex-row items-center gap-2'>
              <Mobile
                variant='Bold'
                size={40}
                className='flex-shrink-0'
                color='white'
              />
              <div className='flex flex-col gap-3'>
                <Link
                  href={'tel:(+236) 555-0108'}
                  className='text-[0.875rem] leading-[1.225rem] font-normal'
                >
                  {t('phone')}
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 lg:gap-10'>
            <p className='text-[1.5rem] leading-[1.875rem] font-bold'>
              {t('title2')}
            </p>
            <div className='flex flex-col gap-3'>
              <p className='text-[0.875rem] leading-[1.225rem] font-normal'>
                {t('subscribe')}
              </p>
              <TextField
                className='!bg-transparent !text-white'
                placeholder={'Label'}
              />
            </div>
          </div>
        </div>
      </footer>
      <div className='flex justify-center bg-black pt-[1.875rem] pb-[1.6875rem]'>
        <p className='text-[1.125rem] leading-[126%]'>
          2017 Copyright. Policy.
        </p>
      </div>
    </>
  )
}

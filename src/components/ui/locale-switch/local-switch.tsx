'use client'

import { Locale, useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { startTransition } from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'

import { Dropdown } from '@/components'
import { PATH_ICON } from '@/constants'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export default function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('language')

  const locales = routing.locales
  const currentFlag = locale === 'en' ? PATH_ICON.FLAG_EN : PATH_ICON.FLAG_VN

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale })
    })
  }

  return (
    <Dropdown
      className={className}
      button={
        <Image
          src={currentFlag}
          width={33}
          height={33}
          alt={locale}
          title='button'
        />
      }
    >
      <div className='w-full rounded-lg border border-gray-300 bg-white'>
        {locales.map((loc, index) => (
          <div key={loc}>
            <div
              className='flex w-full cursor-pointer items-center gap-2 rounded-lg bg-white p-2 text-black hover:bg-gray-100'
              onClick={() => onSelectChange(loc)}
            >
              <div className='w-5'>
                {locale === loc && <IoCheckmarkOutline size={20} />}
              </div>
              <div className='flex items-center gap-2'>
                <Image
                  priority
                  src={loc === 'en' ? PATH_ICON.FLAG_EN : PATH_ICON.FLAG_VN}
                  width={33}
                  height={33}
                  alt={loc}
                  title='flag'
                />
                <span className='text-xs font-bold'>
                  {loc === 'en' ? t('en') : t('vi')}
                </span>
              </div>
            </div>
            {index < locales.length - 1 && (
              <hr className='mx-2 border-gray-300' />
            )}
          </div>
        ))}
      </div>
    </Dropdown>
  )
}

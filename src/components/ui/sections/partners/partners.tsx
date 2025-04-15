import { useTranslations } from 'next-intl'
import { Carousel } from '@/components'
import Link from 'next/link'
import { PATH_PAGE } from '@/constants'

export default function Partners() {
  const t = useTranslations('partners')

  return (
    <div className='flex flex-col gap-10 bg-[#F6F6F6] py-10 lg:gap-20 lg:px-20 lg:py-32'>
      <div className='flex flex-col items-center gap-6 text-black lg:gap-16'>
        <Link href={PATH_PAGE.PARTNERS}>
          <h2 className='text-center text-4xl leading-[3.125rem] tracking-wide lg:text-6xl lg:leading-[3.75rem] lg:tracking-[0.225rem]'>
            {t('title')}
          </h2>
        </Link>
        <Carousel />
      </div>
    </div>
  )
}

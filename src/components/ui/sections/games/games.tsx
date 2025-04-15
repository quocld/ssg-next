import { getTranslations } from 'next-intl/server'

import { LIST_GAME, PATH_PAGE } from '@/constants'

import CardGame from './card-game'
import Link from 'next/link'

export default async function Games() {
  const t = await getTranslations('games')
  return (
    <div className='mb-[2.4375rem] flex flex-col gap-10 px-4 py-12 lg:mb-[7.375rem] lg:gap-20 lg:px-20 lg:py-32'>
      <div className='flex flex-col items-center gap-4 text-center text-black lg:gap-6'>
        <Link href={PATH_PAGE.GAMES}>
          <h2 className='text-[2.5rem] leading-[3.125rem] tracking-[0.0375rem] lg:text-[3.75rem] lg:leading-[3.75rem] lg:tracking-[0.225rem]'>
            {t('title')}
          </h2>
        </Link>
        <p className='w-auto text-center text-[0.875rem] leading-[1.225rem] text-[#757575] xl:w-[53.75rem]'>
          {t('desc')}
        </p>
      </div>
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-10'>
        {LIST_GAME.map((item, index) => {
          return (
            <CardGame
              index={index}
              key={item.name}
              name={item.name}
              image={item.image}
            />
          )
        })}
      </div>
    </div>
  )
}

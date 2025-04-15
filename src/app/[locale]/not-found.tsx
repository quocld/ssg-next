import { PATH_PAGE } from '@/constants'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function NotFound() {
  const t = await getTranslations('not-found')
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800'>
      <div className='text-center'>
        <h1 className='text-9xl font-extrabold text-blue-500'>404</h1>
        <h2 className='mt-4 text-3xl font-semibold md:text-4xl'>
          {t('title')}
        </h2>
        <p className='mt-2 text-lg text-gray-600 md:text-xl'>{t('desc')}</p>
        <Link
          className='my-7 text-3xl font-bold text-blue-500 underline'
          prefetch
          href={PATH_PAGE.HOME}
        >
          {t('back')}
        </Link>
      </div>
    </div>
  )
}

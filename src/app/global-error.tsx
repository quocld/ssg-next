'use client' // Error boundaries must be Client Components

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const t = useTranslations('error')

  return (
    <div>
      <h1>{t('title')}</h1>
      <h2 className='text-red-500'>{t('desc')}</h2>
      <button
        className='rounded bg-blue-500 p-2 text-white'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {t('retry')}
      </button>
    </div>
  )
}

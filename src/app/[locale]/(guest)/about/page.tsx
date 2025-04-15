import { LIST_LOCALE, PATH_PAGE } from '@/constants'
import Link from 'next/link'

export async function generateStaticParams() {
  return LIST_LOCALE
}

export default function AboutPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-900'>
      <div className='space-y-6 text-center'>
        <h1 className='text-6xl font-bold text-blue-600'>About Page</h1>
        <h2 className='text-2xl font-medium md:text-3xl'>Developing ...</h2>
        <Link
          href={PATH_PAGE.HOME}
          className='inline-block rounded-lg bg-amber-400 px-6 py-3 text-xl font-semibold text-white shadow-md transition hover:bg-amber-500'
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

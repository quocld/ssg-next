import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'

import { montserrat, playfair } from '../font'
import '../globals.css'
import { getTranslations } from 'next-intl/server'
import { idJsonObject } from '@/constants'
import Script from 'next/script'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('desc'),
    keywords: t('keywords'),
    publisher: 'Ryan'
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Script
          id='store-jsonld'
          type='application/ld+json'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(idJsonObject) }}
        />
      </body>
    </html>
  )
}

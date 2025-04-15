import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { PATH_PAGE } from '@/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales

  const pages = [PATH_PAGE.HOME, PATH_PAGE.ABOUT, PATH_PAGE.GAMES]

  const sitemapEntries = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `https://4tech-test-chi.vercel.app/${locale}${page}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: page === PATH_PAGE.HOME ? 1 : 0.8
    }))
  )

  return sitemapEntries
}

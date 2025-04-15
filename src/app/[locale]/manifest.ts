import type { MetadataRoute } from 'next'
export default async function manifest({
  params
}: {
  params: { locale: string }
}): Promise<MetadataRoute.Manifest> {
  const { locale } = await params

  return {
    name: 'Landing Page',
    short_name: 'Home',
    description: 'Homepage of the Landing Page',
    lang: locale,
    theme_color: '#1A94FF',
    background_color: '#1A94FF',
    start_url: `/${locale}/`,
    display: 'standalone',
    orientation: 'portrait',
    scope: `/${locale}/`
  }
}

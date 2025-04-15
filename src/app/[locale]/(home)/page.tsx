import { AboutUs, Games, HeroSection, Partners } from '@/components'
import { LIST_LOCALE } from '@/constants'

export async function generateStaticParams() {
  return LIST_LOCALE
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Games />
      <Partners />
    </div>
  )
}

import { AboutUs, Games, HeroSection, Partners } from '@/components'
import { LIST_LOCALE } from '@/constants'

export async function generateStaticParams() {
  return LIST_LOCALE
}

export default async function Home() {
  return (
    <div>
      {await HeroSection()}
      {await AboutUs()}
      {await Games()}
      <Partners />
    </div>
  )
}

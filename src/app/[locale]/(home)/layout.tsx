import { Anchor, Footer, Header } from '@/components'

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='min-h-screen flex-col bg-white'>
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
        <Anchor />
      </div>
    </>
  )
}

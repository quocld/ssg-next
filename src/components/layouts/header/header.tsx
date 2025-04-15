import Image from 'next/image'
import Link from 'next/link'

import { PATH_ICON, PATH_PAGE } from '@/constants'

import { Navbar } from '../navbar'
import { NavbarMobile } from '../navbar-mobile'

export default function Header() {
  return (
    <>
      <header className='absolute top-0 z-[1000] flex w-full flex-row items-center justify-between px-[1rem] pt-[1rem] lg:px-[5rem] lg:pt-[1.25rem]'>
        {/* logo */}
        <Link href={PATH_PAGE.HOME} title='Logo'>
          <Image
            src={PATH_ICON.LOGO}
            width={108}
            height={64}
            alt='Logo'
            className='scale-75 md:scale-100'
            priority
            style={{ width: 'auto', height: 'auto' }}
            title='Logo'
          />
        </Link>
        {/* nav */}
        <div className='hidden lg:block'>
          <Navbar />
        </div>
        <div className='block lg:hidden'>
          <NavbarMobile />
        </div>
      </header>
    </>
  )
}

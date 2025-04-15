'use client'
import { PATH_ICON } from '@/constants'
import { useState } from 'react'
import Image from 'next/image'
import { LocalSwitch } from '@/components'
import classNames from 'classnames'
import Link from 'next/link'
import { useNavbar } from '@/hooks'

export default function NavbarMobile() {
  const { navLinks } = useNavbar()
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <button className='cursor-pointer' onClick={toggleOpen}>
        <Image
          src={PATH_ICON.MENU}
          width={40}
          height={40}
          alt='Menu'
          title='Menu'
        />
      </button>

      {/* LocalSwitch + Close */}
      <div
        className={classNames(
          'fixed top-0 left-0 z-50 h-full w-full transform bg-white px-4 pt-8 transition-all duration-500',
          {
            '-translate-x-0 opacity-100': open,
            'translate-x-full opacity-0': !open
          }
        )}
      >
        <div className='flex items-center justify-between'>
          <LocalSwitch className='rounded-lg border border-[#AFAFAF] !bg-[#F6F6F6] py-1 pr-3 pl-3.5 text-black' />
          <button onClick={toggleOpen} className='text-black'>
            <Image
              src={PATH_ICON.CLOSE}
              width={40}
              height={40}
              alt='Close'
              title='Close'
            />
          </button>
        </div>
        {/* nav */}
        <nav className='mt-10 text-black'>
          <ul className='flex flex-col items-center gap-10'>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={classNames('w-full pt-10 text-center', {
                  'border-t border-[#AFAFAF]': index !== 0
                })}
              >
                <Link
                  className='font-bold uppercase'
                  href={link.href}
                  title={link.title}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

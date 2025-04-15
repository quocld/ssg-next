import Link from 'next/link'

import { LocalSwitch } from '@/components'
import { useNavbar } from '@/hooks'

export default function Navbar() {
  const { navLinks } = useNavbar()
  return (
    <nav className='flex flex-row items-center space-x-[5.25rem]'>
      <ul className='flex flex-row space-x-[5.25rem]'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className='font-montserrat font-bold text-[14px] leading-[17.5px] tracking-[0px] uppercase'
              href={link.href}
              title={link.title}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <LocalSwitch />
    </nav>
  )
}

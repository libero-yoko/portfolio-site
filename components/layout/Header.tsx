import * as React from 'react'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Pages } from '../constants/pages'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const styles = {
  'expandable-menu':
    'absolute z-0 flex flex-col h-screen w-screen gap-8 text-4xl text-stone-800 bg-stone-200 items-center justify-center -translate-y-full transition ease-in-out duration-300 [&>li:hover]:text-black md:hidden'
}

export default function Header(): React.ReactElement {
  const pathname = usePathname()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const navMenuLink = Pages.map((page) => (
    <li
      key={page.id!}
      className={pathname == `/${page.slug}` ? 'font-bold text-stone-600' : ''}
    >
      <Link href={`/${page.slug}`}>{page.title}</Link>
    </li>
  ))
  return (
    <div className="h-full w-full absolute">
      <div className="flex flex-col p-0">
        <div className="h-8 w-8 absolute top-4 left-4 z-30 cursor-pointer md:hidden">
          {showMenu ? (
            <XCircleIcon onClick={toggleMenu} />
          ) : (
            <Bars3Icon onClick={toggleMenu} />
          )}
        </div>
        <div className="flex p-2 justify-end md:justify-between items-center md:px-16 md:py-4">
          <Link className="z-30" href="/">
            <img
              src="/img/logo-dark.png"
              className="w-12 h-12 self-end md:self-start animate-wiggle"
              alt="Yoko Logo"
            />
          </Link>
          <nav className="z-30 md:flex">
            <ul className="hidden md:flex gap-8 list-none md:pl-8">
              {navMenuLink}
            </ul>
          </nav>
        </div>
        <nav className="absolute">
          <ul
            className={`${styles['expandable-menu']} ${
              showMenu && 'translate-y-0 z-20'
            }`}
          >
            {navMenuLink}
          </ul>
        </nav>
      </div>
    </div>
  )
}
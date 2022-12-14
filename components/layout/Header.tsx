import * as React from 'react'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const styles = {
  'expandable-menu':
    'group sm:box md:hidden menu-click-area absolute cursor-pointer',
  'active':'flex',
  'mobile-menu':'top-16 flex-col pb-4 pl-4 gap-8 h-screen w-screen text-white bg-stone-900'
}
export default function Header(): React.ReactElement {
  const [showMenu, setShowMenu] = useState<Boolean>(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className="flex flex-col p-0">
      <div className="flex p-2 justify-end mid:justify-between items-center md:justify-start">
        <img
          src="/img/logo-dark.png"
          className="z-10 w-12 h-12 self-end mid:self-start animate-wiggle"
          alt="Yoko Logo"
        />
        <nav className="mid:flex">
          <ul className="hidden md:flex gap-8 list-none md:pl-8">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className={styles['expandable-menu']} onClick={toggleMenu}>
        {showMenu ? (
           <XCircleIcon className="h-8 w-8 absolute top-4 left-4" />
        ) : (
           <Bars3Icon className="h-8 w-8 absolute top-4 left-4" />
        )}
        <ul className={`${showMenu? 'menu active' : 'menu'}`} >
          <li className="dropdown_item-1">About</li>
          <li className="dropdown_item-2">Skills</li>
          <li className="dropdown_item-3">Projects</li>
          <li className="dropdown_item-4">Contact</li>
        </ul>
      </div>
    </div>
  )
}

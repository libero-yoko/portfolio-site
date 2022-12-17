import * as React from 'react'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const styles = {
  'expandable-menu':'md:hidden overflow-hidden flex-col w-screen gap-8 text-4xl text-white bg-stone-400 items-center justify-center -translate-y-full transition ease-in-out duration-300 [&>li:hover]:text-black',
}
export default function Header(): React.ReactElement {
  const [showMenu, setShowMenu] = useState<Boolean>(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className="h-full w-full absolute"> 
    <div className={`flex flex-col p-0`}>
      {showMenu ? (
        <XCircleIcon className="h-8 w-8 absolute top-4 left-4 z-10" onClick={toggleMenu} />
      ) : (
        <Bars3Icon className="h-8 w-8 absolute top-4 left-4 z-10" onClick={toggleMenu}/>
      )}
      <div className="flex p-2 justify-end mid:justify-between items-center md:justify-start">
        <a href='/About' target='_blank'><img
          src="/img/logo-dark.png"
          className="z-10 w-12 h-12 self-end mid:self-start animate-wiggle"
          alt="Yoko Logo"
        /></a>
        <nav className="mid:flex">
          <ul className="hidden md:flex gap-8 list-none md:pl-8">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className='absolute' >
        <nav>
          <ul className={`${styles['expandable-menu']} ${showMenu && 'flex translate-y-0 h-screen'}`}>
            <li className="dropdown_item-1"><a href='/About' target='_blank'>About</a></li>
            <li className="dropdown_item-2">Skills</li>
            <li className="dropdown_item-3">Projects</li>
            <li className="dropdown_item-4">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  )
}

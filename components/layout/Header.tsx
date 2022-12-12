import * as React from 'react';
import {Bars3Icon} from '@heroicons/react/24/solid'

export default function Header():React.ReactElement{
  return(
    <div className="group flex flex-col p-0">
      <div className="flex p-2 bg-stone-500 text-white justify-end mid:justify-between items-center md:justify-start">
        <img src='/img/logo-white.png' className='z-10 w-12 h-12 self-end mid:self-start animate-wiggle' alt='Yoko Logo' />
        <nav className="mid:flex">
          <ul className='hidden md:flex gap-8 list-none md:pl-8'>
            <li>
              About
            </li>
            <li>
              Skills
            </li>
            <li>
              Projects
            </li>
            <li>
              Contact
            </li>
            </ul>
        </nav>
      </div>
      <div className="sm:flex md:hidden text-white">
        <Bars3Icon className="h-6 w-6 absolute top-5 left-5" />
        <ul className="group-hover:flex flex-col hidden grow-down bg-stone-500 pb-3 pl-5">
          <li className="dropdown_item-1">About</li>
          <li className="dropdown_item-2">Skills</li>
          <li className="dropdown_item-3">Projects</li>
          <li className="dropdown_item-4">Contact</li>
        </ul>
      </div>
  </div>
  )
}
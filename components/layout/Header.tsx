import * as React from 'react';
import {Bars3Icon} from '@heroicons/react/24/solid'

export default function Header():React.ReactElement{
  return(
  <div className="flex p-2 bg-stone-500 text-white slide-down justify-between items-center md:justify-start">
    <img src='/img/logo-white.png' className='w-12 h-12' alt='Yoko Logo' />
    <nav className="mid: pl-8 flex">
      <Bars3Icon className="h-6 w-6 md:hidden"/>
      <ul className='hidden md:flex gap-8 list-none'>
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
  )
}
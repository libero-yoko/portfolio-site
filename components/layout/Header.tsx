import * as React from 'react';
import {Bars3Icon} from '@heroicons/react/24/solid'

export default function Header():React.ReactElement{
  return(
  <div className="flex p-4 w-full bg-stone-800 text-white bounce-once justify-between md:justify-start">
    <div>Logo</div>
    <nav className="mid: pl-12">
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
      </ul>
    </nav>
  </div>
  )
}
import * as React from 'react';


export default function Header():React.ReactElement{
  return(
  <div className="flex p-4 w-full bg-stone-800 text-white bounce-once justify-between md:justify-start">
    <div>Logo</div>
    <nav className="mid: pl-12">Menu</nav>
  </div>
  )
}
import * as React from 'react'
import {Raleway} from '@next/font/google'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const raleway = Raleway({subsets:['latin']})
type Props = {
  children:React.ReactElement,
  title:string,
}
export default function Layout({children,title}:Props):React.ReactElement{
  return (
    <div className={raleway.className}>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Yoko's portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <div className="min-h-screen flex flex-col p-0">
      <main className="p-4 flex-1 flex flex-col justify-center items-center text-stone-800 z-10">
        {children}
      </main>
      <Footer />
    </div>
  </div>
  )
}
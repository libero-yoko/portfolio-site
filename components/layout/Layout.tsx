import * as React from 'react'
import { Montserrat } from '@next/font/google'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const montserrat = Montserrat({ subsets: ['latin'] })
type Props = {
  children: React.ReactElement
  title: string
}
export default function Layout({ children, title }: Props): React.ReactElement {
  return (
    <div className={montserrat.className}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Yoko's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-screen flex flex-col px-8 py-20 md:px-16 md:py-24 box-border">
        <main className="flex-1 flex flex-col justify-center items-center text-stone-800 z-10">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

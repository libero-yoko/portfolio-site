import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import {Raleway} from '@next/font/google'
import About from './About'

const raleway = Raleway({subsets:['latin']})
export default function Home() {
  return (
    <div className={raleway.className}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Yoko's portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
        <Header/>
      <div className="min-h-screen flex flex-col p-0">
        <main className="p-4 flex-1 flex flex-col justify-center items-center text-stone-800 z-10">
          <About />
        </main>
        <Footer />
      </div>
    </div>
  )
}

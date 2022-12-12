import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Yoko's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col p-0">
        <Header/>
        <main className="p-4 flex-1 flex flex-col justify-center items-center">
          <h1>Hello</h1>

        </main>
        <Footer />
      </div>
    </>
  )
}

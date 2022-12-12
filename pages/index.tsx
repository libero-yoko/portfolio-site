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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Raleway:wght@400;500&display=swap" rel="stylesheet" />
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

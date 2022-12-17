import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl">YOKO K.</h1>
          <p className="text-xl">
            Hi! My name is Yoko. I'm a Software Engineer
          </p>
        </div>
        <div className="flex-1">
          <img src="/img/ie.gif" />
        </div>
      </div>
    </Layout>
  )
}

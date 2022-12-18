import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex flex-col md:items-center md:flex-row">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-2xl md:text-5xl font-bold text-stone-500">
            YOKO K.
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-stone-500">
            Front-End Engineer
          </h2>
          <h3 className="text-stone-400">
            Ex.Meta Frontend Developer(contract), Ex.IBM IT Engineer
          </h3>
          <div className="md:text-xl flex flex-col gap-2">
            <p>
              Hi there! I am a front-end engineer and tech enthusiast based in
              Seattle.
            </p>
            <p>
              My professional pride and joy come from surfacing and visualizing
              the customer's true needs and delivering solid products.
            </p>
            <p>
              Most recent stack includes{' '}
              <span className="font-bold text-stone-500">
                React, GraphQL, Relay, TypeScript, Next.js, Node.js
              </span>
              , and more.
            </p>
            <a href="/Profile">
              <Button
                color="neutral"
                size="md"
                fullWidth={true}
                label="Go to PROFILE"
              />
            </a>
          </div>
        </div>
        <div className="md:flex-1">
          <img src="/img/ie.gif" />
        </div>
      </div>
    </Layout>
  )
}

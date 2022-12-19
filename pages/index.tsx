import Layout from '../components/layout/Layout'
import Button from '../components/ui/Button'
import Kikko from '../components/ui/Kikko'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex flex-col md:items-center md:flex-row">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-2xl md:text-5xl font-bold text-stone-500">
            YOKO K.
          </h1>
          <h2 className="text-xl md:text-3xl text-stone-500">
            Software Engineer
          </h2>
          <h3 className="text-stone-400">
            Ex.Meta Frontend Developer(contract), Ex.IBM IT Engineer
          </h3>
          <div className="md:text-lg flex flex-col gap-2">
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
            <div className="self-end">
              <a href="/About">
                <Button
                  color="primary"
                  size="md"
                  fullWidth={true}
                  label="View Profile"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center p-4">
          <Kikko col={5} row={3} color="#e7e5e4" />
        </div>
      </div>
    </Layout>
  )
}

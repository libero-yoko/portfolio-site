import * as React from 'react'
import Layout from '../components/layout/Layout'
import Kikko from '../components/ui/Kikko'

export default function About(): React.ReactElement {
  return (
    <Layout title="Profile">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl">YOKO K.</h1>
          <h2 className="text-xl">Software Engineer</h2>
          <p>
            As a front-end engineer, my professional pride and joy come from
            surfacing and visualizing the customer's true needs and delivering
            solid products.
          </p>
          <p>
            Through my experience working directly with customers, I always
            consider the end user's point-of-view when designing products,
            prioritizing their user experience and satisfaction.
          </p>
          <p>
            I work closely with designers, backend engineers, and other
            stakeholders, playing an important role as a communicaiton hub!
          </p>
          <p>
            With my passion for new technologies, I'm confident to bring values
            to many more projects.
          </p>
        </div>
        <div className="flex-1 flex justify-center p-4">
          <Kikko col={3} row={4} color="#E9E9E9" />
        </div>
      </div>
    </Layout>
  )
}

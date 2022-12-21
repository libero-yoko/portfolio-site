import * as React from 'react'
import { SkillCategory, Skills } from '../components/constants/skills'
import Layout from '../components/layout/Layout'
import Badge from '../components/ui/Badge'
import Kikko from '../components/ui/Kikko.js'

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
          <div className="my-8 flex max-w-screen gap-2 flex-wrap justify-center">
            {Skills.map((skill) => (
              <Badge
                key={skill.id}
                label={skill.title}
                color={
                  skill.category === SkillCategory.FrontEnd
                    ? 'border-cyan-500'
                    : 'border-lime-500'
                }
              />
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center p-4">
          <Kikko col={7} row={4} color="#e7e5e4" />
        </div>
      </div>
    </Layout>
  )
}

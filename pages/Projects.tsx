import React, { ReactElement } from 'react'
import Layout from '../components/layout/Layout'
import Card from '../components/ui/Card'

export default function Projects(): ReactElement {
  return (
    <Layout title="Projects">
      <div>
        <Card
          title="yoko.codes"
          description="This portfolio website"
          badges={['React', 'Next.js', 'TypeScript']}
          url="https://yoko.codes/"
        />
        <Card
          title="Ahoy"
          description="Easy to use GUI for HELM"
          badges={['React', 'Electron', 'Helm', 'Kubernetes']}
          url="https://ahoyhelm.org/"
        />
        <Card
          title="PuffDesk.com"
          description="Open Source: web based helpdesk system for engineers"
          badges={['React', 'PosgreSQL']}
          url="https://puffdesk.com/"
        />
        <Card
          title="Ototomo"
          description="Easy to use, music animation video generator"
          badges={['Swift', 'iOS']}
          url="https://www.studio-libero.com/app/"
        />
        <Card
          title="Jazz Interval"
          description="Music education app"
          badges={['Swift', 'iOS']}
          url="https://www.studio-libero.com/app/"
        />
        <Card
          title="GF Research"
          description="Company website"
          badges={['Design', 'Contents Design']}
          url="https://gfresearch.com/"
        />
        <Card
          title="Tavpik Corp"
          description="Company website"
          badges={['Design', 'Contents Design']}
          url="http://tavpikcorp.jp/ja/"
        />
      </div>
    </Layout>
  )
}

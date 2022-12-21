import { ReactElement } from 'react'
import Layout from '../components/layout/Layout'

export default function Contact(): ReactElement {
  return (
    <Layout title="Contact">
      <div className="flex items-center gap-4">
        <div className="w-12">
          <a href="https://www.linkedin.com/in/yokokawamoto/" target="_blank">
            <img src="/img/linkedin.png" alt="linked in logo" />
          </a>
        </div>
        <div className="w-12">
          <a href="https://github.com/libero-yoko" target="_blank">
            <img src="/img/github.png" alt="github logo" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

import {Raleway} from '@next/font/google'
import Layout from '../components/layout/Layout'

const raleway = Raleway({subsets:['latin']})
export default function Home() {
  return (
   <Layout title="Home">
    <h1>Home</h1>
   </Layout>
  )
}

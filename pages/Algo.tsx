import { ReactElement, useEffect, useState } from 'react'
import FloodFill from '../components/algo/floodfill'

import Layout from '../components/layout/Layout'

export default function Algo(): ReactElement {
  return (
    <Layout title="Algo">
      <FloodFill />
    </Layout>
  )
}

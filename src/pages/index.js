import * as React from "react"
import { Layout, Hero, Highlights } from '../components'
import '../styles/styles.scss'

// styles


// markup
const IndexPage = () => {
  return (
    <main className='page home-page'>
      <Layout>
        <Hero />
        <Highlights />
      </Layout>
    </main>
  )
}

export default IndexPage

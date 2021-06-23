import * as React from "react"
import { Layout, Hero, Highlights } from '../components'
import '../styles/styles.scss'

// styles


// markup
const IndexPage = ({ location }) => {
  return (
    <main className='page home-page'>
      <Layout location={location}>
        <Hero />
        <Highlights />
      </Layout>
    </main>
  )
}

export default IndexPage

import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Hero, Highlights } from '../components'
import '../styles/styles.scss'

// styles


// markup
const IndexPage = ({ location, data }) => {
  return (
    <main className='page home-page'>
      <Layout location={location}>
        <Hero />
        <Highlights data={data} />
      </Layout>
    </main>
  )
}


export const query = graphql`
  {
    allDataJson {
      nodes {
        work {
          title
          highlight
          src
        }
      }
    }
  }
`

export default IndexPage



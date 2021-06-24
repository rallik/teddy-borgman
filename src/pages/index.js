import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Hero, Videolist } from '../components'
import '../styles/styles.scss'

// styles


// markup
const IndexPage = ({ location, data }) => {
  console.log(location)

  return (
    <main className='page home-page'>
      <Layout location={location}>
        <Hero />
        <Videolist location={location} data={data}/>
      </Layout>
    </main>
  )
}


export const query = graphql`
{
  allVideosJson(filter: {highlight: {eq: true}}) {
    nodes {
      title
      src
      id
    }
  }
}
`

export default IndexPage



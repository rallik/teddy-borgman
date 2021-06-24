import React from 'react'
import { graphql } from "gatsby"
import { Layout, Videolist } from '../../components'


const work = ({ location, data }) => {
    return (
        <main className='page work-page'>
            <Layout>
                <Videolist location={location} data={data}/>
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

export default work

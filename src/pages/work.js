import React from 'react'
import { graphql } from "gatsby"
import { Layout, Videolist } from '../components'


const work = ({ location, data }) => {
    console.log(location)
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
    allVideosJson {
      nodes {
        title
        src
        id
      }
    }
  }
`

export default work

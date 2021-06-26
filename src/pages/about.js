import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Layout } from '../components'


const about = ({ location, data }) => {
    const aboutpic = getImage(data.aboutpic)
    return (
        <main className='page about-page'>
            <Layout location={location}>
                <section className='section about'>
                    <h2 className='head about-head'>About Me</h2>
                    <GatsbyImage className='about-pic' image={aboutpic} alt='Teddy Borgman' imgStyle={{objectFit: "contain"}}/>
                    <p className='about-text'>
                        Hi, my name is Ted Borgman, welcome to my portfolio. I create videos that bring your vision to life, from events to promotional, docu-film, or anything in between. I have been making videos in the Boston-area for more than ten years, and have worked on multiple major film sets. I look forward to working with you!
                    </p>
                </section>
            </Layout>
        </main>
    )
}

export const query = graphql`
  {
    aboutpic: file(relativePath: {eq: "headshot.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default about

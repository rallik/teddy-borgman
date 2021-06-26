import React from 'react'
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Layout } from '../components'


const about = ({ location }) => {
    return (
        <main className='page about-page'>
            <Layout>
                <section className='section' style={{ height: '100vh' }}>
                    <h2 className='head about-head'>About Me</h2>
                    <GatsbyImage />
                    <p>
                        Hi, my name is Ted Borgman, welcome to my portfolio. I create videos that bring your vision to life, from events to promotional, docu-film, or anything in between. I have been making videos in the Boston-area for more than ten years, and have worked on multiple major film sets. I look forward to working with you!
                    </p>
                </section>
            </Layout>
        </main>
    )
}

export default about

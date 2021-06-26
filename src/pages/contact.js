import React from 'react'
import { Layout, Form } from '../components'

const contact = ({ location }) => {
    return (
        <main className='page contact-page'>
            <Layout location={location}>
                <section className='section contact'>
                    <h2 className='head contact-head'>Contact Me</h2>
                    <Form/>
                </section>
            </Layout>
        </main>

    )
}

export default contact

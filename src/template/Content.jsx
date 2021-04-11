import './Content.css'
import React from 'react'

const Content = props => (
    <section className="content">
        {props.children}
    </section>
)

export default Content
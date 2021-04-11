import './SectionTitle.css'
import React from 'react'

const SectionTitle = props => (
    <div className="SectionTitle">
        <span>
            <strong>{props.title}</strong>
        </span>
    </div>
)

export default SectionTitle
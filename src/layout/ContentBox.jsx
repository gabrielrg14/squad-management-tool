import './ContentBox.css'
import React from 'react'
import { Link } from 'react-router-dom'

const ContentBox = props => (
    <div className="ContentBox">
        <div className="content-row">
            <h2 className="content-title">
                <strong>{props.title}</strong>
            </h2>

            {props.addButton ? <Link to="form/Create/" className="btn add-button" >+</Link> : ''}
        </div>

        <hr/>

        {props.children}
    </div>
)

export default ContentBox
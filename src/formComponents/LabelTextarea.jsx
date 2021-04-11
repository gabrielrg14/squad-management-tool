import './form.css'
import React from 'react'

const LabelTextarea = props => (
    <div className="form-group">
        <label htmlFor={props.name}>
            <strong>{props.label}</strong>
        </label>

        <textarea className="form-control" placeholder={props.placeholder} value={props.value} rows={props.rows}
            disabled={props.disabled} onChange={e => props.onChange(props.name, e.target.value)}>
        </textarea>
    </div>
)

export default LabelTextarea
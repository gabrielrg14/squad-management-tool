import './form.css'
import React from 'react'

const LabelSelect = props => (
    <div className="form-inline">
        <label htmlFor={props.name}>
            <strong>{props.label}</strong>
        </label>

        <select className="form-control" value={props.value} disabled={props.disabled}
            onChange={e => props.onChange(props.name, e.target.value)}>
            <option value="3 - 2 - 2 - 3">3 - 2 - 2 - 3</option>
            <option value="3 - 2 - 3 - 1">3 - 2 - 3 - 1</option>
            <option value="3 - 4 - 3">3 - 4 - 3</option>
            <option value="3 - 5 - 2">3 - 5 - 2</option>
            <option value="4 - 2 - 3 - 1">4 - 2 - 3 - 1</option>
            <option value="4 - 3 - 1 - 1">4 - 3 - 1 - 1</option>
            <option value="4 - 3 - 2">4 - 3 - 2</option>
            <option value="4 - 4 - 2">4 - 4 - 2</option>
            <option value="4 - 5 - 1">4 - 5 - 1</option>
            <option value="5 - 4 -1">5 - 4 - 1</option>
        </select>
    </div>
)

export default LabelSelect
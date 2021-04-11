import React from 'react'

const LabelInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>
            <strong>{props.label}</strong>
        </label>

        <input className="form-control" placeholder={props.placeholder} value={props.value}
            disabled={props.disabled} type={props.type} onChange={e => props.onChange(props.name, e.target.value)} />
    </div>
)

export default LabelInput
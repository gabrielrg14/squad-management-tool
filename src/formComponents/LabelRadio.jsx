import React from 'react'

const LabelRadio = props => (
    <div className="form-group">
        <label>
            <strong>{props.label}</strong>
        </label>
        
        <br />

        <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" value="Real"
                checked={props.value === "Real" ? true : false} disabled={props.disabled}
                onChange={e => props.onChange(props.name, e.target.value)} /> 
            <label className="form-check-label" htmlFor={props.name}>Real</label>

            <input type="radio" className="form-check-input" value="Fantasy"
                checked={props.value === "Fantasy" ? true : false} disabled={props.disabled}
                onChange={e => props.onChange(props.name, e.target.value)} />
            <label className="form-check-label" htmlFor={props.name}>Fantasy</label>
        </div>
    </div>
)

export default LabelRadio
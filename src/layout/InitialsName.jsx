import './InitialsName.css'
import React from 'react'

const InitialsName = props => {

    function getInitialName(name) {
        return name.split(" ").map(n => n[0]).join("")
    }

    const { name, circleSize, fontSize, bgColor, margin } = props

    const initials = getInitialName(name || "")

    const size = circleSize || "40"
    const color = bgColor || "#F3F5F7"

    return (
        <div className="InitialsName" 
            style={{ height: `${size}px`, width: `${size}px`, fontSize: `${fontSize}em`, marginLeft: `${margin}px`, backgroundColor: `${color}` }}>
            <span>
                <strong>{initials}</strong>
            </span>
        </div>
    )
}

export default InitialsName
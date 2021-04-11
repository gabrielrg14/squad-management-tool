import React from 'react'
import { Link } from 'react-router-dom'

const TeamAvgLine = props => (
    <Link to={`/form/Edit/${props.team._id}`} className="TeamAvgLine">
        <span>{props.team.name}</span>
        <span><strong>{props.team.avgAge}</strong></span>
    </Link>
)

export default TeamAvgLine
import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

import InitialsName from '../layout/InitialsName'

const Header = props => {

    const username = "John Doe"

    return (
        <header className="header">
            <div className="logo-title">
                <Link to="/">
                    <img src="https://www.venturus.org.br/wp-content/uploads/2020/12/Simbolo_Colorido.png" 
                        alt="Venturus logo" className="logo" />
                    <span>Squad Management Tool</span>
                </Link>
            </div>

            <div className="user">
                <span>{username}</span>
                <InitialsName name={username} circleSize="40" fontSize="1.2" margin="10" />
            </div>
        </header>
    )
}

export default Header
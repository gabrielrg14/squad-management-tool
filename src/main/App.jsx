import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

import Routes from './Routes'
import Header from '../template/Header'
import Footer from '../template/Footer'
import Messages from '../messages/Messages'

const App = _ => (
    <BrowserRouter>
        <Routes />
        <Header />
        <Footer />
        <Messages />
    </BrowserRouter>
)

export default App;

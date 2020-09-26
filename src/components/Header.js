import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <h1>TodoList</h1>
                <div className="links">
                    <Link className='link' to='/'>Home</Link> | <Link className='link' to='/about'>About</Link>
                </div>
            </header>
        )
    }
}



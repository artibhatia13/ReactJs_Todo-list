import React from 'react' ;
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Todo List</h1><br/>
            <Link style={linkstyle} to="/">HOME</Link> | <Link style={linkstyle} to="/about">ABOUT</Link>
        </header>
    )

}

const linkstyle ={
    color: 'white',
    textDecoration: 'none',
    padding: '1em',
    
}

const headerStyle = {
    background: 'black',
    color: 'white',
    padding: '2em',
    textAlign: 'center'
}

export default Header ;
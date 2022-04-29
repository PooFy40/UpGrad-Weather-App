import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar fixed-top"  >
            <div className="container-fluid" style={{backgroundColor:"#6500F2",marginTop:'-10px'} }>
                <a className="navbar-brand" style={{color:'white'}} href="/">Weather App</a>
            </div>
        </nav>
    )
}

export default NavBar

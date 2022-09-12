import React from 'react'
import '../assets/css/style.css'

function Navbar() {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <h1>JOURNEY</h1>
                </div>
                <div className="menu">
                    <div className="links">
                        <i class="fa-solid fa-table-cells"></i>
                        <i class="fa-solid fa-note-sticky"></i>
                        <i class="fa-regular fa-compass"></i>
                    </div>
                    <div className="welcome">
                        <p>
                            Welcome, 
                            <span> Log In </span>
                            or 
                            <span> Sign Up </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
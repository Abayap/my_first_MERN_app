import React, {  } from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'

const  nav = ()=> {

    return (
      <div>
            <nav class="navbar">
                <ul class="navbar-menu">
                    <li><Link to="/" class="navbar-item">Home</Link></li>
                    <li><a href="#about" class="navbar-item">About</a></li>
                    <li><a href="#services" class="navbar-item">Services</a></li>
                    <li><a href="#contact" class="navbar-item">Contact</a></li>
                    <div className="jb-prt-btns">
                        <Link to='/login' className="lgn-btn">
                            Login
                        </Link>
                    </div>
                </ul>
             </nav>
      </div>
    )
  
}
export default nav

import React from 'react'
import { Link } from 'react-router-dom'
import logo from './ss.png'

export default function Navbar(props) {
    return (
        <nav id="navbar_top" className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Text-Utils"> <img src={logo} alt="logo" width="30" height="30" />&nbsp; {props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-left mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" aria-current="page" to="/Text-Utils">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" aria-current="page" to="/Text-Utils/quote"  >Random Quote Generator</Link>
                        </li>
                    </ul>

                    <div className="form-switch form-check mx-2 me-auto">
                        <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

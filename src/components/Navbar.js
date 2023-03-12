import React from 'react'
// import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    let location = useLocation().pathname;



    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} style={{ boxShadow: `0px 5px 5px 2px  ${props.mode === 'dark' ? '#eeeeee' : '#111111'}` }} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" style={{ color: '#000000' }} type="checkbox" id="flexSwitchCheckDefault" onClick={props.onclick} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: `${props.mode === 'light' ? '#222222' : '#dddddd'}` }} >{`${props.mode}`} mode Enabled</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
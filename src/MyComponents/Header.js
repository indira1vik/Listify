import React from 'react'
import logo from '../task.png'

export default function Header(props) {
    return (
        <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="60" height="60" className="d-inline-block align-text-middle mx-3" />
                    {props.title}
                </a>
            </div>
        </nav>
        </>
    )
}
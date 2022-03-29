import React from 'react';
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <div className="navbar_left">
                        <li><Link to="/main">Main</Link></li>
                    </div>
                    <div className="navbar_right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </div>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

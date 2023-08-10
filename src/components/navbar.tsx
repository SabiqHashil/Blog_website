import React from 'react'
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <h3>This is navbar</h3>
            <Link to="/">Home</Link>
            <br />
            <Link to="/login">Login</Link>

        </div>
    )
}

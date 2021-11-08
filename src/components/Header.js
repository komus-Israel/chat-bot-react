import React from "react";
import { Link } from "react-router-dom";


const Header =()=>{
    return(
        <nav>
            <Link to='/dashboard' className='nav-menu'>Dashboard</Link>
        </nav>
        
    )
}

export default Header


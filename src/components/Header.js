import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header =()=>{

    const [role, setRole] = useState('')

    useEffect(()=>{

        try{
            const userRole = localStorage.getItem('role')
            setRole(userRole)
        }catch(err){
            return
        }
        
    },[])
    return(
        <nav>

            {
                role === 'student' ? <Link to='/dashboard/student' className='nav-menu-link'>Dashboard</Link> :
                role === 'admin' ? <Link  to='/dashboard/admin' className='nav-menu-link'>Dashboard</Link> :
                <h3 className='nav-menu-h3'>SMS</h3>
            }
           
        </nav>
        
    )
}

export default Header


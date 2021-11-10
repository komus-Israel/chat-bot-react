import React from "react";
import Login from "../components/Login";
import '../main_css/main.css';


const HomePage =()=>{
    return (
        <div className='homepage'>
            <div>
                <h1>Welcome</h1>
                <p>student management system</p>
            </div>
            
            <Login />
        </div>
    )
}


export default HomePage
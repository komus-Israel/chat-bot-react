import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import '../main_css/main.css';
import Header from "../components/Header";


const HomePage =(props)=>{

    const [tokenStatus, setTokenStatus] = useState(false)

    useEffect(()=>{

        try{
            const token = localStorage.getItem('token')
            token.length > 0 && setTokenStatus(true)
        }catch(err){
            return
        }

        
    }, [])
    
    return (

        <div>
            <Header />  
            <div className='homepage'>
                <div>
                    <h1>Welcome</h1>
                    <p>Department of Computer Science</p>
                </div>

                {
                !tokenStatus && <Login props={props}/>
                }
                
            
            </div>
        </div>

        
    )
}


export default HomePage
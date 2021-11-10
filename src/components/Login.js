import React, { useState } from "react";
import * as API from '../API';
import LoginStatus from "./LoginStatus";
import { Link } from "react-router-dom";


const Login=()=>{

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('')
    const [loggingIn, setLoggingIn] = useState(false);

    const handleLogin=async()=>{
    
       
       

       if (id.length > 0 && password.length > 0) {
            const data =  await {id, password}

            setLoggingIn(true)
            const login = await API.login(data);
            setLoginStatus(login.status)

            setLoggingIn(false)

            console.log(login)
       }

       

       
    }
    return(
        <div className='login-cont'>
            <input placeholder='ID' value={id} onChange={(e)=>setId(e.target.value)}/>
            <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Link className='button' onClick={handleLogin} to= {loginStatus==='success' && '/dashboard/student'} >Login</Link>

            <div onClick={()=>setLoginStatus('')}>
                {
                    loginStatus === 'failed' && <LoginStatus status={'incorrect login details'} />
                }
            </div>

            {
                loggingIn && (
                    <div className='modal-status'>
                        <div className='logging-in'>
                            <img src='/images/loader.gif' alt='' height={100}/>
                        </div>
        
                    </div>
                )
            }

            

            
        </div>
    )
}

export default Login
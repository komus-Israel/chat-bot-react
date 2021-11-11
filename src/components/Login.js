import React, { useEffect, useState } from "react";
import * as API from '../API';
import LoginStatus from "./LoginStatus";
import { Link, Redirect } from "react-router-dom";


const Login=(props)=>{

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

            if (login.status === 'success'){
                console.log('success')
                localStorage.setItem('token', login.access_token)
                localStorage.setItem('role', login.role)
                return props.props.history.push('/dashboard/student')
            }
        

       }
       
    }


    
    return(
        <div className='login-cont'>
            <input placeholder='ID' value={id} onChange={(e)=>setId(e.target.value)}/>
            <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {/*<Link className='button' onClick={handleLogin} to= {loginStatus==='success' && '/dashboard/student'} >Login</Link>*/}
            <button className='button' onClick={handleLogin}>Login</button>

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
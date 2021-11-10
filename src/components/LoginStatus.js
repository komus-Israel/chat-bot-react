import React from "react";

const LoginStatus=({status})=>{
    return (
        <div className='modal-status'>
            <div className='status-msg'>
                <p>{status}</p>
            </div>

        </div>
    )
}

export default LoginStatus
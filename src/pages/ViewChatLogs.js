import React from "react";


/**
 * 
 * 
 * create a search input field
 * create the ui that will display the chat
 * 
 * 
 * 
 * 
 * 
 */


const ViewChatLog=()=>{
    return(
        <div className='view-log-main-cont'>
            <div>
                <input className='search-student-log' />
                <button className='get-log'>fetch log</button>
            </div>

            <div className='chat-container'>

            </div>

        </div>
    )
}

export default ViewChatLog
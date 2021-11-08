import React from "react";


const Messages=({msgs})=>{
    console.log(msgs)
    return(
        <div>
            {msgs.map((chatMsg, index)=>{
                return(

                    <div key={index}>
                        {
                            chatMsg.sender === 'student' ? <p className='student-message'>{chatMsg.message}</p> :
                            chatMsg.sender === 'bot' &&  <p className='bot-message'>{chatMsg.message}</p>
                        }
                    </div>
                    
                )
            })}
        </div>
    )
}

export default Messages
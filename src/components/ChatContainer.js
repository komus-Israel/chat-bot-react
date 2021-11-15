import React from "react";
import Messages from "./Messages";


const ChatContainer=({message, setMessage, handleChat, chats})=>{
    return (


        <div className='chat-container'>

                    <div className='chat-bot'>
                        <Messages msgs={chats} handleChat={handleChat}/>    
                    </div>

                    {
                        <div className='type-message'>
                            <textarea placeholder='message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                            <p className='send-chat' onClick={()=>message.length > 0 && handleChat(message, false)}>send</p>
                        
                        </div>
                    }
                    
                        
        </div>
    )
}


export default ChatContainer
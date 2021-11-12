import React from "react";
import Messages from "./Messages";


const ChatContainer=({message, setMessage, handleChat, chats})=>{
    return (
        <div className='chat-container'>    
                    <div className='chat-bot'>
                        <Messages msgs={chats}/>    
                    </div>
                    <div className='type-message'>
                       <textarea value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <button className='send-chat' onClick={()=>message.length > 0 && handleChat(message)}>send</button>
                       
                    </div>
                    
                        
            </div>
    )
}


export default ChatContainer
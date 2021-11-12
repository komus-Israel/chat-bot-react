import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";



const Messages=({msgs, handleChat})=>{



    const messageList = useRef()
    
    const updateMessageList=()=>{
        if (messageList.current){
            messageList.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest',
                }
            )
        }
    }

    useEffect(()=>updateMessageList())
    return(
        <div ref={messageList}>
            {
                msgs.map((chatMsg, index)=>{
                    return(
                        <div key={index}>
                            {
                                chatMsg.sender === 'student' ? <p className='student-message'>{chatMsg.message}</p> :
                                chatMsg.sender === 'bot' &&  <div>
                                                                     <div className='bot-message'>
                                                                            <ReactMarkdown children={chatMsg.message} rehypePlugins={[rehypeRaw]}/>
                                                                     </div>

                                                                     <div>
                                                                            {
                                                                                chatMsg.patterns.length > 0 && chatMsg.patterns.map((patterns,index)=>(
                                                                                    <button onClick={()=>handleChat(patterns)} className='chat-button' key={index}>{patterns}</button>
                                                                                ))
                                                                            }
                                                                     </div>
                                                                    

                                                            </div>
                                
                               
                            }

                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Messages
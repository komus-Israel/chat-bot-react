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

    useEffect(()=>{
        updateMessageList()
       
    })
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
                                                                                chatMsg.options.length > 0 && chatMsg.options.map((option,index)=>(
                                                                                    <button onClick={()=> !chatMsg.use_details ? handleChat(option, false) : handleChat(option, true)} className='chat-button' key={index}>{option.name ? option.name : option}</button>
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
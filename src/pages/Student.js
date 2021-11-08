import React, { useEffect, useState } from "react";
import '../student_css/student.css';
import * as API from '../API';
import Messages from "../components/Messages";



const chats = []

const Student =()=>{

    const [message, setMessage] = useState('')
    const [botMessage, setBotMessage] = useState()
    
   
    const handleChat=async(msg)=>{
        
        await chats.push({sender:'student', message:msg})
        await setMessage('')

        const botMsg = await API.chatBot(msg)       
        chats.push({sender:'bot', message:botMsg})
        setMessage(' ')
             
    }

    
   
    return (
        <div className='student-dashboard'>
            <div className='student-details'>
                <div className='student-name'>
                    <h3>Ajayi Abodunrin</h3>
                    <p>student</p>
                    <p>256993</p>
                </div>


                <div className='student-menu'>
                    <p>Chat Now</p>
                    <p>FeedBack</p>
                </div>  
            </div>


            <div className='flex-2'>
                <div className='chat-container'>    
                    <div className='chat-bot'>
                        {/*<Messages msgs={chats}/>*/}

                        {
                            chats.map((chatMsg, index)=>{
                                return(
                                    <div key={index}>
                                        {
                                            chatMsg.sender === 'student' ? <p className='student-message'>{chatMsg.message}</p> :
                                            chatMsg.sender === 'bot' &&  <p className='bot-message'>{chatMsg.message}</p>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='type-message'>
                       <textarea value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <button className='send-chat' onClick={()=>message.length > 0 && handleChat(message)}>send</button>
                       
                    </div>
                    
                        
                </div>

                <div className='calender'>
                    Calender
                </div>
            </div>
        </div>
    )
}
export default Student
import React, { useEffect, useState } from "react";
import '../student_css/student.css';
import '../main_css/feedback.css';
import * as API from '../API';
import Messages from "../components/Messages";
import SendFeedBack from "./SubmitFeedBack";




const chats = []

const ChatContainer=({message, setMessage, handleChat})=>{
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

const Student=()=>{

    const [message, setMessage] = useState('')
    //const [botMessage, setBotMessage] = useState()
    const [profile, setProfile] = useState({})
    const [ui, setUI] = useState('chat')
    
   
    const handleChat=async(msg)=>{
        
        await chats.push({sender:'student', message:msg})
        await setMessage('')

        const botMsg = await API.chatBot(msg)       
        chats.push({sender:'bot', message:botMsg})
        setMessage(' ')
             
    } 

    const handleView=(view)=>{
        setUI(view)
    }

    


    useEffect(()=>{
        const jwt = localStorage.getItem('token')
        const getProfileFromApi = async()=>{
            const profileResponse = await API.getProfile(jwt)
            setProfile(profileResponse.student_profile)
            
        }

        getProfileFromApi()
    }, [])

    
   
    return (
        <div className='student-dashboard'>
            <div className='student-details'>
                <div className='student-name'>
                    <h2>{profile.name}</h2>
                    <div>
                        <p>{localStorage.getItem('role')}</p>
                        <p>{profile.matric_no}</p>
                    </div>
                    
                </div>


                <div className='student-menu'>
                    <p onClick={()=>handleView('chat')}>Chat</p>
                    <p onClick={()=>handleView('')}>Feedback</p>
    </div> 
            </div>


            <div className='flex-2'>
                    <ChatContainer message={message} setMessage={setMessage} handleChat={handleChat} />
                    <SendFeedBack />
               
            </div>


            <div className='mobile' >
                   {
                       ui.length > 0 ? (
                            <ChatContainer message={message} setMessage={setMessage} handleChat={handleChat} />
                            
                       ) :        
            
                       <SendFeedBack />          
                       
                       }       

            </div>

        </div>
    )
}
export default Student
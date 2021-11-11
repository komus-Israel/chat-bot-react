import React, { useEffect, useState } from "react";
import '../student_css/student.css';
import * as API from '../API';
import Messages from "../components/Messages";
import SendFeedBack from "./SubmitFeedBack";
import { Link, Redirect } from "react-router-dom";



const chats = []

const Student =()=>{

    const [message, setMessage] = useState('')
    const [botMessage, setBotMessage] = useState()
    const [profile, setProfile] = useState({})
    
   
    const handleChat=async(msg)=>{
        
        await chats.push({sender:'student', message:msg})
        await setMessage('')

        const botMsg = await API.chatBot(msg)       
        chats.push({sender:'bot', message:botMsg})
        setMessage(' ')
             
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
                    <p>{localStorage.getItem('role')}</p>
                    <p>{profile.matric_no}</p>
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

               <SendFeedBack />

               
            </div>
        </div>
    )
}
export default Student
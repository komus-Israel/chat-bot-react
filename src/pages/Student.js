import React, { useEffect, useState } from "react";
import '../student_css/student.css';
import '../main_css/feedback.css';
import * as API from '../API';
import Messages from "../components/Messages";
import SendFeedBack from "./SubmitFeedBack";
import ChatContainer from "../components/ChatContainer";




const chats = []



const Student=(props)=>{

    const [message, setMessage] = useState('')
    //const [botMessage, setBotMessage] = useState()
    const [profile, setProfile] = useState({});
    const [chat, setChat] = useState(true);


    const handleView=(view)=>{
        return setChat(view)
    }

    const ui = [
       
        {name:'Chat', state:true},
        {name:'Report', state:false}
       
    ]
    
   
    const handleChat=async(msg)=>{
        
        await chats.push({sender:'student', message:msg})
        await setMessage('')
        const botMsg = await API.chatBot(msg)       
        chats.push({sender:'bot', message:botMsg.response, options:botMsg.options})
        setMessage(' ')

    } 

    useEffect(()=>{
        const jwt = localStorage.getItem('token')
        const getProfileFromApi = async()=>{
            const profileResponse = await API.getProfile(jwt)
            setProfile(profileResponse.student_profile)
            
        }

        /*const getFirstResponse=async()=>{
            const first_message = await API.chatBot('hello')
            chats.push({sender:'bot', message:first_message.response, options:first_message.options})
            setMessage(' ')
        }*/

        
        getProfileFromApi()
        //getFirstResponse()
        //chats.push({sender:'bot', message:'Hello', options:[], use_details:false})

        

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

                    <p className='logout' onClick={()=>{
                        localStorage.clear('token', 'role')
                        console.log(props.props.history.push('/'))
                    }}>logout</p>
                    
                </div>


                <div className='student-menu'>

                    {
                        ui.map((name, index)=>(
                                <p key={index} onClick={()=>handleView(name.state)}>{name.name}</p>
                            )
                        )
                    }

                   
    
                 </div> 
            </div>

            


            <div className='flex-2'>
                    <ChatContainer message={message} setMessage={setMessage} handleChat={handleChat} chats={chats} />
                    <SendFeedBack />
               
            </div>


            <div className='mobile' >
                   {

                        chat ? <ChatContainer message={message} setMessage={setMessage} handleChat={handleChat} chats={chats} />:
                        !chat && <SendFeedBack />
               
                       
                   }       
            </div>

        </div>
    )
}
export default Student
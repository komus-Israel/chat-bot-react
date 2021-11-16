import React, { useEffect, useState } from "react";
import * as API from '../API';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";



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

    const [matric_no, setMatric_no] = useState('')
    const [studentLog, setStudentLog] = useState([])

    const handleGetFeedBack=async (matric_no)=>{
        const log = await API.getLog(matric_no)
        console.log(log)
        setStudentLog(log)
    }

    
    return(
        <div className='view-log-main-cont'>
            <div className='fetch-log-cont'>
                <input placeholder='enter student ID' className='search-student-log' value = {matric_no} onChange={(e)=>setMatric_no(e.target.value)}/>
                <input className='get-log' type='submit' value='fetch log' onClick={()=>handleGetFeedBack(matric_no)}/>
            </div>

            <div className='chat-log'>
                {
                    studentLog.length > 0 && (
                        studentLog.map((log, index)=>{
                            return(
                                <div key={index}>
                                    {
                                            log.student_msg.length > 0 && <p className='student-message'>{log.student_msg}</p> 
                                    }

                                    {
                                             log.bot_msg.length  > 0 && <div className='bot-message'>
                                                                            <ReactMarkdown children={log.bot_msg} rehypePlugins={[rehypeRaw]}/>
                                                                        </div>
                                    }
                                        
                                           
                                                    
                                                   
                                            
                                            
                                    
                                </div>
                                
                            )
                        })
                    )
                }
            </div>

        </div>
    )
}

export default ViewChatLog
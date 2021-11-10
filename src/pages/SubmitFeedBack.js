import React, { useState } from "react";
import '../main_css/feedback.css';
import * as API from '../API';


const SendFeedBack=()=>{

    const [feedBack, setFeedBack] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [submitResponse, setSubmitResponse] = useState('')

    const handleFeedBack=async()=>{

        if (feedBack.length > 0){
            setSubmitting(true)
            const data = await {feedback: feedBack, id: '20067'}
    
            const response = await API.submitFeedBack(data)
            setSubmitResponse(response)
            setSubmitting(false)
        }

       
    }

    return(
        <div className='feedback-submit-cont'>

             {
                submitResponse.length > 0 && <p className='feedback-response' onClick={()=>setSubmitResponse('')}>{submitResponse}</p>
            }
            <textarea value={feedBack} onChange={(e)=>setFeedBack(e.target.value)}></textarea>
            <button onClick={()=>handleFeedBack(feedBack)}>submit</button>

            {
                submitting && (
                    <div className='modal'>
                        <div className='submitting'>
                            <img src='/images/loader.gif' alt='' height={100}/>
                            <p>Reporting feedback ...</p>
                        </div>
                    </div>
                    
                )
            }


            
               

                 
            
            
        </div>
    )
}

export default SendFeedBack
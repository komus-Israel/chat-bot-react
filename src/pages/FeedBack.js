import React, { useEffect, useState } from "react";
import '../main_css/feedback.css';
import * as API from '../API';

const FeedBack =()=>{

    const [feedBacks, setFeedback] = useState([])
    const [currentlyReading, setCurrentlyReading] = useState('')

    


    useEffect(()=>{
        
        const getFeedBacksFromAPI=async()=>{
            const feedBacksFromAPI = await API.getFeedbacks()
            setFeedback(feedBacksFromAPI)
        }

        getFeedBacksFromAPI()
    }, [])


    return (
        <div className='feedback-cont'>
           <div className='feedback-list'>
               {
                   feedBacks.map((feed, index)=>{
                       return(
                        <div className='feedback-brief' key={index} onClick={()=>setCurrentlyReading(feed.feedback)}>
                            <div className='briefer'>
                                <h4>{feed.name}</h4>
                                <p>{feed.matric_no}</p>
                            </div>  
                            <p className='feedback-msg'>{feed.feedback}</p>
                        </div>
                       )
                   })
               }
            </div>

           <div className='feedback-details'>
                <p>{currentlyReading}</p>
           </div>
        </div>
    )
}

export default FeedBack
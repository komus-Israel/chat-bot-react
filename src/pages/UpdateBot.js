import React, { useState } from "react";
import * as API from "../API";


const UpdateBot=()=>{

    const [tag, setTag] = useState('');
    const [patterns, setPatterns] = useState('');
    const [responses, setResponses] =  useState('');
    const [training, setTraining] = useState(false);
    const [trainResponse, setTrainResponse] = useState('');

    const handleBotUpdate=async()=>{

        setTraining(true)
        const data = await {tag, patterns, responses}
        const response = await API.botUpdate(data)
        setTrainResponse(response)
        setTraining(false)
        
    }

    const reTrainBotWithNoData=async()=>{
        setTraining(true)
        const response = await API.reTrainBot()
        setTrainResponse(response)
        setTraining(false)
    }
    return (
        <div className='update-bot'>
            <button  className='retrain-bot' onClick={reTrainBotWithNoData}>Retrain bot without additional data</button>
            
            <div className='bot-data-input'>
                <input placeholder='tag' value={tag} onChange={(e)=>setTag(e.target.value)}/>
                <input placeholder='patterns' value={patterns} onChange={(e)=>setPatterns(e.target.value)}/>
                <input placeholder='responses' value={responses} onChange={(e)=>setResponses(e.target.value)}/>
                <button onClick={handleBotUpdate}>update</button>
                
                {
                    trainResponse.length > 0 && (
                        <div className='train-res' onClick={()=>setTrainResponse('')}>{trainResponse}</div>
                    )
                }
            </div>

            {
                training && (
                    <div className='modal'>
                        <div className='training'>
                            <img src='/images/loader.gif' alt='' height={100}/>
                            <p>Retraining bot ...</p>
                        </div>
                    </div>
                    
                )
                }
        </div>


    )
}

export default UpdateBot
import axios from "axios";
import React, { useEffect, useState } from "react";


const UploadContent =()=>{

    const [course, setCourse] = useState(null)
    const [timeTable, setTimeTable] = useState(null)
    const [uploading, setUploading] = useState(false)

    const handleFileUpload=async(e, type)=>{
    
        setUploading(true)
        e.preventDefault()
        const formData = new FormData()
        const api = 'https://uirms.herokuapp.com/sms/upload'
        //const api = 'http://127.0.0.1:5000/sms/upload'

        if (type === 'material'){
            formData.append('file',course)

            axios.post(
                api, formData
            ).then(res=>res.data)
            .then(data=>data.msg)
        
            
        } else {
            formData.append('file',timeTable)
            axios.post(
                api, formData
            ).then(res=>res.data)
            .then(data=>data.msg)
            
        }

        setUploading(false)

        
        
    }

    return (
        <div>
            <div className='upload-content'>
                
                
                    <form onSubmit={(e)=>handleFileUpload(e,'material')}>
                        <div className='to-upload' id='to-upload-material'>
                            <span>Upload Course Materials: <input type='file' id='material' onChange={e=>setCourse(e.target.files[0])}/><label htmlFor='material'>select file</label></span>
                            
                            <button>upload material</button>
                        </div>
                    </form>

                

                

                    <form onSubmit={(e)=>handleFileUpload(e,'time-table')}>
                        <div className='to-upload' id='to-upload-timetable'>
                            <span>Upload TimeTable: <input type='file'  id='time-table' onChange={e=>setTimeTable(e.target.files[0])}/><label htmlFor='time-table'>select file</label></span>
                            <button>upload time table</button>
                        </div>
                        
                    </form>

                    {
                        uploading && (
                            <div className='modal'>
                                <div className='uploading'>
                                    <img src='/images/loader.gif' alt='' height={100}/>
                                    <p>Uploading ...</p>
                                </div>
                            </div>
                    
                )
                }
                    
            </div>
        </div>
    )
}


export default UploadContent
import React, { useState } from "react";
import * as API from '../API';


const ViewStudentAndDelete=()=>{

    const [students, setStudents] = useState([])
    const [fetching, setFetching] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [deleteMsg, setDeleteMsg] = useState('')
    const [deleting, setDeleting] = useState(false)


    const handleSearchStudent=async(input)=>{
        setFetching(true)
        const searchedStudents = await API.searchStudent(input);

        setFetching(false)
        setStudents(searchedStudents)

    }

    const handleDeleteStudent=async(matric_no)=>{
        setDeleting(true)
        const msg = await API.deleteStudent(matric_no)
        setDeleting(false)

        setDeleteMsg(msg)
    }


    return(
        <div className='view-student-main-cont'>

            {

                deleting ? <div className='modal'>
                                <div className='training'>
                                    <img src='/images/loader.gif' alt='' height={100}/>
                                    <p>deleting student account ...</p>
                                </div>
                            </div> :
                
                (!deleting && deleteMsg.length > 0) && (
                    <div className='modal' onClick={()=>setDeleteMsg('')}>
                        <div className='training'>
                            <p>{deleteMsg}</p>
                        </div>
                    </div>
                    
                )
                }

            <div className='view-student-sub'>
                <div className='search-student-cont'>
                    <input onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} type='text' placeholder='Name / ID'/>
                    <p className='search-student-button' onClick={()=>handleSearchStudent(searchInput)}>search</p>
                </div>

                <div className='searched-students'>
                    

                        {
                            (!fetching && students.length === 0) ? <p className='centralize'>No result </p> : 
                            (!fetching && students.length > 0) ? students.map((student, index)=>{
                                return(
                                    <div className='each-student' key={index}>
                                        <div>
                                            <h3>{student.name}</h3>
                                            <p>{student.matric_number}</p>
                                            <p>{student.level} level</p>
                                        </div>
                                        <p onClick={()=>handleDeleteStudent(student.matric_number)} className='delete-student'>delete</p>
                                    </div>     
                                )
                            }) : 
                            
                            (fetching) && <p className='centralize'>fetching student ...</p>
                        }
                        
                    
                </div>
                
            </div>

        </div>
    )
}

export default ViewStudentAndDelete
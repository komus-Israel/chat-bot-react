import React, { useEffect, useState } from "react";
import * as API from "../API";


const CreateStudentAccount=()=>{
    
    const [totalStudent, setTotalStudent] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [matricNo, setMatricNo] = useState('')
    const [level, setLevel] = useState('')
    const [registrationResponse, setRegistrationResponse] = useState('')
    const [registring, setRegistring] = useState(false)

    const handleRegisteration=async()=>{

        setRegistring(true)
        const data = {
            first_name: firstName,
            last_name: lastName,
            matric_no: matricNo,
            level:level
        }
       
        const response = await API.register(data)
        
        setRegistrationResponse(response)
        setRegistring(false)
        setFirstName('')
        setLastName('')
        setLevel('')
        setMatricNo('')

        

    
    }

    


    useEffect(()=>{

        const getTotfunctionalStudent=async()=>{

            const totalStudent = await API.totalStudents()
            setTotalStudent(totalStudent)
        }
        
        getTotfunctionalStudent()
        
    })


    return(

        <div className='student-container'>
            
            <div className='student-stats'>
                <h3 className='number-of-students'>{totalStudent}</h3>
                <p>students</p>
            </div>
            <div className='student-account'>
                <input placeholder='First Name' value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                <input placeholder='Last Name' value={lastName} onChange={e=>setLastName(e.target.value)}/>
                <input placeholder='Level' value={level} onChange={e=>setLevel(e.target.value)}/>
                <input placeholder='matric number' value={matricNo} onChange={e=>setMatricNo(e.target.value)}/>  

                <button onClick={handleRegisteration}>register</button>

                {
                    registrationResponse.length > 0 && (
                        <div className='reg-res'>{registrationResponse}</div>
                    )
                }

                
                   
            </div>

             {
                registring && (
                    <div className='modal'>
                        <div className='registering'>
                            <img src='/images/loader.gif' alt='' height={100}/>
                            <p>Registering student ...</p>
                        </div>
                    </div>
                    
                )
            }

            

        </div>


        
    )
}

export default CreateStudentAccount
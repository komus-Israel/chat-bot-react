
import axios from "axios";

//const api = 'http://127.0.0.1:5000/sms'
const api = 'https://uirms.herokuapp.com/sms'

const headers = {
    'Accept':'application/json'   
}

export const register=(data)=>
    fetch(
        `${api}/student/register`,
        {
            method:'POST',
            headers:{
                ...headers,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        }
    ).then(res=>res.json()).then(data=>data.msg)



export const totalStudents=()=>
    fetch(
        `${api}/student/total`,
            {headers},
        ).then(res=>res.json()).then(data=>data.no_of_student)

export const fileUpload=(data)=>
    axios.post(
        `${api}/upload`, data
    ).then(res=>res.json())
    .then(data=>data.msg)


export const botUpdate=(data)=>
        fetch(
            `${api}/train-bot`,
            {
                method:'POST',
                headers:{
                    ...headers,
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(data)
            }
        ).then(res=>res.json()).then(data=>data.msg)

export const chatBot=(msg)=>
        fetch(
            `${api}/chat?message=${msg}`,
            {headers},
        ).then(res=>res.json()).then(data=>data)


export const login=(data)=>
    fetch(
        `${api}/login`,
        {
            method:'POST',
            headers:{
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    ).then(res=>res.json()).then(data=>data)



export const getFeedbacks=()=>
    fetch(
        `${api}/feedbacks`,
        {headers},
    ).then(res=>res.json()).then(data=>data.feedbacks) 


export const submitFeedBack=(data, jwt)=>
        fetch(
        `${api}/student/feedback`,
        {
            method:'POST',
            headers:{
                ...headers,
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + jwt
            },
            body: JSON.stringify(data)
        }
    ).then(res=>res.json()).then(data=>data.msg)


export const getProfile=(jwt)=>
        fetch(
            `${api}/student/profile`,
            {
                headers:{
                    ...headers,
                    'Authorization' : 'Bearer ' + jwt
                }
            },
        ).then(res=>res.json()).then(data=>data)

export const reTrainBot=()=>
            fetch(
                `${api}/train-bot-with-no-update`,
                {headers}
            ).then(res=>res.json()).then(data=>data.msg)
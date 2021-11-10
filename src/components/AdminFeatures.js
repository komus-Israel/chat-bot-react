import React, { useRef, useState } from "react";
import '../admin_css/admin.css';
import CreateStudentAccount from "../pages/StudentAccount";
import UploadContent from "../pages/UploadContent";
import UpdateBot from "../pages/UpdateBot";
import FeedBack from "../pages/FeedBack";


const AdminFeature=()=>{


    const [board, setBoard] = useState('account');

    const handleClick =(boardName)=>{
        setBoard(boardName);
    }


    const boards = [
        {name:'Create student account', board: 'account'},
        {name:'Update Chatbot Data', board: 'bot'},
        {name:'Upload Content', board: 'content'},  
        {name:'Feedbacks', board: 'feedback'},
        
    ]

    return (
        <div className='admin-container'>
            {/*flex 1 */}
            <div className='admin-feature'>
                <div >
                    <h3 >Admin</h3>
                </div>

                <div className='button-cont'>
                    {
                        boards.map((board)=>(
                            <button className='feature-button' key={board.name} onClick={()=>handleClick(board.board)}>{board.name}</button>
                        ))
                    }
                </div>
                
                
            </div>

            {/*flex 2 */}

            <div className='admin-board'>
                {
                    board === 'bot' ? <UpdateBot /> :
                    board === 'content' ? <UploadContent />:
                    board === 'account' ? <CreateStudentAccount />:
                    board === 'feedback' && <FeedBack />
                }
            </div>
            
        </div>
    )
}

export default AdminFeature
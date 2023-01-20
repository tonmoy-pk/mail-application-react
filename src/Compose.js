import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import "./css/compose.css"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
// import { getFirestore} from 'firebase/firestore/lite';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Compose() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const formSubmit=(e)=>{
    e.preventDefault();
    if(to===""){
        return alert("Mail is required")
    }
    if(subject===""){
        return alert("Subject is required")
    }
    if(message===""){
        return alert("Message is required")
    }
    db.collection("emails").add({
        to,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setTo("");
    setSubject("");
    setMessage("");
    dispatch(closeSendMessage())
    alert("Email sent successfully");;
    
  }

  return (
    <div className='compose'>
        <div className='compose_header'>
            <div className='compose_header_left'>
                <span>New Message</span>
            </div>
            <div className='compose_header_right'>
                <RemoveIcon/>
                <OpenInFullIcon/>
                <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
            </div>
            
        </div>
        <form onSubmit={formSubmit}>
        <div className='compose_body'>
            <div className='compose_bodyform'>
                <input type="email" placeholder="To" value={to} onChange={(e)=>setTo(e.target.value)}/>
                <input type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                <textarea rows="20" onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
            </div>
        </div>
        <div className='compose_footer'>
            <button type='submit'>
                Send
            </button>
            <AttachFileIcon/>
        </div>
        </form>
      
    </div>
  )
}

export default Compose

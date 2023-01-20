import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import "./css/emailtype.css"
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux"
import { openMessage } from './features/mailSlice';

function Emailbody({name, subject, message, time}) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const opMessage = ()=>{
    dispatch(openMessage({
      name,
      subject,
      message,
      time
    }))
    history("/mail")
  }
  return (
    <div className='emailbody' onClick={opMessage}>
      <div className='emailbody_left'>
        <CheckBoxOutlineBlankIcon/>
        <h4>{name}</h4>
      </div>
      <div className='emailbody_middle'>
        <div className='emailbody_middle_msg'>
            <p><b>{subject}</b> {message}</p>
        </div>
      </div>
      <div className='emailbody_right'>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default Emailbody

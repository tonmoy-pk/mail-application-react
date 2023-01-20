import React from 'react'
import { IconButton, Avatar } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import "./css/emaildetail.css"
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplyIcon from '@mui/icons-material/Reply';
import { useSelector } from 'react-redux';
import { selectedMail } from './features/mailSlice';

function Emaildetails() {
  const selmail = useSelector(selectedMail);
  return (
    <div className='emaildetail'>
        <div className='emaildetail_header'>
            <div className='emaildetail_header_left'>
                <h4>{selmail.subject}</h4>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <div className='emaildetail_header_right'>
                <IconButton>
                    <PrintIcon/>
                </IconButton>

                <IconButton>
                    <ShareIcon/>
                </IconButton>
        
            </div>
        </div>

        <div className='emaildetail_headermidle'>
            <div className='emaildetail_headermidle_left'>
                <Avatar/>

                <h4>{selmail.name}</h4>
                <p>{selmail.name}</p>
            </div>
            <div className='emaildetail_headermidle_right'>
                <p>{selmail.time}</p>
                <IconButton>
                    <StarIcon/>
                </IconButton>

                <IconButton>
                    <ReplyIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
        
            </div>
        </div>
        <div className='emaildetail_body'>
            <p>{selmail.message}</p>
        </div>
    </div>
  )
}

export default Emaildetails

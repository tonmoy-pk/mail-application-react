import React from 'react'
import {Button} from "@mui/material"
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import "./css/sidebar.css"
import Sidebaropt from './Sidebaropt';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import CategoryIcon from '@mui/icons-material/Category';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {

  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <Button startIcon={<AddToPhotosIcon></AddToPhotosIcon>} className="compose_btn" onClick={()=>dispatch(openSendMessage())}>Create</Button>
      <Sidebaropt Icon={MailIcon} title="All" number="4" isactive={true}/>
      <Sidebaropt Icon={InboxIcon} title="Inbox" number="22"/>
      <Sidebaropt Icon={SendIcon} title="Sent" number="4"/>
      <Sidebaropt Icon={DraftsIcon} title="Draft" number="24"/>
      <Sidebaropt Icon={CategoryIcon} title="Category" number="4"/>
    </div>
  )
}

export default Sidebar

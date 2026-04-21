import React from 'react'
import {Button} from "@mui/material"
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import "./css/sidebar.css"
import Sidebaropt from './Sidebaropt';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux';
import {
  openSendMessage,
  selectSidebarIsOpen,
  selectActiveFilter,
  setActiveFilter
} from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();
  const sidebarIsOpen = useSelector(selectSidebarIsOpen);
  const activeFilter = useSelector(selectActiveFilter);

  const handleFilter = (filter) => {
    dispatch(setActiveFilter(filter));
  };

  return (
    <div className={`sidebar ${sidebarIsOpen ? 'sidebar--open' : ''}`}>
      <Button
        startIcon={<AddToPhotosIcon />}
        className="compose_btn"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <Sidebaropt
        Icon={MailIcon}
        title="All Mail"
        isactive={activeFilter === 'all'}
        onClick={() => handleFilter('all')}
      />
      <Sidebaropt
        Icon={InboxIcon}
        title="Inbox"
        isactive={activeFilter === 'inbox'}
        onClick={() => handleFilter('inbox')}
      />
      <Sidebaropt
        Icon={SendIcon}
        title="Sent"
        isactive={activeFilter === 'sent'}
        onClick={() => handleFilter('sent')}
      />
      <Sidebaropt
        Icon={DraftsIcon}
        title="Drafts"
        isactive={activeFilter === 'drafts'}
        onClick={() => handleFilter('drafts')}
      />
    </div>
  )
}

export default Sidebar

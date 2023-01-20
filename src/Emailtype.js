import React from 'react'
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ForumIcon from '@mui/icons-material/Forum';
import "./css/emailtype.css"

function Emailtype() {
  return (
        <div className='emailtype'>
            <div className='emailtype_option emailtype_option--active'>
                <FolderSharedIcon/>
                <p>Primary</p>
            </div>
             <div className='emailtype_option'>
                <PeopleIcon/>
                <p>Social</p>
            </div>
            <div className='emailtype_option'>
                <LocalOfferIcon/>
                <p>Promotions</p>
            </div>
            <div className='emailtype_option'>
                <ForumIcon/>
                <p>Forum</p>
            </div>
        </div>
    
  )
}

export default Emailtype

import React, { useEffect, useState } from 'react'
import Emailbody from './Emailbody'
import Emailtype from './Emailtype'
import { db } from './firebase';

function Email() {

  const [emails, setEmails] = useState([]);

  useEffect(()=>{
    db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setEmails(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
  },[])

  return (
    <div className='emaillist'>
      <Emailtype/>
      {
        emails.map(({id,data})=>{
          return <Emailbody key={id} name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp.seconds*1000).toLocaleTimeString()}/>
        })
      }
      
    </div>
  )
}

export default Email

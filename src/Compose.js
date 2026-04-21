import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import "./css/compose.css"
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage, setUserEmail, selectUserEmail } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function Compose() {
  const dispatch = useDispatch();
  const storedUserEmail = useSelector(selectUserEmail);

  const [from, setFrom] = useState(storedUserEmail);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();
    if (from === "") return alert("Your email (From) is required");
    if (to === "") return alert("Recipient email (To) is required");
    if (subject === "") return alert("Subject is required");
    if (message === "") return alert("Message is required");

    // Remember this user's email for future sessions
    if (from !== storedUserEmail) {
      dispatch(setUserEmail(from));
    }

    setSending(true);
    try {
      await db.collection("emails").add({
        from,
        to,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      setTo("");
      setSubject("");
      setMessage("");
      dispatch(closeSendMessage());
      alert("Email sent successfully!");
    } catch (err) {
      console.error("Firebase write error:", err);
      alert("Failed to send: " + err.message + "\n\nPlease update your Firestore security rules to allow writes.");
    } finally {
      setSending(false);
    }
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
          <CloseIcon onClick={() => dispatch(closeSendMessage())}/>
        </div>
      </div>
      <form onSubmit={formSubmit}>
        <div className='compose_body'>
          <div className='compose_bodyform'>
            <input
              type="email"
              placeholder="From (your email)"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <input
              type="email"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className='compose_footer'>
          <button type='submit' disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>
          <AttachFileIcon/>
        </div>
      </form>
    </div>
  )
}

export default Compose

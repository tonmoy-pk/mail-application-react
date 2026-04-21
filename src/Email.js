import React, { useEffect, useState } from 'react'
import Emailbody from './Emailbody'
import Emailtype from './Emailtype'
import { db } from './firebase';
import './css/emaillist.css';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { selectActiveFilter, selectUserEmail } from './features/mailSlice';

// Empty state messages per filter
const emptyMessages = {
  all:    { icon: <InboxIcon />, text: "No emails yet. Click Compose to send one!" },
  inbox:  { icon: <InboxIcon />, text: "Your inbox is empty." },
  sent:   { icon: <SendIcon />,  text: "You haven't sent any emails yet." },
  drafts: { icon: <InboxIcon />, text: "No drafts saved." },
};

function Email() {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(null);

  const activeFilter = useSelector(selectActiveFilter);
  const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    const unsubscribe = db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        snapshot => {
          setError(null);
          setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })));
        },
        err => {
          console.error("Firestore read error:", err);
          setError(err.message);
        }
      );
    return () => unsubscribe();
  }, []);

  // Filter emails based on active sidebar selection
  const filteredEmails = emails.filter(({ data }) => {
    if (activeFilter === 'sent')   return data.from === userEmail;
    if (activeFilter === 'inbox')  return data.to === userEmail;
    if (activeFilter === 'drafts') return false; // No drafts feature yet
    return true; // 'all'
  });

  const emptyState = emptyMessages[activeFilter] || emptyMessages.all;

  return (
    <div className='emaillist'>
      <Emailtype />

      {error && (
        <div className="emaillist_error">
          <p>⚠️ <strong>Firebase Error:</strong> {error}</p>
          <p>
            Please update your{' '}
            <a href="https://console.firebase.google.com" target="_blank" rel="noreferrer">
              Firestore security rules
            </a>{' '}
            to allow reads and writes.
          </p>
        </div>
      )}

      {!error && filteredEmails.length === 0 && (
        <div className="emaillist_empty">
          {emptyState.icon}
          <p>{emptyState.text}</p>
          {activeFilter === 'inbox' && !userEmail && (
            <p className="emaillist_empty_hint">
              Tip: Enter your email in the "From" field when composing so we can identify your inbox.
            </p>
          )}
        </div>
      )}

      {!error && filteredEmails.map(({ id, data }) => (
        <Emailbody
          key={id}
          name={activeFilter === 'inbox' ? data.from : data.to}
          subject={data.subject}
          message={data.message}
          time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
        />
      ))}
    </div>
  )
}

export default Email

import React from 'react';
import {useSelector} from 'react-redux'
import Compose from './Compose';
import Email from './Email';
import Emaildetails from './Emaildetails';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const isMessageopen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <div className="App">
        <Header/>
      
        <div className='app_body'>
          <Sidebar/>
          <Routes>
            <Route exact path='/' element={<Email/>}></Route>

            <Route path='/mail' element={<Emaildetails/>}></Route>
          </Routes>  
        </div>
      
        {
          isMessageopen && <Compose/>
        }
          
      </div>
    </Router>
  );
}

export default App;

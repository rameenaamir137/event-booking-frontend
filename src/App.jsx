import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import Events from './Events';
import CreateEvent from './CreateEvent';
import './index.css'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/create' element={<CreateEvent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
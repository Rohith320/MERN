import React from 'react';
import './App.css';
import './style.css';

// import Dynamictable from './components/displaytable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './components/loginform';
import Sidebar from './components/Sidebar';
// import Stdinfo from './pages/about.jsx';
import Report from './pages/marks.jsx';
import Login from './pages/login.js';
import Profile from './pages/profile.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/report" element={<Report />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
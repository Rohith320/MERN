import React from 'react';
import './App.css';
import './style.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Dynamictable from './components/displaytable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Enrolled from './pages/Enrolled.jsx';
import Marks from './pages/marks.jsx';
import Login from './pages/login'
import Profile from './pages/profile.jsx';



const App = (props) => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/enrolled" element={<Enrolled />} />
          <Route path="/markentry" element={<Marks />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
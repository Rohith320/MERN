import React, { useState } from 'react';
import {
    FaBars,
    FaUsers,
    FaRegChartBar,
    FaUserTie,
    FaSignOutAlt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const logoutHandle = () => {
    localStorage.clear()
}

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserTie/>
        },
        {
            path:"/enrolled",
            name:"Enrolled Students",
            icon:<FaUsers/>
        },
        {
            path:"/markentry",
            name:"Marks entry",
            icon:<FaRegChartBar/>
        }
    ]
    const logOut=[
        {
            path:"/logout",
            name:"Log Out",
            icon:<FaSignOutAlt/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
                }
                {
                   logOut.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active" onClick={logoutHandle}>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
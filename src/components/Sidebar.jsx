/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Logo from '../assets/Logo1.png'
import My from  '../assets/my.png'
import Add from '../assets/add.png'
import Recent from '../assets/recent.png'
import {NavLink} from 'react-router-dom';
const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"MainPage",
            icon: <img src={Recent} />
        },
        {
            path:"/createScoop",
            name:"CreateScoop",
            icon: <img src={Add} />
        },
        {
            path:"/myScoops",
            name:"MyScoops",
            icon: <img src={My}/>
        }
    ]

    
        return (
            <div className="container"> 
                <div className="sidebar">
                    <div className="top_section">
                        <img src={Logo} />
                    </div>
                    {
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                <div className="icon">{item.icon}</div>
                               
                            </NavLink>
                        ))
                    }
                </div>
                <main>{children}</main>
            </div>
        );
};

export default Sidebar;
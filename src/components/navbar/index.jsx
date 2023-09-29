import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logoBlock'>
        <img
            className="appLogo"
            src="wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"
          />
          <h1 className="name">GetSet </h1>
          <h1 className="nameGr">OA.com</h1>
        </div>
        
    </nav>
  );
}

export default Navbar;

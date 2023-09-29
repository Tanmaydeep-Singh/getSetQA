import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import logo from '../../assets/LOGO.webp'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logoBlock'>
        <img
            className="appLogo"
            src={logo}
          />
          <h1 className="name">GetSet </h1>
          <h1 className="nameGr">OA.com</h1>
        </div>
        
    </nav>
  );
}

export default Navbar;

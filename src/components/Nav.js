import React from 'react';
import logo from '../images/logo.png';

const Nav = () => {
    return(
        <div className="navbar">
        <div className="logo"><img src={logo} alt="knotify-logo" /></div>
        <ul>
          <li className="active">Home</li>
          <li>Search</li>
          <li>Your Library</li>
        </ul>
      </div>
    );
}

export default Nav;
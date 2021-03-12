import React from 'react';
import logo from '../images/knotify.png';
import {ReactComponent as HomeIcon} from '../images/iconmonstr-home-6.svg';
import {ReactComponent as SearchIcon} from '../images/iconmonstr-magnifier-1.svg';
import {ReactComponent as LibraryIcon} from '../images/iconmonstr-archive-3.svg';

const Nav = () => {
    return(
        <div className="navbar">
        <div className="logo"><img src={logo} alt="knotify-logo" /></div>
        <ul>
          <li className="active"><HomeIcon className="icon"/>Home</li>
          <li><SearchIcon className="icon"/>Search</li>
          <li><LibraryIcon className="icon"/>Your Library</li>
        </ul>
      </div>
    );
}

export default Nav;
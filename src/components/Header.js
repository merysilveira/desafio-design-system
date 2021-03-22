import React from 'react';

import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header>
      <a href="/">
        <img  className="logo" src={logo} alt=""/>
      </a>
    </header>
  )
}

export default Header;
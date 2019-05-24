import React from 'react';

const Menu = (props) => {
  return (
    <ul className="mobile-menu d-sm-none">
      <div className="menu-close fa fa-close"></div>
      <li className="menu-global menu-top"><span className="menu-text">Home</span></li>
      <li className="menu-global menu-middle"><span className="menu-text">About Me</span></li>
      <li className="menu-global menu-bottom"><span className="menu-text">My Giraffes</span></li>
    </ul>
  )
}

export default Menu;
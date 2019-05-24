import React from 'react';
import MobileMenu from '../Menu';
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top align-items-end px-4">
      <div className="navbar-brand mr-auto">
        <div className="site-title">
          FANGJIAN
          <span className="pl-2">CHEN</span>
        </div>
      </div>

      <MobileMenu />
      <div className="d-none d-sm-block">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <span className="nav-link">Home</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Experiences</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">About</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Contract</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
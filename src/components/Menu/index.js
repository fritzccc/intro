import React from 'react'

export default ({ menus }) => {
  const menuList = menus ? menus.map(menu =>
    <li className="nav-item">
      <span className="nav-link">{menu}</span>
    </li>
  ) : null;
  
  return (
    <div id="desktop-menu" className="d-none d-sm-block">
      <ul className="navbar-nav">
        {menuList}
      </ul>
    </div>
  )
}
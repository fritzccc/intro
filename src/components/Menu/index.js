import React from 'react'

const Menu = ({ menus, activatedMenu, onMenuChange }) => {
  const menuList = menus ? menus.map(menu =>
    <li className={activatedMenu === menu ? "nav-item active" : "nav-item"} key={menu}>
      <label htmlFor={menu} className="nav-link">{menu}</label>
      <input id={menu} name="active" className="d-none" value={menu} type="radio" onChange={e => onMenuChange(e.currentTarget.value)} />
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
export default Menu
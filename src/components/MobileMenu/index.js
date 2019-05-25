import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ menus, toggleMenu, menuExpanded }) => {
  console.log(menuExpanded)
  const menuList = menus ? menus.map((menu, index) => {
    const pos = index === 0 ? "top" : index === 1 ? "middle" : index === 2 ? "bottom" : "hidden";
    return (
      <li className={menuExpanded ? `menu-global menu-${pos} menu-${pos}-expand expand` : `menu-global menu-${pos}`}>
        <span className={menuExpanded ? "menu-text menu-text-expand" : "menu-text"}>{menu}</span>
      </li>
    )
  }) : null;

  return (
    <div id="mobile-menu" className="d-sm-none">
      <ul className="menu" onClick={toggleMenu}>
        {menuList}
        <div className={menuExpanded ? "menu-close menu-close-visible" : "menu-close"}>
          <FontAwesomeIcon icon="times"/>
        </div>
        <div className="click-blocker"></div>
      </ul>
    </div>
  )
}
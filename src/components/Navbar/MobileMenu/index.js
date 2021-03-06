import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { setMenu, toggleMenu } from '../../../actions/config.action';

const MobileMenu = ({ menus, menuExpanded, activatedMenu, setMenu,toggleMenu }) => {
  const menuList = menus ? menus.map((menu, index) => {
    const pos = index === 0 ? "top" : index === 1 ? "middle" : index === 2 ? "bottom" : "hidden";
    const menuClass = classNames(
      'menu-global', `menu-${pos}`,
      { [`menu-${pos}-expand expand active`]: menuExpanded && activatedMenu === menu },
      { [`menu-${pos}-expand expand`]: menuExpanded && activatedMenu !== menu }
    );
    const menuTextClass = classNames(
      'menu-text',
      { 'menu-text-expand': menuExpanded }
    );

    return (
      <li key={index} onClick={() => setMenu(menu)} className={menuClass}>
        <span className={menuTextClass}>{menu}</span>
      </li>
    )
  }) : null;

  return (
    <div id="mobile-menu" className="d-md-none">
      <ul className="menu">
        {menuList}
        <div className={menuExpanded ? "menu-close menu-close-visible" : "menu-close"}>
          <FontAwesomeIcon icon="times" />
        </div>
        <div className="click-blocker" onClick={toggleMenu}></div>
      </ul>
    </div>
  )
}

export default connect(
  state => ({ ...state.config }),
  dispatch => ({
    toggleMenu: toggleMenu(dispatch),
    setMenu: setMenu(dispatch)
  })
)(MobileMenu)
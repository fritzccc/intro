import React from 'react'
import { connect } from 'react-redux'
import { setMenu } from '../../../actions/config.action'

const Menu = ({ menus, activatedMenu, setMenu }) => {
  const menuList = menus ? menus.map(menu =>
    <li className={activatedMenu === menu ? "nav-item active" : "nav-item"} key={menu}>
      <label htmlFor={menu} className="nav-link">{menu}</label>
      <input id={menu} name="active" className="d-none" value={menu} type="radio" onChange={e => setMenu(e.currentTarget.value)} />
    </li>
  ) : null;

  return (
    <div id="desktop-menu" className="d-none d-md-block">
      <ul className="navbar-nav">
        {menuList}
      </ul>
    </div>
  )
}
export default connect(
  state => ({ ...state.config }),
  dispatch => ({
    setMenu: setMenu(dispatch)
  })
)(Menu);
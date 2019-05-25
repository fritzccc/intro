import React from 'react';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';

const menus = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"]

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuExpanded: false
    }
  }

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ menuExpanded: !this.state.menuExpanded })
  }

  render() {
    const { menuExpanded } = this.state

    return (
      <nav className="navbar navbar-expand-sm fixed-top align-items-end px-4">
        <Menu menus={menus} />
        <MobileMenu menus={menus} menuExpanded={menuExpanded} toggleMenu={this.toggleMenu} />

        <div className="navbar-brand ml-auto">
          <div className="site-title">
            FANGJIAN
          <span className="pl-2">CHEN</span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
import React from 'react';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';

const menus = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"]

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activatedMenu: menus[0],
      menuExpanded: false
    }
  }

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ menuExpanded: !this.state.menuExpanded })
  }

  onMenuChange = menu => {
    this.setState({ activatedMenu: menu })
  }

  render() {
    const { menuExpanded, activatedMenu } = this.state
    const { toggleMenu, onMenuChange } = this;
    return (
      <nav className="container navbar navbar-expand-sm fixed-top align-items-end px-4">
        <Menu menus={menus} onMenuChange={onMenuChange} activatedMenu={activatedMenu} />
        <MobileMenu menus={menus} onMenuChange={onMenuChange} menuExpanded={menuExpanded} toggleMenu={toggleMenu} />

        <div className="navbar-brand ml-auto mx-0">
          <div className="site-title">
            FANGJIAN
            <span className="pl-2 last-name">
              {[..."CHEN"].map(letter => <span>{letter}</span>)}
            </span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
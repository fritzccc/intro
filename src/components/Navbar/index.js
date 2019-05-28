import React from 'react';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

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

  onMenuChange = (menu, mobileMenuEvent = undefined) => {
    mobileMenuEvent && mobileMenuEvent.stopPropagation();
    if (!mobileMenuEvent || (mobileMenuEvent && this.state.menuExpanded)) {
      this.setState({ activatedMenu: menu })
      this.setState({ menuExpanded: false })
    }
  }

  render() {
    const { headerClass } = this.props;
    return (
      <nav id="header" className={headerClass}>
        <div className="container d-flex">
          <Menu />
          <MobileMenu />

          <div className="navbar-brand ml-auto mx-0">
            <div className="site-title">
              FANGJIAN
              <span className="pl-2 last-name">
                {[..."CHEN"].map(letter => <span key={letter}>{letter}</span>)}
              </span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
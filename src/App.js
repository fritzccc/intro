import React from 'react';
import Navbar from './components/Navbar'
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import Content from './components/Content'

library.add(faTimes)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      headerClass: 'navbar navbar-expand-md py-5',
      contentClass: 'container'
    }
  }
  componentDidMount() {
    window.onscroll = () => this.onWindowScrolled()
  }
  onWindowScrolled = () => {
    const sticky = window.scrollY > 30;
    this.setState({
      headerClass: classNames(
        'navbar', 'navbar-expand-md',
        { 'py-5': !sticky },
        { 'stick-to-top': sticky }
      ),
      contentClass: classNames(
        'container',
        { 'container-padding': sticky }
      )
    })
  }

  render() {
    const { headerClass, contentClass } = this.state;
    return (
      <div>
        <Navbar headerClass={headerClass} />
        <Content contentClass={contentClass} />
      </div>
    );
  }
}

export default App;

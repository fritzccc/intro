import React from 'react';
import Navbar from './components/Navbar'
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)


function App() {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}

export default App;

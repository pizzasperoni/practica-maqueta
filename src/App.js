import React from 'react';
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home' />
        <About path='/about' />
      </Router>
    </div>
  );
}

export default App;

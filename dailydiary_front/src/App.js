import React from 'react';

import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/main'
import Bar from './component/bar'

function App() {
  return (
    <div id="main_wrap">
      <BrowserRouter>
        <Bar/>
        <Home />
          
      </BrowserRouter>
    </div>
  );
}

export default App;

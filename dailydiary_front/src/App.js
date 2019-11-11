import React from 'react';

import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/main'
import Bar from './component/bar'
import Timer from './component/timer'
import Write from'./component/write'
import Login from './component/login'

function App() {
  return (
    <div id="main_wrap">
      <BrowserRouter>
        <Bar/>
        
        <Route path='/' exact component={Home} />
        <Route path='/timer' exact component={Timer} />
        <Route path='/write' exact component={Write} />
        <Route path='/login' exact component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;

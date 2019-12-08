import React from 'react';
import { Route, Router } from 'react-router-dom';

import Header from './shared/Header/header';
import Home from './components/Home/home';
import About from './components/About/about';

import { createBrowserHistory } from 'history';

import './App.css';

function App() {

  const history = createBrowserHistory();

  return (
    <div>
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
        <Header history={history} />
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;

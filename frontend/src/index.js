import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';

import Info from './components/Info';
import Home from './components/Home';
import Earned from './components/Earned';
import Spent from './components/Spent';
import Net from './components/Net';

const nav = (
  <Navbar brand={<a href="/">&nbsp;&nbsp;WalletWatch</a>} alignLinks="right">
    <NavItem href="/home">
      Home
    </NavItem>
    <NavItem href="#spent">
      Spent
    </NavItem>
    <NavItem href="#earned">
      Earned
    </NavItem>
    <NavItem href="#net">
      Net
    </NavItem>
    <NavItem href="/">
      Logout
    </NavItem>
  </Navbar>
);

const router = (
  <Router>
    {nav}

    <Route exact path="/" component={Info} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/spent" component={Spent} />
    <Route exact path="/earned" component={Earned} />
    <Route exact path="/net" component={Net} />
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

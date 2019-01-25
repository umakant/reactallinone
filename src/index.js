import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import NavbarItems from './component/NavbarItems';
import Profile from './component/Profile';
import Logout from './component/Logout';
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';

ReactDOM.render(
    <Router>
      <div>
        <Navbar expand="lg" light bg="light">
            <Collapse navbar>
                <Navbar.Nav mr="auto">
                  <Nav>
                    <NavbarItems />
                  </Nav>
                </Navbar.Nav>
              </Collapse>
          </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
      </div>
  </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
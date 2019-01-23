import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Signup from './component/Signup';
import Login from './component/Login';

class Home extends React.Component {

    render() {
        return (
            <div>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/topics">Signup</Link>
                </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </div>
        );
    }
}

export default Home;
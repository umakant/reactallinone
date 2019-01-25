import React, { Component } from 'react';
import Header from './Header';
import logo from '../logo.svg';

class Profile extends Component {

    render() {
        return (
            <div>
                <Header />  
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                            </header>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="well well-sm">
                                <div class="row">
                                    <div class="col-sm-6 col-md-4">
                                        <img src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
                                    </div>
                                    <div class="col-sm-6 col-md-8">
                                        <h4>{localStorage.getItem('username')}</h4>
                                        <small><cite title={localStorage.getItem('location')}>{localStorage.getItem('location')}</cite></small>
                                        <p>
                                        {localStorage.getItem('newemail')}
                                        <br />
                                        <a href={localStorage.getItem('website')}>{localStorage.getItem('website')}</a>
                                        <br />
                                        {localStorage.getItem('dateofbirth')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
import React, { Component } from 'react';
import Header from './Header';
import logo from '../logo.svg';

class Profile extends Component {

    constructor(props){
        super(props);
        
        const checkAuth = sessionStorage.getItem('userAuth');
        
        if(checkAuth !== "Success"){
            this.props.history.push("/login");
        }
    }

    render() {
        return (
            <div>
                <Header />  
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo" />
                            </header>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="well well-sm">
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
                                        <img src="http://placehold.it/380x500" alt="" className="img-rounded img-responsive" />
                                    </div>
                                    <div className="col-sm-6 col-md-8">
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
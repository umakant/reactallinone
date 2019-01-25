import React, { Component } from 'react';

class Logout extends Component {
    constructor(props){
        super(props);
        sessionStorage.clear();
        localStorage.clear();
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                Logout
            </div>
        );
    }
}

export default Logout;
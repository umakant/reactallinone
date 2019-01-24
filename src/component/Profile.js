import React, { Component } from 'react';

class Profile extends Component {

    render() {
        return (
            <div>
                <h3>Profile</h3>
                {localStorage.getItem('username')}
            </div>
        );
    }
}

export default Profile;
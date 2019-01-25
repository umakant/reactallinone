import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';

class NavbarItems extends Component {
    render() {
        const auth = sessionStorage.getItem('userAuth');
        if(auth === 'Success'){
        return (
            <Navbar expand="lg" light bg="dark">
                <Collapse navbar>
                    <Navbar.Nav mr="auto">
                        <Nav>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="profile" className="nav-link">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="logout" className="nav-link">Logout</Link>
                            </li>
                        </Nav>
                    </Navbar.Nav>
                </Collapse>
            </Navbar>
        );
      } else {          
        return (
            <Navbar expand="lg" light bg="dark">
                <Collapse navbar>
                    <Navbar.Nav mr="auto">
                        <Nav>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="signup" className="nav-link">Signup</Link>
                            </li>
                        </Nav>
                    </Navbar.Nav>
                </Collapse>
            </Navbar>
        );
      }
       
    }
}
export default NavbarItems;
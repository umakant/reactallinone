import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Dropdown, Form, Collapse,  } from 'bootstrap-4-react';



class NavbarItems extends Component {
    constructor(props){
        super(props);
        const auth = sessionStorage.getItem('userAuth');
        if(auth !== 'Success'){
            this.state = {
                navitems:[
                    {
                        id: 1,
                        name: "Home",
                        url : "/"
                    },
                    {
                        id: 2,
                        name: "Login",
                        url : "/login"
                    },
                    {
                        id: 3,
                        name: "Signup",
                        url : "/signup"
                    },
                ]
            }
        } else {
            this.state = {
                navitems:[
                    {
                        id: 1,
                        name: "Home",
                        url : "/"
                    },
                    {
                        id: 2,
                        name: "Profile",
                        url : "/profile"
                    }, 
                    {
                        id: 3,
                        name: "Logout",
                        url : "/logout"
                    },
                ]
            } 
        }
    }
    render() {
        return this.state.navitems.map( nav => {
            return(
                <div>
                    <Nav.Item eventKey={nav.id} className="item-card">
                        <Nav.ItemLink href={nav.url}>{nav.name}</Nav.ItemLink>
                    </Nav.Item>
              </div>
              );
          }
        )
    };
}

export default NavbarItems;
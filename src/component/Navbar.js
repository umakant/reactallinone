import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Navbar extends Component {
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
                    <ul>
                        <li key={nav.id} className="item-card">
                            <Link to={nav.url}>{nav.name}</Link>
                        </li>
                    </ul>
              </div>
              );
          }
        )
    };
}

export default Navbar;
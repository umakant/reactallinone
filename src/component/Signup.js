import React, { Component } from 'react';

class Signup extends React.Component {
    constructor(props) {
      super(props);
  
      this.username = React.createRef();
      this.email    = React.createRef();
      this.password = React.createRef();
      this.cpassword = React.createRef();
      this.state = {
        errors: []
      };
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      const username = this.username.current.value;
      const email    = this.email.current.value;
      const password = this.password.current.value;
      const cpassword = this.cpassword.current.value;
      const errors = this.handleValidation(username, email, password, cpassword);
  
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
    };
  
    handleValidation = (username, email, password, cpassword) => {
      const errors = [];
      if (username.length === 0) {
        errors.push("Username cannot be empty");
      } else {
        localStorage.setItem('username', username);
      }
      if (email.length === 0) {
        errors.push("Email cannot be empty");
      } else {
        localStorage.setItem('email', email);
      }
      
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
      } else {
        localStorage.setItem('password', password);
      }
      
    if(cpassword.length === 0) {
        //console.log('Confirm Password can not be blank.');
        errors.push("Confirm Password can not be blank.");
      } else if (cpassword != password) {
        // console.log(password);
        // console.log(cpassword);
        // console.log('Confirm Password not matched with Password');
        errors.push("Confirm Password not matched with Password");
      } else {
        // console.log(cpassword);
        // console.log("Matched");
        localStorage.setItem('cpassword', cpassword);
      }
      
      
      return errors;
    };
  
    render() {
      const { errors } = this.state;
      return (
          <div>
              <h3>Signup</h3>
              <form onSubmit={this.handleSubmit}>
                  {errors.map(error => <p key={error}>{error}</p>)}
                  <div>
                      <label>Username:</label>
                      <input type="text" ref={this.username} />
                  </div>
                  <div>
                      <label>Email:</label>
                      <input type="text" ref={this.email} />
                  </div>
                  <div>
                      <label>Password:</label>
                      <input type="text" ref={this.password} />
                  </div>
                  <div>
                      <label>Confirm Password:</label>
                      <input type="text" ref={this.cpassword} />
                  </div>
                  <div>
                      <button>Submit</button>
                  </div>
              </form>
          </div>
      );
    }
  }

  export default Signup;
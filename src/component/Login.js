import React from 'react';
import logo from '../logo.svg';
import Header from './Header';

class Login extends React.Component {
    constructor(props) {
      super(props);
  
      this.username = React.createRef();
      this.password = React.createRef();
      this.state = {
        errors: []
      };
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      const username = this.username.current.value;
      const password = this.password.current.value;
      const errors = this.handleValidation(username, password);
      
      // var username = localStorage.getItem('username');
      // var password = localStorage.getItem('password');



      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
    };
  
    handleValidation = (username, password) => {
      const errors = [];
      if (username.length === 0) {
        errors.push("Username cannot be empty");
      } else {
        localStorage.setItem('username', username);
      }
      
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
      } else {
        localStorage.setItem('password', password);
      }

      const newusername = localStorage.getItem('newusername');
      const newpassword = localStorage.getItem('newpassword');
      
      if(username === newusername && password === newpassword){
        //console.log('Success');
        sessionStorage.setItem('userAuth', 'Success');
        this.props.history.push("/profile");
      } else {
        errors.push("Username and Password are incorrect");
        //console.log("Username and Password are incorrect");
      }
      
      return errors;
    };
  
    render() {
      return (
        <div>
              <Header />
              <div className="container">
                <div className="row">
                  <div className="col-md-6 App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                  </header>
                  </div>
                  <div className="col-md-6">
                  <h3>Please Login into the website.</h3>
                  <form onSubmit={this.handleSubmit}>
                    <small id="passwordError" className="form-text text-muted error-color">
                      {this.state.errors[2]}
                    </small>
                    <div className="form-group">
                        <label htmlFor="usename">Username:</label>
                        <input type="text" className="form-control" ref={this.username} />    
                        <small id="usenameError" className="form-text text-muted error-color">
                          {this.state.errors[0]}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" ref={this.password} />    
                        <small id="passwordError" className="form-text text-muted error-color">
                          {this.state.errors[1]}
                        </small>
                    </div>
                    <div>
                      <button  className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
          </div>
      );
    }
  }

  export default Login;
import React from 'react';
import logo from '../logo.svg';
import Header from './Header';

class Signup extends React.Component {
    constructor(props) {
      super(props);
  
      this.username = React.createRef();
      this.email    = React.createRef();
      this.password = React.createRef();
      this.cpassword = React.createRef();
      this.location = React.createRef();
      this.website = React.createRef();
      this.dateofbirth  = React.createRef();
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
      const location = this.location.current.value;
      const website = this.website.current.value;
      const dateofbirth = this.dateofbirth.current.value;
      const errors = this.handleValidation(username, email, password, cpassword);
      
      if(location){
        localStorage.setItem('location', location);
      }
      if(website){
        localStorage.setItem('website', website);
      }
      if(dateofbirth){
        localStorage.setItem('dateofbirth', dateofbirth);
      }
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      } else {
        this.props.history.push("/login");
      }
    };
  
    handleValidation = (username, email, password, cpassword) => {
      const errors = [];
      if (username.length === 0) {
        errors.push("Username cannot be empty");
      } else {
        localStorage.setItem('newusername', username);
      }
      if (email.length === 0) {
        errors.push("Email cannot be empty");
      } else {
        localStorage.setItem('newemail', email);
      }
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
      } else {
        console.log('Password Okay');
        localStorage.setItem('newpassword', password);
      }
      
      if(cpassword.length === 0) {
        errors.push("Confirm Password can not be blank.");
      } else if (cpassword !== password) {
        errors.push("Confirm Password not matched with Password");
      } else {
        localStorage.setItem('newcpassword', cpassword);
      }
      
      if(errors.length === 0){
        errors.pop();
      }

      console.log(errors);
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
                  <h3>Signup</h3>
                  <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                          <label htmlFor="usename">Username:</label>
                          <input type="text" className="form-control" ref={this.username} />    
                          <small id="usenameError" className="form-text text-muted error-color">
                            {this.state.errors[0]}
                          </small>
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email:</label>
                          <input type="text" className="form-control" ref={this.email} />
                          <small id="usenameError" className="form-text text-muted error-color">
                            {this.state.errors[1]}
                          </small>
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password:</label>
                          <input type="password" className="form-control" ref={this.password} />
                          <small id="usenameError" className="form-text text-muted error-color">
                            {this.state.errors[2]}
                          </small>
                      </div>
                      <div className="form-group">
                          <label htmlFor="cpassword">Confirm Password:</label>
                          <input type="password" className="form-control" ref={this.cpassword} />
                          <small id="usenameError" className="form-text text-muted error-color">
                            {this.state.errors[3]}
                          </small>
                      </div>
                      <div className="form-group">
                          <label htmlFor="location">Location:</label>
                          <input type="text" className="form-control" ref={this.location} />
                          <small id="locationError" className="form-text text-muted error-color">
                            Optional
                          </small>
                      </div>
                      <div className="form-group">
                          <label htmlFor="website">Website:</label>
                          <input type="text" className="form-control" ref={this.website} />
                          <small id="websiteError" className="form-text text-muted error-color">
                            Optional
                          </small>
                      </div>
                      <div className="form-group">
                          <label htmlFor="dateofbirth">Date of Birth:</label>
                          <input type="text" className="form-control" ref={this.dateofbirth} />
                          <small id="dateofbirthError" className="form-text text-muted error-color">
                            Optional
                          </small>
                      </div>
                      <div>
                          <button className="btn btn-primary">Submit</button>
                      </div>
                  </form>
                  </div>
                </div>
              </div>
          </div>
      );
    }
  }

  export default Signup;
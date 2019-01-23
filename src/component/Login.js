import React from 'react';

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
        console.log(username);
        localStorage.setItem('username', username);
      }
      
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
      } else {
        console.log(password);
        localStorage.setItem('password', password);
      }
      
      
      return errors;
    };
  
    render() {
      const { errors } = this.state;
      return (
        <div>
          {localStorage.getItem('password')}
          <form onSubmit={this.handleSubmit}>
            {errors.map(error => <p key={error}>{error}</p>)}
            <div>
              <label>Username:</label>
              <input type="text" ref={this.username} />
            </div>
            <div>
              <label>Password:</label>
              <input type="text" ref={this.password} />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      );
    }
  }

  export default Login;
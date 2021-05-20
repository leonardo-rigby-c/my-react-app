import React from 'react';
import '../styles/login/Login.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        loggedUser: JSON.parse(localStorage.getItem('user')),
        isUserLogged: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.emptyInputs = this.emptyInputs.bind(this)
    }

    componentDidMount() {
      let loggedUser = this.state.loggedUser;
      if(loggedUser != null) {
        this.setState({isUserLogged: true})
      }
    }

    setUserLogged() {
      window.location.pathname= '/home'
      // this.setState({isUserLogged: true})
      this.props.onLogin();
    }

    handleChange(event) {
      this.setState({email: event.target.value})
    }

    emptyInputs() {
      this.setState({
        email: '',
        password: ''
      })
    }

    handleSubmit(event) {
      let rThis = this;
      event.preventDefault();
      let credentials = {
        email: this.state.email,
        password: this.state.password
      };

      console.log(credentials);

      
      const api = 'http://localhost:3000/api/auth/login';

                axios.post(api, credentials)
                .then(function (response) {
                    console.log(response);
                    rThis.emptyInputs();
                    if(response.status === 200) {
                      
                      localStorage.setItem('user', JSON.stringify({
                        "userId": response.data.userId,
                        "token": response.data.token
                      }));

                      rThis.setUserLogged();
                      // window.location.pathname = '/home';
                    }else {
                      alert("User not authenticated");
                    }
                    // if(response.data.status === 201 ){
                    //     alert("User registered successfully!");
                    // }
                    // if(response.data.status === 501 ){
                    //     alert("User already exists!");
                    // }
                }).catch(err => {
                  console.log(err);
                  alert("User not authenticated");
                });
              }
        

    render() {

        // if(this.state.isUserLogged === true ){
        //   return <Redirect to='/' />
        // }else {
          return (
            <div className="container container-login">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 central-container">
                  <h3 className="text-center">Login</h3>
                <form onSubmit={this.handleSubmit}>
                  <label className="text-success">
                    Email: {this.state.email}
                    </label>
  
                    <input className="form-control" type="email" required value={this.state.email} onChange={(event) => this.setState({ email: event.target.value})} />
                  <label className="text-success">
                    Password: {this.state.password.length}
                    </label>
                    <input className="form-control" type="password" required value={this.state.password} onChange={(event) => this.setState({ password: event.target.value})} />
                    <br />
                    <div className="center-item">
                    <button className="submit-btn center-item" type="submit" value="Submit" >Submit</button>
                    </div>
                </form>
                {/* <img src="/assets/ilustrations/to-the-stars.svg" className="ilustration" alt="to-the-stars" />
                <img src="/assets/ilustrations/to-the-stars.svg" className="ilustration" alt="to-the-stars" />
                <img src="/assets/ilustrations/to-the-stars.svg" className="ilustration" alt="to-the-stars" />
                <img src="/assets/ilustrations/to-the-stars.svg" className="ilustration" alt="to-the-stars" /> */}
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4  col-ilustration">
                <img src="/assets/ilustrations/to-the-stars.svg" className="ilustration" alt="to-the-stars" />
  
                </div>
              </div>
            </div>
          );
        // }
    }
}

export default Login;
import React from 'react';
import axios from 'axios';
import '../styles/login/Login.css';

import Alert from '../components/Alert';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          alert: {
            active: true,
            msg: 'hi',
            type: 'success'
          }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.callCreatedAlert = this.callCreatedAlert.bind(this)
        this.closeCreatedAlert = this.closeCreatedAlert.bind(this)
      }

      callCreatedAlert() {
        this.setState({
          alert: {
            active: true,
            msg: 'User created successfully',
            type: 'success'
          }
        })
      }

      closeCreatedAlert() {
        this.setState({
          alert: {
            active: false,
            msg: 'User created successfully',
            type: 'success'
          }
        })
      }
  
      handleChange(event) {
        this.setState({email: event.target.value})
      }
  
      handleSubmit(event) {
        const rthis = this;
        event.preventDefault();
        let credentials = {
          email: this.state.email,
          password: this.state.password
        };
  
        console.log(credentials);
        
        const api = 'http://localhost:3000/api/auth/signup/';
  
        axios.post(api, credentials)
          .then(function (response) {
              console.log(response);
              if(response.status === 201 ){
                // rthis.callCreatedAlert();
                alert("User created Succesfully!");
              }
          }
        );
      }

    render() {
        return (
            <div className="container container-login">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 central-container">
                <h3 className="text-center">Signup</h3>
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
              <img src="/assets/ilustrations/to-the-stars.svg" className="ilustration" alt="to-the-stars" />
              <img src="/assets/ilustrations/to-the-stars.svg" className="ilustration" alt="to-the-stars" />
              <img src="/assets/ilustrations/to-the-stars.svg" className="ilustration" alt="to-the-stars" />
              <img src="/assets/ilustrations/to-the-stars.svg" className="ilustration" alt="to-the-stars" />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4  col-ilustration">
              <img src="/assets/ilustrations/to-the-stars.svg" className="ilustration" alt="to-the-stars" />

              </div>
            </div>
            {/* <Alert onClose={this.closeCreatedAlert} msg={this.state.alert.msg} type={this.state.alert.type} active={this.state.alert.active}/> */}
          </div>
        );
    }
}

export default Signup;
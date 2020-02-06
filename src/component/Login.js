import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import * as Auth from '../utils/auth'; 

export default class Login extends Component {

    render() {
        return (
            <div className='container login-container'>
                <GoogleLogin
                  clientId={Auth.clientId}
                  buttonText="Login"
                  onSuccess={(resp) => Auth.login(resp, () => this.props.history.push('/'))}
                  onFailure={Auth.failure}
                  cookiePolicy={'single_host_origin'}
                />                
            </div>
        )
    }
}

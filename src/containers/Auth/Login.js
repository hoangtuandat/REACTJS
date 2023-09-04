import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import { handleLoginApi } from '../../services/userService';

import './Login.scss';
// import { FormattedMessage } from 'react-intl';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password: "",
            showPassword: false,
            errMessage: ''
        }
    }

    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        
    }
    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        // console.log(`username:${this.state.username}, password: ${this.state.password}`);

        try{
            let data = await handleLoginApi(this.state.username, this.state.password);
            if(data && data.errCode !==0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if(data && data.errCode ===0) {
                this.props.userLoginSuccess(data.user)
                // console.log('login success')
            }
        }catch(error) {
            // console.log('hoidanit', error.response)
            if(error.response) {
                if(error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            
        }

        
    }

    handleShowPassword = () => {
        this.setState({
            showPassword : !this.state.showPassword
        })
    }

    render() {
        
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='text-center col-12 text-login'>
                            Login
                        </div>
                        <div className='form-group login-input'>
                            <label className='label col-md-12' >Username</label>
                            <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Enter your Username' 
                            value={this.state.username}
                            onChange={(event) => {this.handleOnchangeUsername(event)}}
                            />
                        </div>
                        <div className='form-group login-input'>
                            <label className='label col-md-12'>Password</label>
                            <div className='icon-input'>
                                <span 
                                onClick={() => {this.handleShowPassword()}}
                                >
                                    <i className={this.state.showPassword? "fas fa-eye-slash": "fas fa-eye"}></i>
                                </span>
                            
                            <input 
                            type={this.state.showPassword ? "text" : "password"}
                            className='form-control' 
                            placeholder='Enter your Password' 
                            value={this.state.password}
                            onChange={(event) => {this.handleOnchangePassword(event)}}
                            />
                            </div>
                            
                        </div>
                        <div className='col-12' style={{color: 'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div>
                            <button className='button'
                            onClick={()=> {this.handleLogin()}}
                            >Login</button>
                        </div>
                        
                        <div className='col-md-12'>
                            <span className="forgot-password">Forgot your Password?</span>
                        </div>
                        <div className='col-12 text-center mt-2'>
                            <span >Or sign in with:</span>
                        </div>
                        <div className='icon'>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-google-plus google"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

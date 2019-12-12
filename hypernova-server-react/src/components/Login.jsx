import React, { Component } from 'react';
import { NormalButton } from './NormalButton';
// import './login.css';
// import wadhwaniLogo from '../assests/WF-Logo-Color.png';

export default class Login extends Component {

    constructor(props) {
        console.log('----->>',props);
        super(props)
    
        this.state = {
            username: '',
            password: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.triggerSubmitOnEnter = this.triggerSubmitOnEnter.bind(this);
        this.submitCredentials = this.submitCredentials.bind(this);
    }

    handleInput(e){
        e.preventDefault();
        console.log('here');
        this.setState({[e.target.name]: e.target.value});
    }

    triggerSubmitOnEnter(e){
        if (e.key === 'Enter') {
            this.submitCredentials(e);
        }
    }

    submitCredentials(_){
        const { username, password } = this.state;
        const credentials = {
            username,
            password
        }

        if ( username && password ) {
            alert(`Welcome ${username} to Micro-Frontendt`);
            console.log(this.props);
        }
    }
    
    render() {
        const { username, password } = this.state;
        const buttonClass = username && password ? 'login-button--active' : 'login-button';
        return (
            <div className='login-container'>
                <div className='navbar'>
                    <img alt='' src={'data:image/png;base64,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'} className="learnwise-logo"/>
                </div>
                <div className='content'>
                    <div className='head'>
                       <div className='title'>WELCOME</div>
                       <div className='description'>Enter your email-id and password</div>
                       </div>
                    <div className='body' onKeyPress={this.triggerSubmitOnEnter}>
                        <div className='input-row'>
                            <label htmlFor="email-label">Email <span>*</span></label>
                            <input className='login-input' placeholder='xyz@demo.com' autoComplete="off" type='email' name='username' value={username} onChange={this.handleInput}></input>
                        </div>
                        <div className='input-row'>
                            <label htmlFor="password-label">Password <span>*</span></label>
                            <input className='login-input' autoComplete="off" placeholder='******' type='password' name='password' value={password} onChange={this.handleInput}></input>
                        </div>
                        <div className='buttons'>
                            <NormalButton text={'SIGN IN'} class={buttonClass} onClick={this.submitCredentials}/>
                        </div>
                    </div>
                    <div className='footer'></div>
                </div>
            </div>
        )
    }
}
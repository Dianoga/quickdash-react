import React, {	Component } from 'react';
import { browserHistory } from 'react-router';
import { firebase } from '../../shared';

import './login.scss';

export class Login extends Component {
	constructor(props, context) {
		super(props, context);

		this.context = context;

		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		firebase.authWithOAuthPopup('google', () => {
			browserHistory.push('/dashboard');
		});
	}

	render() {
		return (
			<div className="login-container">
				<a onClick={ this.handleLogin }>Firebase Login</a>
			</div>
		);
	}
}

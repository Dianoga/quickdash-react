import React, {	Component } from 'react';
import { firebase } from '../../shared';

export class Login extends Component {
	static propTypes = {
		Router: React.PropTypes.object.isRequired
	};

	constructor(props, context) {
		super(props, context);

		this.context = context;

		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		firebase.authWithOAuthPopup('google', () => {
			this.context.router.push('/dashboard');
		});
	}

	render() {
		return (
			<p onClick={ this.handleLogin }>Firebase Login</p>
		);
	}
}

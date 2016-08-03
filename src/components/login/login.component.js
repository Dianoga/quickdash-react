import React, {	Component } from 'react';
import { firebase } from '../../shared'

export class Login extends Component {
	constructor(props, context) {
		super(props, context);

		this.context = context;

		this.firebase = props.firebase;
		this.triggerLogin = this.triggerLogin.bind(this);
	}

	triggerLogin() {
		firebase.authWithOAuthPopup("google", () => {
			this.context.router.push('/dashboard');
		});
	}

	render() {
		return (
			<p onClick={this.triggerLogin}>Firebase Login</p>
		);
	}
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};

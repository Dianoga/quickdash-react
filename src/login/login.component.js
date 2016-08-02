import React, {
	Component
} from 'react';

class Login extends Component {
	constructor(props) {
		super(props);

		this.firebase = props.firebase;
		this.triggerLogin = this.triggerLogin.bind(this);
		this.handleLogin = props.handleLogin;
	}

	triggerLogin() {
		this.firebase.authWithOAuthPopup("google", this.handleLogin);
	}

	render() {
		return (
			<p onClick={this.triggerLogin}>Firebase Login</p>
		);
	}
}

export default Login;
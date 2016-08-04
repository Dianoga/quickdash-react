import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'

import { auth } from './shared';

import { Dashboard, Login } from './components'

import './scss/index.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null
		};

		// this.devices = this.firebase.fetch('devices', { context: this, then: this.updateDevices });

	}

	render() {
		return (
			<div className='container'>
				{this.props.children}
			</div>
		)
	}
}

function requireAuth(next, replace, callback) {
	auth.isAuthenticated()
		.then(user => {
			if (!user) {
				replace({
					pathname: '/login'
				});
			}

			callback();
		});
		// .catch(err => {
		// 	console.error('Auth Error', err);
		// });
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRedirect to='/dashboard' />
			<Route path="login" component={Login} />
			<Route path="dashboard" component={Dashboard} onEnter={requireAuth}></Route>
		</Route>
	</Router>,
	document.getElementById('root')
);

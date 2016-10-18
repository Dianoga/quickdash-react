import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import { auth } from './shared';

import { AlarmList, BatteryList, Dashboard, Login, ContactList, MotionList, PowerList, RoutineList, SwitchList } from './components';

import './scss/index.scss';

class App extends Component {
	static propTypes = {
		children: React.PropTypes.node
	}

	constructor(props) {
		super(props);

		this.state = {
			user: null
		};
	}

	render() {
		return (
			<div className="container">
				{this.props.children}
			</div>
		);
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
}

ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path="/" component={ App }>
			<IndexRedirect to="/dashboard" />
			<Route path="login" component={ Login } />
			<Route path="dashboard" component={ Dashboard } onEnter={ requireAuth } />
			<Route path="contact" component={ ContactList } />
			<Route path="motion" component={ MotionList } />
			<Route path="power" component={ PowerList } />
			<Route path="switch" component={ SwitchList } />
			<Route path="routine" component={ RoutineList } />
			<Route path="alarm" component={ AlarmList } />
			<Route path="battery" component={ BatteryList } />
		</Route>
	</Router>,
	document.getElementById('root')
);

import React, { Component } from 'react';
import Rebase from 're-base';

import './App.css';

import Dashboard from './dashboard/dashboard.component'
import Login from './login/login.component'

class App extends Component {
	constructor(props) {
		super(props);

		this.firebase = Rebase.createClass({
			apiKey: 'AIzaSyCWr48j9gGEhz1hvjwKIfYftcgGb4Q30L0',
			authDomain: 'project-2731511947915132034.firebaseapp.com',
			databaseURL: 'https://project-2731511947915132034.firebaseio.com',
			storageBucket: 'project-2731511947915132034.appspot.com'
		});

		this.state = {
			user: null
		};

		this.devices = this.firebase.fetch('devices', { context: this, then: console.log.bind(this) });
		console.log(this.devices);

		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(error, data) {
		this.setState({user: data.user});
	}

	render() {
		return (
			<main>
				{this.state.user ? <Dashboard /> : <Login handleLogin={this.handleLogin} firebase={this.firebase} />}
			</main>
		);
	}
}

export default App;

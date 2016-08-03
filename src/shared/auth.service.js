import { firebase } from './firebase.service';

class Auth {
	constructor() {
		this.notify = [];
		this.handleLogin = this.handleLogin.bind(this);

		firebase.onAuth(this.handleLogin);
	}

	get user() {
		return this._user;
	}

	handleLogin(user) {
		this._user = user;

		this.notify.forEach(fn => {
			fn.call(null, this.user);
		});
	}

	isAuthenticated() {
		return new Promise((resolve, reject) => {
			if (typeof this.user !== 'undefined') {
				// Auth has initialized
				resolve(this.user);
			} else {
				// Auth hasn't initialized
				this.notify.push(resolve);
			}
		});
	}
}

export const auth = new Auth();
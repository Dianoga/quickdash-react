import { firebase } from './';

class Settings {
	constructor() {
		firebase.listenTo('settings', {
			context: this,
			then: (data) => {
				this._settings = data
			}
		});
	}

	get commandUrl() {
		return this._settings.commandUrl;
	}
}

export var settings = new Settings();
import _ from 'lodash';

export class Device {
	constructor(devices) {
		this.devices = devices;
	}

	getDevice(id) {
		return _.find(this.devices, { id: id });
	}

	getDevices(ids) {
		return _.filter(this.devices, val => !!_.find(val.id, ids));
	}

	hasDevices() {
		return this.devices.length > 0;
	}

	hasContactSensors() {
		return !!_.find(this.devices, 'contact');
	}

	getContactSensors() {
		return _.filter(this.devices, 'contact');
	}

	hasSwitches() {
		return !!_.find(this.devices, 'switch');
	}

	getSwitches() {
		return _.filter(this.devices, 'switch');
	}

	hasMotionSensors() {
		return !!_.find(this.devices, 'motion');
	}

	getMotionSensors() {
		return _.filter(this.devices, 'motion');
	}

	hasOutdoorWeather() {
		return !!_.find(this.devices, val => {
			return _.indexOf(val.type, 'outdoorWeather') !== -1;
		});
	}

	getOutdoorWeather() {
		return _.find(this.devices, val => {
			return _.indexOf(val.type, 'outdoorWeather') !== -1;
		});
	}

	hasDoorControl() {
		return !!_.find(this.devices, 'door');
	}

	getDoorControl() {
		return _.find(this.devices, 'door');
	}
}

import _ from 'lodash';

export class Device {
	constructor(devices) {
		this.devices = devices;
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

	hasFloors() {
		return !!_.find(this.devices, { type: 'floor' });
	}

	getFloors() {
		return _.filter(this.devices, { type: 'floor' });
	}

	hasOutdoorWeather() {
		return !!_.find(this.devices, { type: 'outdoorWeather' });
	}

	getOutdoorWeather() {
		return _.find(this.devices, { type: 'outdoorWeather' });
	}

	hasDoorControl() {
		return !!_.find(this.devices, 'door');
	}

	getDoorControl() {
		return _.find(this.devices, 'door');
	}
}

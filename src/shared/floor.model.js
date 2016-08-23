export class Floor {
	constructor(floor, devices) {
		this._floor = floor;

		this._number = floor.number;
		this._temperature = floor.temperature ? devices.getDevice(floor.temperature) : null;
		this._humidity = floor.humidity ? devices.getDevice(floor.humidity) : null;
	}

	get number() {
		return this._number;
	}

	get temperature() {
		return this._temperature ? this._temperature.temperature : null;
	}

	get humidity() {
		return this._humidity ? this._humidity.humidity : null;
	}
}

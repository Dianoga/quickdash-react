import _ from 'lodash';

import { Floor } from './';

export class Floors {
	constructor(floors, devices) {
		this._floors = _.map(floors, val => {
			return new Floor(val, devices);
		});
	}

	hasFloors() {
		return this._floors.length > 0;
	}

	getFloors() {
		return this._floors;
	}

	getSortedFloors() {
		return _.sortBy(this._floors, 'number');
	}
}

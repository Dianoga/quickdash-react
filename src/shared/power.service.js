import _ from 'lodash';

export class Power {
	constructor(power) {
		this.power = power;
	}

	hasPower() {
		return _.size(this.power) > 0;
	}

	totalWatts() {
		return _.reduce(this.power, (total, val) => {
			if (val.groups.indexOf('grid') > -1) {
				return total + val.watts;
			}

			return total;
		}, 0);
	}
}

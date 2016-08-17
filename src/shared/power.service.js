import _ from 'lodash';

export class Power {
	constructor(power) {
		this.power = power;
	}

	hasPower() {
		return _.size(this.power) > 0;
	}

	totalWatts(name = 'grid') {
		return _.reduce(this.group(name), (total, val) => {
			return total + val.watts;
		}, 0);
	}

	otherWatts() {
		return this.totalWatts() - this.totalWatts('normals');
	}

	group(name) {
		return _.sortBy(_.filter(this.power, (val) => {
			return val.groups.indexOf(name) > -1;
		}), 'name');
	}
}

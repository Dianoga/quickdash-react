export class Power {
	constructor(power) {
		this.power = power || {};
	}

	hasPower() {
		return Object.values(this.power).length > 0;
	}

	totalWatts() {
		return Object.values(this.power).reduce((total, val) => {
			return val.main ? total + val.w : total;
		}, 0);
	}

	otherWatts() {
		return this.power.__OTHER__ ? this.power.__OTHER__.w : 'Unknown';
	}
}

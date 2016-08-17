import React, {	Component } from 'react';
import { firebase, Device, Power } from '../../shared';

import {
	ClimateWidget,
	ContactWidget,
	DoorControlWidget,
	MotionWidget,
	PowerWidget,
	RefreshWidget,
	SwitchWidget,
	WeatherWidget
} from '../';

import './dashboard.scss';

export class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.deviceBind = firebase.bindToState('devices', {
			context: this,
			state: 'devices'
		});

		this.powerBind = firebase.bindToState('power', {
			context: this,
			state: 'power'
		});
	}

	componentWillUnmount() {
		firebase.removeBinding(this.deviceBind);
		firebase.removeBinding(this.powerBind);
	}

	render() {
		const device = new Device(this.state.devices);
		const power = new Power(this.state.power);

		return (
			<div className="dashboard">
				{device.hasContactSensors() ? <ContactWidget devices={ device.getContactSensors() } /> : null}
				{device.hasSwitches() ? <SwitchWidget devices={ device.getSwitches() } /> : null}
				{device.hasDoorControl() ? <DoorControlWidget device={ device.getDoorControl() } /> : null}
				{device.hasMotionSensors() ? <MotionWidget devices={ device.getMotionSensors() } /> : null}
				{device.hasOutdoorWeather() ? <WeatherWidget outdoorWeather={ device.getOutdoorWeather() } /> : null}
				{device.hasFloors() ? <ClimateWidget floors={ device.getFloors() } /> : null}
				{power.hasPower() ? <PowerWidget watts={ power.totalWatts() } clickable /> : null}
				<RefreshWidget />
			</div>
		);
	}
}

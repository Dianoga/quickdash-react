import React, {	Component } from 'react';
import _ from 'lodash';
import { firebase, Device } from '../../shared';

import {
	ClimateWidget,
	ContactWidget,
	DoorControlWidget,
	MotionWidget,
	PowerWidget,
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
		const hasPower = this.state.power && _.size(this.state.power) > 0;

		return (
			<div className="dashboard">
				{device.hasContactSensors() ? <ContactWidget devices={ device.getContactSensors() } /> : null}
				{device.hasSwitches() ? <SwitchWidget devices={ device.getSwitches() } /> : null}
				{device.hasDoorControl() ? <DoorControlWidget device={ device.getDoorControl() } /> : null}
				{device.hasMotionSensors() ? <MotionWidget devices={ device.getMotionSensors() } /> : null}
				{device.hasOutdoorWeather() ? <WeatherWidget outdoorWeather={ device.getOutdoorWeather() } /> : null}
				{device.hasFloors() ? <ClimateWidget floors={ device.getFloors() } /> : null}
				{hasPower ? <PowerWidget power={ this.state.power } /> : null}
			</div>
		);
	}
}

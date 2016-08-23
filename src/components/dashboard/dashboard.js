import React, {	Component } from 'react';
import { firebase, Device, Floors, Power } from '../../shared';

import {
	AlarmWidget,
	ClimateWidget,
	ContactWidget,
	DoorControlWidget,
	MotionWidget,
	PowerWidget,
	LocationWidget,
	RefreshWidget,
	SwitchWidget,
	WeatherWidget
} from '../';

import './dashboard.scss';

export class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			devices: {},
			floors: [],
			power: {},
			location: {}
		};
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

		this.locationBind = firebase.bindToState('location', {
			context: this,
			state: 'location'
		});

		this.floorBind = firebase.bindToState('floors', {
			context: this,
			state: 'floors'
		});
	}

	componentWillUnmount() {
		firebase.removeBinding(this.deviceBind);
		firebase.removeBinding(this.powerBind);
		firebase.removeBinding(this.locationBind);
		firebase.removeBinding(this.floorBind);
	}

	render() {
		const device = new Device(this.state.devices);
		const floors = new Floors(this.state.floors, device);
		const power = new Power(this.state.power);

		return (
			<div className="dashboard">
				{device.hasContactSensors() ? <ContactWidget devices={ device.getContactSensors() } /> : null}
				{device.hasSwitches() ? <SwitchWidget devices={ device.getSwitches() } /> : null}
				{device.hasDoorControl() ? <DoorControlWidget device={ device.getDoorControl() } /> : null}
				{device.hasMotionSensors() ? <MotionWidget devices={ device.getMotionSensors() } /> : null}
				{device.hasOutdoorWeather() ? <WeatherWidget outdoorWeather={ device.getOutdoorWeather() } /> : null}
				{floors.hasFloors() ? <ClimateWidget floors={ floors } /> : null}
				{power.hasPower() ? <PowerWidget watts={ power.totalWatts() } clickable /> : null}
				{this.state.location.alarm ? <AlarmWidget status={ this.state.location.alarm } /> : null}
				{this.state.location.mode ? <LocationWidget mode={ this.state.location.mode } /> : null}
				<RefreshWidget />
			</div>
		);
	}
}

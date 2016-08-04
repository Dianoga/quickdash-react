import React, {	Component } from 'react';
import { firebase, Device } from '../../shared';

import {
	ClimateWidget,
	ContactWidget,
	DoorControlWidget,
	MotionWidget,
	SwitchWidget
} from '../';

import './dashboard.component.scss';

export class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		firebase.bindToState('devices', {
			context: this,
			state: 'devices',
		});
	}

	render() {
		const device = new Device(this.state.devices);

		return (
			<div className='dashboard'>
				{device.hasContactSensors() ? <ContactWidget devices={device.getContactSensors()} /> : null}
				{device.hasSwitches()? <SwitchWidget devices={device.getSwitches()} /> : null}
				{device.hasDoorControl() ? <DoorControlWidget device={device.getDoorControl()} /> : null}
				{device.hasFloors() ? <ClimateWidget devices={this.state.devices} /> : null}
				{device.hasMotionSensors() ? <MotionWidget devices={device.getMotionSensors()} /> : null}
			</div>
		);
	}
}
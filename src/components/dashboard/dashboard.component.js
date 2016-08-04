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
				<ContactWidget devices={device.getContactSensors()} />
				<SwitchWidget devices={device.getSwitches()} />
				<DoorControlWidget devices={this.state.devices} />
				<ClimateWidget devices={this.state.devices} />
				<MotionWidget devices={this.state.devices} />
			</div>
		);
	}
}
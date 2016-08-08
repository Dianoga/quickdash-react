import React, {	Component } from 'react';

import { Device } from '../../shared';
import { WidgetList } from '../';

import './switch.list.scss';

export class SwitchList extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
	}

	toggle(device, event) {
		let promise;

		device.busy = true;
		this.forceUpdate();

		if (device.switch === 'on') {
			promise = Device.sendCommand(device, 'off');
		} else if (device.switch === 'off') {
			promise = Device.sendCommand(device, 'on');
		}

		promise.then(() => {
			device.busy = false;
			this.forceUpdate();
		})
		.catch(() => {
			device.busy = false;
			this.forceUpdate();
		});
	}

	render() {
		return (
			<WidgetList
				class='list-switch'
				filter='getSwitches'
				attr='switch'
				onclick={this.toggle}
			/>
		);
	}
}

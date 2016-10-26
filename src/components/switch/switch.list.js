import React, {	Component } from 'react';

import { Command } from '../../shared';
import { WidgetList } from '../';

import './switch.list.scss';

export class SwitchList extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
	}

	toggle(device) {
		let promise;

		device.busy = true;
		this.forceUpdate();

		if (device.switch === 'on') {
			promise = Command.sendDeviceCommand(device, 'switch', 'off');
		} else if (device.switch === 'off') {
			promise = Command.sendDeviceCommand(device, 'switch', 'on');
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
				class="list-switch"
				filter="getSwitches"
				attr="switch"
				onclick={ this.toggle } />
		);
	}
}

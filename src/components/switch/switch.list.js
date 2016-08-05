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
		if (device.switch === 'on') {
			Device.sendCommand(device, 'off');

		} else if (device.switch === 'off') {
			Device.sendCommand(device, 'on');
		}
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

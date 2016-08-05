import React, {	Component } from 'react';
import classnames from 'classnames';

import { Device } from '../../shared';

import './door-control.component.scss';

export class DoorControlWidget extends Component {
	constructor(props) {
		super(props);

		this.props = props;
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		if (this.props.device.door === 'open') {
			Device.sendCommand(this.props.device, 'close');

		} else if (this.props.device.door === 'closed') {
			Device.sendCommand(this.props.device, 'open');
		}
	}

	render() {
		const widgetClasses = classnames({
			widget: true,
			'widget-door-control': true,
			warn: this.props.device.door !== 'closed'
		});

		const doorClasses = classnames({
			door: true,
			[this.props.device.door]: true
		});

		return (
			<div className={widgetClasses} onClick={this.toggle}>
				<div className='building'>
					<div className='roof'></div>
					<div className='walls'></div>
					<div className='hole'></div>
					<div className={doorClasses}></div>
				</div>
			</div>
		);
	}
}

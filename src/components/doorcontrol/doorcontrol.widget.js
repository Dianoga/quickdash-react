import React, {	Component } from 'react';
import classnames from 'classnames';

import { Device } from '../../shared';

import './door-control.component.scss';

export class DoorControlWidget extends Component {
	static propTypes = {
		device: React.PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);

		this.props = props;
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		let promise;

		this.props.device.busy = true;
		this.forceUpdate();

		if (this.props.device.door === 'open') {
			promise = Device.sendCommand(this.props.device, 'close');
		} else if (this.props.device.door === 'closed') {
			promise = Device.sendCommand(this.props.device, 'open');
		}

		promise.then(() => {
			this.props.device.busy = false;
			this.forceUpdate();
		})
		.catch(() => {
			this.props.device.busy = false;
			this.forceUpdate();
		});
	}

	render() {
		const widgetClasses = classnames({
			widget: true,
			'widget-door-control': true,
			warn: this.props.device.door !== 'closed',
			busy: this.props.device.busy
		});

		const doorClasses = classnames({
			door: true,
			[this.props.device.door]: true
		});

		return (
			<div className={ widgetClasses } onClick={ this.handleToggle }>
				<div className="building">
					<div className="roof" />
					<div className="walls">
						<div className="hole">
							<div className={ doorClasses } />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

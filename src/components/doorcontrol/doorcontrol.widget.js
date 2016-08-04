import React, {	Component } from 'react';
import classnames from 'classnames';

import './door-control.component.scss';

export class DoorControlWidget extends Component {
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
			<div className={widgetClasses}>
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

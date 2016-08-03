import React, {
	Component
} from 'react';

import {
	ClimateWidget,
	ContactWidget,
	DoorControlWidget,
	MotionWidget,
	SwitchWidget
} from '../';

export class Dashboard extends Component {
	render() {
		return (
			<div className='dashboard'>
				<ContactWidget />
				<SwitchWidget />
				<DoorControlWidget />
				<ClimateWidget />
				<MotionWidget />
			</div>
		);
	}
}
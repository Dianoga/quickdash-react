import React, {
	Component
} from 'react';

import ClimateWidget from '../climate/climate.widget';
import ContactWidget from '../contact/contact.widget';
import DoorControlWidget from '../doorcontrol/doorcontrol.widget';
import MotionWidget from '../motion/motion.widget';
import SwitchWidget from '../switch/switch.widget';

class Dashboard extends Component {
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

export default Dashboard;
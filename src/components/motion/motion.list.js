import React, {	Component } from 'react';

import { WidgetList } from '../';

import './motion.list.scss';

export class MotionList extends Component {
	render() {
		return (
			<WidgetList
				class='list-motion'
				filter='getMotionSensors'
				attr='motion'
			/>
		);
	}
}

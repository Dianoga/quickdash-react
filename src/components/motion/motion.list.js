import React from 'react';

import { WidgetList } from '../';

import './motion.list.scss';

export const MotionList = () => {
	return (
		<WidgetList
			class="list-motion"
			filter="getMotionSensors"
			attr="motion" />
	);
};

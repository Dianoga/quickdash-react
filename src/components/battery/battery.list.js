import React from 'react';

import { WidgetList } from '../';

import './battery.list.scss';

export const BatteryList = () => {
	return (
		<WidgetList
			class="list-battery"
			filter="getBatteries"
			attr="battery"
			showAttr />
	);
};

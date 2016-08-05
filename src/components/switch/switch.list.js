import React, {	Component } from 'react';

import { WidgetList } from '../';

import './switch.list.scss';

export class SwitchList extends Component {
	render() {
		return (
			<WidgetList
				class='list-switch'
				filter='getSwitches'
				attr='switch'
			/>
		);
	}
}

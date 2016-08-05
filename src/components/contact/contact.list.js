import React, {	Component } from 'react';

import { WidgetList } from '../';

import './contact.list.scss';

export class ContactList extends Component {
	render() {
		return (
			<WidgetList
				class='list-contact'
				filter='getContactSensors'
				attr='contact'
			/>
		);
	}
}

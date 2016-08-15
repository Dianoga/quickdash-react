import React from 'react';

import { WidgetList } from '../';

import './contact.list.scss';

export const ContactList = () => {
	return (
		<WidgetList
			class="list-contact"
			filter="getContactSensors"
			attr="contact" />
	);
};

import React, {	Component } from 'react';
import _ from 'lodash';

import { Widget } from '../';

import './contact.list.scss';

export class ContactList extends Component {
	constructor(props) {
		super(props);

		this.props = props;

		this.allGood = this.allGood.bind(this);
		this.badThings = this.badThings.bind(this);
	}

	allGood() {
		return !_.find(this.props.devices, { contact: 'open' });
	}

	badThings() {
		return _.filter(this.props.devices, { contact: 'open' });
	}

	render() {
		const visual = (
			<div className='window-frame'>
				<div className='window'>
					<div className='pane top'></div>
					<div className='pane bottom'></div>
				</div>
			</div>
		);

		return (
			<Widget
				class='widget-contact'
				allGood={this.allGood()}
				statusGood='closed'
				statusBad='open'
				badDevices={this.badThings()}
				visual={visual}
			/>
		);
	}
}

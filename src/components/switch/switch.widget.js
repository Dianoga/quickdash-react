import React, {	Component } from 'react';
import _ from 'lodash';

import { Widget } from '../';

import './switch.component.scss';

export class SwitchWidget extends Component {
	static propTypes = {
		devices: React.PropTypes.array
	};

	constructor(props) {
		super(props);

		this.props = props;

		this.allGood = this.allGood.bind(this);
		this.badThings = this.badThings.bind(this);
	}

	allGood() {
		return !_.find(this.props.devices, { switch: 'on' });
	}

	badThings() {
		return _.filter(this.props.devices, { switch: 'on' });
	}

	render() {
		const visual = (
			<div className="bulb">
				<span className="icon-lightbulb" />
				<span className="glowpoint" />
			</div>
		);

		return (
			<Widget
				class="widget-switch"
				allGood={ this.allGood() }
				statusGood="off"
				statusBad="on"
				badDevices={ this.badThings() }
				visual={ visual }
				listPath="/switch" />
		);
	}
}

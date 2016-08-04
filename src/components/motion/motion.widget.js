import React, {	Component } from 'react';
import _ from 'lodash';

import { Widget } from '../';

import './motion.component.scss';

export class MotionWidget extends Component {
	constructor(props) {
		super(props);

		this.props = props;

		this.allGood = this.allGood.bind(this);
		this.badThings = this.badThings.bind(this);
	}

	allGood() {
		return !_.find(this.props.devices, { motion: 'active' });
	}

	badThings() {
		return _.filter(this.props.devices, { motion: 'active' });
	}

	render() {
		const visual = (
			<div className='motion-mount'>
				<div className='motion'>
					<div className='sensor'></div>
				</div>
			</div>
		);

		return (
			<Widget
				class='widget-motion'
				allGood={this.allGood()}
				statusGood='inactive'
				statusBad='active'
				badDevices={this.badThings()}
				visual={visual}
			/>
		);
	}
}

import React, {	Component } from 'react';
import _ from 'lodash';

import { Widget } from '../';

import './contact.component.scss';

export class ContactWidget extends Component {
	constructor(props) {
		super(props);

		this.props = props;

		this.allGood = this.allGood.bind(this);
	}

	allGood() {
		return !_.find(this.props.devices, { contact: 'open' });
	}

	render() {
		let status = <div className='status'>All closed</div>;
		if (!this.allGood()) {
			status = (
				<div>
					<div className='status'>Open</div>
					<div className='details'>
						<div></div>
						<div> things open</div>
					</div>
				</div>
			);
		}

		const visual = (
			<div className='window-frame'>
				<div className='window'>
					<div className='pane top'></div>
					<div className='pane bottom'></div>
				</div>
			</div>
		);

		return (
			<Widget class='widget-contact' allGood={this.allGood()} status={status} visual={visual} />
		);
	}
}

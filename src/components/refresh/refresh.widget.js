import React, { Component } from 'react';

import { Widget } from '../';
import { Device } from '../../shared';

import './refresh.widget.scss';

export class RefreshWidget extends Component {
	constructor(props) {
		super(props);

		this.state = {
			busy: false
		};
	}

	render() {
		const visual = <span className="icon-refresh" />;
		const refresh = () => {
			this.setState({ busy: true });
			Device.sendCommand(null, 'refresh')
				.then(() => {
					this.setState({ busy: false });
				});
		};

		return (
			<Widget class="widget-refresh" status={ visual } onclick={ refresh } busy={ this.state.busy } />
		);
	}
}

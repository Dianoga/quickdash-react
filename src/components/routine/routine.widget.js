import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Widget } from '../';
import { Command } from '../../shared';

// import './routine.widget.scss';

export class RoutineWidget extends Component {
	static propTypes = {
		routine: React.PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			busy: false
		};
	}

	render() {
		const execute = () => {
			this.setState({ busy: true });
			Command.sendCommand('execute', { routine: this.props.routine })
				.then(() => {
					this.setState({ busy: false });
					browserHistory.push('/dashboard');
				});
		};

		const status = <span>{this.props.routine}</span>;

		return (
			<Widget class="widget-routine" status={ status } onclick={ execute } busy={ this.state.busy } />
		);
	}
}

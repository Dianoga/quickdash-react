import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import classnames from 'classnames';

import { Command } from '../../shared';

import './alarm.list.scss';

export class AlarmList extends Component {
	constructor(props) {
		super(props);

		this.states = ['off', 'stay', 'away'];
		this.state = {};

		this.handleChangeState = this.handleChangeState.bind(this);
	}

	handleChangeState(newState) {
		this.setState({ busy: true });
		Command.sendCommand('alarm', { state: newState })
			.then(() => {
				this.setState({ busy: false });
				browserHistory.push('/dashboard');
			});
	}

	render() {
		const buttons = this.states.map(val => {
			const classes = classnames({
				widget: true,
				'widget-alarm': true,
				[`icon-a-${val}`]: true,
				busy: this.state.busy
			});

			return <div key={ val } className={ classes } onClick={ () => this.handleChangeState(val) } />;
		});

		const classes = classnames({
			'widget-list': true,
			'alarm-list': true
		});

		return (
			<div className="widget-list alarm-list">
				{buttons}
			</div>
		);
	}
}

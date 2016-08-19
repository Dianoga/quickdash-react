import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

import { RoutineWidget } from './';
import { firebase } from '../../shared';

import './routine.list.scss';

export class RoutineList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			location: {
				routines: []
			}
		};
	}

	componentDidMount() {
		this.locationBind = firebase.bindToState('location', {
			context: this,
			state: 'location'
		});
	}

	componentWillUnmount() {
		firebase.removeBinding(this.locationBind);
	}

	render() {
		const routineList = _.sortBy(this.state.location.routines).map(val => {
			return <RoutineWidget key={ val } routine={ val } />;
		});

		const classes = classnames({
			'widget-list': true,
			'routine-list': true
		});

		return (
			<div className={ classes }>
				{routineList}
			</div>
		);
	}
}

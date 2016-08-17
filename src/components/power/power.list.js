import React, {	Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

import { PowerWidget } from './';
import { firebase, Power } from '../../shared';

import './power.list.scss';

export class PowerList extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.powerBind = firebase.bindToState('power', {
			context: this,
			state: 'power'
		});
	}

	componentWillUnmount() {
		firebase.removeBinding(this.powerBind);
	}

	render() {
		const power = new Power(this.state.power);
		const normals = power.group('normals');

		const classes = classnames({
			'widget-list': true,
			'power-list': true
		});

		const items = _.map(normals, val => {
			return <PowerWidget key={ val.id } watts={ val.watts } name={ val.name } />;
		});

		items.push(<PowerWidget key="other" watts={ power.otherWatts() } name="Other" />);
		items.push(<PowerWidget key="total" watts={ power.totalWatts() } name="Total" />);

		return (
			<div className={ classes }>
				{items}
			</div>
		);
	}
}

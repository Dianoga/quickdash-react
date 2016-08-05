import React, {	Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import _ from 'lodash';

import { firebase, Device } from '../../shared';

import './widget.list.scss';

export class WidgetList extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.deviceBind = firebase.bindToState('devices', {
			context: this,
			state: 'devices',
		});
	}

	componentWillUnmount(){
		firebase.removeBinding(this.deviceBind);
	}

	render() {
		const device = new Device(this.state.devices);
		const devices = _.sortBy(device[this.props.filter](), 'name');

		const deviceList = devices.map(val => {
			return <WidgetListItem key={val.id} device={val} attr={this.props.attr} onclick={this.props.onclick}/>
		});

		const classes = classnames({
			'widget-list': true,
			[this.props.class]: true
		});

		return (
			<div className={classes}>
				<Link to='/dashboard' className='item'>Back</Link>
				{deviceList}
			</div>
		);
	}
}

class WidgetListItem extends Component {
	render() {
		const classes = classnames({
			item: true,
			[this.props.device[this.props.attr]]: true
		});

		return (
			<div className={classes} onClick={this.props.onclick.bind(null, this.props.device)}>
				{this.props.device.name}
			</div>
		);
	}
}
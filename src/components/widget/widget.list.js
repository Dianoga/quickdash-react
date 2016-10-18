import React, {	Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

import { firebase, Device } from '../../shared';
import { WidgetListItem } from './';

import './widget.list.scss';

export class WidgetList extends Component {
	static propTypes = {
		attr: React.PropTypes.string,
		class: React.PropTypes.string,
		filter: React.PropTypes.string,
		onclick: React.PropTypes.func,
		showAttr: React.PropTypes.bool
	};

	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.deviceBind = firebase.bindToState('devices', {
			context: this,
			state: 'devices'
		});
	}

	componentWillUnmount() {
		firebase.removeBinding(this.deviceBind);
	}

	render() {
		const device = new Device(this.state.devices);
		const devices = _.sortBy(device[this.props.filter](), this.props.attr);

		const deviceList = devices.map(val => {
			return (<WidgetListItem key={ val.id }
				device={ val }
				attr={ this.props.attr }
				showAttr={ this.props.showAttr }
				onclick={ this.props.onclick }
				busy={ val.busy } />);
		});

		const classes = classnames({
			'widget-list': true,
			[this.props.class]: true
		});

		return (
			<div className={ classes }>
				{deviceList}
			</div>
		);
	}
}

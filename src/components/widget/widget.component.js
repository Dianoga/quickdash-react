import React, {	Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

import './widget.component.scss';

export class Widget extends Component {
	constructor(props) {
		super(props);

		this.props = props;
		this.buildStatus = this.buildStatus.bind(this);
		this.showList = this.showList.bind(this);
	}

	buildStatus() {
		let status = <div className='status'>Nothing {_.capitalize(this.props.statusBad)}</div>;
		if (this.props.badDevices.length > 0) {
			let statusText = `${this.props.badDevices.length} things ${this.props.statusBad}`;
			if (this.props.badDevices.length === 1) {
				statusText = `${this.props.badDevices[0].name} is ${this.props.statusBad}`;
			}

			status = (
				<div>
					<div className='status'>{_.capitalize(this.props.statusBad)}</div>
					<div className='details'>{statusText}</div>
				</div>
			);
		}

		return status;
	}

	showList() {
		if (this.props.listPath) {
			this.context.router.push(this.props.listPath);
		}
	}

	render() {
		const widgetClass = classnames({
			widget: true,
			[this.props.class]: true,
			awesome: this.props.allGood,
			awful: !this.props.allGood
		});

		return (
			<div className={widgetClass} onClick={this.showList}>
				{this.props.visual}

				<div className='content'>
					{this.buildStatus()}
				</div>
			</div>
		);
	}
}

Widget.contextTypes = {
    router: React.PropTypes.object.isRequired
};

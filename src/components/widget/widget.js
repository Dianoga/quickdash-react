import React, {	Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

import './widget.scss';

export class Widget extends Component {
	static propTypes = {
		allGood: React.PropTypes.bool,
		badDevices: React.PropTypes.array,
		class: React.PropTypes.string.isRequired,
		listPath: React.PropTypes.string,
		status: React.PropTypes.element,
		statusBad: React.PropTypes.string,
		visual: React.PropTypes.element
	};

	constructor(props) {
		super(props);

		this.props = props;
		this.buildStatus = this.buildStatus.bind(this);
		this.handleShowList = this.handleShowList.bind(this);
	}

	buildStatus() {
		let status = <div className="status">Nothing {_.capitalize(this.props.statusBad)}</div>;
		if (this.props.badDevices.length > 0) {
			let statusText = `${this.props.badDevices.length} things ${this.props.statusBad}`;
			if (this.props.badDevices.length === 1) {
				statusText = this.props.badDevices[0].name;
			}

			status = (
				<div>
					<div className="status">{_.capitalize(this.props.statusBad)}</div>
					<div className="details">{statusText}</div>
				</div>
			);
		}

		return status;
	}

	handleShowList() {
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
			<div className={ widgetClass } onClick={ this.handleShowList }>
				{this.props.visual}

				<div className="content">
					{this.props.status ? this.props.status : this.buildStatus()}
				</div>
			</div>
		);
	}
}

Widget.contextTypes = {
	router: React.PropTypes.object.isRequired
};

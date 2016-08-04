import React, {	Component } from 'react';
import classnames from 'classnames';

export class Widget extends Component {
	render() {
		const widgetClass = classnames({
			widget: true,
			[this.props.class]: true,
			awesome: this.props.allGood,
			awful: !this.props.allGood
		});

		return (
			<div className={widgetClass}>
				{this.props.visual}

				<div className='content'>
					{this.props.status}
				</div>
			</div>
		);
	}
}

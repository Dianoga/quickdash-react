import React from 'react';
import { Widget } from '../';

import './power.widget.scss';

export const PowerWidget = (props) => {
	const status = (
		<div className="display">
			<div className="watts">{props.watts}</div>
			{props.name ? <div className="name">{props.name}</div> : <div className="units">watts</div>}
		</div>
	);

	return (
		<Widget class="widget-power" status={ status } listPath={ props.clickable ? '/power' : null } />
	);
};

PowerWidget.propTypes = {
	watts: React.PropTypes.number.isRequired,
	name: React.PropTypes.string,
	clickable: React.PropTypes.bool
};

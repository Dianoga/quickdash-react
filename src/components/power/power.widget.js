import React from 'react';
import { Widget } from '../';

import './power.widget.scss';

export const PowerWidget = (props) => {
	const status = (
		<div className="display">
			<div className="watts">{props.watts}</div>
			<div className="units">watts</div>
		</div>
	);

	return (
		<Widget class="widget-power" status={ status } />
	);
};

PowerWidget.propTypes = {
	watts: React.PropTypes.number.isRequired
};

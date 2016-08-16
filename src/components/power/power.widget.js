import React from 'react';
import _ from 'lodash';
import { Widget } from '../';

import './power.widget.scss';

export const PowerWidget = (props) => {
	const totalPower = _.reduce(props.power, (total, val) => {
		if (val.groups.indexOf('grid') > -1) {
			return total + val.watts;
		}

		return total;
	}, 0);

	const status = (
		<div className="display">
			<div className="watts">{totalPower}</div>
			<div className="units">watts</div>
		</div>
	);

	return (
		<Widget class="widget-power" status={ status } />
	);
};

PowerWidget.propTypes = {
	power: React.PropTypes.object.isRequired
};

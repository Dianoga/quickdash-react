import React from 'react';

import { Widget } from '../';
import './location.widget.scss';

export const LocationWidget = (props) => {
	const status = <span className="mode">{props.mode}</span>;

	return (
		<Widget class="widget-location" status={ status } listPath="/routine" />
	);
};

LocationWidget.propTypes = {
	mode: React.PropTypes.string
};

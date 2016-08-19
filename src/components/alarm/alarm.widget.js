import React from 'react';

import { Widget } from '../';

import './alarm.widget.scss';

export const AlarmWidget = (props) => {
	const visual = <span className={ `icon-a-${props.status}` } />;

	return (
		<Widget class="widget-alarm" status={ visual } listPath="/alarm" />
	);
};

AlarmWidget.propTypes = {
	status: React.PropTypes.string
};

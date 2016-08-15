import React from 'react';
import './weather.condition.scss';

export const WeatherCondition = (props) => {
	return (
		<div className="condition">
			<div className="name">{props.name}</div>
			<div className="status">{props.status} <span className="unit">{props.unit}</span></div>
		</div>
	);
};

WeatherCondition.propTypes = {
	name: React.PropTypes.string,
	status: React.PropTypes.string,
	unit: React.PropTypes.string
};

import React from 'react';
import classnames from 'classnames';

export const WidgetListItem = (props) => {
	const classes = classnames({
		item: true,
		[props.device[props.attr]]: true,
		busy: props.busy
	});

	const clickHandler = props.onclick ? props.onclick.bind(null, props.device) : null;

	return (
		<div className={ classes } onClick={ clickHandler }>
			{props.device.name}
		</div>
	);
};

WidgetListItem.propTypes = {
	device: React.PropTypes.object,
	attr: React.PropTypes.string,
	busy: React.PropTypes.boolean,
	onclick: React.PropTypes.function
};

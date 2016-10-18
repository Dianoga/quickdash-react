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
			<span className="wli-name">{props.device.name}</span>
			{props.showAttr ? <span className="wli-attr">{props.device[props.attr]}</span> : null}
		</div>
	);
};

WidgetListItem.propTypes = {
	device: React.PropTypes.object,
	attr: React.PropTypes.string,
	busy: React.PropTypes.bool,
	onclick: React.PropTypes.func,
	showAttr: React.PropTypes.bool
};

import React from 'react';

import { Floor } from '../../shared';

export const ClimateFloor = (props) => {
	return (
		<div className="floor">
			{ props.floor.temperature ? <span className="temperature">{ props.floor.temperature }&deg;</span> : null }
			{ props.floor.humidity ? <span className="humidity">{ props.floor.humidity }</span> : null }
		</div>
	);
};

ClimateFloor.propTypes = {
	floor: React.PropTypes.instanceOf(Floor).isRequired
};

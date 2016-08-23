import React from 'react';
import _ from 'lodash';

import { Floors } from '../../shared';
import { ClimateFloor } from './';
import './climate.widget.scss';

export const ClimateWidget = (props) => {
	const floors = _.reverse(props.floors.getSortedFloors());

	const floorDom = floors.map(floor => {
		return <ClimateFloor key={ floor.number } floor={ floor } />;
	});

	return (
		<div className="widget widget-climate">
			<div className="building">
				<div className="roof" />
				{ floorDom }
			</div>
		</div>
	);
};

ClimateWidget.propTypes = {
	floors: React.PropTypes.instanceOf(Floors).isRequired
};

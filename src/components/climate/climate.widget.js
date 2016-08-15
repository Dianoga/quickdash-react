import React from 'react';
import _ from 'lodash';

import { ClimateFloor } from './';
import './climate.widget.scss';

export const ClimateWidget = (props) => {
	const floors = _.reverse(_.sortBy(props.floors, 'number'));

	const floorDom = floors.map(floor => {
		return <ClimateFloor key={ floor.id } floor={ floor } />;
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
	floors: React.PropTypes.array.isRequired
};

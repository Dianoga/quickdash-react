import React, {	Component } from 'react';
import _ from 'lodash';

import './weather.scss';

export class WeatherWidget extends Component {
	constructor(props) {
		super(props);

		this.props = props;
		this.iconMap = {
			clear: 'w-clear',
			cloudy: 'w-cloudy',
			flurries: 'w-flurries',
			fog: 'w-fog',
			hazy: 'w-hazy',
			mostlycloudy: 'w-partlycloudy',
			mostlysunny: 'w-partlycloudy',
			partlycloudy: 'w-partlycloudy',
			partlysunny: 'w-partlycloudy',
			rain: 'w-rain',
			sleet: 'w-sleet',
			snow: 'w-snow',
			sunny: 'w-clear',
			tstorms: 'w-tstorms',
			unknown: 'w-unknown'
		};
	}

	render() {
		let alert;
		if (this.props.outdoorWeather.alert) {
			alert = (
				<div className="alert">
					<span className="icon-alert"></span> {this.props.outdoorWeather.alert}
				</div>
			);
		}

		const weatherIcon = `icon-${this.iconMap[this.props.outdoorWeather.weatherIcon]}`;

		const floors = _.reverse(_.sortBy(this.props.floors, 'number'));

		const floorDom = floors.map(floor => {
			return <ClimateFloor key={ floor.id } floor={ floor } />;
		});

		return (
			<div className="widget widget-climate">
				<div className="outdoorClimate">
					{alert}

					<div className="weather-icon">
						<span className={ weatherIcon }></span>
					</div>

					<div className="conditions">
						<div className="temperature">
							{this.props.outdoorWeather.temperature}&deg;
						</div>
						<div className="humidity">
							<span className="icon-humidity"></span> {this.props.outdoorWeather.humidity}
						</div>
						<div className="wind">
							<span className="icon-w-windy"></span> {this.props.outdoorWeather.wind}
						</div>
					</div>
				</div>

				<div className="indoorClimate">
					<div className="building">
						<div className="roof"></div>
						{floorDom}
					</div>
				</div>
			</div>
		);
	}
}

class ClimateFloor extends Component {
	render() {
		return (
			<div className="floor">
				{this.props.floor.temperature ? <span className="temperature">{this.props.floor.temperature}&deg;</span> : null}
				{this.props.floor.humidity ? <span className="humidity">{this.props.floor.humidity}</span> : null}
			</div>
		);
	}
}

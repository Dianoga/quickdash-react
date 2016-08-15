import React, {	Component } from 'react';

import { Widget } from '../';
import './weather.widget.scss';

export class WeatherWidget extends Component {
	static propTypes = {
		outdoorWeather: React.PropTypes.object.isRequired
	};

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

	buildVisual() {
		return;
	}

	render() {
		let alert;
		if (this.props.outdoorWeather.alert) {
			alert = (
				<div className="alert">
					<span className="icon-alert" /> {this.props.outdoorWeather.alert}
				</div>
			);
		}

		const weatherIcon = `icon-${this.iconMap[this.props.outdoorWeather.weatherIcon]}`;
		const visual = (
			<div className="weather-icon">
				<span className={ weatherIcon } />
			</div>
		);

		const status = (
			<div className="conditions">
				{alert}
				<div className="temperature">
					{this.props.outdoorWeather.temperature}&deg;
				</div>
				<div className="humidity">
					<span className="icon-humidity" /> {this.props.outdoorWeather.humidity}
				</div>
				<div className="wind">
					<span className="icon-w-windy" /> {this.props.outdoorWeather.wind}
				</div>
			</div>
		);

		return (
			<Widget class="widget-weather"
				allGood={ !alert }
				visual={ visual }
				status={ status } />
		);
	}
}

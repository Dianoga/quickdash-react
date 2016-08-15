import React, {	Component } from 'react';

import { Widget, WeatherCondition } from '../';
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

	render() {
		let alert;
		if (this.props.outdoorWeather.alert) {
			alert = (
				<div className="alert">
					<span className="icon-alert" />
					<span className="alert-text">{this.props.outdoorWeather.alert}</span>
				</div>
			);
		}

		const weatherIcon = `icon-${this.iconMap[this.props.outdoorWeather.weatherIcon]}`;
		const visual = (
			<div className="current">
				<div className="weather-icon">
					<span className={ weatherIcon } />
				</div>
				<span className="temperature">{this.props.outdoorWeather.temperature}</span>
			</div>
		);

		const status = (
			<div className="conditions">
				{alert}
				<WeatherCondition name="Humidity" status={ this.props.outdoorWeather.humidity } unit="%" />
				<WeatherCondition name="Wind Speed" status={ this.props.outdoorWeather.wind } unit="mph" />
				<WeatherCondition name="Feels Like" status={ this.props.outdoorWeather.feelsLike } unit="°" />
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

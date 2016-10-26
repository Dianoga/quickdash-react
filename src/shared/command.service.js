import axios from 'axios';
import { settings } from './';

export class Command {
	static sendCommand(command, params) {
		const data = Object.assign({ command: command }, params);

		return axios.get(settings.commandUrl, { params: data })
			.then(res => console.log(res))
			.catch(res => console.error(res));
	}

	static sendDeviceCommand(device, type, command, value) {
		const params = {
			device: device ? device.id : null,
			type: type,
			value: value
		};

		return Command.sendCommand(command, params);
	}
}

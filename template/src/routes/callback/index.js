import { h, Component } from 'preact';

import { handleAuthentication } from '../../lib/auth';

export default class Callback extends Component {
	componentDidMount() {
		handleAuthentication();
	}

	render() {
		return (
			<div>You are being logged in...</div>
		);
	}
}

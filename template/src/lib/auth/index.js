import { authorize, parseHash } from 'petite-auth';
import { route } from 'preact-router';

function login() {
	authorize(process.env.AUTHORIZE_URL, {
		client_id: process.env.CLIENT_ID,
		redirect_uri: process.env.CALLBACK_URL,
		response_type: 'token id_token',
		scope: 'openid profile'
	});
}

function handleAuthentication() {
	const authResult = parseHash();
	const expiresAt = JSON.stringify((authResult.expires_in * 1000) + Date.now());
	localStorage.setItem('access_token', authResult.access_token);
	localStorage.setItem('id_token', authResult.id_token);
	localStorage.setItem('expires_at', expiresAt);
	route('/');
}

function isAuthenticated() {
	if (typeof localStorage === 'undefined') {
		return false;
	}
	const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
	return Date.now() < expiresAt;
}

function logout() {
	localStorage.removeItem('access_token');
	localStorage.removeItem('id_token');
	localStorage.removeItem('expires_at');
	route('/');
}

function getProfile() {
	return fetch(process.env.PROFILE_URL, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`
		}
	}).then(response => response.json());
}

export {
	login,
	handleAuthentication,
	isAuthenticated,
	logout,
	getProfile
};

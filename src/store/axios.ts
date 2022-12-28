import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL = 'https://a63a-95-82-118-209.eu.ngrok.io/api/';
export const request = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
function useToken(config: AxiosRequestConfig, authMethod: string) {
	const token = localStorage.getItem('token');
	if (!!token) {
		if (config && config.headers) {
			config.headers[authMethod] =
				authMethod === 'auth-token' ? token : `Bearer ${token}`;
		}
	}

	return config;
}
request.interceptors.request.use((config) => useToken(config, 'auth-token'));

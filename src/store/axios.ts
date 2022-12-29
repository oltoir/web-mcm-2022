/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-extra-boolean-cast */
import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL = 'https://9fbd-95-82-126-120.eu.ngrok.io/api/';
export const requestLogin = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/x-www-form-urlencoded',
	},
});

export const request = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
});

const prettifyToken = (token: string) => {
	if (!token.startsWith('Bearer')) {
		return `Bearer ${token}`;
	}
	return token;
};

function useToken(config: AxiosRequestConfig, authMethod: string) {
	const token = localStorage.getItem('token');
	if (!!token) {
		if (config && config.headers) {
			config.headers[authMethod] = prettifyToken(token);
		}
	}

	return config;
}
request.interceptors.request.use((config) => useToken(config, 'Authorization'));

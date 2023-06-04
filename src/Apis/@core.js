import TokenService from 'Repository/TokenService';

import axios from 'axios';

export const MockAxios = axios.create({ baseURL: 'http://localhost:3004' });

export const Axios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	withCredentials: true,
	headers: {
		Authorization: `Bearer ${TokenService.getToken()}`,
	},
});

Axios.interceptors.request.use(
	config => {
		const token = TokenService.getToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

Axios.interceptors.response.use(
	response => {
		return response;
	},
	async error => {
		const originalRequest = error.config;
		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;
			const res = await axios.get(
				`${process.env.REACT_APP_BACKEND_URL}/api/user/refreshToken`,
			);
			if (res.status === 200) {
				TokenService.setToken(res.data.accessToken);
				return Axios(originalRequest);
			}
		}
		return Promise.reject(error);
	},
);

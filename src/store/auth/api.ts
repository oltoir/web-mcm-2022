import { LoginRequest, LoginResponseRaw } from './type';
import { request } from 'store/axios';
import { AxiosResponse } from 'axios';
import { ResponseData } from 'store/types';

export const login = (
	params: LoginRequest
): Promise<AxiosResponse<ResponseData<LoginResponseRaw>>> => {
	const url = 'v1/login/access-token/';

	return request.post(url, params);
};

export const logout = () => localStorage.clear();

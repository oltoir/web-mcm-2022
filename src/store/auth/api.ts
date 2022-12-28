import { LoginResponseRaw } from './type';
import { request, requestLogin } from 'store/axios';
import { AxiosResponse } from 'axios';
import { ResponseData } from 'store/types';
import { IUser, toUser } from 'core/models/user';

export const login = async (
	params: FormData
): Promise<AxiosResponse<ResponseData<LoginResponseRaw>>> => {
	console.log('params',params)
	const url = 'v1/login/access-token/';
	return await requestLogin.post(url, params);
};


export const getMe = async (): Promise<IUser> => {
	const url = 'v1/users/me/';
	const response = await request.get(url);
	console.log('response.data GET ME', response.data);
	return toUser(response.data);
};

export const logout = () => localStorage.clear();

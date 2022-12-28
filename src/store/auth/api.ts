import { LoginResponseRaw, RegisterRequest } from './type';
import { request, requestLogin } from 'store/axios';
import { AxiosResponse } from 'axios';
import { ResponseData } from 'store/types';
import { IUser, toUser } from 'core/models/user';

export const login = async (
	params: FormData
): Promise<AxiosResponse<ResponseData<LoginResponseRaw>>> => {
	const url = 'v1/login/access-token/';
	return await requestLogin.post(url, params);
};

export const getMe = async (): Promise<IUser> => {
	const url = 'v1/users/me/';
	const response = await request.get(url);
	console.log('response.data GET ME', response.data);
	return toUser(response.data);
};

export const register = async (
	params: RegisterRequest
): Promise<AxiosResponse<ResponseData<any>>> => {
	const url = 'v1/users/sign-up/';
	const{firstName, lastName, birthDate, ...rest}= params;

	const parsedParams = {
		...rest,
		first_name: firstName,
		last_name: lastName,
		birth_date: birthDate,
	}
	return await request.post(url, parsedParams);
};

export const logout = () => {
	localStorage.clear();
	window.location.href = '/';
}
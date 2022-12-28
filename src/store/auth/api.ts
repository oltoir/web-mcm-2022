import { LoginResponseRaw } from './type';
import { requestLogin} from 'store/axios';
import { AxiosResponse } from 'axios';
import { ResponseData } from 'store/types';

export const login = (
	params: FormData
): Promise<AxiosResponse<ResponseData<LoginResponseRaw>>> => {
	console.log('params',params)
	const url = 'v1/login/access-token/';

	return requestLogin.post(url, params);
};

export const logout = () => localStorage.clear();

import { LoginResponse, LoginResponseRaw } from './type';

export const loginParser = (data: LoginResponseRaw): LoginResponse => {
	return {
		token: data.access_token,
		tokenType: data.token_type,
	};
};

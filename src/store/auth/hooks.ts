import { useMutation } from 'react-query';
import { RegisterRequest } from './type';
import { register } from './api';

export const useRegister = () => {
	return useMutation(async (params: RegisterRequest) => await register(params));
};

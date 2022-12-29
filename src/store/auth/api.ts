import { Transaction } from './../../core/models/transaction-log';
import { IUserDeposit, toUserDeposit } from './../../core/models/user-deposit';
import { IUser, toUserDTO, toUser } from 'core/models/user';
import { LoginResponseRaw, RegisterRequest } from './type';
import { request, requestLogin } from 'store/axios';
import { AxiosResponse } from 'axios';
import { ResponseData } from 'store/types';
import { IUserAccount, toUserAccount } from 'core/models/user-account';


export const login = async (
	params: FormData
): Promise<AxiosResponse<ResponseData<LoginResponseRaw>>> => {
	const url = 'v1/login/access-token/';
	return await requestLogin.post(url, params);
};

export const getMe = async (): Promise<IUser> => {
	const url = 'v1/users/me/';
	const response = await request.get(url);
	return toUser(response.data);
};

export const updateMe = async (user: IUser): Promise<IUser> => {
	const url = 'v1/users/me/';
	const data = toUserDTO(user);
	const response = await request.put(url, data);
	return toUser(response.data);
};

export const updatePassword = async (password: string): Promise<void> => {
	const url = 'v1/users/me/password/';
	await request.patch(url, { password });
};

export const getMyAccount = async (): Promise<IUserAccount> => {
	const url = 'v1/accounts/my/';
	const response = await request.get(url);
	// console.log('response.data GET MY ACCOUNT', response.data);
	return toUserAccount(response.data);
};

// /api/v1/deposits/my/
export const getMyDeposit = async (): Promise<IUserDeposit> => {
	const url = 'v1/deposits/my/';
	const response = await request.get(url);
	console.log('response.data GET MY DEPOSITS', response.data);
	return toUserDeposit(response.data);
};

// /api/v1/accounts/{card_number}/check/
export const checkCardNumber = async (cardNumber: string): Promise<{
	id: number,
	cardNumber: string,
	kind: string,
	fee: number
}> => {
	const url = `v1/accounts/${cardNumber}/check/`;
	const response = await request.get(url);
	const data = response.data;
	return {
		id: data.id,
		cardNumber: data.card_number,
		kind: data.kind,
		fee: data.fee
	};
};

// /api/v1/accounts/transfer/
export const transfer = async (
	sum: number,
	cardNumber: string,
): Promise<IUserAccount> => {
	const url = 'v1/accounts/transfer/';
	const response = await request.post(url, { sum, card_number: cardNumber });
	return toUserAccount(response.data);
};

// /api/v1/transactions/my/
export const getMyTransactions = async (): Promise<Transaction[]> => {
	const url = 'v1/transactions/my/?size=100';
	const response = await request.get(url);
	return response.data.items.map((item: any) => new Transaction(item));
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

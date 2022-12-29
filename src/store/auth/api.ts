import { AxiosResponse } from 'axios';
import { IUser, toUser, toUserDTO } from 'core/models/user';
import { IUserAccount, toUserAccount } from 'core/models/user-account';
import { request, requestLogin } from 'store/axios';
import { ResponseData } from 'store/types';
import { Transaction } from './../../core/models/transaction-log';
import { IUserDeposit, toUserDeposit } from './../../core/models/user-deposit';
import {
	BuyRequest,
	CommentListRaw,
	ItemListRaw,
	ItemRaw,
	ItemRequest,
	ItemsRequest, LoginResponseRaw, PostReviewsRequest, RegisterRequest, ReviewsRequest
} from './type';


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
	const { firstName, lastName, birthDate, ...rest } = params;

	const parsedParams = {
		...rest,
		first_name: firstName,
		last_name: lastName,
		birth_date: birthDate,
	};
	return await request.post(url, parsedParams);
};

export const getItemsCategories = async (): Promise<
	AxiosResponse<ResponseData<any>>
> => {
	const url = 'v1/item-categories/';
	return await request.get(url);
};
export const getItems = async (
	params: ItemsRequest
): Promise<AxiosResponse<ResponseData<ItemListRaw>>> => {
	const { categoryId, ...rest } = params;
	const url = 'v1/items/';
	return await request.get(url, {
		params: { ...rest, category_id: categoryId },
	});
};

export const getItem = async (
	params: ItemRequest
	): Promise<AxiosResponse<ResponseData<ItemRaw>>> => {
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	const url = `v1/items/${params.id}/`;
	return await request.get(url);
};

export const getItemReviews = async (
	params: ReviewsRequest
): Promise<AxiosResponse<ResponseData<CommentListRaw>>> => {
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	const url = `v1/items/${params.id}/reviews/`;
	return await request.get(url);
};

export const logout = () => {
	localStorage.clear();
	window.location.href = '/';
};

export const postReview = async (
	params: PostReviewsRequest
): Promise<AxiosResponse<ResponseData<any>>> => {
	const url = `v1/reviews/`;
	const { itemId, ...rest } = params;
	return await request.post(url, { ...rest, item_id: itemId });
};

export const buyOrder = async (
	params: BuyRequest
): Promise<AxiosResponse<ResponseData<any>>> => {
	const url = `v1/orders/`;
	return await request.post(url, params);
};

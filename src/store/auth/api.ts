import { AxiosResponse } from 'axios';
import { IUser, toUser } from 'core/models/user';
import { request, requestLogin } from 'store/axios';
import { ResponseData } from 'store/types';
import {
	BuyRequest,
	CommentListRaw,
	ItemListRaw,
	ItemRaw,
	ItemRequest,
	ItemsRequest,
	LoginResponseRaw,
	PostReviewsRequest,
	RegisterRequest,
	ReviewsRequest,
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
	console.log('response.data GET ME', response.data);
	return toUser(response.data);
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
	const url = `v1/items/${params.id}/`;
	return await request.get(url);
};

export const getItemReviews = async (
	params: ReviewsRequest
): Promise<AxiosResponse<ResponseData<CommentListRaw>>> => {
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

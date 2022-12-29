import { QueryClient, useMutation, useQuery } from 'react-query';
import {
	buyOrder,
	getItem,
	getItemReviews,
	getItems,
	getItemsCategories,
	postReview,
	register,
} from './api';
import { parseComment, parseItem } from './parser';
import {
	BuyRequest,
	ItemRequest,
	ItemsRequest,
	PostReviewsRequest,
	RegisterRequest,
	ReviewsRequest,
} from './type';

export const useRegister = () => {
	return useMutation(async (params: RegisterRequest) => await register(params));
};

export const useItemCategories = () => {
	const { data, isLoading, isError, error } = useQuery(
		'itemCategories',
		async () => await getItemsCategories().then((res) => res.data)
	);

	return {
		categories: data,
		isLoading,
		isError,
		error,
	};
};

export const useItems = (params: ItemsRequest) => {
	const { data, isLoading, isError, error } = useQuery(
		['items', params],
		async () =>
			await getItems(params).then((res) =>
				res.data.items.map((item) => parseItem(item))
			)
	);

	return {
		items: data,
		isLoading,
		isError,
		error,
	};
};

export const useItem = (params: ItemRequest) => {
	const { data, isLoading, isError, error } = useQuery(
		['item', params],
		async () => await getItem(params).then((res) => parseItem(res.data)),
		{ enabled: params.id !== undefined }
	);

	return {
		item: data,
		isLoading,
		isError,
		error,
	};
};

export const useItemReviews = (params: ReviewsRequest) => {
	const { data, isLoading, isError, error } = useQuery(
		['reviews', params],
		async () =>
			await getItemReviews(params).then((res) =>
				res.data.items.map((item) => parseComment(item))
			),
		{ enabled: !!params.id }
	);

	return {
		comments: data,
		isLoading,
		isError,
		error,
	};
};

export const usePostReview = (id: string) => {
	const queryClient = new QueryClient();
	return useMutation(
		async (params: PostReviewsRequest) => await postReview(params),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['reviews', { id }]);
			},
		}
	);
};
export const useBuyOrder = () => {
	return useMutation(async (params: BuyRequest) => await buyOrder(params));
};

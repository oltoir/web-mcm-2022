export type ResponseData<T> = T & {
	code: number;
	message: string;
};

export type PaginatedResponseData<T> = {
	items: T;
	total: number;
	page: number;
	size: number;
};

export type PaginatedStateData<T> = {
	items: T;
	total: number;
};

export type FailedResponseData = {
	code: number;
	message: string;
	errors: Record<string, string>;
};

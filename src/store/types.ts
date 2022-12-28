export type ResponseData<T> = T & {
	code: number;
	message: string;
};

export interface PaginatedResponseData<T> {
	items: T;
	total: number;
	page: number;
	size: number;
}

export interface PaginatedStateData<T> {
	items: T;
	total: number;
}

export interface FailedResponseData {
	code: number;
	message: string;
	errors: Record<string, string>;
}

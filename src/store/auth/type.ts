export interface LoginRequest {
	username: string;
	password: string;
}

export interface RegisterRequest {
	email: string;
	phone: string;
	firstName: string;
	lastName: string;
	gender: string;
	birthDate: string;
	password: string;
}

export interface LoginResponseRaw {
	access_token: string;
	token_type: string;
}

export interface LoginResponse {
	token: string;
	tokenType: string;
}

export interface ItemRaw {
	title: string;
	description: string;
	price: number;
	image_url: string;
	category_id: number;
	id: number;
	rating: number;
	owner: {
		id: number;
		email: string;
		full_name: string;
	};
	bonus_percent: number;
}

export interface ItemListRaw {
	items: ItemRaw[];
	total: number;
	page: number;
	size: number;
}

export interface Item {
	title: string;
	description: string;
	price: number;
	imageUrl: string;
	categoryId: number;
	id: number;
	rating: number;
	owner: {
		id: number;
		email: string;
		fullName: string;
	};
	bonusPercent: number;
}

export interface ItemList {
	items: Item[];
	total: number;
	page: number;
	size: number;
}

export interface Category {
	id: number;
	title: string;
};

export interface ItemsRequest {
	categoryId?: number;
	search?: string;
}

export interface ItemRequest {
	id: string;
}

export interface ReviewsRequest {
	id: string;
}

export interface PostReviewsRequest {
	comment: string;
	rating: number;
	itemId: string;
}

export interface BuyRequest {
	items: Array<{
		item_id: number;
		quantity: number;
	}>;
}

export interface RawComment {
	comment: string;
	rating: number;
	id: number;
	user: {
		id: number;
		email: string;
		full_name: string;
		avatar_url: string;
	};
}

export interface Comment {
	comment: string;
	rating: number;
	id: number;
	user: {
		id: number;
		email: string;
		fullName: string;
		avatarUrl: string;
	};
}

export interface CommentListRaw {
	items: RawComment[];
	total: number;
	page: number;
	size: number;
}
export interface CommentList {
	items: Comment[];
	total: number;
	page: number;
	size: number;
}

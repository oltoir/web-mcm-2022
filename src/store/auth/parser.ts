import {
	Comment,
	Item,
	ItemRaw,
	LoginResponse,
	LoginResponseRaw,
	RawComment,
} from './type';

export const loginParser = (data: LoginResponseRaw): LoginResponse => {
	return {
		token: data.access_token,
		tokenType: data.token_type,
	};
};

export const parseItem = (item: ItemRaw): Item => {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const { image_url, bonus_percent, category_id, owner, ...rest } = item;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const { full_name, ...restOwner } = owner;
	return {
		...rest,
		imageUrl: image_url,
		bonusPercent: bonus_percent,
		owner: {
			...restOwner,
			fullName: full_name,
		},
		categoryId: category_id,
	};
};

export const parseComment = (comment: RawComment): Comment => {
	const { user, ...rest } = comment;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const { full_name, avatar_url, ...restUser } = user;
	return {
		...rest,
		user: {
			...restUser,
			fullName: full_name,
			avatarUrl: avatar_url,
		},
	};
};

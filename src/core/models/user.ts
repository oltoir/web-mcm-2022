// User
// id: int
// email: str
// phone: str
// first_name: str
// last_name: str
// full_name: str
// password: str
// gender: Enum[MAN, WOMAN]
// birth_date: date
// is_active: bool
// created_at: datetime
// updated_at: datetime
// avatar_url: str

export interface IUser {
	id?: number;
	email: string;
	phone: string;
	firstName?: string;
	lastName?: string;
	fullName?: string;
	password?: string;
	gender?: string;
	birthDate?: string;
	isActive?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
	avatarUrl?: string;
}

export function toUser(data: any): IUser {
	return {
		id: data.id,
		email: data.email,
		phone: data.phone,
		firstName: data.first_name,
		lastName: data.last_name,
		fullName: data.full_name,
		password: data.password,
		gender: data.gender,
		birthDate: data.birth_date,
		isActive: data.is_active,
		createdAt: data.created_at,
		updatedAt: data.updated_at,
		avatarUrl: data.avatarUrl,
	};
}

export function toUserDTO(user: IUser) {
	return {
		id: user.id,
		email: user.email,
		phone: user.phone,
		first_name: user.firstName,
		last_name: user.lastName,
		full_name: user.fullName,
		password: user.password,
		gender: user.gender,
		birth_date: user.birthDate,
		is_active: user.isActive,
		created_at: user.createdAt,
		updated_at: user.updatedAt,
		avatar_url: user.avatarUrl,
	};
}

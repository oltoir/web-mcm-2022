export type LoginRequest = {
	email: string;
	password: string;
};

export type LoginResponseRaw = {
	access_token: string;
	token_type: string;
};

export type LoginResponse = {
	token: string;
	tokenType: string;
};

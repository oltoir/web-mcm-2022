export interface LoginRequest {
	username: string;
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

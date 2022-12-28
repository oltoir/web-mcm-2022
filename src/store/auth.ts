import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { login as loginRequest } from 'store/auth/api';
import { LoginRequest } from 'store/auth/type';

export const useAuth = () => {
	const isLoggedIn = !!localStorage.getItem('token');
	const navigate = useNavigate();
	const location = useLocation();

	const login = useMutation((params: FormData) => loginRequest(params), {
		onSuccess: ({ data: { access_token: token, token_type: tokenType } }) => {
			localStorage.setItem('token', token);
			localStorage.setItem('tokenType', tokenType);
		},
	});

	return {
		login,
		isLoggedIn,
	};
};

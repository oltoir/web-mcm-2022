import { FormProvider, useForm } from 'react-hook-form';
import { emailRegex } from 'core/helpers';
import { useAuth } from 'store';
import React from "react";

interface Props {
	closeModal: () => void;
	setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}
export function LoginForm(props: Props) {
	const { closeModal,setIsRegister } = props;
	const methods = useForm();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = methods;

	const {
		login: { mutate },
	} = useAuth();
	const onSubmit = (data: any) => {
		const formData = new FormData();
		for (const [key, value] of Object.entries(data)) {
			formData.append(key, value);
		}
		mutate(formData, {
			onSuccess: () => {
				closeModal();
				window.location.reload();
			},
		});
	};

	return (
		<div className="flex flex-col gap-5 w-96 mt-8">
			<p className="text-bold text-orange text-xl">Войти</p>
			<FormProvider {...methods}>
				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-5 w-full">
						<label htmlFor="username">Почта</label>
						<input
							className="flex bg-gray-100 py-3 px-4
						rounded-xl w-full placeholder-gray-400 text-sm"
							type="username"
							placeholder="example@gmail.com"
							{...register('username', {
								required: 'Почта обязательна',
								pattern: {
									value: emailRegex,
									message: 'Неверный формат почты',
								},
							})}
						/>
						{errors.username != null && (
							<p className="text-orange"> {errors.username.message}</p>
						)}
						<label htmlFor="password">Пароль</label>
						<input
							className="flex bg-gray-100 py-3 px-4
						rounded-xl w-full placeholder-gray-400 text-sm"
							type="password"
							placeholder="*****"
							{...register('password', {
								required: 'Пароль обязателен',
								minLength: {
									value: 3,
									message: 'Минимальная длина пароля 6 символов',
								},
							})}
						/>
						{errors.password != null && (
							<p className="text-orange"> {errors.password.message}</p>
						)}
						<button
							className="bg-orange text-white font-bold
						text-lg rounded-full px-5 py-3 w-full "
							type="submit"
						>
							Войти
						</button>
						<button className='text-orange' onClick={()=>setIsRegister(true)}>Регистрация</button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
}

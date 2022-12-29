import { FormProvider, useForm } from 'react-hook-form';
import { useAuth } from 'store';
import { emailRegex } from 'core/helpers';
import { useRegister } from '../../store/auth/hooks';
import React from 'react';

interface Props {
	closeModal: () => void;
	setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

export function RegisterForm(props: Props) {
	const { setIsRegister } = props;
	const methods = useForm();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = methods;

	const { mutate } = useRegister();
	const onSubmit = (data: any) => {
		mutate(data, {
			onSuccess: () => {
				setIsRegister(false);
			},
		});
	};

	return (
		<div className="flex flex-col gap-5 w-96 mt-8">
			<p className="text-bold text-orange text-xl">Регистрация</p>
			<FormProvider {...methods}>
				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div
						className="flex flex-col gap-5 w-full overflow-auto"
						style={{ maxHeight: '500px' }}
					>
						<label htmlFor="email">Почта</label>
						<input
							className="flex bg-gray-100 py-3 px-4
						rounded-xl w-full placeholder-gray-400 text-sm"
							type="email"
							placeholder="example@gmail.com"
							{...register('email', {
								required: 'Почта обязательна',
								pattern: {
									value: emailRegex,
									message: 'Неверный формат почты',
								},
							})}
						/>
						{errors.email != null && (
							<p className="text-orange"> {errors.email.message}</p>
						)}

						<label htmlFor="phone">Телефон</label>
						<input
							className="flex bg-gray-100 py-3 px-4
						rounded-xl w-full placeholder-gray-400 text-sm"
							type="tel"
							placeholder="+7 (999) 999-99-99"
							{...register('phone', {
								required: 'Телефон обязателен',
							})}
						/>
						{errors.phone != null && (
							<p className="text-orange"> {errors.phone.message}</p>
						)}

						<label htmlFor="firstName">Имя</label>
						<input
							className="flex bg-gray-100 py-3 px-4
						rounded-xl w-full placeholder-gray-400 text-sm"
							type="text"
							placeholder="Имя"
							{...register('firstName', {
								required: 'Имя обязательно',
							})}
						/>
						{errors.firstName != null && (
							<p className="text-orange"> {errors.firstName.message}</p>
						)}

						<label htmlFor="lastName">Фамилия</label>
						<input
							className="flex bg-gray-100 py-3 px-4
						rounded-xl w-full placeholder-gray-400 text-sm"
							type="text"
							placeholder="Фамилия"
							{...register('lastName', {
								required: 'Фамилия обязательна',
							})}
						/>
						{errors.lastName != null && (
							<p className="text-orange"> {errors.lastName.message}</p>
						)}

						<label htmlFor="gender">Пол</label>
						<select
							className="flex bg-gray-100 py-3 px-4
						rounded-xl w-full placeholder-gray-400 text-sm"
							placeholder="Имя"
							{...register('gender', {
								required: 'Пол обязателен',
							})}
						>
							<option value="MAN">Мужской</option>
							<option value="WOMAN">Женский</option>
						</select>
						{errors.gender != null && (
							<p className="text-orange"> {errors.gender.message}</p>
						)}

						<label htmlFor="birthDate">Дата рождения</label>
						<div className="w-full h-11">
							<input
								className="flex bg-gray-100 py-3 px-4
						rounded-xl w-full placeholder-gray-400 text-sm h-11"
								type="date"
								{...register('birthDate', {
									required: 'Дата рождения обязательна',
								})}
							/>
						</div>
						{errors.birthDate != null && (
							<p className="text-orange"> {errors.birthDate.message}</p>
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
							Зарегистрироваться
						</button>
						<button className='text-orange' onClick={()=>setIsRegister(false)}>Уже есть аккаунт? Войти</button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
}

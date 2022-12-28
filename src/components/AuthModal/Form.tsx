import { FormProvider, useForm } from 'react-hook-form';
import { emailRegex } from 'core/helpers';
import { useAuth } from 'store';

interface Props {
	closeModal: () => void;
}
export function Form(props: Props) {
	const { closeModal } = props;
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
		console.log(data)
		const formData = new FormData();
		for (const [key, value] of Object.entries(data)) {
			formData.append(key, value);
		}
		mutate(formData, {
			onSuccess: () => {
				closeModal();
			},
		});
	};

	return (
		<div className="flex flex-col gap-5 w-96 mt-8">
			<FormProvider {...methods}>
				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-5 w-full">
						<label htmlFor="email">Почта</label>
						<input
							className="flex bg-gray-100 py-3 px-4
						rounded-xl w-full placeholder-gray-400 text-sm"
							type="email"
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
									value: 6,
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
					</div>
				</form>
			</FormProvider>
		</div>
	);
}

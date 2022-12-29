import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { usePostReview } from 'store/auth/hooks';

export function ReviewForm() {
	const methods = useForm();
	const { id } = useParams<{ id: string }>();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = methods;

	const { mutate } = usePostReview(id);

	const onSubmit = (data: any) => {
		mutate({
			...data,
			itemId: id,

			onError: (error) => {
				console.log(error);
			},
		});
	};

	return (
		<div className="flex flex-col gap-5 w-96 mt-8 w-full">
			<FormProvider {...methods}>
				{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex gap-5 w-full">
						<select
							className="flex bg-gray-100 py-3 px-4
						rounded-xl w-1/4 placeholder-gray-400 text-sm"
							{...register('rating', {
								required: 'Рейтинг обязателен',
							})}
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
						{errors.rating != null && (
							<p className="text-orange"> {errors.rating.message}</p>
						)}
						<input
							className="flex bg-gray-100 py-3 px-4
						rounded-xl w-full placeholder-gray-400 text-sm"
							type="text"
							placeholder="Комментарий"
							{...register('comment', {
								required: 'Комментарий обязателен',
							})}
						/>
						{errors.comment != null && (
							<p className="text-orange"> {errors.comment.message}</p>
						)}
						<button
							className="bg-orange text-white font-bold
						text-lg rounded-full px-5 py-3 w-1/4 "
							type="submit"
						>
							Отправить
						</button>
					</div>
				</form>
			</FormProvider>
		</div>
	);
}

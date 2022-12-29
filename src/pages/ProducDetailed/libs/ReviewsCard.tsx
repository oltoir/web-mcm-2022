import { useParams } from 'react-router-dom';
import { useItemReviews } from 'store/auth/hooks';
import { Comment, Item } from '../../../store/auth/type';
import { ReviewForm } from './ReviewForm';

interface Props {
	item: Item;
}
export function ReviewsCard(props: Props) {
	const { item } = props;
	const { id } = useParams<{ id: string }>();

	const { comments, isLoading } = useItemReviews({ id });

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="bg-white rounded-2xl p-8 mt-8" style={{ width: '890px' }}>
			<div className="flex items-center gap-6">
				<h1 className="text-black font-bold text-4xl ">Отзывы</h1>
				<p className="text-gray-500 text-xl mt-4">{item.rating || 0}</p>
				<div className="flex items-center gap-1">
					<svg
						className="_3y6cLngM"
						viewBox="0 0 1000 1000"
						width="16px"
						height="16px"
						aria-hidden="true"
					>
						<path
							fill="#F6F6F5"
							d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
						></path>
					</svg>
					<svg
						className="_3y6cLngM"
						viewBox="0 0 1000 1000"
						width="16px"
						height="16px"
						aria-hidden="true"
					>
						<path
							fill="#F6F6F5"
							d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
						></path>
					</svg>
					<svg
						className="_3y6cLngM"
						viewBox="0 0 1000 1000"
						width="16px"
						height="16px"
						aria-hidden="true"
					>
						<path
							fill="#F6F6F5"
							d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
						></path>
					</svg>
					<svg
						className="_3y6cLngM"
						viewBox="0 0 1000 1000"
						width="16px"
						height="16px"
						aria-hidden="true"
					>
						<path
							fill="#F6F6F5"
							d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
						></path>
					</svg>
					<svg
						className="_3y6cLngM"
						viewBox="0 0 1000 1000"
						width="16px"
						height="16px"
						aria-hidden="true"
					>
						<path
							fill="#F6F6F5"
							d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
						></path>
					</svg>
				</div>
			</div>
			<div className="flex gap-12 flex-col">
				{comments?.map((comment: Comment, index) => (
					<div className="flex w-full items-center gap-6" key={index}>
						<img
							src={comment.user?.avatarUrl}
							alt=""
							className="rounded-full"
							style={{ width: '100px', height: '100px', objectFit: 'contain' }}
						/>
						<div>
							<p>
								{comment.user.fullName}{' '}
								<span className="text-orange font-bold">{comment.rating}</span>
							</p>
							<p className="text-gray-400">{comment.comment}</p>
						</div>
					</div>
				))}
			</div>
			{comments.length === 0 && (
				<p className="text-gray-500 text-xl mt-4">Отзывов пока нет ;(</p>
			)}
			<ReviewForm />
		</div>
	);
}

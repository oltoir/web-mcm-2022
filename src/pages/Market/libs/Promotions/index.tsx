import { PromotionCard } from './PromotionCard';

const images = [
	'https://jmart.kz/images/detailed/4562/image_new_admin_63a3fe7b66bb18.60646801.png',
	'https://jmart.kz/images/detailed/4562/image_new_admin_63a3fe7c750c94.97240367.png',
	'https://jmart.kz/images/detailed/4562/image_new_admin_63a3fe7de89a83.36333196.png',
	'https://jmart.kz/images/detailed/4562/image_new_admin_63a3fe7de89a83.36333196.png',
	'https://jmart.kz/images/detailed/4562/image_new_admin_63a3ff5a297684.49675881.png',
	'https://jmart.kz/images/detailed/4562/image_new_admin_63a3ff5d5a9ff9.71325915.png',
	'https://jmart.kz/images/detailed/4562/image_new_admin_63a3ff5ed555b8.51200538.png',
];

export function Promotions() {
	return (
		<div className="flex w-full justify-between gap-5">
			{images.map((image, index) => (
				<PromotionCard key={index} image={image} />
			))}
		</div>
	);
}

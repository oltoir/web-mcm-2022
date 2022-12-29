import { useParams } from 'react-router-dom';
import { useItem } from '../../store/auth/hooks';
import { MainCard } from './libs/MainCard';
import { ReviewsCard } from './libs/ReviewsCard';

function ProductDetailed() {
	const { id } = useParams<{ id: string }>();
	const { item, isLoading } = useItem({ id });
	if (isLoading) return <div>Loading...</div>;
	return (
		<section className="h-full bg-gray-100">
			<div className="pb-12 pt-36 mx-auto" style={{ maxWidth: '1200px' }}>
				<h1 className="text-black font-bold text-4xl mt-12">{item?.title}</h1>
				<MainCard item={item} />
				<ReviewsCard item={item} />
			</div>
		</section>
	);
}
export default ProductDetailed;

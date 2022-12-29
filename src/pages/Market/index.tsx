import { MainSwiper, NavCard } from 'components';
import { useItemCategories } from '../../store/auth/hooks';
import { Category } from '../../store/auth/type';
import { Products, Promotions } from './libs';
import { Categories } from './libs/Categories';

const slides = [
	{
		image:
			'https://jusan.kz/file-server/filename?dir=banner&filename=1440x374_РУС-min.webp',
		href: '/',
	},
	{
		image:
			'https://jusan.kz/file-server/filename?dir=slider&filename=business-car-desktop-ru.webp',
		href: '/',
	},
	{
		image:
			'https://jusan.kz/file-server/filename?dir=slider&filename=BARISTO-1440x374-ru-min.webp',
		href: '/',
	},
];

function MarketPage() {
	const { categories, isLoading } = useItemCategories();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<section className="h-full bg-gray-100">
			<div className="pb-12 pt-36 mx-auto" style={{ maxWidth: '1200px' }}>
				<MainSwiper slides={slides} />
				<NavCard />
				<Promotions />
				<Categories />
				{categories?.map((category: Category, index: number) => (
					<Products category={category} key={index} />
				))}
			</div>
		</section>
	);
}

export default MarketPage;

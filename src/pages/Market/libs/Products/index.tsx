import { ProductCard } from './ProductCard';

const products = [
	{
		id: 1,
		title: 'Робот-помощник',
		price: 100000,
		imageUrl: 'https://jmart.kz/images/detailed/2136/priority1_100549614_0.jpg',
	},
	{
		id: 2,
		title: 'Робот-помощник',
		price: 100000,
		imageUrl: 'https://jmart.kz/images/detailed/2136/priority1_100549614_0.jpg',
	},
	{
		id: 3,
		title: 'Робот-помощник',
		price: 100000,
		imageUrl: 'https://jmart.kz/images/detailed/2136/priority1_100549614_0.jpg',
	},
	{
		id: 4,
		title: 'Робот-помощник',
		price: 100000,
		imageUrl: 'https://jmart.kz/images/detailed/2136/priority1_100549614_0.jpg',
	},
	{
		id: 5,
		title: 'Робот-помощник',
		price: 100000,
		imageUrl: 'https://jmart.kz/images/detailed/2136/priority1_100549614_0.jpg',
	},
	{
		id: 6,
		title: 'Робот-помощник',
		price: 100000,
		imageUrl: 'https://jmart.kz/images/detailed/2136/priority1_100549614_0.jpg',
	},
];

export function Products() {
	return (
		<div className="mt-12">
			<h1 className="text-black font-bold text-4xl">
				0-0-24: Распродажа Xiaomi
			</h1>
			<div className="flex justify-between gap-5 mt-6 overflow-auto">
				{products.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>
		</div>
	);
}

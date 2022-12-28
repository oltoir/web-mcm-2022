import { CategoryCard } from './CategoryCard';

const categories = [
	{
		title: 'All',
		image:
			'https://jmart.kz/images/detailed/4530/image_new_admin_6393157fcaf779.35798431.png',
	},
	{
		title: 'All',
		image:
			'https://jmart.kz/images/detailed/4530/image_new_admin_6393157fcaf779.35798431.png',
	},
	{
		title: 'All',
		image:
			'https://jmart.kz/images/detailed/4530/image_new_admin_6393157fcaf779.35798431.png',
	},
];

export function Categories() {
	return (
		<>
			<h1 className="text-black font-bold text-4xl mt-12">Категории</h1>
			<div className="flex gap-5 bg-white rounded-3xl p-3 mt-6">
				{categories.map((category, index) => (
					<CategoryCard
						key={index}
						title={category.title}
						image={category.image}
					/>
				))}
			</div>
		</>
	);
}

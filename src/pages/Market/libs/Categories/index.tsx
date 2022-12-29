import { CategoryCard } from './CategoryCard';
import { useItemCategories, useItems } from '../../../../store/auth/hooks';

const images = [
	'https://jmart.kz/images/detailed/4530/image_new_admin_6393157fcaf779.35798431.png',

	'https://jmart.kz/images/detailed/4148/main-13.png',

	'https://jmart.kz/images/detailed/4148/main-2.png',
];

interface Props {
	withAll?: boolean;
}
export function Categories(props: Props) {
	const { withAll = false } = props;
	const { categories, isError, error, isLoading } = useItemCategories();

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>{error}</div>;
	}

	return (
		<>
			<h1 className="text-black font-bold text-4xl mt-12">Категории</h1>
			<div className="flex gap-5 bg-white rounded-3xl p-3 mt-6">
				{withAll && (
					<CategoryCard
						title="Все"
						image="	https://jmart.kz/images/detailed/4530/image_new_admin_6393158173fe72.21270749.png"
					/>
				)}
				{categories?.map((category, index) => (
					<CategoryCard
						key={index}
						title={category.title}
						categoryId={category.id}
						image={images[index]}
					/>
				))}
			</div>
		</>
	);
}

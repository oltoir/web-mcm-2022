import { ProductCard } from './ProductCard';
import { useItems } from 'store/auth/hooks';

interface Props {
	category: any;
}
export function Products(props: Props) {
	const { category } = props;
	const { items, isLoading } = useItems({ categoryId: category.id });

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="mt-12">
			<h1 className="text-black font-bold text-4xl">{category?.title}</h1>
			<div className="flex justify-between gap-5 mt-6 overflow-auto">
				{items?.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>
		</div>
	);
}

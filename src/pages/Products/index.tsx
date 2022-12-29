import { useItems } from 'store/auth/hooks';
import { ProductCard } from 'pages/Market/libs/Products/ProductCard';
import { Categories } from '../Market/libs/Categories';
function Products() {
	// get categoryId and search from url params
	const search = window.location.search;
	const params = new URLSearchParams(search);
	const categoryId = params.get('categoryId');
	const searchQuery = params.get('search');
	const paramas = categoryId
		? { categoryId, search: searchQuery }
		: { search: searchQuery };
	const { items, isLoading } = useItems(paramas);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<section className="h-full bg-gray-100">
			<div className="pb-12 pt-24 mx-auto" style={{ maxWidth: '1200px' }}>
				<Categories withAll={true} />
				<h1 className="text-black font-bold text-4xl">Продкуты</h1>
				<div className="mt-12">
					<div className="flex gap-5 mt-6 flex-wrap">
						{items?.map((product, index) => (
							<ProductCard key={index} product={product} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Products;

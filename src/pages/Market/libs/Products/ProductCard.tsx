interface Product {
	id: number;
	title: string;
	price: number;
	imageUrl: string;
}
interface Props {
	product: Product;
}

export function ProductCard(props: Props) {
	const { product } = props;
	const { title, price, imageUrl } = product;
	return (
		<div className="rounded-2xl bg-white p-4 flex flex-col gap-3">
			<img src={imageUrl} alt={title} />
			<div className="w-full">
				<p>
					{price}₸ <span>до 0-0-24</span>
				</p>
			</div>
		</div>
	);
}

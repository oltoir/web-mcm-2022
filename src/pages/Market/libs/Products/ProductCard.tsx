import { numberPrettier } from '../../../../core/helpers';

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
				<p className="whitespace-nowrap text-base text-orange font-bold">
					{numberPrettier(price)}₸
					<span className="rounded-full bg-orange pt-0.5 pb-0.5 px-2.5 text-white font-bold text-sm h-5 whitespace-nowrap ml-2">
						до 0-0-24
					</span>
				</p>
			</div>
			<p className="text-gray-500 text-sm overflow-ellipsis overflow-hidden">
				{title}
			</p>
			<button className="text-white text-base w-full  rounded-full bg-orange">
				в корзину
			</button>
		</div>
	);
}
